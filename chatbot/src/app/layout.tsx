import type { Metadata } from "next";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter'
import { Roboto, Montserrat } from 'next/font/google'
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/theme";

const roboto = Roboto({
	weight: ['100', '300', '400', '500', '700', '900'],
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-roboto',
});

const montserrat = Montserrat({
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
	subsets: ['latin'],
	display: 'auto',
	variable: '--font-montserrat',
})

export const metadata: Metadata = {
  title: "ChatBot",
  description: "WinterSunset95@langchain",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
		<body className={montserrat.variable}>
			<AppRouterCacheProvider>
				<ThemeProvider theme={theme}>
					{children}
				</ThemeProvider>
			</AppRouterCacheProvider>
		</body>
		</html>
	);
}
