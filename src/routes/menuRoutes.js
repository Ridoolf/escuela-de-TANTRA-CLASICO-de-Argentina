import { Contact } from "../components/pages/contact/Contact";
import { Home } from "../components/pages/home/Home";
import { International } from "../components/pages/international/International";
import { OlgaTallone } from "../components/pages/olga-tallone/OlgaTallone";
import { Press } from "../components/pages/press/Press";
import { TantraClub } from "../components/pages/tantra-club/TantraClub";

export const menuRoutes = [
    {
        id: 'home',
        path: '/',
        Element: Home
    },
    {
        id: 'tantraClub',
        path: '/tantra-club',
        Element: TantraClub
    },
    {
        id: 'olgaTallone',
        path: '/olga-tallone',
        Element: OlgaTallone
    },
    {
        id: 'press',
        path: '/prensa',
        Element: Press
    },
    {
        id: 'contact',
        path: '/contacto',
        Element: Contact
    },
    {
        id: 'international',
        path: '/internacional',
        Element: International
    }
]