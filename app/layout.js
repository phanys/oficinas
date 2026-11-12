import { Bricolage_Grotesque, Figtree } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const corpo = Figtree({
  subsets: ["latin"],
  variable: "--font-corpo",
  display: "swap",
});

export const metadata = {
  title: {
    default: "Guia das Oficinas",
    template: "%s | Guia das Oficinas",
  },
  description:
    "Orientações e checklists de cada oficina para a equipe de voluntários.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#002A40",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={`${display.variable} ${corpo.variable}`}>
      <body>
        <header className="topo">
          <Link href="/" className="topo__marca">
            <span className="topo__selo" aria-hidden="true" />
            Guia das Oficinas
          </Link>
        </header>
        {children}
      </body>
    </html>
  );
}
