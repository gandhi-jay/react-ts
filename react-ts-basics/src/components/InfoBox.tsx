import type {ReactNode} from "react";

type InfoBoxProps = {
    mode: 'hint' | 'warning',
    severity?: 'low' | 'medium' | 'high',
    children: ReactNode
}

export default function InfoBox({mode, severity, children}: InfoBoxProps) {

    const className = mode === 'hint'
        ? "infobox infobox-hint"
        : `infobox infobox-warning warning--${severity}`;
    return <aside className={className}>
        {mode === 'warning' ? <h2>Warning</h2> : ""}
        <p>{children}</p>
    </aside>
}