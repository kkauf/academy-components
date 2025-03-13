import React, { forwardRef } from 'react';
import classNames from 'classnames';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /**
   * Input label
   */
  label?: string;
  /**
   * Helper text shown below input
   */
  helperText?: string;
  /**
   * Error message
   */
  error?: string;
  /**
   * Optional icon to display at the start of input
   */
  startIcon?: React.ReactNode;
  /**
   * Optional icon to display at the end of input
   */
  endIcon?: React.ReactNode;
  /**
   * Additional CSS classes for the input container
   */
  containerClassName?: string;
  /**
   * Additional CSS classes for the input element
   */
  inputClassName?: string;
  /**
   * Additional CSS classes for the label element
   */
  labelClassName?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      helperText,
      error,
      startIcon,
      endIcon,
      containerClassName,
      inputClassName,
      labelClassName,
      className,
      id,
      ...props
    },
    ref
  ) => {
    const inputId = id || `input-${Math.random().toString(36).substring(2, 9)}`;

    return (
      <div className={classNames('mb-4', containerClassName)}>
        {label && (
          <label
            htmlFor={inputId}
            className={classNames('form-label', labelClassName)}
          >
            {label}
          </label>
        )}
        <div className="relative">
          {startIcon && (
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              {startIcon}
            </div>
          )}
          <input
            ref={ref}
            id={inputId}
            className={classNames(
              'form-control',
              {
                'pl-10': startIcon,
                'pr-10': endIcon,
                'border-red-500 focus:ring-red-500': error,
              },
              inputClassName
            )}
            {...props}
          />
          {endIcon && (
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              {endIcon}
            </div>
          )}
        </div>
        {error ? (
          <p className="form-error">{error}</p>
        ) : helperText ? (
          <p className="mt-1 text-sm text-gray-500">{helperText}</p>
        ) : null}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
