import { VariantProps } from 'class-variance-authority';
import { ComponentProps } from 'react';

declare const selectStyles: (props?: import('class-variance-authority/types').ClassProp | undefined) => string;
type SelectProps = ComponentProps<'select'> & VariantProps<typeof selectStyles>;
type SelectItemProps = ComponentProps<'option'>;
export declare const Select: {
    ({ className, ...props }: SelectProps): React.ReactElement;
    Item({ className, ...props }: SelectItemProps): import("react/jsx-runtime").JSX.Element;
};
export {};
