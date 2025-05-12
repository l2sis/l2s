'use client';

import React, { useState } from 'react';
import {
	Menu,
	X,
	ChevronDown,
	Link2,
	QrCode,
	BarChart3,
	Globe2,
	FileText,
	BookOpen,
	Code,
	Scissors,
	Image,
	LineChart,
} from 'lucide-react';

export default function Navbar() {
	const [mobileOpen, setMobileOpen] = useState(false);
	const [openDropdown, setOpenDropdown] = useState(null);
	const [openMobileDropdown, setOpenMobileDropdown] = useState(null);

	// Add click outside listener
	React.useEffect(() => {
		const handleClickOutside = (event) => {
			if (openDropdown && !event.target.closest('.dropdown-container')) {
				setOpenDropdown(null);
			}
		};

		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [openDropdown]);

	// Data for all dropdown menus with consistent structure
	const navMenus = [
		{
			key: 'features',
			label: 'Features',
			items: [
				{
					label: 'URL Shortener',
					icon: <Link2 className='h-5 w-5 text-gray-500' />,
					description: 'Shorten long links like a pro',
					href: '#url-shortener',
				},
				{
					label: 'QR Code',
					icon: <QrCode className='h-5 w-5 text-gray-500' />,
					description: 'Customize QR codes for your brand',
					href: '#qr-code',
				},
				{
					label: 'Analytics',
					icon: <BarChart3 className='h-5 w-5 text-gray-500' />,
					description: 'Smarter decisions, powered by insights',
					href: '#analytics',
				},
				{
					label: 'Custom Domain',
					icon: <Globe2 className='h-5 w-5 text-gray-500' />,
					description: 'Create branded links with your domain',
					href: '#custom-domain',
				},
			],
		},
		{
			key: 'resources',
			label: 'Resources',
			items: [
				{
					label: 'Blog',
					icon: <FileText className='h-5 w-5 text-gray-500' />,
					description: 'Tips, tricks and latest updates',
					href: '#blog',
				},
				{
					label: 'Documentation',
					icon: <BookOpen className='h-5 w-5 text-gray-500' />,
					description: 'Learn how to use our platform',
					href: '#docs',
				},
				{
					label: 'API',
					icon: <Code className='h-5 w-5 text-gray-500' />,
					description: 'Integrate our tools into your workflow',
					href: '#api',
				},
			],
		},
		{
			key: 'tools',
			label: 'Tools',
			items: [
				{
					label: 'URL Shortener',
					icon: <Scissors className='h-5 w-5 text-gray-500' />,
					description: 'Transform long URLs into short links',
					href: '#url-tool',
				},
				{
					label: 'QR Code Generator',
					icon: <Image className='h-5 w-5 text-gray-500' />,
					description: 'Generate customized QR codes instantly',
					href: '#qr-tool',
				},
				{
					label: 'Link Analytics',
					icon: <LineChart className='h-5 w-5 text-gray-500' />,
					description: 'Track performance of your links',
					href: '#analytics-tool',
				},
			],
		},
	];

	const toggleDropdown = (key) => {
		setOpenDropdown(openDropdown === key ? null : key);
	};

	const toggleMobileDropdown = (key) => {
		setOpenMobileDropdown(openMobileDropdown === key ? null : key);
	};

	return (
		<header className='sticky top-0 z-50 bg-white border-b border-gray-200'>
			<div className='container mx-auto px-4 py-6 flex items-center justify-between'>
				{/* Logo + Divider + Desktop Nav */}
				<div className='flex items-center space-x-8'>
					<img src='/icon/Logo.svg' alt='L2S Logo' className='h-8 w-auto' />
					{/* Divider */}
					<div className='h-6 w-px bg-gray-200 hidden lg:block' />

					<div className='hidden lg:flex items-center space-x-6'>
						{/* Map through all dropdown menus */}
						{navMenus.map((menu) => (
							<div className='relative dropdown-container' key={menu.key}>
								<button
									onClick={() => toggleDropdown(menu.key)}
									className='flex items-center text-gray-800 font-medium px-3 py-2 rounded-lg hover:bg-gray-50 cursor-pointer'>
									{menu.label} <ChevronDown className='ml-1 h-4 w-4' />
								</button>
								{openDropdown === menu.key && (
									<div className='absolute left-0 mt-2 w-96 bg-white shadow-lg rounded-xl p-4 space-y-2 z-20'>
										{menu.items.map((item) => (
											<a
												key={item.label}
												href={item.href}
												className='flex items-start p-2 rounded-lg hover:bg-gray-50'>
												<div className='p-2 bg-gray-100 rounded-md'>
													{item.icon}
												</div>
												<div className='ml-3'>
													<p className='text-gray-900 font-medium'>
														{item.label}
													</p>
													<p className='text-gray-500 text-sm'>
														{item.description}
													</p>
												</div>
											</a>
										))}
									</div>
								)}
							</div>
						))}

						<a
							href='#pricing'
							className='text-gray-800 font-medium px-3 py-2 rounded-lg hover:bg-gray-50'>
							Pricing
						</a>
					</div>
				</div>

				{/* Auth & Mobile Toggle */}
				<div className='flex items-center space-x-4'>
					{/* Desktop auth */}
					<div className='hidden lg:flex items-center space-x-6'>
						<a href='#login' className='text-gray-500 font-medium'>
							Login
						</a>
						<a
							href='#signup'
							className='bg-blue-600 text-white font-medium px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors'>
							Get Started for Free
						</a>
					</div>

					{/* Mobile toggle */}
					<button
						className='lg:hidden'
						onClick={() => {
							setMobileOpen(!mobileOpen);
							setOpenMobileDropdown(null);
						}}>
						{mobileOpen ? (
							<X className='h-6 w-6 text-gray-800' />
						) : (
							<Menu className='h-6 w-6 text-gray-800' />
						)}
					</button>
				</div>
			</div>

			{/* MOBILE MENU */}
			{mobileOpen && (
				<div className='lg:hidden bg-white border-t border-gray-200'>
					<nav className='px-4 pt-4 pb-6 space-y-3'>
						{/* Map through all mobile dropdown menus */}
						{navMenus.map((menu) => (
							<div key={menu.key} className='border-b border-gray-100 pb-2'>
								<button
									onClick={() => toggleMobileDropdown(menu.key)}
									className='flex items-center justify-between w-full py-2 text-gray-800 font-medium cursor-pointer'>
									{menu.label}
									<ChevronDown
										className={`h-4 w-4 transition-transform ${
											openMobileDropdown === menu.key ? 'rotate-180' : ''
										}`}
									/>
								</button>

								{openMobileDropdown === menu.key && (
									<div className='mt-2 space-y-2 pl-4'>
										{menu.items.map((item) => (
											<a
												key={item.label}
												href={item.href}
												className='flex items-center py-2'>
												<div className='p-1 bg-gray-100 rounded-md mr-3'>
													{item.icon}
												</div>
												<span className='text-gray-700'>{item.label}</span>
											</a>
										))}
									</div>
								)}
							</div>
						))}

						<a href='#pricing' className='block py-2 text-gray-800 font-medium'>
							Pricing
						</a>

						<div className='pt-4 space-y-3'>
							<a
								href='#login'
								className='block border border-gray-300 text-gray-800 font-medium py-3 px-6 rounded-lg hover:bg-gray-50 transition-colors text-center'>
								Login
							</a>
							<a
								href='#signup'
								className='block bg-blue-600 text-white font-medium px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors text-center'>
								Get Started for Free
							</a>
						</div>
					</nav>
				</div>
			)}
		</header>
	);
}
