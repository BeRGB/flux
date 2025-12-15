import type { FC } from 'react';
import { flagshipNames, productCategories } from '../../data/productCategories';

const heroStats = [
	{ label: 'Creators worldwide', value: '20K+' },
	{ label: 'Local resellers', value: '100+' },
	{ label: 'Machines shipped', value: '45K+' },
];

const experienceHighlights = [
	{
		title: 'Plug-and-play hardware',
		copy: 'Ready out of the box with auto-calibration, integrated cameras, and safety sensors.',
	},
	{
		title: 'Beam Studio software',
		copy: 'Design in minutes with simple drag-and-drop tools, or import vector files from your favourite apps.',
	},
	{
		title: 'Global customer care',
		copy: 'Serbian service hub and a worldwide network for training, maintenance, and creative inspiration.',
	},
];

const materialPalette = [
	'Acrylic',
	'Wood',
	'Fabric',
	'Leather',
	'Glass',
	'Stainless steel',
	'Paperboard',
	'Rubber',
];

const audiences = [
	{
		title: 'Studios & businesses',
		copy: 'Deliver branded products, signage, and packaging with production-ready accuracy.',
	},
	{
		title: 'Makers & hobbyists',
		copy: 'Prototype ideas quickly and customise anything from home décor to cosplay props.',
	},
	{
		title: 'Educators',
		copy: 'Empower students with hands-on STEAM experiences and rapid iteration in the classroom.',
	},
];

const workflow = [
	{
		title: 'Sketch & import',
		copy: 'Start in Beam Studio or pull designs from Illustrator, AutoCAD, SketchUp, and other tools.',
	},
	{
		title: 'Preview with Live Camera',
		copy: 'Place artwork precisely thanks to built-in ultra-wide cameras and smart material detection.',
	},
	{
		title: 'Cut, engrave, or print',
		copy: 'Switch between colour printing, engraving, and cutting modules in seconds—no guesswork.',
	},
];

const heroMaterials = materialPalette.slice(0, 4);

const HomePage: FC = () => {
	const flagshipProducts = productCategories.filter((product) => flagshipNames.has(product.name));

	return (
		<div className="home">
			<section className="hero hero--flux">
				<div className="hero--flux__grid">
					<div className="hero--flux__copy">
						<span className="hero--flux__eyebrow text-rainbow inline">FLUX</span>
						<h1 className="hero--flux__title">Laser cutters, engravers & colour printing</h1>
						<p className="hero--flux__subtitle">
							<span className="hero--flux__accent text-rainbow inline">Bring your designs to life</span>
						</p>
						<p className="hero--flux__lede">
							From colour engraving to production-ready cuts, FLUX machines pair intuitive software with
							reliable hardware so you can focus on the craft.
						</p>
						
						<ul className="hero--flux__materials">
							{heroMaterials.map((material) => (
								<li key={material}>{material}</li>
							))}
						</ul>
						<div className="hero__stats hero--flux__stats">
							{heroStats.map((stat) => (
								<div className="hero__stat" key={stat.label}>
									<span className="hero__stat-value">{stat.value}</span>
									<span className="hero__stat-label">{stat.label}</span>
								</div>
							))}
						</div>
					</div>
					<div className="hero--flux__media">
						<div className="hero--flux__media-frame">
							<video
								className="hero--flux__video"
								src="/flux-hero.mp4"
								autoPlay
								loop
								muted
								playsInline
								poster="https://cdn.webshopapp.com/shops/290919/files/459672244/flux-header.jpg"
							>
								Your browser does not support the video tag.
							</video>
						</div>
					</div>
				</div>
			</section>

			<section className="section">
				<div className="page-container page-grid">
					<div className="feature-intro">
						<p className="section__eyebrow">The FLUX experience</p>
						<h2 className="section__heading">Everything you need to create confidently</h2>
						<p className="section__lede">
							From automatic calibration to a library of ready-to-use templates, FLUX removes friction so you
							can stay in your creative flow.
						</p>
					</div>
					<div className="feature-cards">
						{experienceHighlights.map((feature) => (
							<article className="feature-card card" key={feature.title}>
								<h3>{feature.title}</h3>
								<p>{feature.copy}</p>
							</article>
						))}
					</div>
				</div>
			</section>

			<section className="section section--surface">
				<div className="page-container page-grid">
					<div className="material-intro">
						<p className="section__eyebrow">Make any material your canvas</p>
						<h2 className="section__heading">Cut, engrave, and colour in a single workflow</h2>
						<p className="section__lede">
							Experiment with multi-material projects thanks to swappable modules, fine power control, and a
							library of pre-tested settings.
						</p>
					</div>
					<div className="material-grid">
						{materialPalette.map((material) => (
							<span key={material} className="tag">
								{material}
							</span>
						))}
					</div>
				</div>
			</section>

			<section className="section">
				<div className="page-container page-grid">
					<div className="audience-content">
						<p className="section__eyebrow">Created by fellow makers</p>
						<h2 className="section__heading">Purpose-built for every creative team</h2>
						<p className="section__lede">
							FLUX machines adapt to your workflow—from bespoke product runs to high-volume production or
							immersive education.
						</p>
					</div>
					<div className="audience-grid">
						{audiences.map((segment) => (
							<article key={segment.title} className="audience-card card card--muted">
								<h3>{segment.title}</h3>
								<p>{segment.copy}</p>
							</article>
						))}
					</div>
				</div>
			</section>

			<section className="section section--padded">
				<div className="page-container page-grid">
					<div className="software-highlight card">
						<div>
							<p className="section__eyebrow">Beam Studio</p>
							<h2 className="section__heading">Design software that feels familiar</h2>
							<p className="section__lede">
								Live camera preview, AI auto-alignment, and modular process presets keep every project fast
								and precise.
							</p>
						</div>
						<ul className="workflow-list">
							{workflow.map((step) => (
								<li key={step.title}>
									<h3>{step.title}</h3>
									<p>{step.copy}</p>
								</li>
							))}
						</ul>
					</div>
				</div>
			</section>

			<section className="section">
				<div className="page-container page-grid">
					<div className="products-intro">
						<p className="section__eyebrow">Which machine fits your vision?</p>
						<h2 className="section__heading">Flagship FLUX lasers</h2>
						<p className="section__lede">
							Choose the platform that matches your output—from compact studios to high-throughput production
							lines.
						</p>
					</div>
					<div className="product-grid">
						{flagshipProducts.map((product) => (
							<article
								key={product.name}
								className={`product-card ${
									product.accent === 'primary' ? 'product-card--primary' : 'product-card--outline'
								}`}
							>
								<img src={product.image} alt={product.name} loading="lazy" />
								<div className="product-card__body">
									<span className="product-card__tag">{product.tagline ?? 'Laser system'}</span>
									<h3>{product.name}</h3>
									<p>{product.description}</p>
									<a className="product-card__link" href={product.href}>
										Learn more →
									</a>
								</div>
							</article>
						))}
					</div>
					
				</div>
			</section>
		</div>
	);
};

export default HomePage;
