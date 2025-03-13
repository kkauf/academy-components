import React, { forwardRef } from 'react';
import classNames from 'classnames';

export interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  /**
   * TextArea label
   */
  label?: string;
  /**
   * Helper text shown below textarea
   */
  helperText?: string;
  /**
   * Error message
   */
  error?: string;
  /**
   * Additional CSS classes for the textarea container
   */
  containerClassName?: string;
  /**
   * Additional CSS classes for the textarea element
   */
  textareaClassName?: string;
  /**
   * Additional CSS classes for the label element
   */
  labelClassName?: string;
}

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    {
      label,
      helperText,
      error,
      containerClassName,
      textareaClassName,
      labelClassName,
      className,
      id,
      ...props
    },
    ref
  ) => {
    const textareaId = id || `textarea-${Math.random().toString(36).substring(2, 9)}`;

    return (
      <div className={classNames('mb-4', containerClassName)}>
        {label && (
          <label
            htmlFor={textareaId}
            className={classNames('form-label', labelClassName)}
          >
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          id={textareaId}
          className={classNames(
            'form-control min-h-[100px]',
            {
              'border-red-500 focus:ring-red-500': error,
            },
            textareaClassName
          )}
          {...props}
        />
        {error ? (
          <p className="form-error">{error}</p>
        ) : helperText ? (
          <p className="mt-1 text-sm text-gray-500">{helperText}</p>
        ) : null}
      </div>
    );
  }
);

TextArea.displayName = 'TextArea';

export default TextArea;
