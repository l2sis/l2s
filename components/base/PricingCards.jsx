import React from 'react';
import { Check } from 'lucide-react';
import AnimateContainer from '@/components/motion/AnimateContainer';

const plans = [
	{
		name: 'Free',
		price: '$0.00',
		period: '/Mo',
		subtitle: 'Free Forever',
		features: [
			'500 Links per month',
			'500 QR Codes per month',
			'Unlimited team members',
			'UTM Management',
			'Integrations',
			'1 Custom Domain',
			'Open-in-app',
			'Advanced Analytics',
		],
		cta: {
			label: 'Get started for free',
			variant: 'outline',
			href: 'https://app.l2s.is/register',
		},
	},
	{
		name: 'Enterprise',
		price: 'Custom Pricing',
		period: '',
		subtitle: 'Billed Monthly',
		features: [
			'Unlimited Links per month',
			'Unlimited QR Codes per month',
			'Unlimited team members',
			'UTM Management',
			'Integrations',
			'Unlimited Custom Domain',
			'Open-in-app',
			'Advanced Analytics',
		],
		cta: {
			label: 'Schedule a meeting',
			variant: 'solid',
			href: 'https://app.l2s.is/register',
		},
	},
];

export default function PricingCards() {
	return (
		<AnimateContainer>
			<div className='py-8 px-6'>
				<div className='max-w-4xl mx-auto flex flex-col gap-8 md:flex-row overflow-hidden'>
					{plans.map((plan) => (
						<div
							key={plan.name}
							className='p-8 flex-1 rounded-lg shadow-lg border-gray-200 border'>
							{/* Plan Name */}
							<h3 className='text-lg font-semibold text-gray-900'>
								{plan.name}
							</h3>

							{/* Price */}
							<div className='mt-4 flex items-baseline'>
								<span className='text-4xl font-extrabold text-gray-900'>
									{plan.price}
								</span>
								<span className='ml-1 text-xl text-gray-500'>
									{plan.period}
								</span>
							</div>

							{/* Subtitle */}
							<p className='mt-1 text-gray-500'>{plan.subtitle}</p>

							{/* Divider */}
							<hr className='mt-6 border-gray-200' />

							{/* Feature List */}
							<ul className='mt-6 space-y-4'>
								{plan.features.map((feat) => (
									<li key={feat} className='flex items-start'>
										<Check className='w-5 h-5 text-green-300 mt-1' />
										<span className='ml-3 text-gray-700'>{feat}</span>
									</li>
								))}
							</ul>

							{/* CTA Button */}
							<div className='mt-8 text-center'>
								{plan.cta.variant === 'outline' ? (
									<a
										href={plan.cta.href}
										className='block w-full cursor-pointer px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50'>
										{plan.cta.label}
									</a>
								) : (
									<a
										href={plan.cta.href}
										className='block w-full cursor-pointer px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700'>
										{plan.cta.label}
									</a>
								)}
							</div>
						</div>
					))}
				</div>
			</div>
		</AnimateContainer>
	);
}
