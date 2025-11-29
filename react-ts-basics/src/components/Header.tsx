import {type FC, type PropsWithChildren} from "react";

type Header = {
    image: {
        src: string,
        alt: string
    }
}
type HeaderProps = PropsWithChildren<Header>;

const Header: FC<HeaderProps> = ({image: {src, alt}, children}) => {
    return (
        <header>
            <img src={src} alt={alt} />
            {children}
        </header>
    )
}

export default Header;