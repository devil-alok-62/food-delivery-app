import { NextRequest, NextResponse } from "next/server";
import { getRazorpay } from "@/lib/razorpay";
export async function POST(req: NextRequest) {
  try {
    const { amount } = await req.json();

    const order = await getRazorpay().orders.create({
      amount: Number(amount) * 100,
      currency: "INR",
      receipt: `receipt_${Date.now()}`,
    });

    return NextResponse.json(order);
  } catch (error) {
    console.error("Razorpay Error:", error);

    return NextResponse.json(
      {
        success: false,
        error: String(error),
      },
      { status: 500 }
    );
  }
}