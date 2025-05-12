import Hero from '@/components/base/Hero';
import Feature from '@/components/base/Feature';
import PricingCards from '@/components/base/PricingCards';
import FAQ from '@/components/base/FAQ';
import CTA from '@/components/base/CTA';
import Footer from '@/components/base/Footer';
import AnimateContainer from '@/components/motion/AnimateContainer';

const features = [
	{
		tagTitle: 'Powerful URL Shortener',
		tagColor: 'green',
		title: 'Shorter Links',
		titleHighlight: 'Bigger Reach',
		description: 'Turn long URLs into clean, clickable links...',
		features: [
			'Shorten links in just a few clicks',
			'Instantly share shortened URLs',
			"Links are always available and won't expire",
		],
		image: '/images/Feature/UrlShortener.png',
	},
	{
		tagTitle: 'QR Code Generator',
		tagColor: 'fuchsia',
		title: 'Your link,',
		titleHighlight: 'Just a scan away',
		description:
			'Create customizable, scannable codes for your shortened URLs, track scans, and share.',
		features: [
			'Easily generate a QR code for any URL with just a click.',
			'Customize the look of your QR code.',
			'Get insights on how well your QR code is performing.',
		],
		image: '/images/Feature/QrCode.png',
	},
	{
		tagTitle: 'Link Analytics',
		tagColor: 'yellow',
		title: 'Link Insights ',
		titleHighlight: 'at a Glance',
		description:
			"See how many people are clicking on your links and where they're coming from with detailed analytics.",
		features: [
			'Get real-time insights on the performance of your URLs.',
			'Identify where traffic to your links is coming from',
			'Monitor how link engagement changes over time.',
		],
		image: '/images/Feature/Analytics.png',
	},
	{
		tagTitle: 'Custom Domain',
		tagColor: 'blue',
		title: 'Personalize and ',
		titleHighlight: 'Make it yours.',
		description:
			'Personalize links to match your brand’s identity and build trust with your audience.',
		features: [
			'Use your own domain for shortened links.',
			'Track performance of custom domain links.',
			'Easy DNS configuration and management.',
		],
		image: '/images/Feature/CustomDomain.png',
	},
];

const HomePage = () => {
	return (
		<div>
			<Hero />
			<div className='mt-32'>
				<div className=' text-center'>
					<h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-4'>
						Features for a much{' '}
						{/* background: linear-gradient(90deg, #1A73E8 20.16%, #00C3A5 81.54%); */}
						<span className='bg-[linear-gradient(90deg,#1A73E8_20.16%,#00C3A5_81.54%)] bg-clip-text text-transparent'>
							smoother workflow
						</span>
					</h2>
					<p className='text-base text-gray-500 p-4'>
						Analyze your link performance with a dashboard that carries your key
						metrics
					</p>
				</div>
				<div className='mt-8'>
					{features.map((feature, index) => (
						<Feature className='mb-16' key={index} {...feature} />
					))}
				</div>
			</div>
			<div className='mt-32'>
				<h2 className='text-4xl text-center md:text-5xl font-bold text-gray-900 mb-4'>
					Why should you choose us?
				</h2>
				<div
					className='
    mt-16
    flex flex-col md:flex-row items-start
    px-6 mx-32

    /* spacing */
    space-y-12 md:space-y-0 md:space-x-8

    /* dividers: horizontal on mobile, vertical on md+ */
    divide-y-2 md:divide-y-0 md:divide-x-2
    divide-gray-100
  '>
					{[
						{
							title: 'Easy to use',
							description:
								'Shortening URLs is easy with L2S—turn long links into short, shareable ones in a few clicks, no tech skills needed.',
							image: '/images/Dashboard.png',
							alt: 'Dashboard',
						},
						{
							title: 'Reliable & Secure',
							description:
								'Your security matters to us. Our platform keeps your links safe, protected, and always accessible—reliable and trustworthy.',
							image: '/images/Secure.png',
							alt: 'Secure',
						},
						{
							title: 'On demand customer support',
							description:
								'L2S provides on-demand support anytime you need it. Our friendly team is here to help with troubleshooting or guidance, every step of the way.',
							image: '/images/Support.png',
							alt: 'Support',
						},
					].map((feature, index) => (
						<AnimateContainer>
							<div key={index} className='py-8 md:py-0 md:px-8'>
								<h3 className='text-2xl font-bold text-gray-900 mb-2'>
									{feature.title}
								</h3>
								<p className='text-gray-600 break-words'>
									{feature.description}
								</p>
								<div className='mt-8 flex justify-center'>
									<img
										src={feature.image}
										alt={feature.alt}
										loading='lazy'
										width={300}
										height={300}
									/>
								</div>
							</div>
						</AnimateContainer>
					))}
				</div>
			</div>
			<div className='mt-32'>
				<h2 className='text-4xl text-center md:text-5xl font-bold text-gray-900 mb-4'>
					Plans that grow as you do
				</h2>
				<p className='text-base text-center text-gray-500 p-2'>
					We've curated a perfect set of plans that cater to your unique needs
				</p>
				<PricingCards />
			</div>
			<div className='mt-32'>
				<FAQ />
			</div>
			<div className='mt-32'>
				<CTA />
			</div>
			<div className='mt-32'>
				<Footer />
			</div>
		</div>
	);
};

export default HomePage;
