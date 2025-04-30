import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Utility function to combine HTML class names, especially useful with Tailwind CSS.
 * It intelligently merges and deduplicates class names, handling conditional classes.
 *
 * @param {...ClassValue} inputs - Any number of class name arguments.
 * Each argument can be a string, an array of strings, or an object where keys
 * are class names and values are booleans (for conditional application).
 * @returns {string} A single string containing the combined class names.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

// Example Usage (for demonstration in this context)
// function MyComponent() {
//   const baseClasses = 'text-center font-medium';
//   const colorClass = 'text-blue-500';
//   const isActive = true;
//   const extraClasses = ['p-4', 'rounded-md'];

//   const combinedClasses = cn(
//     baseClasses,
//     colorClass,
//     { 'bg-gray-100': isActive, 'opacity-75': !isActive },
//     extraClasses,
//     'shadow-lg' // Can add single classes too
//   );

//   console.log(combinedClasses);
//   // Expected output (roughly):
//   // "text-center font-medium text-blue-500 bg-gray-100 opacity-75 p-4 rounded-md shadow-lg"
//   // (Order might vary slightly, but no conflicts)

//   return (
//     <div className={combinedClasses}>
//       Hello, Tailwind!
//     </div>
//   );
// }
