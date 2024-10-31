"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2Icon } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getOrder } from "@/lib/orders";
import { Order } from "@/lib/types";
import { paymentMethods } from "@/lib/constants";

const statusStyles = {
  new: "bg-blue-500",
  confirmed: "bg-purple-500",
  in_progress: "bg-yellow-500",
  completed: "bg-green-500",
  fulfilled: "bg-green-500",
  canceled: "bg-red-500",
  archived: "bg-gray-500",
} as const;

const formatStatus = (status: Order["status"]) => {
  return status
    .split("_")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
};

export default function CheckoutSuccessPage() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get("orderId");
  const [order, setOrder] = useState<Order | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (orderId) {
      const orderData = getOrder(orderId);
      if (orderData) {
        setOrder(orderData);
      }
      setLoading(false);
    }
  }, [orderId]);

  if (loading) {
    return (
      <div className="container py-16">
        <Card className="max-w-lg mx-auto p-8">
          <div className="flex flex-col items-center space-y-4">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary" />
            <p className="text-lg font-medium">Loading order details...</p>
          </div>
        </Card>
      </div>
    );
  }

  if (!order) {
    return (
      <div className="container py-16">
        <Card className="max-w-lg mx-auto p-8 text-center">
          <h1 className="text-2xl font-bold mb-4">Order Not Found</h1>
          <p className="text-muted-foreground mb-6">
            We couldn't find the order you're looking for.
          </p>
          <Button asChild>
            <Link href="/products">Continue Shopping</Link>
          </Button>
        </Card>
      </div>
    );
  }

  const paymentMethod = paymentMethods.find(
    method => method.id === order.customerDetails.paymentMethod
  );

  return (
    <div className="container py-16">
      <Card className="max-w-lg mx-auto p-8 text-center">
        <CheckCircle2Icon className="h-16 w-16 text-green-500 mx-auto mb-4" />
        <h1 className="text-2xl font-bold mb-4">Order Confirmed!</h1>
        <p className="text-muted-foreground mb-6">
          Thank you for your order. We'll contact you soon with payment instructions.
        </p>
        
        <div className="text-left mb-6 space-y-3">
          <h2 className="font-semibold mb-2">Order Details:</h2>
          <p>Order Number: {parseInt(order.id) + 1173}</p>
          <div className="flex items-center gap-2">
            <span>Status:</span>
            <Badge
              className={statusStyles[order.status]}
            >
              {formatStatus(order.status)}
            </Badge>
          </div>
          <p>Total: ${order.total.toFixed(2)}</p>
          <div className="flex items-center gap-2">
            <span>Payment Method:</span>
            {paymentMethod && (
              <Badge variant="outline" className="flex items-center gap-1">
                <paymentMethod.icon className="h-4 w-4" />
                {paymentMethod.label}
              </Badge>
            )}
          </div>
        </div>

        <div className="space-y-4">
          <Button asChild className="w-full">
            <Link href={`/orders/${order.id}`}>View Order Status</Link>
          </Button>
          <Button asChild variant="outline" className="w-full">
            <Link href="/products">Continue Shopping</Link>
          </Button>
        </div>
      </Card>
    </div>
  );
}