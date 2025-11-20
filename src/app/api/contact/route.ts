import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, program, message } = body;

    // Validate required fields
    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: 'Missing required fields: name, email, phone' },
        { status: 400 }
      );
    }

    // Here you would normally:
    // 1. Save to database using Prisma
    // 2. Send email notification
    // 3. Send SMS notification
    // 4. Add to CRM system

    // For demo purposes, we'll just log the data
    console.log('Contact form submission:', {
      name,
      email,
      phone,
      program,
      message,
      timestamp: new Date().toISOString()
    });

    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 1000));

    return NextResponse.json({
      success: true,
      message: 'Thank you for contacting ProLift Academy! We will get back to you within 24 hours.',
      data: {
        id: Math.floor(Math.random() * 1000),
        submittedAt: new Date().toISOString()
      }
    });

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    message: 'Contact form endpoint. Use POST to submit contact forms.',
    fields: ['name', 'email', 'phone', 'program', 'message']
  });
}