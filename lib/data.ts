// Mock database - in a real app, this would come from an API
export const orders = [
  {
    id: "order-1174",
    customerId: "cust-1",
    items: [
      {
        productId: "Sourdough Bread",
        quantity: 2,
        price: 8.99,
      },
      {
        productId: "Chocolate Croissant",
        quantity: 4,
        price: 4.99,
      },
    ],
    status: "confirmed",
    total: 37.94,
    createdAt: new Date("2024-03-20T10:00:00Z"),
    updatedAt: new Date("2024-03-20T10:05:00Z"),
    notes: "Please leave at the front door",
    paymentMethod: "zelle",
  },
  // Add more mock orders as needed
];

export const products = [
  {
    id: "1",
    name: "Sourdough Bread",
    description: "Traditional sourdough bread made with organic flour. Our signature sourdough is fermented for 24 hours, creating a perfect balance of tangy flavor and chewy texture.",
    price: 8.99,
    allergens: ["wheat", "gluten"],
    quantity: 10,
    tags: ["bread", "organic"],
    enabled: true,
    featured: true,
    image: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?q=80&w=2070",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  // ... rest of the products
];