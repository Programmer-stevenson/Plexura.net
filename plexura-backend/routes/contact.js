import express from 'express';
import { body, validationResult } from 'express-validator';
import Contact from '../models/Contact.js';
import { sendContactEmail } from '../utils/emailService.js';

const router = express.Router();

// Validation middleware
const contactValidation = [
  body('name')
    .trim()
    .notEmpty().withMessage('Name is required')
    .isLength({ max: 100 }).withMessage('Name must be less than 100 characters'),
  
  body('email')
    .trim()
    .notEmpty().withMessage('Email is required')
    .isEmail().withMessage('Please provide a valid email address')
    .normalizeEmail(),
  
  body('phone')
    .optional()
    .trim(),
  
  body('service')
    .notEmpty().withMessage('Please select a service')
    .isIn(['web-development', 'it-services', 'mobile-solutions', 'security-support', 'consultation'])
    .withMessage('Invalid service selection'),
  
  body('message')
    .trim()
    .notEmpty().withMessage('Message is required')
    .isLength({ max: 2000 }).withMessage('Message must be less than 2000 characters')
];

// POST /api/contact - Submit contact form
router.post('/', contactValidation, async (req, res) => {
  try {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array()
      });
    }

    const { name, email, phone, service, message } = req.body;

    // Create new contact entry in database
    const contact = new Contact({
      name,
      email,
      phone: phone || '',
      service,
      message
    });

    // Save to database
    await contact.save();
    console.log('Contact saved to database:', contact._id);

    // Send email notification
    const emailResult = await sendContactEmail({
      name,
      email,
      phone,
      service,
      message
    });

    // Update contact record with email status
    if (emailResult.success) {
      contact.emailSent = true;
      await contact.save();
    }

    // Return success response
    res.status(201).json({
      success: true,
      message: 'Thank you for contacting us! We will get back to you soon.',
      contactId: contact._id
    });

  } catch (error) {
    console.error('Error processing contact form:', error);
    
    // Handle duplicate submissions (if you add unique constraint on email)
    if (error.code === 11000) {
      return res.status(400).json({
        success: false,
        message: 'A submission with this email already exists.'
      });
    }

    res.status(500).json({
      success: false,
      message: 'An error occurred while processing your request. Please try again later.'
    });
  }
});

// GET /api/contact - Get all contacts (for admin panel - optional)
router.get('/', async (req, res) => {
  try {
    const { status, limit = 50, page = 1 } = req.query;
    
    const query = status ? { status } : {};
    const skip = (page - 1) * limit;

    const contacts = await Contact.find(query)
      .sort({ createdAt: -1 })
      .limit(parseInt(limit))
      .skip(skip);

    const total = await Contact.countDocuments(query);

    res.json({
      success: true,
      data: contacts,
      pagination: {
        page: parseInt(page),
        limit: parseInt(limit),
        total,
        pages: Math.ceil(total / limit)
      }
    });
  } catch (error) {
    console.error('Error fetching contacts:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching contacts'
    });
  }
});

// GET /api/contact/:id - Get single contact by ID (optional)
router.get('/:id', async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    
    if (!contact) {
      return res.status(404).json({
        success: false,
        message: 'Contact not found'
      });
    }

    res.json({
      success: true,
      data: contact
    });
  } catch (error) {
    console.error('Error fetching contact:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching contact'
    });
  }
});

// PATCH /api/contact/:id/status - Update contact status (optional, for admin)
router.patch('/:id/status', async (req, res) => {
  try {
    const { status } = req.body;
    
    if (!['new', 'contacted', 'resolved'].includes(status)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid status value'
      });
    }

    const contact = await Contact.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true, runValidators: true }
    );

    if (!contact) {
      return res.status(404).json({
        success: false,
        message: 'Contact not found'
      });
    }

    res.json({
      success: true,
      data: contact,
      message: 'Status updated successfully'
    });
  } catch (error) {
    console.error('Error updating contact status:', error);
    res.status(500).json({
      success: false,
      message: 'Error updating contact status'
    });
  }
});

export default router;