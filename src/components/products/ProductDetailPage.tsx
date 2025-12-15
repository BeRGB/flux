import { type CSSProperties, type FC, Fragment } from 'react';
import type { JSX } from 'react';
import type { ProductCategory } from '../../data/productCategories';
import type {
	PageBlockEntry,
	ProductHero,
	ProductSection,
	SlalomSection,
	ProductHighlight,
	HighlightIcon,
	ProductMaterial,
	ProductModuleSection,
	ProductWorkflow,
	ProductStat,
	ProductFeature,
	ProductMetalSection,
	ProductMediaSection,
	ProductPostMaterialSection,
	ProductPerformanceBlock,
	ProductConnectivity,
	ProductConnectivityIcon,
	ProductIconGrid,
	ProductGallery,
} from '../../data/pageTypes';

type ProductDetailPageProps = {
	product: ProductCategory;
	blocks: PageBlockEntry[];
};

type SectionProps = {
	section: ProductSection;
	index: number;
	orientation?: 'left' | 'right' | 'center';
};

type BlockContext = {
	product: ProductCategory;
	storeHref: string;
};

type BlockRenderer = (data: unknown, context: BlockContext) => JSX.Element | null;

const pickRichText = (primary?: string | null, secondary?: string | null) => {
	const primaryValue = primary?.trim();
	const secondaryValue = secondary?.trim();
	const hasMarkup = (value?: string) => (value ? value.includes('<') : false);

	if (hasMarkup(primaryValue)) {
		return primaryValue as string;
	}

	if (hasMarkup(secondaryValue)) {
		return secondaryValue as string;
	}

	if (primaryValue) {
		return primaryValue;
	}

	if (secondaryValue) {
		return secondaryValue;
	}

	return '';
};

const ProductSectionBlock: FC<SectionProps> = ({ section, index, orientation }) => {
	const hasImage = section.image?.src;
	const media = section.media;
	const headingHtml = pickRichText(section.headingHtml, section.heading);
	const subheadingHtml = pickRichText(section.subheadingHtml, section.subheading);
	const forcedOrientation = orientation === 'right' ? true : orientation === 'left' ? false : null;
	const isCentered = orientation === 'center';
	const isReversed = isCentered ? false : forcedOrientation ?? (hasImage && index % 2 === 1);

	return (
		<section
			className={`product-detail__section ${isReversed ? 'product-detail__section--reversed' : ''} ${
				isCentered ? 'product-detail__section--center' : ''
			}`}
		>
			<div className="product-detail__section-body">
				<h2
					// eslint-disable-next-line react/no-danger
					dangerouslySetInnerHTML={{ __html: headingHtml }}
				/>
				{subheadingHtml ? (
					<h3
						// eslint-disable-next-line react/no-danger
						dangerouslySetInnerHTML={{ __html: subheadingHtml }}
					/>
				) : null}
				{section.bodyHtml.map((html, idx) => (
					<div
						// eslint-disable-next-line react/no-danger
						dangerouslySetInnerHTML={{ __html: html }}
						key={idx}
						className="product-detail__copy"
					/>
				))}
			</div>
			{media ? (
				<div className="product-detail__section-media">
					{media.type === 'video' ? (
						<video
							src={media.src}
							poster={media.poster ?? undefined}
							aria-label={media.alt}
							autoPlay
							loop
							muted
							playsInline
						/>
					) : (
						<img src={media.src} alt={media.alt ?? ''} loading="lazy" />
					)}
				</div>
			) : hasImage ? (
				<div className="product-detail__section-media">
					<img
						src={section.image?.src ?? undefined}
						srcSet={section.image?.srcset ?? undefined}
						sizes={section.image?.sizes ?? undefined}
						alt={section.image?.alt ?? ''}
						loading="lazy"
					/>
				</div>
			) : null}
		</section>
	);
};

const ProductDetailPage: FC<ProductDetailPageProps> = ({ product, blocks }) => {
	if (!blocks?.length) {
		return (
			<div className="product-detail">
				<p className="product-detail__empty">No content available for this product.</p>
			</div>
		);
	}

	return renderBlockPage(blocks, { product, storeHref: product.storeHref });
};

export default ProductDetailPage;

