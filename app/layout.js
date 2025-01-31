import Logo from "./_components/Logo";
import Navigation from "@/app/_components/Navigation";
import "@/app/_styles/globals.css";
import Header from "@/starter/components/Header";

import { Josefin_Sans } from "next/font/google";
import { ReservationProvider } from "./_components/ReservationContext";

const josefin = Josefin_Sans({ subsets: ["latin"], display: "swap" });

export const metadata = {
  title: {
    template: "%s / The wild Oasis",
    default: "Welcome / The wild Oasis",
  },
  description:
    "Luxurious cabin hotel, located in the heart of Italian Domomites, surrounded by beautiful mountains and dark forest",
};

function Rootlayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${josefin.className} antialiased bg-primary-950 text-primary-100 min-h-screen flex flex-col`}
      >
        <Header />
        <div className="flex-1 px-8 py-12 grid ">
          <main className="max-w-7xl w-full  mx-auto">
            <ReservationProvider>{children}</ReservationProvider>
          </main>
        </div>
      </body>
    </html>
  );
}

export default Rootlayout;
