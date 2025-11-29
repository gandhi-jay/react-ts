import type {ReactNode} from "react";

type HintBoxProps = {
    mode: 'hint',
    children: ReactNode
}

type WarningBoxProps = {
    mode: 'warning',
    severity: 'low' | 'medium' | 'high',
    children: ReactNode
}

// Destructring will not work. {mode, severity, children} will throw error.
type InfoBoxProps = HintBoxProps | WarningBoxProps;

// TS is smart enough to understand props.severity.
export default function InfoBox(props: InfoBoxProps) {
    const {mode, children} = props;

    const className = mode === 'hint'
        ? "infobox infobox-hint"
        : `infobox infobox-warning warning--${props.severity}`;
    return <aside className={className}>
        {mode === 'warning' ? <h2>Warning</h2> : ""}
        <p>{children}</p>
    </aside>
}

// export default function InfoBox({mode, severity, children}: InfoBoxProps) {

//     const className = mode === 'hint'
//         ? "infobox infobox-hint"
//         : `infobox infobox-warning warning--${severity}`;
//     return <aside className={className}>
//         {mode === 'warning' ? <h2>Warning</h2> : ""}
//         <p>{children}</p>
//     </aside>
// }