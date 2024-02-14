import { JSX } from 'react/jsx-runtime';
import { ClassProp } from 'class-variance-authority/types';
import { VariantProps } from 'class-variance-authority';
import { ComponentProps } from 'react';
declare const selectStyles: (props?: ClassProp | undefined) => string;
type SelectProps = ComponentProps<'select'> & VariantProps<typeof selectStyles>;
type SelectItemProps = ComponentProps<'option'>;
export declare const Select: {
    ({ className, ...props }: SelectProps): React.ReactElement;
    Item({ className, ...props }: SelectItemProps): JSX.Element;
};
export {};
