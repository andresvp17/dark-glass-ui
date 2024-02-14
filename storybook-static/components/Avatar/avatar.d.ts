import { ClassProp } from 'class-variance-authority/types';
import { type VariantProps } from 'class-variance-authority';
import { ComponentProps } from 'react';
declare const avatarStyles: (props?: ({
    size?: "sm" | "md" | "lg" | null | undefined;
} & ClassProp) | undefined) => string;
type AvatarProps = ComponentProps<'div'> & VariantProps<typeof avatarStyles>;
type FallbackProps = ComponentProps<'span'>;
type ImageProps = ComponentProps<'img'> & VariantProps<typeof avatarStyles>;
export declare const Avatar: ({ className, size, ...props }: AvatarProps) => React.ReactElement;
export declare const AvatarFallback: ({ className, ...props }: FallbackProps) => React.ReactElement;
export declare const AvatarImage: ({ className, src, size, alt, ...props }: ImageProps) => React.ReactElement;
export {};
