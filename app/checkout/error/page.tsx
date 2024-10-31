"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { XCircleIcon } from "lucide-react";
import Link from "next/link";

export default function CheckoutErrorPage() {
  return (
    <div className="container py-16">
      <Card className="max-w-lg mx-auto p-8 text-center">
        <XCircleIcon className="h-16 w-16 text-destructive mx-auto mb-4" />
        <h1 className="text-2xl font-bold mb-2">Order Failed</h1>
        <p className="text-muted-foreground mb-6">
          We encountered an error while processing your order. Please try again or contact support if the problem persists.
        </p>
        <div className="flex gap-4 justify-center">
          <Button variant="outline" asChild>
            <Link href="/products">Continue Shopping</Link>
          </Button>
          <Button asChild>
            <Link href="/checkout">Try Again</Link>
          </Button>
        </div>
      </Card>
    </div>
  );
}