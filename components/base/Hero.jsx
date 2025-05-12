import AnimateContainer from '@/components/motion/AnimateContainer';

const Hero = () => {
	return (
		<AnimateContainer>
			<section className='py-20 px-4 overflow-hidden bg-white'>
				<div className='container mx-auto max-w-6xl'>
					<div className='text-center mb-12'>
						<h1 className='text-4xl md:text-5xl font-bold text-gray-900 mb-4'>
							Boost your online presence,
						</h1>

						<h1
							className='
						text-4xl md:text-5xl font-bold mb-4
						bg-[linear-gradient(90deg,#1A73E8_20.16%,#00C3A5_81.54%)]
						bg-clip-text text-transparent
					'>
							one link at a time
						</h1>

						<p className='text-base text-gray-500 p-4 max-w-lg mx-auto'>
							Shorten long links for easy sharing and tracking.
						</p>
					</div>

					{/* Optional CTA button could go here */}
					<div className='mt-12 text-center'>
						<a
							href='#get-started'
							className='bg-blue-600 text-white font-medium px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors inline-block'>
							Get Started for Free
						</a>
					</div>

					{/* Dashboard image */}
					<div className='mt-16 max-w-5xl mx-auto shadow-lg rounded-lg overflow-hidden border border-gray-200'>
						<img
							src='/images/Hero/Landing.png'
							alt='Link analytics dashboard'
							className='w-full h-auto'
							// If you need a placeholder instead of actual image path:
							// src="/api/placeholder/1000/600"
						/>
					</div>
				</div>
			</section>
		</AnimateContainer>
	);
};

export default Hero;
