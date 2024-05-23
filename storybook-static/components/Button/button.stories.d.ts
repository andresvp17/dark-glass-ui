import { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';

declare const meta: Meta<typeof Button>;
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Solid: Story;
export declare const Ghost: Story;
export declare const Outline: Story;
export declare const Disabled: Story;
