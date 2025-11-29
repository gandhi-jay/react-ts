import type { ComponentPropsWithoutRef } from "react";

// type ButtonProps = {
//     el: 'button';
// } & ComponentPropsWithoutRef<'button'>;

// type AnchorProps = {
//     el: 'anchor';
// } & ComponentPropsWithoutRef<'a'>;

// // Destructuring {el, ...props} gives error due to
// // TypeScript discriminated-union narrowing issue
// // In the el === 'anchor' branch, TypeScript correctly narrows el to 'anchor'
// // → but props is still typed as the union of ComponentPropsWithoutRef<'button'> | ComponentPropsWithoutRef<'a'>.
// export default function Button(props : ButtonProps | AnchorProps) {

//     if (props.el === 'anchor') {
//         return <a className="button" {...props}></a>;
//     }

//     // TS is sure that props are ButtonProps.
//     return <button className="button" {...props}></button>
// }

// Getting rid of el.

type ButtonProps = ComponentPropsWithoutRef<'button'> & {
    href?: never;
};

type AnchorProps = ComponentPropsWithoutRef<'a'> & {
    href?: string;
};

// Type predicate
function isAnchorProps (props: ButtonProps | AnchorProps): props is AnchorProps {
    return 'href' in props;
}

export default function Button(props : ButtonProps | AnchorProps) {

    if (isAnchorProps(props)) {
        return <a className="button" {...props}></a>;
    }

    // TS is sure that props are ButtonProps.
    return <button className="button" {...props}></button>
}