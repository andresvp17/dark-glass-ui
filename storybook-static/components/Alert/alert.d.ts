import { VariantProps } from 'class-variance-authority';
import { HTMLAttributes } from 'react';

export declare const Alert: import('react').ForwardRefExoticComponent<HTMLAttributes<HTMLDivElement> & VariantProps<(props?: ({
    variant?: "default" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string> & import('react').RefAttributes<HTMLDivElement>>;
export declare const AlertTitle: import('react').ForwardRefExoticComponent<HTMLAttributes<HTMLHeadingElement> & import('react').RefAttributes<HTMLParagraphElement>>;
export declare const AlertDescription: import('react').ForwardRefExoticComponent<HTMLAttributes<HTMLParagraphElement> & import('react').RefAttributes<HTMLParagraphElement>>;
