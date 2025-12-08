export type ProductImage = {
	src: string | null;
	srcset: string | null;
	sizes: string | null;
	alt: string | null;
	width: string | null;
	height: string | null;
	className?: string | null;
};

export type ProductSection = {
	heading: string;
	headingHtml: string;
	subheading: string | null;
	subheadingHtml: string | null;
	bodyHtml: string[];
	image: ProductImage | null;
	media?: ProductPostMaterialMedia | null;
};

export type ProductHero = {
	title: string;
	subtitle: string;
	background: { mobile?: string; desktop?: string };
	ctas: { label: string; href: string | null; variant: 'primary' | 'secondary' }[];
	image: ProductImage | null;
};

export type HighlightIcon = 'camera' | 'laser' | 'workspace' | 'shield' | 'speed' | 'ruler';

export type ProductHighlight = {
	icon: HighlightIcon;
	title: string;
	copy: string;
};

export type ProductStat = {
	icon: HighlightIcon;
	value: string;
	label: string;
};

export type ProductMaterial = {
	name: string;
	image: string;
	details: string[];
};

export type ProductMaterialsBlock = {
	title?: string;
	subtitle?: string;
	items: ProductMaterial[];
};

export type ProductModuleImage = {
	src: string;
	alt: string | null;
	width: string | null;
	height: string | null;
};

export type ProductModule = {
	title: string;
	description: string;
	materials: string;
	accent: 'rainbow' | null;
	image: ProductModuleImage;
};

export type ProductModuleSection = {
	headingHtml: string;
	modules: ProductModule[];
};

export type ProductWorkflowStepMedia = {
	type: 'image' | 'video';
	src: string;
	alt: string | null;
	poster?: string | null;
	width?: string | null;
	height?: string | null;
};

export type ProductWorkflowStep = {
	title: string;
	description: string;
	media: ProductWorkflowStepMedia;
};

export type ProductWorkflow = {
	heading: string;
	description: string;
	steps: ProductWorkflowStep[];
};

export type ProductFeatureImage = {
	src: string;
	alt: string | null;
	width: string | null;
	height: string | null;
};

export type ProductFeature = {
	heading: string;
	subheading: string | null;
	bodyHtml: string[];
	image: ProductFeatureImage;
};

export type ProductMediaSection = {
	heading: string;
	body: string;
	video: {
		src: string;
		poster?: string | null;
		alt: string;
	};
};

export type ProductPostMaterialMedia = {
	type: 'image' | 'video';
	src: string;
	poster?: string | null;
	alt: string;
};

export type ProductPostMaterialSection = {
	heading: string;
	subheading?: string | null;
	bodyHtml: string[];
	media: ProductPostMaterialMedia;
};

export type ProductConnectivityIcon = 'wifi' | 'flash-drive' | 'usb-cable' | 'ethernet' | 'mobile';

export type ProductConnectivity = {
	heading: string;
	subheading: string;
	icons: { name: string; icon: ProductConnectivityIcon }[];
};

export type ProductPerformanceBlock = {
	primaryHeadingHtml: string;
	primaryBodyHtml: string[];
	media: ProductPostMaterialMedia;
	secondaryHeadingHtml: string;
	secondaryBodyHtml: string[];
};

export type ProductMetalCard = {
	name: string;
	details: string[];
	image: { src: string; alt: string | null; width: string | null; height: string | null };
};

export type ProductMetalSection = {
	heading: string;
	cards: ProductMetalCard[];
};

export type ProductIconGridItem = {
	name: string;
	image: string;
};

export type ProductIconGrid = {
	type: string;
	title: string;
	subtitle?: string;
	icons: ProductIconGridItem[];
};

export type ProductGallery = {
	heading?: string;
	images: ProductImage[];
};

export type SlalomSection = ProductSection & { position: 'left' | 'right' | 'center' };

export type PageBlockEntry =
	| { hero: ProductHero }
	| { slalom: SlalomSection }
	| { highlight: ProductHighlight[] }
	| { stats: ProductStat[] }
	| { modules: ProductModuleSection }
	| { workflow: ProductWorkflow }
	| { feature: ProductFeature }
	| { media: ProductMediaSection }
	| { materials: ProductMaterial[] }
	| { materials: ProductMaterialsBlock }
	| { 'post-material': ProductPostMaterialSection[] }
	| { metals: ProductMetalSection }
	| { 'icon-grid': ProductIconGrid }
	| { performance: ProductPerformanceBlock }
	| { connectivity: ProductConnectivity }
	| { gallery: ProductGallery };
