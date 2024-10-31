import { NextResponse } from "next/server";
import { orders } from "@/lib/data";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Generate a unique order ID (in a real app, this would be handled by the database)
    const orderId = `ORD-${Math.random().toString(36).substr(2, 9)}`;
    
    // Create new order
    const order = {
      id: orderId,
      customerId: `CUST-${Math.random().toString(36).substr(2, 9)}`,
      customerName: data.customerName,
      customerEmail: data.customerEmail,
      customerPhone: data.customerPhone,
      items: data.items,
      total: data.total,
      status: "new",
      paymentMethod: data.paymentMethod,
      notes: data.notes,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    // Store the order (in a real app, this would be in a database)
    orders.set(orderId, order);

    return NextResponse.json({ orderId });
  } catch (error) {
    console.error("Error creating order:", error);
    return NextResponse.json(
      { error: "Failed to create order" },
      { status: 500 }
    );
  }
}