import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { name, email } = await request.json();

    // Validate required fields
    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Here you can integrate with your preferred service:
    // - Send to your CRM (HubSpot, Salesforce, etc.)
    // - Send to an email service (SendGrid, Mailgun, etc.)
    // - Store in a database (Vercel Postgres, Supabase, etc.)
    // - Send to a webhook service (Zapier, Make, etc.)

    // For now, we'll just log the data (you can replace this with your preferred method)
    console.log("New contact form submission:", {
      name,
      email,
      timestamp: new Date().toISOString(),
      userAgent: request.headers.get("user-agent"),
      ip:
        request.headers.get("x-forwarded-for") ||
        request.headers.get("x-real-ip"),
    });

    // Example: Send to a webhook (uncomment and configure as needed)
    /*
    const webhookUrl = process.env.CONTACT_WEBHOOK_URL;
    if (webhookUrl) {
      await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          timestamp: new Date().toISOString(),
          source: 'playfield-landing-page',
        }),
      });
    }
    */

    // Example: Send email notification (uncomment and configure as needed)
    /*
    const emailService = process.env.EMAIL_SERVICE; // e.g., 'sendgrid', 'mailgun'
    if (emailService === 'sendgrid') {
      // SendGrid integration
      const sgMail = require('@sendgrid/mail');
      sgMail.setApiKey(process.env.SENDGRID_API_KEY);
      
      const msg = {
        to: process.env.NOTIFICATION_EMAIL,
        from: process.env.FROM_EMAIL,
        subject: 'New Contact Form Submission - Playfield',
        text: `Name: ${name}\nEmail: ${email}\nTimestamp: ${new Date().toISOString()}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Timestamp:</strong> ${new Date().toISOString()}</p>
        `,
      };
      
      await sgMail.send(msg);
    }
    */

    return NextResponse.json(
      { message: "Contact form submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
