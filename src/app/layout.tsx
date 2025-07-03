import { Inter } from "next/font/google";
import "./globals.css";
import { Suspense, type ReactNode } from "react";
import { type Metadata } from "next";
import Script from "next/script";
import { DraftModeNotification } from "@/ui/components/DraftModeNotification";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Saleor Storefront example",
	description: "Starter pack for building performant e-commerce experiences with Saleor.",
	metadataBase: process.env.NEXT_PUBLIC_STOREFRONT_URL
		? new URL(process.env.NEXT_PUBLIC_STOREFRONT_URL)
		: undefined,
};

export default function RootLayout(props: { children: ReactNode }) {
	const { children } = props;

	return (
		<html lang="en" className="min-h-dvh">
			<body className={`${inter.className} min-h-dvh`}>
				{children}
				<Suspense>
					<DraftModeNotification />
				</Suspense>
				<Script id="rocketchat-livechat" strategy="afterInteractive">
					{`
            (function(w, d, s, u) {
                w.RocketChat = function(c) { w.RocketChat._.push(c) }; w.RocketChat._ = []; w.RocketChat.url = u;
                var h = d.getElementsByTagName(s)[0], j = d.createElement(s);
                j.async = true; j.src = 'https://livechat.jarvis.cx/livechat/rocketchat-livechat.min.js?_=201903270000';
                h.parentNode.insertBefore(j, h);
                w.ticketplus = w.ticketplus || {};
                w.ticketplus.tenantid = '60709a2e-f4d2-4c4b-a69b-5995dee8f7e1';
            })(window, document, 'script', 'https://livechat.jarvis.cx/livechat');
          `}
				</Script>
			</body>
		</html>
	);
}
