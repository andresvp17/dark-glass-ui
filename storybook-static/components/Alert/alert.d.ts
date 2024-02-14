import { ClassProp } from 'class-variance-authority/types';
import { VariantProps } from 'class-variance-authority';
import { ForwardRefExoticComponent, RefAttributes, HTMLAttributes } from 'react';
export declare const Alert: ForwardRefExoticComponent<HTMLAttributes<HTMLDivElement> & VariantProps<(props?: ({
    variant?: "default" | null | undefined;
} & ClassProp) | undefined) => string> & RefAttributes<HTMLDivElement>>;
export declare const AlertTitle: ForwardRefExoticComponent<HTMLAttributes<HTMLHeadingElement> & RefAttributes<HTMLParagraphElement>>;
export declare const AlertDescription: ForwardRefExoticComponent<HTMLAttributes<HTMLParagraphElement> & RefAttributes<HTMLParagraphElement>>;
