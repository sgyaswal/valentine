const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));

// Create transporter
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: process.env.SMTP_PORT || 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER, // your email
    pass: process.env.SMTP_PASS  // your app password
  }
});

// Email sending endpoint
app.post('/send-email', async (req, res) => {
  try {
    const { date, food, desserts, activities } = req.body;

    // Format date
    const formattedDate = date 
      ? new Date(date).toLocaleDateString('en-US', { 
          weekday: 'long', 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
        })
      : 'Not selected';

    // Create email content
    const mailOptions = {
      from: `"Valentine Website" <${process.env.SMTP_USER}>`,
      to: process.env.RECIPIENT_EMAIL || process.env.SMTP_USER,
      subject: '💕 Aishuu❤️ Has Responded to Your Valentine Request!',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
            .section { background: white; padding: 20px; margin: 15px 0; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
            .section h3 { color: #667eea; margin-top: 0; }
            .list-item { padding: 8px 0; border-bottom: 1px solid #eee; }
            .list-item:last-child { border-bottom: none; }
            .footer { text-align: center; margin-top: 20px; color: #999; font-size: 14px; }
            .emoji { font-size: 24px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="margin: 0;">💕 She Said Yes! 💕</h1>
              <p style="margin: 10px 0 0 0;">Aishuu❤️ has filled out your Valentine's form!</p>
            </div>
            <div class="content">
              <div class="section">
                <h3>📅 Selected Date</h3>
                <p style="font-size: 18px; color: #667eea; font-weight: bold;">${formattedDate}</p>
              </div>

              <div class="section">
                <h3>🍔 Food Preferences</h3>
                ${food && food.length > 0 
                  ? food.map(item => `<div class="list-item">${item}</div>`).join('')
                  : '<p style="color: #999;">No food selected</p>'}
              </div>

              <div class="section">
                <h3>🍰 Dessert Choices</h3>
                ${desserts && desserts.length > 0
                  ? desserts.map(item => `<div class="list-item">${item}</div>`).join('')
                  : '<p style="color: #999;">No desserts selected</p>'}
              </div>

              <div class="section">
                <h3>🎨 Activities She Wants To Do</h3>
                ${activities && activities.length > 0
                  ? activities.map(item => `<div class="list-item">${item}</div>`).join('')
                  : '<p style="color: #999;">No activities selected</p>'}
              </div>

              <div class="footer">
                <p>Submitted at: ${new Date().toLocaleString()}</p>
                <p>Time to plan the perfect date! ✨</p>
                <p style="margin-top: 20px;">💖 With love, Your Valentine Website 💖</p>
              </div>
            </div>
          </div>
        </body>
        </html>
      `
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info.messageId);

    res.status(200).json({
      success: true,
      message: 'Email sent successfully',
      messageId: info.messageId
    });

  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to send email',
      error: error.message
    });
  }
});

// Serve HTML files
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'Valentine server is running' });
});

// Start server
app.listen(PORT, () => {
  console.log(`💕 Valentine server running on http://localhost:${PORT}`);
  console.log(`📧 SMTP configured: ${process.env.SMTP_USER ? 'Yes' : 'No - Please set up .env file'}`);
});
