import type { ReactNode } from 'react';

interface CardProps {
    children: ReactNode;
    className?: string;
    hoverable?: boolean;
}

export function Card({ children, className = '', hoverable = false }: CardProps) {
    return (
        <div
            className={`
        bg-white dark:bg-gray-800 
        rounded-lg shadow-md 
        border border-gray-200 dark:border-gray-700
        ${hoverable ? 'hover:shadow-lg transition-shadow cursor-pointer' : ''}
        ${className}
      `}
        >
            {children}
        </div>
    );
}

export function CardHeader({ children, className = '' }: { children: ReactNode; className?: string }) {
    return (
        <div className={`px-6 py-4 border-b border-gray-200 dark:border-gray-700 ${className}`}>
            {children}
        </div>
    );
}

export function CardBody({ children, className = '' }: { children: ReactNode; className?: string }) {
    return <div className={`px-6 py-4 ${className}`}>{children}</div>;
}

export function CardFooter({ children, className = '' }: { children: ReactNode; className?: string }) {
    return (
        <div className={`px-6 py-4 border-t border-gray-200 dark:border-gray-700 ${className}`}>
            {children}
        </div>
    );
}
