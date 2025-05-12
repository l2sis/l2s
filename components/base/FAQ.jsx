'use client';

import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const faqItems = [
	{
		question: 'How does the link shortening process work?',
		answer:
			'You paste your long URL into L2S, we generate a unique short code, and redirect anyone who clicks your short link to the original URL—easy tracking included.',
	},
	{
		question: 'What are the benefits of using a URL shortener?',
		answer:
			'Short links look cleaner, are easier to share (especially on character-limited platforms), and let you gather click analytics to measure engagement.',
	},
	{
		question: 'Can link shorteners track the number of clicks?',
		answer:
			'Absolutely—with L2S you get real-time analytics on how many times each short link was clicked, along with referrer and geographic data.',
	},
	{
		question: 'Are there any risks associated with shortened links?',
		answer:
			'Short URLs can obscure the destination—always preview links before clicking, and use custom domains to build trust with your audience.',
	},
	{
		question: 'How can businesses effectively utilize link shorteners?',
		answer:
			'Companies use short links in marketing campaigns, social posts, and email blasts to drive traffic and track performance. Combine with custom domains and UTM parameters for maximum impact.',
	},
];

export default function FAQ() {
	const [openIndex, setOpenIndex] = useState(null);
	const contentRefs = useRef([]);

	// Whenever openIndex changes, adjust max-height on each panel
	useEffect(() => {
		contentRefs.current.forEach((el, idx) => {
			if (!el) return;
			if (idx === openIndex) {
				// expand to its scrollHeight
				el.style.maxHeight = el.scrollHeight + 'px';
			} else {
				// collapse
				el.style.maxHeight = '0px';
			}
		});
	}, [openIndex]);

	const toggle = (idx) => {
		setOpenIndex((prev) => (prev === idx ? null : idx));
	};

	return (
		<section className='py-16 px-6 bg-white'>
			<div className='max-w-3xl mx-auto'>
				<h2 className='text-3xl font-bold text-center mb-8'>
					Frequently asked questions
				</h2>
				<div className='space-y-4'>
					{faqItems.map((item, idx) => {
						const isOpen = idx === openIndex;
						return (
							<div
								key={idx}
								className={`
                  border rounded-lg overflow-hidden
                  ${isOpen ? 'border-blue-600' : 'border-gray-200'}
                  transition-colors hover:border-gray-300
                `}>
								<button
									onClick={() => toggle(idx)}
									className='
                    w-full flex justify-between items-center
                    px-4 py-6 text-left cursor-pointer
                  '>
									<span className='text-gray-900'>{item.question}</span>
									<ChevronDown
										className={`
                      w-5 h-5 text-blue-600 transform
                      transition-transform duration-200
                      ${isOpen ? 'rotate-180' : 'rotate-0'}
                    `}
									/>
								</button>

								{/* the collapsible panel */}
								<div
									ref={(el) => (contentRefs.current[idx] = el)}
									className='
                    overflow-hidden
                    transition-[max-height] duration-300 ease-in-out
                  '
									style={{ maxHeight: 0 }}>
									<div className='px-4 pb-4 text-gray-600'>{item.answer}</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
