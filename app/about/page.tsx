'use client'

import { AboutUsComponent } from "@/components/about/AboutComponent";

export const metadata = {
    title: 'LinZ | Sobre mi',
    description: 'Desarrollo web a medida de tus necesidades',
}

const AboutPage = () => {
    return (
        <>
            <AboutUsComponent />
        </>
    )
}

export default AboutPage;