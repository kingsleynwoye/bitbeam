import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>
          BitBeam - Save fees. Stay private. Beam your Bitcoin better.
        </title>
        <meta
          name="description"
          content="Save fees. Stay private. Beam your Bitcoin better."
        />
        <meta name="viewport" content="width=deviceWidth, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section
          className={`${geistSans.className} ${geistMono.className} font-[family-name:var(--font-geist-sans)] bg-black`}
        >
          <div className="h-screen flex items-center justify-center">
            <div className="flex flex-col items-center gap-6">
              <Image
                src="/assets/images/brand.svg"
                alt="BitBeam Logo"
                width={512}
                height={512}
                priority
              />
              <p className="text-white text-xs md:text-base font-[family-name:var(--font-geist-mono)]">
                Save fees. Stay private. Beam your Bitcoin better.
              </p>
              <button
                type="button"
                className="bg-gradient-to-r from-[#7F1AFF] to-[#FF9900] text-white px-4 py-2 rounded-full cursor-pointer font-[family-name:var(--font-geist-mono)]"
              >
                Get Started
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
