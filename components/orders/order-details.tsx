"use client";

import { Order } from "@/lib/types";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { formatDate } from "@/lib/utils";
import {
  CashIcon,
  CheckCircle2Icon,
  ClockIcon,
  PackageIcon,
  WalletIcon,
} from "lucide-react";
import { PaymentMethodIcon } from "@/components/checkout/payment-method-icon";

interface OrderDetailsProps {
  order: Order;
}

export function OrderDetails({ order }: OrderDetailsProps) {
  const statusConfig = {
    new: { label: "New", icon: ClockIcon, color: "bg-blue-500" },
    confirmed: { label: "Confirmed", icon: CheckCircle2Icon, color: "bg-green-500" },
    in_progress: { label: "In Progress", icon: PackageIcon, color: "bg-yellow-500" },
    completed: { label: "Completed", icon: CheckCircle2Icon, color: "bg-green-500" },
    fulfilled: { label: "Fulfilled", icon: CheckCircle2Icon, color: "bg-green-500" },
    canceled: { label: "Canceled", icon: WalletIcon, color: "bg-red-500" },
    archived: { label: "Archived", icon: PackageIcon, color: "bg-gray-500" },
  };

  const status = statusConfig[order.status];
  const StatusIcon = status.icon;
  const orderNumber = parseInt(order.id.replace("order-", ""), 10);

  return (
    <div className="container py-8">
      <Card className="max-w-2xl mx-auto p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold mb-2">Order #{orderNumber}</h1>
            <p className="text-muted-foreground">
              Placed on {formatDate(order.createdAt)}
            </p>
          </div>
          <Badge className={`${status.color} text-white px-3 py-1`}>
            <StatusIcon className="w-4 h-4 mr-2" />
            {status.label}
          </Badge>
        </div>

        <div className="space-y-6">
          <div>
            <h2 className="text-lg font-semibold mb-3">Items</h2>
            <div className="space-y-4">
              {order.items.map((item) => (
                <div
                  key={item.productId}
                  className="flex justify-between items-center border-b pb-4"
                >
                  <div>
                    <p className="font-medium">{item.productId}</p>
                    <p className="text-sm text-muted-foreground">
                      Quantity: {item.quantity}
                    </p>
                  </div>
                  <p className="font-medium">${item.price.toFixed(2)}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-between items-center pt-4">
            <div className="flex items-center gap-2">
              <p className="font-medium">Payment Method:</p>
              <div className="flex items-center gap-2 text-muted-foreground">
                <PaymentMethodIcon method={order.paymentMethod} />
                <span className="capitalize">{order.paymentMethod}</span>
              </div>
            </div>
            <div>
              <p className="text-lg font-bold">
                Total: ${order.total.toFixed(2)}
              </p>
            </div>
          </div>

          {order.notes && (
            <div className="pt-4">
              <h2 className="text-lg font-semibold mb-2">Notes</h2>
              <p className="text-muted-foreground">{order.notes}</p>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
}