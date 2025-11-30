import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, category, message } = body;

    // Validate required fields
    if (!name || !email || !phone || !category || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Check if Resend API key is configured
    const resendApiKey = process.env.RESEND_API_KEY;

    if (!resendApiKey) {
      console.error("Resend API key missing. RESEND_API_KEY must be set in .env.local");
      return NextResponse.json(
        { 
          error: "Email service not configured",
          fallback: true 
        },
        { status: 503 }
      );
    }

    // Initialize Resend
    const resend = new Resend(resendApiKey);

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev", // You can change this after verifying your domain
      to: "itzshivshankar0l0@gmail.com",
      replyTo: email,
      subject: `New Contact Form Submission - ${category}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Category:</strong> ${category}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
      text: `
        New Contact Form Submission
        
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Category: ${category}
        
        Message:
        ${message}
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { 
          error: error.message || "Failed to send email",
          fallback: true 
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Email sent successfully", data },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error sending email:", error);
    
    // Return a response that triggers fallback
    return NextResponse.json(
      { 
        error: error.message || "Failed to send email",
        fallback: true 
      },
      { status: 500 }
    );
  }
}

