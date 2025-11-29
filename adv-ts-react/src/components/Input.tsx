import { type ComponentPropsWithRef, forwardRef } from "react"


type InputProps = {
    label: string,
    id: string
} & ComponentPropsWithRef<'input'>;

export default forwardRef<HTMLInputElement, InputProps>(function Input({ label, id, ...props }: InputProps, ref) {
    return (
        <p>
            <label htmlFor={id}>{label}</label>
            <input id={id} name={id} {...props} ref={ref}/>
        </p>
    )
});