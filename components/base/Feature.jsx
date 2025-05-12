import React from 'react';
import { Check } from 'lucide-react';
import AnimateContainer from '@/components/motion/AnimateContainer';

export default function Feature({
	className = '',
	tagTitle = 'Powerful Feature',
	tagColor = 'green',
	title = 'Feature Title',
	titleHighlight = '',
	description = 'Feature description goes here.',
	features = [],
	image = '/images/Feature/UrlShortener.png',
	imageAlt = 'Feature Image',
}) {
	// Generate color classes based on the tag color
	const colorMap = {
		green: {
			bg: 'bg-green-100',
			text: 'text-green-800',
			icon: 'text-green-500',
			bgLight: 'bg-green-50',
		},
		yellow: {
			bg: 'bg-yellow-100',
			text: 'text-yellow-800',
			icon: 'text-yellow-500',
			bgLight: 'bg-yellow-50',
		},
		fuchsia: {
			bg: 'bg-fuchsia-100',
			text: 'text-fuchsia-800',
			icon: 'text-fuchsia-500',
			bgLight: 'bg-fuchsia-50',
		},
		blue: {
			bg: 'bg-blue-100',
			text: 'text-blue-800',
			icon: 'text-blue-500',
			bgLight: 'bg-blue-50',
		},
	};

	const colors = colorMap[tagColor] || colorMap.green;
	const bgColorClass = colors.bg;
	const textColorClass = colors.text;
	const iconColorClass = colors.icon;
	const bgLightColorClass = colors.bgLight;

	return (
		<AnimateContainer>
			<section className={`px-32 ${className}`}>
				<div className='mx-auto flex flex-col md:flex-row items-center gap-12 px-6 md:space-x-8'>
					{/* LEFT COLUMN */}
					<div className='w-full md:w-[40%] space-y-6 p-16'>
						<span
							className={`inline-block ${bgColorClass} ${textColorClass} text-sm font-semibold px-3 py-1 rounded-full`}>
							{tagTitle}
						</span>

						<h2 className='text-3xl md:text-4xl font-extrabold text-gray-900'>
							{title}{' '}
							{titleHighlight && (
								<span className='text-gray-500'>{titleHighlight}</span>
							)}
						</h2>

						<p className='text-gray-600 leading-relaxed'>{description}</p>

						{features.length > 0 && (
							<ul className='space-y-4'>
								{features.map((text) => (
									<li key={text} className='flex items-start'>
										<Check className={`w-5 h-5 ${iconColorClass} mt-1`} />
										<span className='ml-3 text-gray-700'>{text}</span>
									</li>
								))}
							</ul>
						)}
					</div>

					{/* RIGHT COLUMN */}
					<div
						className={`w-full md:w-[60%] relative ${bgLightColorClass} p-16 rounded-xl flex items-center justify-center`}>
						<img src={image} alt={imageAlt} />
					</div>
				</div>
			</section>
		</AnimateContainer>
	);
}
