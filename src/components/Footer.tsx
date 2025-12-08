import type { FC } from 'react';

const quickLinks = [
	{ label: 'Centar za podršku', href: 'https://www.fluxlasers.com/support/support-centre/' },
	{ label: 'Preuzimanja', href: 'https://www.fluxlasers.com/support/downloads/' },
	{ label: 'Politika privatnosti', href: 'https://www.fluxlasers.com/service/privacy-policy/' },
	{ label: 'Uslovi garancije', href: 'https://www.fluxlasers.com/service/warranty-policy/' },
];

const socialLinks = [
	{ label: 'Instagram', href: 'https://www.instagram.com/flux_inc/' },
	{ label: 'YouTube', href: 'https://www.youtube.com/@fluxlaser' },
	{ label: 'TikTok', href: 'https://www.tiktok.com/@flux_inc' },
	{ label: 'Facebook', href: 'https://www.facebook.com/flux3dp/' },
	{ label: 'LinkedIn', href: 'https://www.linkedin.com/company/flux-inc/' },
];

const Footer: FC = () => {
	return (
		<footer className="site-footer-wrapper" id="contact">
			<div className="page-container">
				<div className="site-footer">
					<div className="site-footer__primary">
						<div className="site-footer__brand">
							<p className="site-footer__eyebrow">Stvarajte hrabre ideje</p>
							<h2 className="site-footer__heading gradient-text">FLUX Serbia</h2>
							<p>Rešenja za lasersko sečenje i graviranje osmišljena da prate brzinu vaše mašte.</p>
						</div>
						<div className="site-footer__grid">
							<div>
								<h3 className="site-footer__column-heading">Brzi linkovi</h3>
								<ul className="site-footer__link-list">
									{quickLinks.map((link) => (
										<li key={link.label}>
											<a href={link.href}>{link.label}</a>
										</li>
									))}
								</ul>
							</div>
							<div>
								<h3 className="site-footer__column-heading">Upoznajte distributere</h3>
								<p>
									Gotovo 100 lokalnih partnera nudi demonstracije, obuku i podršku na vašem jeziku.{' '}
									<a href="https://www.fluxlasers.com/service/resellers/">Otkrijte distributere</a>
								</p>
							</div>
							<div>
								<h3 className="site-footer__column-heading">Pišite nam</h3>
								<p>
									<a href="mailto:hello@fluxlasers.com">hello@fluxlasers.com</a>
									<br />
									Taipei · Eindhoven · Austin
								</p>
							</div>
						</div>
					</div>
					<div className="site-footer__secondary">
						<ul className="site-footer__social">
							{socialLinks.map((social) => (
								<li key={social.label}>
									<a href={social.href}>{social.label}</a>
								</li>
							))}
						</ul>
						<p className="site-footer__copyright">© {new Date().getFullYear()} FLUX Serbia. Sva prava zadržana.</p>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
