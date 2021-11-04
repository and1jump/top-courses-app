import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface TypographyProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  size?: "s" | "m" | "l";
  children: ReactNode;
}
