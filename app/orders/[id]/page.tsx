import { OrderDetails } from "@/components/orders/order-details";
import { orders } from "@/lib/db/orders";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return [
    { id: "1" },
    { id: "2" },
  ];
}

export default function OrderPage({ params }: { params: { id: string } }) {
  const order = orders[params.id];

  if (!order) {
    notFound();
  }

  return <OrderDetails order={order} />;
}