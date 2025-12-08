import type { FC } from 'react';

const AboutPage: FC = () => {
	return (
		<div className="about">
			<section className="hero hero--about">
				<div className="hero--about__media">
					<img
						src="https://cdn.webshopapp.com/shops/290919/files/459688705/about-header-2.jpg"
						alt="FLUX laserska mašina u studiju"
						loading="lazy"
						className="hero--about__image"
					/>
				</div>
				<div className="page-container hero--about__headline">
					<p className="section__eyebrow">O FLUX Serbia</p>
					<h1 className="section__heading">Zvanični FLUX uvoznik i distributer u Srbiji</h1>
					<p className="section__lede">
						Dovodimo FLUX lasere za sečenje, graviranje i dodatnu opremu direktno u Srbiju uz lokalnu podršku,
						obuku i garancije o kojima brinu ljudi koji razumeju vaš posao.
					</p>
				</div>
			</section>

			<section className="section">
				<div className="page-container about__reseller">
					<div className="about__reseller-text">
						<h2 className="section__heading">Vaš pouzdani lokalni partner</h2>
						<p>
							Kao ovlašćeni FLUX predstavnik za Srbiju, uvozimo svaku mašinu i dodatak uz uredno carinjenje,
							sertifikate i isporuku direktno u vašu radionicu.
						</p>
						<p>
							Naš tim obezbeđuje demonstracije, onboarding i praktičnu obuku na srpskom kako bi vaš tim mogao
							da počne proizvodnju od prvog dana. Potrošni materijal i rezervne delove držimo na lageru kako
							bismo sveli zastoje na minimum.
						</p>
						<p>
							Spremni ste da vidite mašinu uživo ili da isplanirate uvoz?{' '}
							<a href="#contact">Razgovarajte sa našim specijalistima</a> i prilagodićemo pravu FLUX
							konfiguraciju za vašu radionicu, školu ili studio.
						</p>
					</div>
					<div className="about__reseller-cards">
						<article className="card">
							<h3>Kompletan uvoz</h3>
							<p>Vodimo carinjenje, dažbine i isporuku za zvanični FLUX hardver koji ulazi u Srbiju.</p>
						</article>
						<article className="card">
							<h3>Lokalne demonstracije i obuka</h3>
							<p>Posetite naš showroom ili zakažite dolazak na lokaciju da vidite FLUX lasere na stvarnim materijalima.</p>
						</article>
						<article className="card">
							<h3>Garancija i servis u blizini</h3>
							<p>Ovlašćeni tehničari, originalni delovi i podrška na srpskom drže vaše mašine u radu.</p>
						</article>
					</div>
				</div>
			</section>
		</div>
	);
};

export default AboutPage;
