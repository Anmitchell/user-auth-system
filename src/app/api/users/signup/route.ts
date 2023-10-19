import { connect } from '@/dbconfig/dbconfig'
import User from '@/models/user'
import { NextRequest, NextResponse } from 'next/server'

connect() // establish connection to database

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json()
    const { username, email, password } = reqBody

    // Check if user already exists
    const user = await User.findOne({email})

    if (user) {
      return NextResponse.json({ error: 'User already exists' }, { status: 400 })
    }

    // Create new user if they do not exist
    const newUser = new User({
      username,
      email,
      password,
    })

    // Save new user to database
    const savedUser = await newUser.save()

    return NextResponse.json({
      message: "User created successfully",
      success: true,
      savedUser
  })

  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
