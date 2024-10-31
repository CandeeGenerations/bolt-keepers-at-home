"use client";

import Link from "next/link";
import { CakeIcon } from "lucide-react";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-background">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <CakeIcon className="h-6 w-6" />
              <span className="text-lg font-semibold">Keepers at Home</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Crafting moments of joy through traditional baking since 1950
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/products" className="text-muted-foreground hover:text-foreground">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>123 Bakery Street</li>
              <li>Sweetville, CA 90210</li>
              <li>(555) 123-4567</li>
              <li>info@keepersathome.com</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Hours</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Monday - Saturday</li>
              <li>7:00 AM - 7:00 PM</li>
              <li>Sunday</li>
              <li>8:00 AM - 3:00 PM</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="border-t">
        <div className="container py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© {currentYear} Keepers at Home. All rights reserved.</p>
          <p>
            Powered by{" "}
            <a 
              href="https://candeegenerations.com?ref=titus2keepers.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Candee Generations
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}