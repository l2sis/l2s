import React from 'react';
import { ArrowRight, Link2 } from 'lucide-react';

export default function PromoBanner() {
	return (
		<section
			className='
      mx-4         /* small screens */
      md:mx-8      /* medium+ screens */
      lg:mx-16     /* large+ screens */
      bg-blue-600 rounded-3xl overflow-hidden
      py-16 px-6
    '>
			<div className='max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12'>
				{/* Left side text + CTA */}
				<div className='flex-1 text-white'>
					<h2 className='text-3xl md:text-4xl font-bold leading-tight'>
						Shorten your links. Amplify your impact
					</h2>
					<p className='mt-3 text-lg opacity-90'>
						We’ve curated a perfect set of plans that cater to your unique needs
					</p>
					<a
						href='#get-started'
						className='
              mt-6 inline-flex items-center
              bg-white text-blue-600 font-medium
              px-6 py-3 rounded-lg
              hover:bg-gray-100 transition
            '>
						Get Started for Free
						<ArrowRight className='w-5 h-5 ml-2' />
					</a>
				</div>

				{/* Right side mockup */}
				<div className='flex-1 relative'>
					<img src='/images/CTA.png' alt='L2S CTA' />
				</div>
			</div>
		</section>
	);
}
