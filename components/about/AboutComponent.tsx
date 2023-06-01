'use client'
import { FC } from 'react'
import { Container, Text } from '@nextui-org/react'
import { Services } from '../servicios';

export const AboutUsComponent: FC = () => {
    return (
        <Container css={{ display: "flex", alignItems: "center", justifyContent: "center", flexFlow: "row wrap", mt: 20 }}>
            <Container css={{ "@xs": { width: "100%" }, '@md': { width: "50%" } }}>
                <Text h1>¿Quién soy?</Text>
                <Text h4>Soy un desarrollador web con experiencia en front-end y back-end. Creo soluciones a medida con tecnologías como JavaScript, MySQL, PHP, Node.js y más. Contáctame para discutir tu proyecto web y dar vida a tu visión en línea.
                </Text>
            </Container>
            <Services />
        </Container>
    )
}
