import nodemailer from 'nodemailer';

// Create transporter for Gmail
const createTransporter = () => {
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD
    }
  });
};

// Function to send email notification
export const sendContactEmail = async (contactData) => {
  try {
    const transporter = createTransporter();

    // Map service values to readable names
    const serviceNames = {
      'web-development': 'Web Development',
      'it-services': 'IT Services',
      'mobile-solutions': 'Mobile Solutions',
      'security-support': 'Security & Support',
      'consultation': 'General Consultation'
    };

    const serviceName = serviceNames[contactData.service] || contactData.service;

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO,
      subject: `🔔 New Contact Form Submission - ${serviceName}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body {
              font-family: Arial, sans-serif;
              line-height: 1.6;
              color: #333;
            }
            .container {
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
              background-color: #f9f9f9;
            }
            .header {
              background: linear-gradient(135deg, #007BFF, #00C2CB);
              color: white;
              padding: 30px;
              text-align: center;
              border-radius: 10px 10px 0 0;
            }
            .content {
              background: white;
              padding: 30px;
              border-radius: 0 0 10px 10px;
              box-shadow: 0 2px 5px rgba(0,0,0,0.1);
            }
            .field {
              margin-bottom: 20px;
              padding: 15px;
              background-color: #f8f9fa;
              border-left: 4px solid #007BFF;
              border-radius: 4px;
            }
            .label {
              font-weight: bold;
              color: #007BFF;
              margin-bottom: 5px;
              text-transform: uppercase;
              font-size: 12px;
            }
            .value {
              color: #333;
              font-size: 14px;
            }
            .message-box {
              background-color: #fff;
              border: 1px solid #e0e0e0;
              padding: 15px;
              border-radius: 4px;
              margin-top: 10px;
              white-space: pre-wrap;
            }
            .footer {
              text-align: center;
              margin-top: 20px;
              color: #666;
              font-size: 12px;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="margin: 0;">New Contact Form Submission</h1>
              <p style="margin: 10px 0 0 0;">Plexura Website</p>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Full Name</div>
                <div class="value">${contactData.name}</div>
              </div>
              
              <div class="field">
                <div class="label">Email Address</div>
                <div class="value">
                  <a href="mailto:${contactData.email}" style="color: #007BFF; text-decoration: none;">
                    ${contactData.email}
                  </a>
                </div>
              </div>
              
              ${contactData.phone ? `
              <div class="field">
                <div class="label">Phone Number</div>
                <div class="value">
                  <a href="tel:${contactData.phone}" style="color: #007BFF; text-decoration: none;">
                    ${contactData.phone}
                  </a>
                </div>
              </div>
              ` : ''}
              
              <div class="field">
                <div class="label">Service Interested In</div>
                <div class="value">${serviceName}</div>
              </div>
              
              <div class="field">
                <div class="label">Project Details</div>
                <div class="message-box">${contactData.message}</div>
              </div>
              
              <div class="footer">
                <p>This email was sent from the Plexura contact form</p>
                <p>Submitted on: ${new Date().toLocaleString('en-US', { 
                  timeZone: 'America/Los_Angeles',
                  dateStyle: 'full',
                  timeStyle: 'long'
                })}</p>
              </div>
            </div>
          </div>
        </body>
        </html>
      `,
      // Plain text version for email clients that don't support HTML
      text: `
New Contact Form Submission - Plexura

Name: ${contactData.name}
Email: ${contactData.email}
${contactData.phone ? `Phone: ${contactData.phone}\n` : ''}Service: ${serviceName}

Project Details:
${contactData.message}

---
Submitted on: ${new Date().toLocaleString()}
      `
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error: error.message };
  }
};