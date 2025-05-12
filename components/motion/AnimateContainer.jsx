'use client';

import React from 'react';
import { motion } from 'framer-motion';

const AnimateContainer = ({
	children,
	delay = 0,
	className = '',
	// how much of the element must be visible before animating (0 to 1)
	amount = 0.3,
}) => {
	return (
		<motion.div
			className={className}
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, amount }}
			transition={{
				delay: delay / 1000,
				duration: 0.6,
				ease: 'easeOut',
			}}>
			{children}
		</motion.div>
	);
};

export default AnimateContainer;
