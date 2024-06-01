'use client';

import * as React from 'react';
import * as ToggleGroupPrimitive from '@radix-ui/react-toggle-group';
import { VariantProps } from 'class-variance-authority';

import { cn } from '@/shared/lib/tailwind/utils';
import { toggleVariants } from '@/shared/components/shadcn/ui/toggle';

const ToggleGroupContext = React.createContext<VariantProps<typeof toggleVariants>>({
  size: 'default',
  variant: 'default',
});

const ToggleGroup = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Root> & VariantProps<typeof toggleVariants>
>(({ className, variant, size, children, ...props }, ref) => (
  <ToggleGroupPrimitive.Root ref={ref} className={cn('flex items-center justify-center gap-1', className)} {...props}>
    <ToggleGroupContext.Provider value={{ variant, size }}>{children}</ToggleGroupContext.Provider>
  </ToggleGroupPrimitive.Root>
));

ToggleGroup.displayName = ToggleGroupPrimitive.Root.displayName;

const ToggleGroupItem = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Item> &
    VariantProps<typeof toggleVariants> & {
      isChecked: boolean;
    }
>(({ className, children, variant, size, isChecked, ...props }, ref) => {
  const context = React.useContext(ToggleGroupContext);

  const itemClassName = cn(
    toggleVariants({
      variant: context.variant || variant,
      size: context.size || size,
    }),
    {
      'bg-primary text-white': isChecked, // 예시: 체크된 상태일 때 파란 배경과 흰 글씨 적용
    },
    className,
  );

  return (
    <ToggleGroupPrimitive.Item ref={ref} className={itemClassName} {...props}>
      {children}
    </ToggleGroupPrimitive.Item>
  );
});

ToggleGroupItem.displayName = ToggleGroupPrimitive.Item.displayName;

export { ToggleGroup, ToggleGroupItem };
