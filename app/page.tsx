'use client';

import HeroSection from './components/HeroSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';

export default function DevelopmentPortfolio() {
	return (
		<main className="min-h-screen bg-[#0F172A] text-white overflow-x-hidden">
			<HeroSection />
			<ProjectsSection />
			<ContactSection />
		</main>
	);
}
