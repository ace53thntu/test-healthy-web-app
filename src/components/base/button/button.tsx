import cn from 'classnames';
import * as React from 'react';

export interface IButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: 'normal';
}

const classes = {
  root: 'inline-flex items-center justify-center shrink-0 rounded outline-0 focus:outline-none w-[18.5rem] h-14 text-[1.125rem] font-light leading-[1.625rem]',
  normal: 'bg-gradient-yellowred text-light border-none border-transparent',
};

export const Button = React.forwardRef<HTMLButtonElement, IButtonProps>(
  (props, ref) => {
    const {
      className,
      children,
      disabled,
      variant = 'normal',
      ...rest
    } = props;

    const classesName = cn(
      classes.root,
      {
        [classes.normal]: !disabled && variant === 'normal',
      },
      className
    );

    return (
      <button ref={ref} className={classesName} disabled={disabled} {...rest}>
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
