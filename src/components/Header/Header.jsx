import React from "react";
import {ReactComponent as Logo} from './../../logo.svg'
import s from './Header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
        <Logo  className={s.imgLogo}/>
        </header>
    );
}
export default Header;