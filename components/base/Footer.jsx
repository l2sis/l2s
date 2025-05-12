import React from 'react';
import { Facebook, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
	const sections = [
		{
			title: 'Product',
			links: [
				{ name: 'Home', href: '/' },
				{ name: 'About us', href: '/about' },
				{ name: 'Privacy', href: '/privacy' },
				{ name: 'Terms', href: '/terms' },
			],
		},
		{
			title: 'Resources',
			links: [
				{ name: 'Blog', href: '/blog' },
				{ name: 'API Docs', href: '/api-docs' },
			],
		},
		{
			title: 'Tools',
			links: [
				{ name: 'URL Shortening', href: '/shorten' },
				{ name: 'QR Code', href: '/qr-code' },
			],
		},
		{
			title: 'Useful Links',
			links: [{ name: 'Contact us', href: '/contact' }],
		},
	];

	return (
		<footer className='bg-white px-6 md:px-8 lg:px-16 py-12'>
			<div className='max-w-6xl mx-auto'>
				{/* Top: logo + social + columns */}
				<div className='flex flex-col md:flex-row md:justify-between gap-12'>
					{/* Logo + socials */}
					<div>
						<img src='/icon/Logo.svg' alt='L2S' className='h-8 w-auto' />
						<div className='flex space-x-4 mt-4'>
							<a href='#' className='text-gray-500 hover:text-gray-900'>
								<Facebook className='w-5 h-5' />
							</a>
							<a href='#' className='text-gray-500 hover:text-gray-900'>
								<Twitter className='w-5 h-5' />
							</a>
							<a href='#' className='text-gray-500 hover:text-gray-900'>
								<Instagram className='w-5 h-5' />
							</a>
						</div>
					</div>

					{/* Link columns */}
					<div className='grid grid-cols-2 sm:grid-cols-4 gap-8'>
						{sections.map((section) => (
							<div key={section.title}>
								<h4 className='text-sm font-semibold text-gray-900 mb-4'>
									{section.title}
								</h4>
								<ul className='space-y-2'>
									{section.links.map((link) => (
										<li key={link.name}>
											<a
												href={link.href}
												className='text-gray-600 hover:text-gray-900 text-sm'>
												{link.name}
											</a>
										</li>
									))}
								</ul>
							</div>
						))}
					</div>
				</div>

				{/* Divider */}
				<hr className='mt-12 border-gray-200' />

				{/* Copyright */}
				<p className='mt-6 text-center text-sm text-gray-500'>
					© L2S 2025. All Rights Reserved.
				</p>
			</div>
		</footer>
	);
}
