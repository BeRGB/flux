export type ProductCategory = {
	name: string;
	slug: string;
	description: string;
	image: string;
	href: string;
	storeHref: string;
	accent?: 'primary' | 'outline';
	tagline?: string;
};

export const productCategories: ProductCategory[] = [
	{
		name: 'Ador',
		slug: 'ador',
		description: '3-in-1 platform for laser engraving, cutting, and full-colour printing.',
		image: '/images/products/ador.jpg',
		href: '/products/ador',
		storeHref: 'https://www.fluxlasers.com/products/ador/',
		accent: 'primary',
		tagline: 'Colour laser flagship',
	},
	{
		name: 'Beamo',
		slug: 'beamo',
		description: 'World’s smallest CO₂ laser cutter and engraver for compact studios.',
		image: '/images/products/beamo.jpg',
		href: '/products/beamo',
		storeHref: 'https://www.fluxlasers.com/products/beamo/',
		accent: 'primary',
		tagline: 'Desktop favourite',
	},
	{
		name: 'Beambox',
		slug: 'beambox',
		description: 'Smart CO₂ laser with an intuitive interface for schools and makerspaces.',
		image: '/images/products/beambox.jpg',
		href: '/products/beambox',
		storeHref: 'https://www.fluxlasers.com/products/beambox/',
		accent: 'primary',
	},
	{
		name: 'Beambox II',
		slug: 'beambox-ii',
		description: 'Next-gen 55 W CO₂ laser with a larger work area and 900 mm/s engraving speed.',
		image: '/images/products/beambox-ii.jpg',
		href: '/products/beambox-ii',
		storeHref: 'https://flux3dp.com/beambox-ii/',
		accent: 'primary',
		tagline: '55 W desktop pro',
	},
	{
		name: 'Beambox Pro',
		slug: 'beambox-pro',
		description: 'All the Beambox features with a larger working area and 50 W laser.',
		image: '/images/products/beambox-pro.jpg',
		href: '/products/beambox-pro',
		storeHref: 'https://www.fluxlasers.com/products/beambox-pro/',
		accent: 'primary',
	},
	{
		name: 'HEXA',
		slug: 'hexa',
		description: 'Industrial-grade performance with 60 W power and rigid construction.',
		image: '/images/products/hexa.jpg',
		href: '/products/hexa',
		storeHref: 'https://www.fluxlasers.com/products/hexa/',
		accent: 'primary',
		tagline: 'Production ready',
	},
	{
		name: 'Promark Safe+',
		slug: 'promark',
		description: 'Class 1 fiber and MOPA laser marking systems for fast, precise metal engraving.',
		image: '/images/products/promark.jpg',
		href: '/products/promark',
		storeHref: 'https://flux3dp.com/promark-safeplus-series/',
		accent: 'primary',
		tagline: 'Industrial marking',
	},
	{
		name: 'Beam Air',
		slug: 'beam-air',
		description: 'Compact air filtration to keep creative spaces clean and safe.',
		image: '/images/products/beam-air.jpg',
		href: '/products/beam-air',
		storeHref: 'https://www.fluxlasers.com/products/beam-air/',
		accent: 'outline',
	},
	{
		name: 'Beam Studio',
		slug: 'beam-studio',
		description: 'Free FLUX laser cutter software that works on desktop, tablet, and mobile.',
		image: '/images/products/beam-studio.jpg',
		href: '/products/beam-studio',
		storeHref: 'https://flux3dp.com/beam-studio/',
		accent: 'outline',
		tagline: 'Cross-platform software',
	},
];

export const flagshipNames = new Set(['Ador', 'Beamo', 'Beambox', 'Beambox II', 'Beambox Pro', 'HEXA', 'Promark Safe+']);
