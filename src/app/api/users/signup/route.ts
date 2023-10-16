import { connect } from '@/dbconfig/dbconfig'
import User from '@/models/user'
import { NextRequest, NextResponse } from 'next/server'

connect()

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json()
    console.log(reqBody)

    // Check if user already exists
    const user = await User.findOne(reqBody.email)

    if (user) {
      NextResponse.json({ error: 'User already exists' }, { status: 400 })
    }

    // Create new user if they do not exist
    const newUser = new User({
      user.username,
      user.email,
      user.password,
    })

    // New user to database
    await newUser.save()
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
