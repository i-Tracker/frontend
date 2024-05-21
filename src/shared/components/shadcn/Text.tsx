import { cn } from '@/shared/lib/tailwind/utils';
import { HTMLProps, ReactNode } from 'react';

const typographyMap = {
  h1: {
    tagName: 'h1',
    className: 'scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl',
  },
  h2: {
    tagName: 'h2',
    className: 'scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0',
  },
  h3: {
    tagName: 'h3',
    className: 'scroll-m-20 text-2xl font-semibold tracking-tight',
  },
  h4: {
    tagName: 'h4',
    className: 'scroll-m-20 text-xl font-semibold tracking-tight',
  },
  p: {
    tagName: 'p',
    className: 'leading-7',
  },
  blockquote: {
    tagName: 'blockquote',
    className: 'mt-6 border-l-2 pl-6 italic',
  },
  ['line-code']: {
    tagName: 'code',
    className: 'relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold',
  },
  large: {
    tagName: 'div',
    className: 'text-lg font-semibold',
  },
  small: {
    tagName: 'small',
    className: 'text-sm font-medium leading-tight',
  },
  xsmall: {
    tagName: 'small',
    className: 'text-xs font-medium leading-none',
  },
} as const;

interface TextProps {
  typography?: keyof typeof typographyMap;
  className?: HTMLProps<HTMLElement>['className'];
  children: ReactNode;
}

export function Text({ typography = 'p', className, children, ...props }: TextProps) {
  const Typography = typographyMap[typography]['tagName'];

  return (
    <Typography className={cn(typographyMap[typography]['className'], className)} {...props}>
      {children}
    </Typography>
  );
}
