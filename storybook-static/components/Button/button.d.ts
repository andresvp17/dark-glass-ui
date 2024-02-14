import { ClassProp } from 'class-variance-authority/types';
import { VariantProps } from 'class-variance-authority';
import { ComponentProps } from 'react';
declare const buttonStyles: (props?: ({
    variant?: "outline" | "solid" | "ghost" | "disabled" | null | undefined;
    size?: "sm" | "md" | "lg" | null | undefined;
} & ClassProp) | undefined) => string;
interface ButtonProps extends ComponentProps<'button'>, VariantProps<typeof buttonStyles> {
    size?: 'sm' | 'md' | 'lg';
}
export declare const Button: ({ className, variant, size, ...props }: ButtonProps) => React.ReactElement;
export {};
