import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rafael Pequino | Desenvolvimento de Sites, Sistemas e Automações",
  description: "Desenvolvimento de sites, landing pages, sistemas personalizados e automações. Soluções digitais sob medida com atendimento direto e mais de 4 anos de experiência.",
  metadataBase: new URL("https://rafaelpequino.com.br"),
  alternates: { canonical: "/" },
  openGraph: { title: "Rafael Pequino | Soluções digitais sob medida", description: "Sites, sistemas personalizados e automações com atendimento direto e comunicação simples.", url: "/", siteName: "Rafael Pequino", locale: "pt_BR", type: "website", images: [{ url: "/og.png", width: 1200, height: 630, alt: "Rafael Pequino — Soluções digitais sob medida" }] },
  twitter: { card: "summary_large_image", title: "Rafael Pequino | Soluções digitais sob medida", description: "Sites, sistemas personalizados e automações com atendimento direto.", images: ["/og.png"] },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} antialiased`}
      >
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({"@context":"https://schema.org","@type":"ProfessionalService","name":"Rafael Pequino","description":"Desenvolvimento de soluções digitais sob medida.","url":"https://rafaelpequino.com.br","telephone":"+55 11 97566-9706","areaServed":"BR","founder":{"@type":"Person","name":"Rafael Pequino","jobTitle":"Desenvolvedor de software"}})}} />
      </body>
    </html>
  );
}
