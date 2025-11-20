import { NextResponse } from 'next/server';

// Mock schedule data - in a real app, this would come from a database
const scheduleData = {
  monday: [
    { time: '5-7AM', program: 'Little Champs', coach: 'Ravi Kumar', available: 3, intensity: 'Low' },
    { time: '7-9AM', program: 'Junior Development', coach: 'Aisha Singh', available: 2, intensity: 'High' },
    { time: '4-6PM', program: 'Junior Development', coach: 'Priya Sharma', available: 1, intensity: 'Medium' },
    { time: '6-8PM', program: 'Elite Training', coach: 'David Park', available: 0, intensity: 'High' }
  ],
  tuesday: [
    { time: '5-7AM', program: 'Little Champs', coach: 'Ravi Kumar', available: 4, intensity: 'Low' },
    { time: '7-9AM', program: 'Senior Training', coach: 'Michael Chen', available: 2, intensity: 'High' },
    { time: '4-6PM', program: 'Match Practice', coach: 'Priya Sharma', available: 3, intensity: 'Medium' },
    { time: '7-9PM', program: 'Adult Program', coach: 'Sarah Johnson', available: 5, intensity: 'Medium' }
  ],
  wednesday: [
    { time: '5-7AM', program: 'Little Champs', coach: 'Ravi Kumar', available: 2, intensity: 'Low' },
    { time: '7-9AM', program: 'Junior Development', coach: 'Aisha Singh', available: 1, intensity: 'High' },
    { time: '9-11AM', program: 'Senior Training', coach: 'Michael Chen', available: 3, intensity: 'High' },
    { time: '6-8PM', program: 'Elite Training', coach: 'David Park', available: 0, intensity: 'High' }
  ],
  thursday: [
    { time: '5-7AM', program: 'Little Champs', coach: 'Ravi Kumar', available: 3, intensity: 'Low' },
    { time: '7-9AM', program: 'Junior Development', coach: 'Aisha Singh', available: 2, intensity: 'High' },
    { time: '4-6PM', program: 'Junior Development', coach: 'Priya Sharma', available: 4, intensity: 'Medium' },
    { time: '7-9PM', program: 'Adult Program', coach: 'Sarah Johnson', available: 2, intensity: 'Medium' }
  ],
  friday: [
    { time: '5-7AM', program: 'Little Champs', coach: 'Ravi Kumar', available: 1, intensity: 'Low' },
    { time: '7-9AM', program: 'Senior Training', coach: 'Michael Chen', available: 0, intensity: 'High' },
    { time: '4-6PM', program: 'Match Practice', coach: 'Priya Sharma', available: 2, intensity: 'Medium' },
    { time: '6-8PM', program: 'Elite Training', coach: 'David Park', available: 1, intensity: 'High' }
  ],
  saturday: [
    { time: '6-8AM', program: 'Tournament Practice', coach: 'David Park', available: 3, intensity: 'High' },
    { time: '8-10AM', program: 'Junior Development', coach: 'Priya Sharma', available: 4, intensity: 'Medium' },
    { time: '10AM-12PM', program: 'Senior Training', coach: 'Michael Chen', available: 2, intensity: 'High' },
    { time: '4-6PM', program: 'Family Session', coach: 'Sarah Johnson', available: 6, intensity: 'Low' }
  ],
  sunday: [
    { time: '6-8AM', program: 'Tournament Practice', coach: 'Ravi Kumar', available: 2, intensity: 'High' },
    { time: '8-10AM', program: 'Little Champs', coach: 'Priya Sharma', available: 5, intensity: 'Low' },
    { time: '4-6PM', program: 'Recreational', coach: 'Sarah Johnson', available: 8, intensity: 'Low' },
    { time: '6-8PM', program: 'Advanced Drills', coach: 'David Park', available: 1, intensity: 'High' }
  ]
};

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const day = searchParams.get('day');

  if (day && scheduleData[day.toLowerCase() as keyof typeof scheduleData]) {
    return NextResponse.json({
      success: true,
      data: scheduleData[day.toLowerCase() as keyof typeof scheduleData],
      day: day.toLowerCase()
    });
  }

  return NextResponse.json({
    success: true,
    data: scheduleData,
    availableDays: Object.keys(scheduleData)
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { day, timeSlot, studentInfo, programType } = body;

    // Validate required fields
    if (!day || !timeSlot || !studentInfo) {
      return NextResponse.json(
        { error: 'Missing required fields: day, timeSlot, studentInfo' },
        { status: 400 }
      );
    }

    // Check if day exists
    if (!scheduleData[day.toLowerCase() as keyof typeof scheduleData]) {
      return NextResponse.json(
        { error: 'Invalid day' },
        { status: 400 }
      );
    }

    // Find the session
    const daySchedule = scheduleData[day.toLowerCase() as keyof typeof scheduleData];
    const session = daySchedule.find(s => s.time === timeSlot);

    if (!session) {
      return NextResponse.json(
        { error: 'Time slot not found' },
        { status: 404 }
      );
    }

    // Check availability
    if (session.available <= 0) {
      return NextResponse.json(
        { error: 'Session is fully booked' },
        { status: 400 }
      );
    }

    // Here you would normally:
    // 1. Create booking in database
    // 2. Decrease available spots
    // 3. Send confirmation
    // 4. Update coach schedule

    // Simulate processing
    await new Promise(resolve => setTimeout(resolve, 1000));

    return NextResponse.json({
      success: true,
      message: `Session booked for ${day} at ${timeSlot}`,
      data: {
        bookingId: Math.floor(Math.random() * 10000),
        day,
        timeSlot,
        program: session.program,
        coach: session.coach,
        intensity: session.intensity,
        status: 'confirmed',
        bookedAt: new Date().toISOString()
      }
    });

  } catch (error) {
    console.error('Schedule booking error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}