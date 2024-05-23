import { Meta, StoryObj } from '@storybook/react';
import { Skeleton } from './skeleton';

declare const meta: Meta<typeof Skeleton>;
export default meta;
type Story = StoryObj<typeof meta>;
export declare const SkeletonComment: Story;
export declare const SkeletonCard: Story;