type ProductStatsGridProps = {
	items: ProductStat[];
};

const ProductStatsGrid: FC<ProductStatsGridProps> = ({ items }) => {
	return (
		<section className="product-detail__stats">
			<div className="product-detail__stats-grid">
				{items.map((item) => (
					<div className="product-detail__stat" key={item.value}>
						<div className="product-detail__stat-icon">{renderProductIcon(item.icon)}</div>
						<div className="product-detail__stat-content">
							<span className="product-detail__stat-value">{item.value}</span>
							<span className="product-detail__stat-label">{item.label}</span>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

type ProductMaterialsListProps = {
	items: readonly ProductMaterial[];
	productName: string;
	title?: string;
	subtitle?: string;
};

const ProductMaterialsList: FC<ProductMaterialsListProps> = ({ items, productName, title, subtitle }) => {
	const sectionTitle = title ?? `What ${productName} can cut & engrave`;
	const sectionSubtitle =
		subtitle ??
		'Pulled directly from the FLUX store diode/material list so you can answer “Will it cut this?” with confidence.';
	return (
		<section className="product-detail__materials">
			<div className="product-detail__materials-header">
				<p className="section__eyebrow">Material compatibility</p>
				<h2 className="section__heading">{sectionTitle}</h2>
				<p className="product-detail__materials-subhead">{sectionSubtitle}</p>
			</div>
			<div className="product-detail__materials-track">
				{items.map((item) => (
					<article className="product-detail__material" key={item.name}>
						<div className="product-detail__material-image">
							<img src={item.image} alt={item.name} loading="lazy" />
						</div>
						<h3>{item.name}</h3>
						<ul className="product-detail__material-details">
							{item.details.map((detail, idx) => (
								<li key={`${item.name}-${idx}`}>{detail}</li>
							))}
						</ul>
					</article>
				))}
			</div>
		</section>
	);
};

type ProductModulesProps = {
	section: ProductModuleSection;
};

const ProductModulesBlock: FC<ProductModulesProps> = ({ section }) => {
	return (
		<section className="product-modules">
			<div className="product-modules__panel">
				<div className="product-modules__intro">
					<h2
						// eslint-disable-next-line react/no-danger
						dangerouslySetInnerHTML={{ __html: section.headingHtml }}
					/>
				</div>
				<div className="product-modules__grid">
					{section.modules.map((module) => (
						<article className="product-modules__card" key={module.title}>
							<div className="product-modules__image">
								<img src={module.image.src} alt={module.image.alt ?? module.title} loading="lazy" />
							</div>
							<h3 className={`product-modules__card-title ${module.accent === 'rainbow' ? 'text-rainbow inline' : ''}`}>
								{module.title}
							</h3>
							<p className="product-modules__card-copy">{module.description}</p>
							<p className="product-modules__card-materials">{module.materials}</p>
						</article>
					))}
				</div>
			</div>
		</section>
	);
};

type ProductFeatureBlockProps = {
	section: ProductFeature;
};

const ProductFeatureBlock: FC<ProductFeatureBlockProps> = ({ section }) => {
	return (
		<section className="product-feature">
			<div className="product-feature__text">
				{section.subheading ? <p className="product-feature__eyebrow text-rainbow inline">{section.subheading}</p> : null}
				<h2>{section.heading}</h2>
				{section.bodyHtml.map((html, idx) => (
					<div
						// eslint-disable-next-line react/no-danger
						dangerouslySetInnerHTML={{ __html: html }}
						className="product-feature__copy"
						key={idx}
					/>
				))}
			</div>
			<div className="product-feature__media">
				<img src={section.image.src} alt={section.image.alt ?? section.heading} loading="lazy" />
			</div>
		</section>
	);
};

type ProductWorkflowSectionProps = {
	section: ProductWorkflow;
};

const ProductWorkflowSection: FC<ProductWorkflowSectionProps> = ({ section }) => {
	return (
		<section className="product-workflow">
			<div className="product-workflow__intro">
				<h2>{section.heading}</h2>
				<p>{section.description}</p>
			</div>
			<div className="product-workflow__grid">
				{section.steps.map((step) => (
					<article className="product-workflow__step" key={step.title}>
						<div className="product-workflow__image-frame">
							{step.media.type === 'video' ? (
								<video
									src={step.media.src}
									poster={step.media.poster ?? undefined}
									aria-label={step.media.alt ?? step.title}
									autoPlay
									loop
									muted
									playsInline
								/>
							) : (
								<img src={step.media.src} alt={step.media.alt ?? step.title} loading="lazy" />
							)}
						</div>
						<h3>{step.title}</h3>
						<p>{step.description}</p>
					</article>
				))}
			</div>
		</section>
	);
};

type ProductMediaBlockProps = {
	section: ProductMediaSection;
};

const ProductMediaBlock: FC<ProductMediaBlockProps> = ({ section }) => {
	return (
		<section className="product-detail__section">
			<div className="product-detail__section-body">
				<h2>{section.heading}</h2>
				<div className="product-detail__copy">
					<p>{section.body}</p>
				</div>
			</div>
			<div className="product-detail__section-media">
				<video
					src={section.video.src}
					poster={section.video.poster ?? undefined}
					aria-label={section.video.alt}
					autoPlay
					loop
					muted
					playsInline
				/>
			</div>
		</section>
	);
};

type ProductPerformanceBlockProps = {
	block: ProductPerformanceBlock;
};

const ProductPerformanceSection: FC<ProductPerformanceBlockProps> = ({ block }) => {
	return (
		<section className="product-performance">
			<div className="product-performance__intro">
				<h2
					// eslint-disable-next-line react/no-danger
					dangerouslySetInnerHTML={{ __html: block.primaryHeadingHtml }}
				/>
				{block.primaryBodyHtml.map((html, idx) => (
					<div
						// eslint-disable-next-line react/no-danger
						dangerouslySetInnerHTML={{ __html: html }}
						className="product-performance__copy"
						key={idx}
					/>
				))}
			</div>
			<div className="product-performance__grid">
				<div className="product-performance__media">
					<div className="product-performance__media-frame">
						{block.media.type === 'video' ? (
							<video
								src={block.media.src}
								poster={block.media.poster ?? undefined}
								aria-label={block.media.alt}
								autoPlay
								loop
								muted
								playsInline
							/>
						) : (
							<img src={block.media.src} alt={block.media.alt ?? ''} loading="lazy" />
						)}
					</div>
				</div>
				<div className="product-performance__content">
					<h3
						// eslint-disable-next-line react/no-danger
						dangerouslySetInnerHTML={{ __html: block.secondaryHeadingHtml }}
					/>
					{block.secondaryBodyHtml.map((html, idx) => (
						<div
							// eslint-disable-next-line react/no-danger
							dangerouslySetInnerHTML={{ __html: html }}
							className="product-performance__copy"
							key={idx}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

type ProductPostMaterialSectionProps = {
	section: ProductPostMaterialSection;
	index: number;
};

const ProductPostMaterialSectionBlock: FC<ProductPostMaterialSectionProps> = ({ section, index }) => {
	const isReversed = index % 2 === 1;
	return (
		<section className={`product-detail__section ${isReversed ? 'product-detail__section--reversed' : ''}`}>
			<div className="product-detail__section-body">
				<h2>{section.heading}</h2>
				{section.subheading ? <h3>{section.subheading}</h3> : null}
				{section.bodyHtml.map((html, idx) => (
					<div
						// eslint-disable-next-line react/no-danger
						dangerouslySetInnerHTML={{ __html: html }}
						className="product-detail__copy"
						key={idx}
					/>
				))}
			</div>
			<div className="product-detail__section-media">
				{section.media.type === 'video' ? (
					<video
						src={section.media.src}
						poster={section.media.poster ?? undefined}
						aria-label={section.media.alt}
						autoPlay
						loop
						muted
						playsInline
					/>
				) : (
					<img src={section.media.src} alt={section.media.alt} loading="lazy" />
				)}
			</div>
		</section>
	);
};

type ProductMetalsTrackProps = {
	section: ProductMetalSection;
};

const ProductMetalsTrack: FC<ProductMetalsTrackProps> = ({ section }) => {
	return (
		<section className="product-metals">
			<div className="product-metals__header">
				<p className="section__eyebrow text-rainbow inline">Metal engraving</p>
				<h2>{section.heading}</h2>
				<p className="product-detail__materials-subhead">
					Pair the 2 W infrared laser module with these metals and engineered materials for crisp engravings.
				</p>
			</div>
			<div className="product-metals__track">
				{section.cards.map((card) => (
					<article className="product-metals__card" key={card.name}>
						<div className="product-metals__image">
							<img src={card.image.src} alt={card.image.alt ?? card.name} loading="lazy" />
						</div>
						<h3>{card.name}</h3>
						{card.details.length ? (
							<ul>
								{card.details.map((detail, idx) => (
									<li key={`${card.name}-${idx}`}>{detail}</li>
								))}
							</ul>
						) : null}
					</article>
				))}
			</div>
		</section>
	);
};

const ProductCompatibilityGrid: FC<{ block: ProductIconGrid }> = ({ block }) => {
	const subtitleHtml = block.subtitle ? block.subtitle : '';
	return (
		<section className="compatibility">
			<div className="compatibility__container">
				<h2 className="compatibility__title">{block.title}</h2>
				{subtitleHtml ? (
					<p
						className="compatibility__subtitle"
						// eslint-disable-next-line react/no-danger
						dangerouslySetInnerHTML={{ __html: subtitleHtml }}
					/>
				) : null}
				<div className="compatibility__grid">
					{block.icons.map((icon) => (
						<div className="compatibility__item" key={icon.name}>
							<img className="compatibility__icon" src={icon.image} alt={icon.name} loading="lazy" />
							<h3 className="compatibility__name">{icon.name}</h3>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

const renderConnectivityIcon = (icon: ProductConnectivityIcon) => {
	switch (icon) {
		case 'wifi':
			return (
				<svg viewBox="0 0 64 64" aria-hidden="true">
					<g fill="currentColor">
						<path d="M30.73 41.053a6.666 6.666 0 1 0 0 13.333 6.666 6.666 0 0 0 0-13.333Zm0 1.334a5.333 5.333 0 1 1 0 10.667 5.333 5.333 0 0 1 0-10.667Zm-29.13-22.239a2.101 2.101 0 0 0 .032 2.972l.004.005 5.064 4.915a2.074 2.074 0 0 0 2.893-.007 30.932 30.932 0 0 1 42.757.022l.187.157a2.093 2.093 0 0 0 2.675-.16l5.466-5.26a2.075 2.075 0 0 0 .11-2.784l-.146-.157a42.305 42.305 0 0 0-58.498-.22l-.544.517Zm58.117.663a.74.74 0 0 1 .095.944l-.1.117-5.424 5.219a.734.734 0 0 1-.915.082l-.1-.08a32.268 32.268 0 0 0-44.613-.013.74.74 0 0 1-1.03.003l-5.065-4.915a.766.766 0 0 1-.104-.976l.096-.116a40.988 40.988 0 0 1 57.16-.265Z" />
						<path d="M13.172 32.795a2.006 2.006 0 0 0-.011 2.837l.004.004 4.499 4.499a1.84 1.84 0 0 0 2.585.019 15.634 15.634 0 0 1 21.263-.15l.2.159a2.155 2.155 0 0 0 2.741-.224l4.39-4.39a1.907 1.907 0 0 0 .1-2.551l-.142-.155a25.848 25.848 0 0 0-35.224-.427Zm34.708 1.013a.573.573 0 0 1 .081.718l-.076.096-4.376 4.374a.795.795 0 0 1-.987.11l-.11-.086a16.972 16.972 0 0 0-23.094.176.507.507 0 0 1-.712-.004l-4.498-4.498a.67.67 0 0 1-.078-.856l.091-.107a24.513 24.513 0 0 1 33.759.077Z" />
					</g>
				</svg>
			);
		case 'flash-drive':
			return (
				<svg viewBox="0 0 64 64" aria-hidden="true">
					<path
						fill="currentColor"
						d="M42.197 22.147V8.444a2.667 2.667 0 0 0-2.666-2.667H24.864a2.667 2.667 0 0 0-2.667 2.667v13.703a2.655 2.655 0 0 0-1.333 2.297v32a2.667 2.667 0 0 0 2.667 2.667h17.333a2.667 2.667 0 0 0 2.667-2.667v-32a2.654 2.654 0 0 0-1.334-2.297Zm-18.666-13.7a1.334 1.334 0 0 1 1.333-1.333h14.667a1.333 1.333 0 0 1 1.333 1.333v13.333H23.531V8.444Zm18.666 48a1.333 1.333 0 0 1-1.333 1.333H23.531a1.333 1.333 0 0 1-1.334-1.333v-32a1.333 1.333 0 0 1 1.334-1.333h17.333a1.333 1.333 0 0 1 1.333 1.333v32Z"
					/>
				</svg>
			);
		case 'usb-cable':
			return (
				<svg viewBox="0 0 64 64" aria-hidden="true">
					<path
						fill="currentColor"
						d="M48.521 4.444H15.188a6.667 6.667 0 0 0-6.667 6.667v41.778a6.667 6.667 0 0 0 6.667 6.667H48.52a6.667 6.667 0 0 0 6.667-6.667V11.111a6.667 6.667 0 0 0-6.667-6.667Zm-34 2.666H48.52a4 4 0 0 1 4 4v33.333H10.521V11.11a4 4 0 0 1 4-4Zm34 46.224H15.188a4.001 4.001 0 0 1-3.929-3.223h41.191a4.001 4.001 0 0 1-3.93 3.223Z"
					/>
				</svg>
			);
		case 'ethernet':
			return (
				<svg viewBox="0 0 64 64" aria-hidden="true">
					<path
						fill="currentColor"
						d="M22.937 3.556h18.667a4 4 0 0 1 4 4V56.11a4 4 0 0 1-4 4H22.937a4 4 0 0 1-4-4V7.556a4 4 0 0 1 4-4Zm0 2.667a1.333 1.333 0 0 0-1.333 1.333V52.11h21.333V7.556a1.333 1.333 0 0 0-1.333-1.333H22.937Zm9.333 52.554a2.222 2.222 0 1 0 0 4.444 2.222 2.222 0 0 0 0-4.444Z"
					/>
				</svg>
			);
		case 'mobile':
			return (
				<svg viewBox="0 0 64 64" aria-hidden="true">
					<path
						fill="currentColor"
						d="M22 7a5 5 0 0 1 5-5h16a5 5 0 0 1 5 5v50a5 5 0 0 1-5 5H27a5 5 0 0 1-5-5V7Zm5-2.5a2.5 2.5 0 0 0-2.5 2.5v50A2.5 2.5 0 0 0 27 59.5h16a2.5 2.5 0 0 0 2.5-2.5V7a2.5 2.5 0 0 0-2.5-2.5H27Z"
					/>
					<rect x="7" y="20" width="20" height="36" rx="4" ry="4" stroke="currentColor" strokeWidth="3" fill="none" />
				</svg>
			);
		default:
			return null;
	}
};

const ProductConnectivitySection: FC<{ block: ProductConnectivity }> = ({ block }) => {
	return (
		<section className="product-connectivity">
			<div className="product-connectivity__intro">
				<h2>{block.heading}</h2>
				<p>{block.subheading}</p>
			</div>
			<div className="product-wifi-icons product-wifi-icons--light">
				{block.icons.map((item) => (
					<div key={item.name}>
						{renderConnectivityIcon(item.icon)}
						<span>{item.name}</span>
					</div>
				))}
			</div>
		</section>
	);
};

const ProductGalleryGrid: FC<{ block: ProductGallery }> = ({ block }) => {
	return (
		<section className="product-collage">
			{block.heading ? <h2 className="product-collage__title">{block.heading}</h2> : null}
			<div className="product-collage__grid">
				{(block.images ?? []).map((image, idx) => (
					<div
						className={`product-collage__item ${image.className ? image.className : ''}`.trim()}
						key={image.src ?? idx}
					>
						<img
							src={image.src ?? undefined}
							srcSet={image.srcset ?? undefined}
							sizes={image.sizes ?? undefined}
							alt={image.alt ?? ''}
							loading="lazy"
						/>
					</div>
				))}
			</div>
		</section>
	);
};

const renderBlockPage = (blocks: PageBlockEntry[], context: BlockContext) => {
	return (
		<div className="product-detail">
			{blocks.map((block, index) => {
				const entries = Object.entries(block);
				const [blockName, blockData] = entries[0] ?? [];
				if (!blockName || blockData === undefined) {
					return null;
				}
				const renderer = blockRenderers[blockName];
				if (!renderer) {
					return null;
				}
				return (
					<Fragment key={`${blockName}-${index}`}>
						{renderer(blockData as unknown, context)}
					</Fragment>
				);
			})}
		</div>
	);
};

const blockRenderers: Record<string, BlockRenderer> = {
	hero: (data, context) => (
		<ProductHeroBlock hero={data as ProductHero} productName={context.product.name} storeHref={context.storeHref} />
	),
	highlight: (data) => <ProductHighlightsSection items={(data as ProductHighlight[]) ?? []} />,
	slalom: (data) => <SlalomBlock section={data as SlalomSection} />,
	stats: (data) => <ProductStatsGrid items={(data as ProductStat[]) ?? []} />,
	modules: (data) => <ProductModulesBlock section={data as ProductModuleSection} />,
	workflow: (data) => <ProductWorkflowSection section={data as ProductWorkflow} />,
	feature: (data) => <ProductFeatureBlock section={data as ProductFeature} />,
	media: (data) => <ProductMediaBlock section={data as ProductMediaSection} />,
	materials: (data, context) => {
		if (Array.isArray(data)) {
			return <ProductMaterialsList items={(data as ProductMaterial[]) ?? []} productName={context.product.name} />;
		}
		const block = data as { items?: ProductMaterial[]; title?: string; subtitle?: string };
		return (
			<ProductMaterialsList
				items={block.items ?? []}
				productName={context.product.name}
				title={block.title}
				subtitle={block.subtitle}
			/>
		);
	},
	'post-material': (data) => renderPostMaterialSections((data as ProductPostMaterialSection[]) ?? []),
	metals: (data) => <ProductMetalsTrack section={data as ProductMetalSection} />,
	'icon-grid': (data) => <ProductCompatibilityGrid block={data as ProductIconGrid} />,
	performance: (data) => <ProductPerformanceSection block={data as ProductPerformanceBlock} />,
	connectivity: (data) => <ProductConnectivitySection block={data as ProductConnectivity} />,
	gallery: (data) => <ProductGalleryGrid block={data as ProductGallery} />,
};

const SlalomBlock: FC<{ section: SlalomSection }> = ({ section }) => {
	return (
		<div className="product-detail__sections">
			<ProductSectionBlock section={section} index={0} orientation={section.position} />
		</div>
	);
};

function renderPostMaterialSections(sections: ProductPostMaterialSection[]) {
	if (!sections.length) return null;
	return (
		<div className="product-detail__sections">
			{sections.map((section, index) => (
				<ProductPostMaterialSectionBlock section={section} index={index} key={`${section.heading}-${index}`} />
			))}
		</div>
	);
}

type ProductHeroBlockProps = {
	hero: ProductHero;
	productName: string;
	storeHref: string;
};

const ProductHeroBlock: FC<ProductHeroBlockProps> = ({ hero, productName, storeHref }) => {
	const heroBgStyle: CSSProperties & {
		'--hero-bg-mobile'?: string;
		'--hero-bg-desktop'?: string;
	} = {
		...(hero.background.mobile ? { '--hero-bg-mobile': `url(${hero.background.mobile})` } : {}),
		...(hero.background.desktop ? { '--hero-bg-desktop': `url(${hero.background.desktop})` } : {}),
	};

	const heroClassName = `product-detail__hero ${hero.darkMode ? 'product-detail__hero--light' : ''}`;
	const heroCtas =
		hero.ctas?.length && hero.ctas.length > 0
			? hero.ctas
			: [{ label: 'Get order', href: 'mailto:office@laserskisistemi.rs', variant: 'primary' as const }];

	return (
		<section className={heroClassName} style={heroBgStyle}>
			<div className="product-detail__hero-content">
				<div className="product-detail__hero-text">
				
					<h1>{hero.title}</h1>
					<p>{hero.subtitle}</p>
					<div className="product-detail__cta-group">
						{heroCtas.map((cta) => (
							<a
								key={`${cta.label}-${cta.href ?? 'cta'}`}
								className={`btn btn--${cta.variant === 'secondary' ? 'secondary' : 'primary'}`}
								href={cta.href ?? '#'}
								target={cta.target ?? undefined}
								rel={cta.target === '_blank' ? 'noreferrer noopener' : undefined}
							>
								{cta.label}
							</a>
						))}
					</div>
				</div>
				{hero.image?.src ? (
					<div className="product-detail__hero-media">
						<img
							src={hero.image.src ?? undefined}
							srcSet={hero.image.srcset ?? undefined}
							sizes={hero.image.sizes ?? undefined}
							alt={hero.image.alt ?? ''}
							loading="lazy"
						/>
					</div>
				) : null}
			</div>
		</section>
	);
};

type ProductHighlightsSectionProps = {
	items: ProductHighlight[];
};

const ProductHighlightsSection: FC<ProductHighlightsSectionProps> = ({ items }) => {
	if (!items.length) return null;
	return (
		<section className="product-detail__features">
			<div className="product-detail__features-grid">
				{items.map((item) => (
					<article className="product-detail__feature" key={item.title}>
						<div className="product-detail__feature-icon">{renderProductIcon(item.icon)}</div>
						<h2>{item.title}</h2>
						<p>{item.copy}</p>
					</article>
				))}
			</div>
		</section>
	);
};

const renderProductIcon = (icon: HighlightIcon) => {
	switch (icon) {
		case 'camera':
			return (
				<svg viewBox="0 0 64 64" aria-hidden="true">
					<circle cx="32" cy="32" r="18" fill="none" stroke="currentColor" strokeWidth="3" />
					<path d="M32 11v8M32 45v8M11 32h8M45 32h8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
					<circle cx="32" cy="32" r="6" fill="none" stroke="currentColor" strokeWidth="3" />
				</svg>
			);
		case 'laser':
			return (
				<svg viewBox="0 0 64 64" aria-hidden="true">
					<circle cx="32" cy="24" r="8" fill="none" stroke="currentColor" strokeWidth="3" />
					<path
						d="M32 32v20M18 44l10-6M46 44l-10-6M18 24h-8M54 24h-8M23 13l5 7M41 13l-5 7"
						stroke="currentColor"
						strokeWidth="3"
						strokeLinecap="round"
					/>
				</svg>
			);
		case 'shield':
			return (
				<svg viewBox="0 0 64 64" aria-hidden="true">
					<path
						d="M32 57c-12.6-5-20-16-20-28.5V15l20-8 20 8v13.5C52 41 44.6 52 32 57Z"
						fill="none"
						stroke="currentColor"
						strokeWidth="3"
						strokeLinejoin="round"
					/>
					<path
						d="M43 26 30 40l-9-9"
						fill="none"
						stroke="currentColor"
						strokeWidth="3"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			);
		case 'workspace':
			return (
				<svg viewBox="0 0 64 64" aria-hidden="true">
					<rect x="12" y="16" width="40" height="32" rx="4" ry="4" fill="none" stroke="currentColor" strokeWidth="3" />
					<path
						d="M24 32h16M32 24l8 8-8 8M32 24l-8 8 8 8"
						fill="none"
						stroke="currentColor"
						strokeWidth="3"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			);
		case 'ruler':
			return (
				<svg viewBox="0 0 48 64" aria-hidden="true">
					<rect x="18" y="6" width="12" height="52" rx="4" ry="4" fill="none" stroke="currentColor" strokeWidth="3" />
					<path
						d="M18 18h6M18 26h3M18 34h6M18 42h3M18 50h6"
						stroke="currentColor"
						strokeWidth="3"
						strokeLinecap="round"
					/>
				</svg>
			);
		case 'speed':
			return (
				<svg viewBox="0 0 64 64" aria-hidden="true">
					<path
						d="M12 44a20 20 0 1 1 40 0h-8"
						fill="none"
						stroke="currentColor"
						strokeWidth="3"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						d="M32 24v12l8 4"
						fill="none"
						stroke="currentColor"
						strokeWidth="3"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<circle cx="32" cy="44" r="3" fill="currentColor" />
				</svg>
			);
		default:
			return null;
	}
};
