"use client";
import { clsx } from "clsx";
import React from "react";

type Variant = "primary" | "secondary";
interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  variant?: Variant;
  className?: string;
}

const VARIANTS: Record<Variant, string> = {
  primary: "border text-white border-neutral-650 bg-neutral-650",
  secondary: "border  border-neutral-850 box-border text-neutral-850",
};
const Button = ({
  children,
  className,
  onClick,
  variant = "primary",
  ...rest
}: React.PropsWithChildren<ButtonProps>) => {
  const buttonVariant = VARIANTS[variant];
  return (
    <button
      onClick={onClick}
      className={clsx(
        "flex items-center justify-center rounded-lg py-5 text-base font-bold leading-4",
        buttonVariant,
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

export { Button };
