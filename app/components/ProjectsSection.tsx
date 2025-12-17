'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const projects = [
	{
		title: 'Find Factory',
		description: 'Released mobile game made with Godot Engine.',
		image: '/find_factory.png',
		imgSize: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
		tags: ['.NET', 'Swift', 'Java', 'C++'],
		clickLocation: 'https://www.atlas-applications.com/',
	},
	{
		title: 'Roku Streaming Client',
		description: 'An example Roku streaming client, demonstrating the use of BrightScript and SceneGraph.',
		image: '/roku_streaming_client_icon.png',
		imgSize: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
		tags: ['BrightScript', 'SceneGraph', 'Roku', 'User Interface'],
		clickLocation: 'https://github.com/atlasapplications/roku-streaming-client',
	},
	{
		title: 'Godot StoreKit',
		description: `Godot integration with Apple's billing API.`,
		image: '/godot_storekit.svg',
		imgSize: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
		tags: ['Swift', 'StoreKit', 'iOS', 'Apple'],
		clickLocation: 'https://github.com/atlasapplications/godot-store-kit',
	},
	{
		title: 'UID Explorer Plugin',
		description: 'Utility plugin for Godot Engine editor.',
		image: '/uid_explorer_plugin.png',
		imgSize: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
		tags: ['.NET', 'Tool', 'Editor', 'Godot Engine'],
		clickLocation: 'https://github.com/atlasapplications/uid-explorer-plugin',
	},
	{
		title: 'Godot Google Billing',
		description: `Godot integration with Google's mobile billing API.`,
		image: '/journey_island.png',
		imgSize: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
		tags: ['Java', 'Billing API', 'Android', 'Google'],
		clickLocation: 'https://github.com/atlasapplications/godot-google-play-billing',
	},
	{
		title: 'Cube Bounce!',
		description: 'Mobile game made with Unreal Engine.',
		image: '/cube_bounce.png',
		imgSize: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
		tags: ['Blueprints', 'Unreal Engine', 'Mobile', 'C++'],
		clickLocation: 'https://github.com/atlasapplications/',
	},
	{
		title: 'Journey Island',
		description: 'Prototype cross platform game made with Godot Engine.',
		image: '/journey_island.png',
		imgSize: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
		tags: ['.NET', 'Cross Platform', 'iOS', 'Android'],
		clickLocation: 'https://testflight.apple.com/join/vfHjvtxf',
	},
];

export default function ProjectsSection() {
	return (
		<section className="py-20 px-4">
			<div className="max-w-6xl mx-auto">
				<motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-3xl font-bold mb-12 text-center">
					Featured Projects
				</motion.h2>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					{projects.map((project, index) => (
						<motion.a
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.2 }}
							className="group relative bg-gray-900/50 rounded-xl overflow-hidden backdrop-blur-sm border border-gray-800"
							href={project.clickLocation}
							target='_blank'
							
						>
							<div className="aspect-video relative overflow-hidden">
								<Image src={project.image} alt={project.title} fill sizes={project.imgSize} className="object-cover transition-transform duration-300 group-hover:scale-105" />
								<div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent transition-transform duration-300 group-hover:scale-105" />
							</div>
							<div className="p-6">
								<h3 className="text-xl font-bold mb-2">{project.title}</h3>
								<p className="text-gray-400 mb-4">{project.description}</p>
								<div className="flex flex-wrap gap-2">
									{project.tags.map((tag, i) => (
										<span key={i} className="text-sm px-3 py-1 bg-gray-800 rounded-full">
											{tag}
										</span>
									))}
								</div>
							</div>
						</motion.a>
					))}
				</div>
			</div>
		</section>
	);
}