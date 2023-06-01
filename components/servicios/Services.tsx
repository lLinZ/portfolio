'use client'
import { FC } from 'react';
import style from './Services.module.css';

interface Props { }

export const Services: FC<Props> = () => {
    return (
        <>
            <div style={{ display: "flex", flexFlow: "row nowrap" }}>
                <div style={{ display: "flex", alignItems: "center", flexFlow: "column wrap" }}>
                    <div className={`${style.card} ${style.big} ${style['animate-slightly2']}`} style={{ backgroundImage: "url(/services1c.jpg)" }}>Audiovisuales</div>
                    <div className={`${style.card} ${style.small} ${style.animate}`} style={{ backgroundImage: "url(/services2c.jpg)" }}>Direccion de videos</div>
                </div>
                <div style={{ display: "flex", alignItems: "center", flexFlow: "column wrap" }}>
                    <div className={`${style.card} ${style.small} ${style.animate2}`} style={{ backgroundImage: "url(/services4c.jpg)", }}>Fotografia</div>
                    <div className={`${style.card} ${style.big} ${style['animate-slightly']}`} style={{ backgroundImage: "url(/services3c.jpg)", }}>Escenografia</div>
                </div>
            </div>
        </>
    );
};
