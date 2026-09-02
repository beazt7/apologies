import { forwardRef } from 'react';
import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode, Ref } from 'react';

const baseStyles =
  'inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full px-6 py-3 text-base font-semibold transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blush-600 disabled:cursor-not-allowed disabled:opacity-60';

const variantStyles = {
  primary:
    'bg-blush-600 text-white hover:bg-blush-700 dark:bg-blush-500 dark:hover:bg-blush-400 dark:text-neutral-950',
  secondary:
    'bg-white/80 text-blush-800 ring-1 ring-inset ring-blush-300 hover:bg-white dark:bg-neutral-800/80 dark:text-blush-100 dark:ring-blush-700',
  ghost:
    'bg-transparent text-neutral-700 underline decoration-blush-400 decoration-2 underline-offset-4 hover:text-blush-700 dark:text-neutral-200 dark:hover:text-blush-200',
} as const;

type Variant = keyof typeof variantStyles;

interface CommonProps {
  variant?: Variant;
  children: ReactNode;
  className?: string;
}

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { as?: 'button' };

type ButtonAsAnchor = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { as: 'a'; href: string };

type ButtonProps = ButtonAsButton | ButtonAsAnchor;

/** Shared button/link control with consistent focus states and a minimum 44px touch target. */
export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  ({ variant = 'primary', className = '', children, ...props }, ref) => {
    const classes = `${baseStyles} ${variantStyles[variant]} ${className}`;

    if (props.as === 'a') {
      const { as, ...anchorProps } = props;
      return (
        <a ref={ref as Ref<HTMLAnchorElement>} data-variant={as} className={classes} {...anchorProps}>
          {children}
        </a>
      );
    }

    const { as, ...buttonProps } = props as ButtonAsButton;
    return (
      <button
        ref={ref as Ref<HTMLButtonElement>}
        data-variant={as ?? 'button'}
        className={classes}
        {...buttonProps}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = 'Button';
