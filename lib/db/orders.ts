import { Order } from "@/lib/types";

export const orders: Record<string, Order> = {
  "1": {
    id: "1",
    customerId: "cust-1",
    items: [
      {
        productId: "1",
        quantity: 2,
        price: 8.99,
      },
      {
        productId: "2",
        quantity: 3,
        price: 4.99,
      },
    ],
    status: "confirmed",
    total: 32.95,
    createdAt: new Date(),
    updatedAt: new Date(),
    notes: "Please deliver to the side door",
    paymentMethod: "zelle",
  },
  "2": {
    id: "2",
    customerId: "cust-2",
    items: [
      {
        productId: "3",
        quantity: 1,
        price: 24.99,
      },
    ],
    status: "new",
    total: 24.99,
    createdAt: new Date(),
    updatedAt: new Date(),
    paymentMethod: "cash",
  },
};