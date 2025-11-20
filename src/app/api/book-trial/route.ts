import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, program, preferredDate, preferredTime } = body;

    // Validate required fields
    if (!name || !email || !phone || !program) {
      return NextResponse.json(
        { error: 'Missing required fields: name, email, phone, program' },
        { status: 400 }
      );
    }

    // Here you would normally:
    // 1. Check availability in database
    // 2. Create booking record
    // 3. Send confirmation email
    // 4. Send SMS confirmation
    // 5. Update coach schedule

    // For demo purposes, we'll just log the data
    console.log('Trial booking:', {
      name,
      email,
      phone,
      program,
      preferredDate,
      preferredTime,
      timestamp: new Date().toISOString()
    });

    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 1500));

    return NextResponse.json({
      success: true,
      message: 'Trial session booked successfully! We will send you a confirmation email shortly.',
      data: {
        bookingId: Math.floor(Math.random() * 10000),
        status: 'confirmed',
        submittedAt: new Date().toISOString()
      }
    });

  } catch (error) {
    console.error('Trial booking error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    message: 'Trial booking endpoint. Use POST to book trial sessions.',
    availablePrograms: [
      { id: 'little-champs', name: 'Little Champs', ageGroup: '6-10 years' },
      { id: 'junior-dev', name: 'Junior Development', ageGroup: '11-15 years' },
      { id: 'senior', name: 'Senior Training', ageGroup: '16+ years' },
      { id: 'elite', name: 'Elite Training', ageGroup: 'Advanced Players' },
      { id: 'adult', name: 'Adult Program', ageGroup: 'Adults' }
    ]
  });
}