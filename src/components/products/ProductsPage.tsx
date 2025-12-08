import type { FC } from 'react';
import { productCategories } from '../../data/productCategories';

const ProductsPage: FC = () => {
	return (
		<div className="products">
			<section className="section section--padded">
				<div className="page-container products__intro">
					<div className="products__text">
						<p className="section__eyebrow text-rainbow inline">Product range</p>
						<h1 className="section__heading">Discover the right FLUX machine for every workflow</h1>
						<p className="section__lede">
							Whether you are cutting signage, engraving bespoke gifts, or printing full-colour creations, the
							FLUX ecosystem gives you modular tools that scale with your business.
						</p>
						<div className="products__cta">
							<a className="btn btn--primary" href="https://www.fluxlasers.com/service/resellers/">
								Request a tailored demo
							</a>
							<a className="btn btn--secondary" href="https://www.fluxlasers.com/support/support-centre/">
								Visit support centre
							</a>
						</div>
					</div>
					<div className="products__visual">
						<img
							className="products__visual-img"
							src="https://cdn.webshopapp.com/shops/290919/files/459734414/original/image.jpg"
							alt="FLUX product line-up"
							loading="lazy"
						/>
					</div>
				</div>
			</section>

			<section className="section">
				<div className="page-container">
					<div className="product-grid product-grid--catalog">
						{productCategories.map((product) => (
							<article
								key={product.name}
								className={`product-card ${
									product.accent === 'primary' ? 'product-card--primary' : 'product-card--outline'
								}`}
							>
								<img src={product.image} alt={product.name} loading="lazy" />
								<div className="product-card__body">
									<span className="product-card__tag">{product.tagline ?? 'Laser system'}</span>
									<h2>{product.name}</h2>
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

			<section className="section section--surface">
				<div className="page-container products__support">
					<div>
						<p className="section__eyebrow text-rainbow inline">Need guidance?</p>
						<h2 className="section__heading">Talk through power, materials, and production goals</h2>
					</div>
					<div className="products__support-actions">
						<a className="btn btn--primary" href="#contact">
							Schedule a consultation
						</a>
						<a className="btn btn--secondary" href="https://www.fluxlasers.com/support/support-centre/#machines">
							Browse machine guides
						</a>
					</div>
				</div>
			</section>
		</div>
	);
};

export default ProductsPage;
