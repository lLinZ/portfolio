import { FC } from 'react'
import { Text } from '@nextui-org/react'
import styles from './Slogan.module.css'
export const Slogan: FC = () => {
    return (
        <div className={styles['glitch-wraper']}>
            <div className={styles["glitch"]} data-glitch="Desarrollando tus ideas" style={{ fontFamily: "Syne Mono", textAlign: "center" }}>Desarrollando tus ideas</div>
        </div>
    )
}
