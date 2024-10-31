import {
  BanknoteIcon,
  CreditCardIcon,
  SmartphoneIcon,
  WalletIcon,
  CheckIcon,
  AppleIcon,
} from "lucide-react";

export const paymentMethods = [
  { id: "cash", label: "Cash", icon: BanknoteIcon },
  { id: "check", label: "Check", icon: CheckIcon },
  { id: "zelle", label: "Zelle", icon: SmartphoneIcon },
  { id: "paypal", label: "PayPal", icon: WalletIcon },
  { id: "applepay", label: "Apple Pay", icon: AppleIcon },
  { id: "venmo", label: "Venmo", icon: CreditCardIcon },
] as const;