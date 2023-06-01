import { FC, useRef, useState } from "react";
import { Navbar, Link, } from "@nextui-org/react";
import Image from "next/image";

type ILink = {
    link: string;
    name: string;
}

// Color
const activeColor = 'primary'

// Links
const collapseItems: ILink[] = [
    { link: '/', name: 'Inicio' },
    { link: '/about', name: 'Sobre mi' },
    { link: '/portfolio', name: 'Portafolio' },
];
export const NavbarComponent: FC = () => {
    const navbarToggleRef = useRef<any>()
    const [isSideMenuOpen, setIsSideMenuOpen] = useState<boolean>(false);
    const [activeMenu, setActiveMenu] = useState<string>('');
    const HandleSideMenu = (link = '') => {
        setActiveMenu(link)
        isSideMenuOpen && navbarToggleRef.current.click()
    }

    return (
        <Navbar isBordered variant="floating">
            <Navbar.Toggle ref={navbarToggleRef} showIn="xs" onChange={(isSelected: any) => setIsSideMenuOpen(Boolean(isSelected))} />
            <Navbar.Brand
                css={{
                    "@xs": {
                        w: "12%",
                    },
                }}
            >
                <Link href="/">
                    <Image alt="Logo LinZ Development" src={'/logo-nobg.png'} width={50} height={45} />
                </Link>
            </Navbar.Brand>
            <Navbar.Content
                enableCursorHighlight
                activeColor={activeColor}
                hideIn="xs"
                variant="highlight"
            >
                <Navbar.Link href="/" onClick={() => HandleSideMenu('/')}>Inicio</Navbar.Link>
                <Navbar.Link href="/about" onClick={() => HandleSideMenu('/about')}>Sobre mi</Navbar.Link>
                <Navbar.Link href="/portfolio" onClick={() => HandleSideMenu('/portfolio')}>Portafolio</Navbar.Link>
            </Navbar.Content>
            <Navbar.Collapse>
                {collapseItems.map((item, index) => (
                    <Navbar.CollapseItem
                        key={index}
                        isActive={item.link === activeMenu}

                        activeColor={activeColor}
                    >
                        <Link
                            color="inherit"
                            css={{
                                minWidth: "100%",
                            }}
                            onClick={() => HandleSideMenu(item.link)}
                            href={item.link}
                        >
                            {item.name}
                        </Link>
                    </Navbar.CollapseItem>
                ))}
            </Navbar.Collapse>
        </Navbar>
    );
}
