import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Justin Sasso - Software Engineer',
	description:
		'',
	keywords: [
		'Software Engineer',
		'Game Developer',
		'Game Designer',
		'.NET',
		'C#',
		'Mobile Development',
		'Godot Engine',
		'Unity Engine',
		'Unreal Engine',
		'Full Stack Development',
		'C++',
		'Performance Optimization',
		'Information Technology',
		'Cybersecurity',
		'Justin Sasso',
	],
	authors: [{ name: 'Justin Sasso' }],
	creator: 'Justin Sasso',
	openGraph: {
		title: 'Justin Sasso - Software Engineer Portfolio',
		description: '',
		url: 'https://www.justinsasso.com',
		siteName: 'Justin Sasso - Portfolio',
		images: [
			{
				url: '/og-image.jpg',
				width: 1200,
				height: 630,
				alt: 'Justin Sasso - Software Engineer Portfolio',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
		</html>
	);
}