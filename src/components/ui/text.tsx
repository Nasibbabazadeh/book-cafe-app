import React from 'react';

import type { TPolymorphicComponentProps } from '@/lib/types/util';
import { cva, type VariantProps } from 'class-variance-authority';


const textVariants = cva('', {
  variants: {
    size: {
      xs: 'text-xs',
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg',
      xl: 'text-xl',
    },
    weight: {
      light: 'font-light',
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
    },
    color: {
      primary: 'text-primary',
      secondary: 'text-secondary',
      muted: 'text-muted-foreground',
      destructive: 'text-destructive',
      success: 'text-green-600',
      warning: 'text-yellow-600',
      custom: '',
    },
    wrap: {
      truncate: 'truncate',
      nowrap: 'whitespace-nowrap',
      break: 'break-words',
    },
    hover: {
      underline: 'hover:underline',
      pointer: 'hover:cursor-pointer',
      none: '',
    },
    textAlign: {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right',
      justify: 'text-justify',
    },
  },
  defaultVariants: {
    size: 'md',
    weight: 'normal',
    color: 'primary',
  },
})



type TProps<C extends React.ElementType> = TPolymorphicComponentProps<C, VariantProps<typeof textVariants>>;

const Text = <C extends React.ElementType = 'span'>(props: TProps<C>) => {
  const {
    as: Component = 'span',
    size = null,
    weight = null,
    color = 'primary',
    wrap = null,
    hover = null,
    textAlign = null,
    className,
    ...rest
  } = props;

  return <Component className={textVariants({ size, weight, color, wrap, hover, textAlign, className })} {...rest} />;
};

// eslint-disable-next-line react-refresh/only-export-components
export { Text, textVariants }