"use client";

import { cn } from "@/lib/utils";
import {
  CakeIcon,
  LayoutDashboardIcon,
  PackageIcon,
  ShoppingCartIcon,
  TagIcon,
  TicketIcon,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  { name: "Dashboard", href: "/admin", icon: LayoutDashboardIcon },
  { name: "Products", href: "/admin/products", icon: CakeIcon },
  { name: "Orders", href: "/admin/orders", icon: ShoppingCartIcon },
  { name: "Categories", href: "/admin/categories", icon: PackageIcon },
  { name: "Tags", href: "/admin/tags", icon: TagIcon },
  { name: "Promotions", href: "/admin/promotions", icon: TicketIcon },
];

export function SideNav() {
  const pathname = usePathname();

  return (
    <div className="flex h-full w-64 flex-col bg-gray-900">
      <div className="flex h-16 items-center gap-2 px-6">
        <CakeIcon className="h-6 w-6 text-white" />
        <span className="text-lg font-semibold text-white">Bakery Admin</span>
      </div>
      <nav className="flex-1 space-y-1 px-2 py-4">
        {navigation.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "group flex items-center rounded-md px-2 py-2 text-sm font-medium",
                isActive
                  ? "bg-gray-800 text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white"
              )}
            >
              <item.icon
                className={cn(
                  "mr-3 h-5 w-5 flex-shrink-0",
                  isActive
                    ? "text-white"
                    : "text-gray-400 group-hover:text-white"
                )}
              />
              {item.name}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}