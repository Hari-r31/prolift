import { NextResponse } from 'next/server';

// Mock data - in a real app, this would come from a database
const coaches = [
  {
    id: 1,
    name: "Ravi Kumar",
    title: "Head Coach",
    certifications: "BWF Certified Level 2",
    experience: "15+ years",
    bio: "Former national player with 15+ years of coaching experience at national and international levels.",
    specialties: ["Advanced Techniques", "Competition Prep", "Mental Conditioning"],
    achievements: ["Coached 50+ National Players", "State Championship Winner"],
    availableSlots: ["Mon 7-9AM", "Wed 7-9AM", "Fri 6-8PM"],
    rating: 4.9,
    studentsCount: 45
  },
  {
    id: 2,
    name: "Aisha Singh",
    title: "Fitness & Conditioning Coach",
    certifications: "ACE Certified Trainer",
    experience: "10+ years",
    bio: "Specialist in agility, strength, and core training for badminton athletes.",
    specialties: ["Agility Training", "Core Strength", "Injury Prevention"],
    achievements: ["ACE Certified", "Sports Nutrition Expert"],
    availableSlots: ["Tue 7-9AM", "Thu 4-6PM", "Sat 8-10AM"],
    rating: 4.8,
    studentsCount: 38
  },
  {
    id: 3,
    name: "Michael Chen",
    title: "Senior Coach",
    certifications: "BWF Certified Level 1",
    experience: "8+ years",
    bio: "Expert in footwork and defensive techniques for competitive players.",
    specialties: ["Footwork", "Defense", "Youth Development"],
    achievements: ["Youth Championship Coach", "Footwork Specialist"],
    availableSlots: ["Mon 9-11AM", "Wed 9-11AM", "Fri 4-6PM"],
    rating: 4.7,
    studentsCount: 32
  },
  {
    id: 4,
    name: "Priya Sharma",
    title: "Junior Development Coach",
    certifications: "BWF Certified Level 1",
    experience: "6+ years",
    bio: "Specializes in training young champions (6-15 years) with fun, engaging methods.",
    specialties: ["Junior Training", "Basic Techniques", "Fun Learning"],
    achievements: ["Junior Expert", "Child Psychology Certified"],
    availableSlots: ["Tue 4-6PM", "Thu 4-6PM", "Sat 10AM-12PM"],
    rating: 4.9,
    studentsCount: 28
  },
  {
    id: 5,
    name: "David Park",
    title: "Technical Coach",
    certifications: "National Level Coach",
    experience: "12+ years",
    bio: "Master of technical analysis and stroke improvement using modern training methods.",
    specialties: ["Technical Analysis", "Video Coaching", "Stroke Correction"],
    achievements: ["Technical Analysis Expert", "Video Coaching Pioneer"],
    availableSlots: ["Mon 6-8PM", "Wed 6-8PM", "Fri 7-9PM"],
    rating: 4.8,
    studentsCount: 35
  },
  {
    id: 6,
    name: "Sarah Johnson",
    title: "Mental Conditioning Coach",
    certifications: "Sports Psychology Certified",
    experience: "7+ years",
    bio: "Focuses on mental toughness, concentration, and competitive mindset development.",
    specialties: ["Mental Toughness", "Competition Psychology", "Performance Enhancement"],
    achievements: ["Sports Psychology Expert", "Peak Performance Coach"],
    availableSlots: ["Tue 7-9PM", "Thu 7-9PM", "Sun 6-8PM"],
    rating: 4.6,
    studentsCount: 25
  }
];

export async function GET() {
  return NextResponse.json({
    success: true,
    data: coaches,
    count: coaches.length
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { coachId, date, timeSlot, studentInfo } = body;

    // Validate required fields
    if (!coachId || !date || !timeSlot || !studentInfo) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Find coach
    const coach = coaches.find(c => c.id === coachId);
    if (!coach) {
      return NextResponse.json(
        { error: 'Coach not found' },
        { status: 404 }
      );
    }

    // Check if slot is available
    if (!coach.availableSlots.includes(timeSlot)) {
      return NextResponse.json(
        { error: 'Time slot not available for this coach' },
        { status: 400 }
      );
    }

    // Here you would normally:
    // 1. Check availability in database
    // 2. Create booking record
    // 3. Send confirmation to student and coach
    // 4. Update calendar

    // Simulate processing
    await new Promise(resolve => setTimeout(resolve, 1000));

    return NextResponse.json({
      success: true,
      message: `Session booked with ${coach.name} on ${date} at ${timeSlot}`,
      data: {
        bookingId: Math.floor(Math.random() * 10000),
        coach: coach.name,
        date,
        timeSlot,
        status: 'confirmed',
        confirmedAt: new Date().toISOString()
      }
    });

  } catch (error) {
    console.error('Coach booking error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}