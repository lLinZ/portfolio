import { FC } from "react"
import { Container, Text, Image } from "@nextui-org/react"
import { Slogan } from "./Slogan"

export const HeaderComponent: FC = () => {
    return (
        <div style={{ padding: 0, marginInline: 0, background: "black", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", width: "100%", height: "400px" }}>

            <video style={{
                position: "absolute",
                top: 0, left: 0,
                width: "100%",
                height: "400px",
                objectFit: "cover",
            }} src="/glitch.mp4" autoPlay={true} muted={true} loop={true}></video>
            <div style={{ background: "rgba(0,0,0,0.7)", position: "absolute", top: "50%", left: "50%", transform: "translateX(-50%) translateY(-50%)", margin: 0, padding: 0, width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", flexFlow: "column wrap" }}>

                <Image objectFit="cover" src={'/logo-nobg.png'} css={{ width: 200, height: 200 }} />
                <Text css={{ fontSize: 24, fontFamily: "Raleway" }}>
                    LinZ Development
                </Text>
                <Slogan />
            </div>
        </div>
    )
}