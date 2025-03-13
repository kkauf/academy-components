import React from 'react';
import classNames from 'classnames';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Button variant
   */
  variant?: 'primary' | 'secondary' | 'outline';
  /**
   * Button size
   */
  size?: 'sm' | 'md' | 'lg';
  /**
   * Button is full width
   */
  fullWidth?: boolean;
  /**
   * Optional icon to display at the start of the button
   */
  startIcon?: React.ReactNode;
  /**
   * Optional icon to display at the end of the button
   */
  endIcon?: React.ReactNode;
  /**
   * Loading state
   */
  isLoading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  startIcon,
  endIcon,
  isLoading = false,
  ...props
}) => {
  const buttonClasses = classNames(
    'btn',
    {
      'btn-primary': variant === 'primary',
      'btn-secondary': variant === 'secondary',
      'btn-outline': variant === 'outline',
      'btn-sm': size === 'sm',
      'btn-lg': size === 'lg',
      'w-full': fullWidth,
      'opacity-50 cursor-not-allowed': disabled || isLoading,
    },
    className
  );

  return (
    <button
      className={buttonClasses}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading && (
        <svg 
          className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24"
        >
          <circle 
            className="opacity-25" 
            cx="12" 
            cy="12" 
            r="10" 
            stroke="currentColor" 
            strokeWidth="4"
          ></circle>
          <path 
            className="opacity-75" 
            fill="currentColor" 
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      )}
      
      {!isLoading && startIcon && (
        <span className="mr-2">{startIcon}</span>
      )}
      
      {children}
      
      {!isLoading && endIcon && (
        <span className="ml-2">{endIcon}</span>
      )}
    </button>
  );
};

export default Button;
