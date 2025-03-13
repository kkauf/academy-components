import React from 'react';
import classNames from 'classnames';

export interface CardProps {
  /**
   * Card content
   */
  children: React.ReactNode;
  /**
   * Optional header content
   */
  header?: React.ReactNode;
  /**
   * Optional footer content
   */
  footer?: React.ReactNode;
  /**
   * Optional additional CSS classes
   */
  className?: string;
  /**
   * Optional hover effect
   */
  hoverable?: boolean;
  /**
   * Optional border
   */
  bordered?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  header,
  footer,
  className,
  hoverable = false,
  bordered = false,
}) => {
  return (
    <div
      className={classNames(
        'card',
        {
          'hover:shadow-lg transition-shadow duration-200': hoverable,
          'border border-light-gray': bordered,
        },
        className
      )}
    >
      {header && <div className="card-header">{header}</div>}
      <div className="card-body">{children}</div>
      {footer && <div className="card-footer">{footer}</div>}
    </div>
  );
};

export default Card;
