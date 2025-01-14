import localFont from "next/font/local";
import "./globals.css";
import Head from "next/head";
import Providers from "./redux/provider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Viking store",
  description: "Tienda de plataformas",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        {/* Aquí puedes agregar el meta del viewport */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />

      </Head>
      <Providers>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          {children}


        </body>
      </Providers>

    </html>
  );
}
