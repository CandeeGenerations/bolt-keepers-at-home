import { 
  BanknoteIcon,
  CreditCardIcon,
  SmartphoneIcon,
  WalletIcon,
} from "lucide-react";

interface PaymentMethodIconProps {
  method: string;
  className?: string;
}

export function PaymentMethodIcon({ method, className = "" }: PaymentMethodIconProps) {
  const iconProps = {
    className: `h-4 w-4 ${className}`,
  };

  switch (method.toLowerCase()) {
    case "cash":
      return <BanknoteIcon {...iconProps} />;
    case "check":
      return <CreditCardIcon {...iconProps} />;
    case "zelle":
      return <SmartphoneIcon {...iconProps} />;
    case "paypal":
      return <WalletIcon {...iconProps} />;
    case "applepay":
      return <SmartphoneIcon {...iconProps} />;
    case "venmo":
      return <SmartphoneIcon {...iconProps} />;
    default:
      return <WalletIcon {...iconProps} />;
  }
}