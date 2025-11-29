// Polymorphic Component

import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react"

type ContainerProps<T extends ElementType> = {
    as?: T;     // Optional as default is 'div'.
    // The issue is that the props we're spreading might contain properties
    // that aren't valid for the component specified by the as prop
    children: ReactNode;
}  & ComponentPropsWithoutRef<T>;

export default function Container<C extends ElementType>({
    as,children, ...props
} : ContainerProps<C>) {

    // remapping the name.
    const Component = as || 'div';

    return <Component {...props}>{children}</Component>;
}