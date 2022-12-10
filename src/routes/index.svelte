<script>
	import DarkButton from './darkButton.svelte';
</script>

<body class="light" id="top">
	<header class="header center">
		<nav class="nav center">
			<ul class="nav__list center">
				<li class="nav__list-item p-2">
					<a class="link link--nav" href="#projects">Projects</a>
				</li>
				<li class="nav__list-item">
					<a class="link link--nav" href="#skills">Skills</a>
				</li>
				<li class="nav__list-item">
					<a class="link link--nav" href="#contact">Contact</a>
				</li>
			</ul>
			<!-- place DarkButton -->
			<DarkButton />

			<button type="button" aria-label="toggle theme" class="btn btn--icon">
				<i aria-hidden="true" id="btn-theme" class="fas fa-moon" />
			</button>

			<button type="button" aria-label="toggle navigation" class="btn btn--icon nav__hamburger">
				<i aria-hidden="true" class="fas fa-bars" />
			</button>
		</nav>
	</header>

	<main>
		<!-- About -->
		<div class="about center">
			<h1>Hi, I am <span class="about__name">Jacob Jordan.</span></h1>
			<h2 class="about__role">A Front end Developer.</h2>
			<p class="about__desc">
				I am currently based in Delaware and love messing around with new and different web tech.
				I'm currently working with Sveltekit on most of my project using Tailwinds CSS for styling.
				I also love to rock climb and hike when I get the chance. If you're looking for some help
				website or project, or if you have any good spots to climb up here, feel free to reach out.
			</p>

			<div class="about__contact center">
				<a
					href="https://drive.google.com/file/d/120pRQ-_zrZz-vaLJzCPONmKetFE4b9ap/view?usp=sharing"
					aria-label="resume"
					target="_blank"
					rel="noopener noreferrer"
				>
					<span class="btn btn--outline">Resume</span>
				</a>

				<a
					href="https://github.com/Naturealizor"
					aria-label="github"
					target="_blank"
					rel="noopener noreferrer"
				>
					<i aria-hidden="true" class="fab fa-github" />
					<span class="btn btn--outline">github</span>
				</a>

				<a
					href="https://www.linkedin.com/in/jacob-jordan-6a440b156/"
					aria-label="linkedin"
					target="_blank"
					rel="noopener noreferrer"
				>
					<i aria-hidden="true" class="fab fa-linkedin" />
					<span class="btn btn--outline">linkedin</span>
				</a>
			</div>
		</div>

		<!-- Projects -->
		<section id="projects" class="section projects">
			<h2 class="section__title">Projects</h2>

			<div class="projects__grid">
				<div class="project">
					<h3>Mr. Mixer</h3>
					<p class="project__description">
						This is a business me and a friend of mine started in 2017 repairing KitchenAid mixers
						for businesses in our local area. As we started to grow the business we decided to
						create the one stop shop for all things KitchenAid, so we started selling parts and
						other products to customers using a site built with Squarespace. I left the business in
						2020, but Mr. Mixer is continuing to grow, and I still freelance for them when they need
						some work done.
					</p>
					<p>
						<br />
						<a
							style="color:var(--clr-link);"
							href="https://www.mrmixer.store/"
							class="link link--icon"
							target="_blank"
							rel="noopener noreferrer">Mr. Mixer</a
						>
					</p>
					<ul class="project__stack">
						<li class="project__stack-item">Squarespace</li>
						<li class="project__stack-item">Custom CSS</li>
						<li class="project__stack-item">Stripe</li>
						<li class="project__stack-item">Ecommerce</li>
					</ul>

					<a href="https://github.com" aria-label="source code" class="link link--icon">
						<i aria-hidden="true" class="fab fa-github" />
					</a>
					<a href="https://example.com" aria-label="live preview" class="link link--icon">
						<i aria-hidden="true" class="fas fa-external-link-alt" />
					</a>
				</div>

				<div class="project">
					<h3>Greenley's Painting</h3>
					<p class="project__description">
						This project was one of my first after relocating to Delaware. Greenley's Painting, a
						local business, needed their Squarespace site updated. Using Squarespaces editing tool
						and some custom CSS I was able to redesign the sites layout, restructure the content in
						a more streamlined way, and improve the sites overall SEO. By doing this I was able to
						help the business grow and get more customers through Google searches.
					</p>
					<br />
					<!-- link to greenley's painting website -->
					<a
						style="color:var(--clr-link);"
						href="https://www.greenleyspainting.com/"
						aria-label="greenleys painting website"
						class="link link--icon"
						target="_blank"
						rel="noopener noreferrer"
						>Greenley's Painting
						<i aria-hidden="true" class="fas fa-external-link-alt" />
					</a>
					<ul class="project__stack">
						<li class="project__stack-item">Squarespace</li>
						<li class="project__stack-item">Custom CSS</li>
						<li class="project__stack-item">Google Search Console</li>
						<li class="project__stack-item">Figma</li>
					</ul>

					<a href="https://github.com" aria-label="source code" class="link link--icon">
						<i aria-hidden="true" class="fab fa-github" />
					</a>
					<a href="https://example.com" aria-label="live preview" class="link link--icon">
						<i aria-hidden="true" class="fas fa-external-link-alt" />
					</a>
				</div>

				<div class="project">
					<h3>Kartuli Spirits</h3>
					<p class="project__description">
						This project was a contract that unfortuneately ran out of funding, so is still
						unfinished. The tech stack I used was Figma for the design, which was mostly completed
						before I joined, Sveltekit for the framework using Tailwinds and SCSS for styling,
						Commerce.js for the store backend, and Netlify for deployment. Even unfinished, I think
						it's still a good showing of what I can build using custom code from the ground up.
						Here's the link if you'd like to check it out.
					</p>
					<p>
						<br />
						<a
							style="color:var(--clr-link);"
							href="https://super-ganache-e318fa.netlify.app/"
							class="link link--icon"
							target="_blank"
							rel="noopener noreferrer">Kartuli Spirits</a
						>
					</p>
					<ul class="project__stack">
						<li class="project__stack-item">SvelteKit</li>
						<li class="project__stack-item">Tailwinds</li>
						<li class="project__stack-item">SASS</li>
						<li class="project__stack-item">Figma</li>
						<li class="project__stack-item">Wix</li>
						<li class="project__stack-item">Commerce.js</li>
						<li class="project__stack-item">Netlify</li>
						<li class="project__stack-item">npm</li>
					</ul>

					<a href="https://github.com" aria-label="source code" class="link link--icon">
						<i aria-hidden="true" class="fab fa-github" />
					</a>
					<a href="https://example.com" aria-label="live preview" class="link link--icon">
						<i aria-hidden="true" class="fas fa-external-link-alt" />
					</a>
				</div>

				<div class="project">
					<h3>Charlie's Painting, LLC</h3>
					<p class="project__description">
						Charlie's Painting, LLC is a small business out of Harrington, DE. They recently had
						some issues with their website that was setup through Google, so they contracted me to
						build them a new website for their company. I wanted to give them easy access to the
						site so they could make any changes or add new photos, so I built the site using
						Squarespace. I also wanted to make sure the site was mobile friendly, so I used the
						Squarespace mobile editor to make sure it looked good on all devices. Check out their
						site with the link below!
					</p>
					<p>
						<br />
						<a
							style="color:var(--clr-link);"
							href="https://www.charliespaintingllc.com/"
							class="link link--icon"
							target="_blank"
							rel="noopener noreferrer">Charlie's Painting, LLC</a
						>
					</p>
					<ul class="project__stack">
						<li class="project__stack-item">Squarespace</li>
						<li class="project__stack-item">Custom CSS</li>
						<li class="project__stack-item">Figma</li>
					</ul>

					<a href="https://github.com" aria-label="source code" class="link link--icon">
						<i aria-hidden="true" class="fab fa-github" />
					</a>
					<a href="https://example.com" aria-label="live preview" class="link link--icon">
						<i aria-hidden="true" class="fas fa-external-link-alt" />
					</a>
				</div>
			</div>
		</section>

		<!-- Skills -->
		<section class="section skills" id="skills">
			<h2 class="section__title">Skills</h2>
			<ul class="skills__list">
				<li class="skills__list-item btn btn--plain">HTML</li>
				<li class="skills__list-item btn btn--plain">CSS</li>
				<li class="skills__list-item btn btn--plain">SCSS</li>
				<li class="skills__list-item btn btn--plain">JavaScript</li>
				<li class="skills__list-item btn btn--plain">Tailwinds CSS</li>
				<li class="skills__list-item btn btn--plain">Figma</li>
				<li class="skills__list-item btn btn--plain">Svelte</li>
				<li class="skills__list-item btn btn--plain">SvelteKit</li>
				<li class="skills__list-item btn btn--plain">Git</li>
				<li class="skills__list-item btn btn--plain">Netlify</li>
				<li class="skills__list-item btn btn--plain">Ecommerce</li>
				<li class="skills__list-item btn btn--plain">Squarespace</li>
				<li class="skills__list-item btn btn--plain">Wix</li>
			</ul>
		</section>

		<!-- Contact -->
		<section class="section contact center" id="contact">
			<h2 class="section__title">Contact</h2>
			<a href="mailto:jacob.jordan1016@gmail.com">
				<span class="btn btn--outline">Email me</span>
			</a>
		</section>
	</main>

	<footer class="footer">
		<a href="https://github.com/Naturealizor/cleanfolio-site" class="link footer__link">
			Created By Jacob Jordan.
		</a>
		<p>
			Credit to <a
				href="https://github.com/rajshekhar26/cleanfolio-minimal"
				class="link footer__link">rajshekhar26</a
			> for the base design.
		</p>
		<hr />
		<!-- <a
			style="bottom:0%; top:2em;"
			href="https://github.com/rajshekhar26/cleanfolio-minimal"
			aria-label="source code"
			class="link footer__link">Source Code</a
		> -->
	</footer>

	<div class="scroll-container">
		<div class="scroll-top">
			<a aria-label="Scroll up" href="#top">
				<i aria-hidden="true" class="fas fa-arrow-up" />
			</a>
		</div>
	</div>

	<!-- <script src="./script.js"></script> -->
