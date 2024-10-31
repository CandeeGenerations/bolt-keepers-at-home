import { Order } from "./types";

// Mock database - in a real app, this would be a database
const orders: Record<string, Order> = {};

export function createOrder(orderData: Omit<Order, "id" | "status" | "createdAt" | "updatedAt">): Order {
  const id = (Object.keys(orders).length + 1).toString();
  const order: Order = {
    ...orderData,
    id,
    status: "new",
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  orders[id] = order;
  return order;
}

export function getOrder(id: string): Order | null {
  return orders[id] || null;
}

export function updateOrderStatus(id: string, status: Order["status"]): Order | null {
  if (orders[id]) {
    orders[id] = {
      ...orders[id],
      status,
      updatedAt: new Date(),
    };
    return orders[id];
  }
  return null;
}