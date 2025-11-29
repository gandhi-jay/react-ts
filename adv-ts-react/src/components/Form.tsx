import { useImperativeHandle, useRef, type ComponentPropsWithoutRef, type FormEvent, type Ref } from "react";


export type FormHandle = {
    clear: () => void;
}

type FormProps = ComponentPropsWithoutRef<'form'> & {
    ref?: Ref<FormHandle>;
    onSave: (value: unknown) => void;
};


// Destructuring, otherwise it will throw unknown onSave event.
// as onSave was also passing to form.

/**
 * The forwardRef function requires two type parameters because it needs to handle two separate pieces of type information:
 * The type of the ref - what the ref will point to (DOM element or component instance)
 * The type of the component's props - what props the component accepts
 */

// ForwardRef is deprecated.

// export default forwardRef<FormHandle, FormProps>(function Form({onSave, children, ...otherProps}, ref) {

//     const form = useRef<HTMLFormElement>(null);

//     useImperativeHandle(ref, () => {
//         return {
//             clear() {
//                 console.log("==== Clearing form ====");
//                 form.current?.reset();
//             }
//         }
//     });

//     function handleSubmit(event: FormEvent<HTMLFormElement>) {
//         event.preventDefault();

//         const formData = new FormData(event.currentTarget);
//         const data = Object.fromEntries(formData);
//         onSave(data);
//     }

//     return <form onSubmit={handleSubmit} {...otherProps} ref={form}>
//         {children}
//     </form>;
// });

export default function Form({onSave, children, ref, ...otherProps}: FormProps) {

    const form = useRef<HTMLFormElement>(null);

    useImperativeHandle(ref, () => {
        return {
            clear() {
                console.log("==== Clearing form ====");
                form.current?.reset();
            }
        }
    }, []);

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const data = Object.fromEntries(formData);
        onSave(data);
    }

    return <form onSubmit={handleSubmit} {...otherProps} ref={form}>
        {children}
    </form>;
};