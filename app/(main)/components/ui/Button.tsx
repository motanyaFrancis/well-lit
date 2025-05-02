import React, { forwardRef } from 'react';
import { cn } from '../../../lib/utils'; // Utility for combining class names (like Tailwind's)

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'default' | 'outline' | 'ghost' | 'secondary' | 'primary' | 'destructive';
    size?: 'default' | 'sm' | 'lg' | 'icon';
    shape?: 'default' | 'full' | 'none'; // <-- updated shape prop
    className?: string;
    children?: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ variant = 'default', size = 'default', shape = 'default', className, children, ...props }, ref) => {
        const baseClasses = cn(
            'inline-flex items-center justify-center font-medium transition-colors',
            'focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
            'disabled:opacity-50 disabled:pointer-events-none',
            shape === 'full' ? 'rounded-full' :
            shape === 'none' ? 'rounded-none' :
            'rounded-md', 
            className
        );

        const variantClasses = {
            default: cn(
                'bg-gray-800 text-white hover:bg-gray-700', 
                'shadow-md hover:shadow-lg'
            ),
            primary: cn(
                'bg-sky-500 text-white hover:bg-sky-600',
                'shadow-md hover:shadow-lg'
            ),
            secondary: cn(
                'bg-orange-500 text-white hover:bg-orange-600',
                'shadow-md hover:shadow-lg'
            ),
            outline: cn(
                'border border-sky-500 text-sky-500 hover:bg-sky-500/10',
                'hover:text-sky-700'
            ),
            ghost: cn(
                'text-gray-300 hover:bg-white/10 hover:text-white',
                'bg-transparent'
            ),
            destructive: cn(
                'bg-red-500 text-white hover:bg-red-600',
                'shadow-md hover:shadow-lg'
            ),
        };

        const sizeClasses = {
            default: 'px-6 py-3 text-base',
            sm: 'px-4 py-2 text-sm',
            lg: 'px-8 py-3 text-lg',
            icon: 'p-3', // For a square icon button, adjust padding as needed
        };

        const classes = cn(
            baseClasses,
            variantClasses[variant] || variantClasses.default, // Fallback to default
            sizeClasses[size] || sizeClasses.default
        );

        return (
            <button ref={ref} className={classes} {...props}>
                {children}
            </button>
        );
    }
);
Button.displayName = 'ProjectWideButton';

export default Button;
