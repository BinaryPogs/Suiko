import { font } from './fonts'
import "./globals.css";
import { Background } from "@/components/ui/background/Background";

export const metadata = {
  title: 'Suiko - Web3 Builder Community',
  description: 'The First Decentralized Talent Platform on Sui',
  icons: {
    icon: '/suiko.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={font.variable}>
      <body>
        <Background>
          <div className="flex flex-col items-center justify-center min-h-screen">
            {children}
          </div>
        </Background>
      </body>
    </html>
  );
}