</body>

<style>
	* {
		padding: 0;
		margin: 0;
		border: 0;
		outline: 0;
		background-color: inherit;
		color: inherit;
		font-family: inherit;
		font-size: inherit;
		box-shadow: none;
		box-sizing: border-box;
	}
	:global(body) {
		--clr-bg: #23283e;
		--clr-bg-alt: #2a2f4c;
		--clr-fg: #bdbddd;
		--clr-fg-alt: #cdcdff;
		--clr-primary: #90a0d9;
		--shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
		transition: background-color 0.3s;
	}
	:global(body.dark-mode) {
		background-color: #1d3040;
		color: #bfc2c7;
	}
	body {
		font-family: 'Poppins', sans-serif;
		line-height: 1.5;
		color: var(--clr-fg);
		background-color: var(--clr-bg);
	}
	.light {
		--clr-bg: #fcfcfc;
		--clr-bg-alt: #fff;
		--clr-fg: #555;
		--clr-fg-alt: #444;
		--clr-primary: #6217ae;
		--clr-link: #793ed3;
		--shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
	}
	/* .dark {
		--clr-bg: #23283e;
		--clr-bg-alt: #2a2f4c;
		--clr-fg: #bdbddd;
		--clr-fg-alt: #cdcdff;
		--clr-primary: #90a0d9;
		--shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
	} */
	::-moz-selection {
		background: var(--clr-primary);
		color: var(--clr-bg);
	}
	::-webkit-selection,
	::selection {
		background: var(--clr-primary);
		color: var(--clr-bg);
	}
	h1,
	h2,
	h3 {
		line-height: 1.2;
		color: var(--clr-fg-alt);
	}
	h1 {
		font-size: 4rem;
	}
	h2 {
		font-size: 2rem;
	}
	h3 {
		font-size: 1.5rem;
	}
	/* h4 {
		font-size: 1.3rem;
	} */
	ul {
		list-style-type: none;
	}
	a {
		text-decoration: none;
	}
	button {
		cursor: pointer;
	}
	@media (max-width: 900px) {
		h1 {
			font-size: 2.6rem;
		}
	}

	/*===================
  buttons and links
===================*/
	.link {
		color: var(--clr-primary);
		padding: 0 0 0.3em 0;
		position: relative;
	}
	.link:hover {
		color: var(--clr-primary);
	}
	.link::before {
		content: '';
		display: inline;
		width: 0%;
		height: 0.2em;
		position: absolute;
		bottom: 0;
		background-color: var(--clr-primary);
		transition: width 0.2s ease-in;
	}
	.link:hover::before,
	.link:focus::before {
		width: 100%;
	}
	.link--nav {
		color: var(--clr-fg);
		text-transform: lowercase;
		font-weight: 500;
	}
	.link--icon {
		color: var(--clr-fg);
		font-size: 1.2rem;
	}
	.btn {
		display: block;
		padding: 0.8em 1.4em;
		font-weight: 500;
		font-size: 0.9rem;
		text-transform: lowercase;
		transition: transform 0.2s ease-in-out;
	}
	.btn--outline {
		color: var(--clr-primary);
		border: 2px solid var(--clr-primary);
		position: relative;
		overflow: hidden;
		z-index: 1;
	}
	.btn--outline:focus,
	.btn--outline:hover {
		color: var(--clr-bg);
	}
	.btn--outline:before {
		content: '';
		position: absolute;
		background-color: var(--clr-primary);
		right: 100%;
		bottom: 0;
		left: 0;
		top: 0;
		z-index: -1;
		transition: right 0.2s ease-in-out;
	}
	.btn--outline:hover::before,
	.btn--outline:focus::before {
		right: 0;
	}
	.btn--plain {
		text-transform: initial;
		background-color: var(--clr-bg-alt);
		box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 3px 0px;
		border: 0;
	}
	.btn--plain:hover {
		transform: translateY(-4px);
	}
	.btn--icon {
		padding: 0;
		font-size: 1.2rem;
	}
	.btn--icon:hover,
	.btn--icon:focus {
		color: var(--clr-primary);
	}
	.btn--icon:active {
		transform: translateY(-5px);
	}

	/*========
  layout
========*/

	.center {
		display: flex;
		align-items: center;
	}
	.header {
		height: 8em;
		max-width: 1100px;
		width: 95%;
		margin: 0 auto;
		justify-content: space-between;
		/* change flex direction so nav is on the right side */
		flex-direction: row-reverse;
	}
	main {
		max-width: 1100px;
		width: 95%;
		margin: 0 auto;
	}
	.section {
		margin-top: 5em;
	}
	.section__title {
		text-align: center;
		margin-bottom: 1em;
		text-transform: uppercase;
	}
	.nav__list {
		margin-right: 1.5em;
		/* display: flex; */
		justify-content: space-around;
	}
	.nav__list-item {
		margin-left: 1.5em;
		padding: 3px;
	}
	.nav__hamburger {
		display: none;
		width: 1em;
	}
	.about {
		flex-direction: column;
		margin-top: 3em;
	}
	.about__name {
		color: var(--clr-primary);
	}
	.about__role {
		margin-top: 1.2em;
	}
	.about__desc {
		font-size: 1rem;
		max-width: 600px;
	}
	.about__desc,
	.about__contact {
		margin-top: 2.4em;
	}
	.about,
	.link--icon {
		margin-right: 0.8em;
	}
	.about .btn--outline {
		margin-right: 1em;
	}
	.projects__grid {
		max-width: 1100px;
		margin: 0 auto;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(18em, 1fr));
		grid-gap: 2em;
	}
	.project {
		padding: 2em;
		margin: 0 auto;
		text-align: center;
		box-shadow: var(--shadow);
		transition: transform 0.2s linear;
	}
	.project:hover {
		transform: translateY(-7px);
	}
	.project__description {
		margin-top: 1em;
	}
	.project__stack {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		margin: 1.2em 0;
	}
	.project__stack-item {
		margin: 0.5em;
		font-weight: 500;
		font-size: 0.8rem;
		color: var(--clr-fg-alt);
	}
	.project .link--icon {
		margin-left: 0.5em;
	}
	.skills__list {
		max-width: 450px;
		width: 95%;
		margin: 0 auto;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}
	.skills__list-item {
		margin: 0.5em;
	}
	.contact {
		flex-direction: column;
	}
	.footer {
		padding: 3em 0;
		margin-top: 4em;
		text-align: center;
	}
	.footer__link {
		font-size: 0.9rem;
		font-weight: 700;
		color: var(--clr-fg);
	}
	.scroll-top {
		display: none;
		position: fixed;
		bottom: 1em;
		right: 2em;
		background-color: transparent;
		font-size: 1.8rem;
		transition: transform 0.2s ease-in-out;
	}
	@media (max-width: 600px) {
		.header {
			height: 6em;
		}
		.section {
			margin-top: 4em;
		}
		.nav__list {
			flex-direction: row;
			padding: 1em 1em;
			position: absolute;
			right: 0;
			background-color: var(--clr-bg);
			width: 45%;
			overflow: hidden;
			transition: width 0.2s ease-in-out;
			justify-content: space-between;
		}

		/* .display-nav-list {
			width: 100%;
		} */

		.nav__list-item {
			margin: 0.5em 0;
		}

		.nav__hamburger {
			display: flex;
			margin-left: 0.8em;
		}

		.about,
		.about__desc {
			margin-top: 2em;
			/* center text */
			text-align: center;
		}

		.footer {
			padding: 2em;
			margin-top: 3em;
		}

		.scroll-container {
			display: none;
		}
	}
</style>
