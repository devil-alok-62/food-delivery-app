import { NextRequest, NextResponse } from "next/server";
import { getRazorpay } from "@/lib/razorpay";
export async function POST(req: NextRequest) {
  try {
    const { amount } = await req.json();
    const amountInPaise = Math.round(Number(amount) * 100);

    if (!Number.isFinite(amountInPaise) || amountInPaise <= 0) {
      return NextResponse.json(
        { success: false, error: "Amount must be greater than zero." },
        { status: 400 }
      );
    }

    const order = await getRazorpay().orders.create({
      amount: amountInPaise,
      currency: "INR",
      receipt: `receipt_${Date.now()}`,
    });

    return NextResponse.json({
      order,
      keyId: process.env.RAZORPAY_KEY_ID,
    });
  } catch (error) {
    const razorpayError = error as {
      statusCode?: number;
      error?: { code?: string; description?: string };
    };
    const authenticationFailed =
      razorpayError.statusCode === 401 ||
      razorpayError.error?.description === "Authentication failed";

    console.error("Razorpay order creation failed:", {
      statusCode: razorpayError.statusCode,
      code: razorpayError.error?.code,
      description: razorpayError.error?.description,
    });

    return NextResponse.json(
      {
        success: false,
        error: authenticationFailed
          ? "Razorpay authentication failed. Check that the test/live Key ID and Key Secret are a matching pair."
          : "Unable to create the payment order. Check the server logs for details.",
      },
      { status: authenticationFailed ? 502 : 500 }
    );
  }
}