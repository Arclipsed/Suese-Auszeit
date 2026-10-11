import * as React from "react";
import { cn } from "@/lib/utils";
import { NavigationMenu as NavigationMenuPrimitive } from "@base-ui/react/navigation-menu";
import { cva } from "class-variance-authority";
import { ChevronDownIcon } from "lucide-react";

export function NavigationMenu({
  className,
  children,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Root>) {
  return (
    <NavigationMenuPrimitive.Root
      data-slot="navigation-menu"
      className={cn(
        "group/navigation-menu relative flex max-w-max flex-1 items-center justify-center",
        className
      )}
      {...props}
    >
      {children}
    </NavigationMenuPrimitive.Root>
  );
}

export function NavigationMenuList({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.List>) {
  return (
    <NavigationMenuPrimitive.List
      data-slot="navigation-menu-list"
      className={cn(
        "group flex flex-1 list-none items-center justify-center gap-1",
        className
      )}
      {...props}
    />
  );
}

export function NavigationMenuItem({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Item>) {
  return (
    <NavigationMenuPrimitive.Item
      data-slot="navigation-menu-item"
      className={cn("relative", className)}
      {...props}
    />
  );
}

export const navigationMenuTriggerStyle = cva(
  "group inline-flex h-10 w-max items-center justify-center rounded-full bg-transparent px-4 py-2 text-sm font-medium text-stone-700 hover:bg-stone-100/80 hover:text-stone-900 focus:bg-stone-100 focus:text-stone-900 disabled:pointer-events-none disabled:opacity-50 data-[popup-open]:bg-stone-100 data-[popup-open]:text-stone-900 focus-visible:ring-ring/50 outline-none transition-[color,background-color,box-shadow]"
);

export function NavigationMenuTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Trigger>) {
  return (
    <NavigationMenuPrimitive.Trigger
      data-slot="navigation-menu-trigger"
      className={cn(navigationMenuTriggerStyle(), "group cursor-pointer", className)}
      {...props}
    >
      {children}{" "}
      <ChevronDownIcon
        className="relative top-[1px] ms-1.5 size-3.5 transition duration-300 group-data-[popup-open]:rotate-180 text-stone-500"
        aria-hidden="true"
      />
    </NavigationMenuPrimitive.Trigger>
  );
}

export function NavigationMenuContent({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Content>) {
  return (
    <NavigationMenuPrimitive.Content
      data-slot="navigation-menu-content"
      className={cn(
        "w-[calc(100vw_-_40px)] h-full p-2 sm:w-max xs:min-w-[400px]",
        "transition-[opacity,transform,translate] duration-[var(--duration)] ease-[var(--easing)]",
        "data-[starting-style]:opacity-0 data-[ending-style]:opacity-0",
        "data-[starting-style]:data-[activation-direction=left]:translate-x-[-50%]",
        "data-[starting-style]:data-[activation-direction=right]:translate-x-[50%]",
        "data-[ending-style]:data-[activation-direction=left]:translate-x-[50%]",
        "data-[ending-style]:data-[activation-direction=right]:translate-x-[-50%]",
        className
      )}
      {...props}
    />
  );
}

export function NavigationMenuPortal({
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Portal>) {
  return <NavigationMenuPrimitive.Portal data-slot="navigation-menu-portal" {...props} />;
}

export function NavigationMenuPositioner({
  className,
  children,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Positioner>) {
  return (
    <NavigationMenuPortal>
      <NavigationMenuPrimitive.Positioner
        data-slot="navigation-menu-positioner"
        sideOffset={10}
        collisionPadding={{ top: 5, bottom: 5, left: 20, right: 20 }}
        collisionAvoidance={{ side: "none" }}
        className={cn(
          "box-border h-[var(--positioner-height)] w-[var(--positioner-width)] max-w-[var(--available-width)] transition-[top,left,right,bottom] duration-[var(--duration)] ease-[var(--easing)] before:absolute before:content-[''] data-[instant]:transition-none data-[side=bottom]:before:top-[-10px] data-[side=bottom]:before:right-0 data-[side=bottom]:before:left-0 data-[side=bottom]:before:h-2.5 data-[side=left]:before:top-0 data-[side=left]:before:right-[-10px] data-[side=left]:before:bottom-0 data-[side=left]:before:w-2.5 data-[side=right]:before:top-0 data-[side=right]:before:bottom-0 data-[side=right]:before:left-[-10px] data-[side=right]:before:w-2.5 data-[side=top]:before:right-0 data-[side=top]:before:bottom-[-10px] data-[side=top]:before:left-0 data-[side=top]:before:h-2.5",
          className
        )}
        style={
          {
            "--duration": "0.35s",
            "--easing": "cubic-bezier(0.22, 1, 0.36, 1)",
          } as React.CSSProperties
        }
        {...props}
      >
        {children}
      </NavigationMenuPrimitive.Positioner>
    </NavigationMenuPortal>
  );
}

export function NavigationMenuPopup({
  className,
  children,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Popup>) {
  return (
    <NavigationMenuPrimitive.Popup
      className={cn(
        "data-[ending-style]:easing-[ease] relative h-[var(--popup-height)] origin-[var(--transform-origin)] rounded-2xl bg-white/95 backdrop-blur-md shadow-xl border border-stone-200/80 transition-[opacity,transform,width,height,scale,translate] duration-[var(--duration)] ease-[var(--easing)] data-[ending-style]:scale-95 data-[ending-style]:opacity-0 data-[ending-style]:duration-150 data-[starting-style]:scale-95 data-[starting-style]:opacity-0 w-[var(--popup-width)] xs:w-[var(--popup-width)]",
        className
      )}
      {...props}
    >
      {children}
      <NavigationMenuViewport />
    </NavigationMenuPrimitive.Popup>
  );
}

export function NavigationMenuViewport({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Viewport>) {
  return (
    <NavigationMenuPrimitive.Viewport
      className={cn("relative h-full w-full overflow-hidden", className)}
      {...props}
    />
  );
}

export function NavigationMenuLink({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Link>) {
  return (
    <NavigationMenuPrimitive.Link
      data-slot="navigation-menu-link"
      className={cn(
        "data-[active]:focus:bg-stone-100 data-[active]:hover:bg-stone-100 data-[active]:bg-stone-100/70 hover:bg-stone-100/80 focus:bg-stone-100 flex flex-col gap-1 rounded-xl p-3 text-sm transition-all outline-none focus-visible:ring-2 focus-visible:ring-stone-400 cursor-pointer",
        className
      )}
      {...props}
    />
  );
}
