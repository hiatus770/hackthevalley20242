
import { ReactNode } from 'react';
import { Inter } from "next/font/google";
import styles from './style.module.css';
const inter = Inter({ subsets: ["latin"] });
import { redirect } from "next/navigation";
import { usePathname } from 'next/navigation';
import TitleBar from './titlebar';


interface RootLayoutProps {
    children: ReactNode;
}

export default async function RootLayout({ children }: RootLayoutProps) {

    const isDarkMode = true;    
    // const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;  // TODO: this don't work for some reason
    return (
        <main>
            <TitleBar />
            {children}
        </main>
    );
}