import { Meta, StoryObj } from '@storybook/react';
import { Input } from '../Input/input';

declare const meta: Meta<typeof Input>;
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Text: Story;
export declare const Password: Story;
export declare const Email: Story;
export declare const Date: Story;
export declare const Number: Story;
