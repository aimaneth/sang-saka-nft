import { NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

// Initialize SendGrid with your API key
sgMail.setApiKey(process.env.SENDGRID_API_KEY || '');

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    // Basic email validation
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Send confirmation email to subscriber
    await sgMail.send({
      to: email,
      from: process.env.SENDGRID_FROM_EMAIL || 'your-verified-sender@example.com',
      subject: 'Welcome to Sang Saka Newsletter!',
      html: `
        <h1>Welcome to Sang Saka!</h1>
        <p>Thank you for subscribing to our newsletter. We're excited to keep you updated with the latest news and updates about our NFT collection.</p>
        <p>Stay tuned for exclusive drops, community events, and more!</p>
      `,
    });

    // Here you would typically also store the email in your database
    // For now, we'll just return success

    return NextResponse.json(
      { message: 'Successfully subscribed to newsletter' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return NextResponse.json(
      { error: 'Failed to subscribe to newsletter' },
      { status: 500 }
    );
  }
} 