<script lang="ts">
	import githubLogo from '../../images/github-logo.svg';
	import linkedinLogo from '../../images/linkedin-logo.svg';
	import svelteLogo from '../../images/svelte-logo.svg';
	
	const currentYear: number = new Date().getFullYear();
</script>

<footer>
	<div class="footer-links">
		<a href="https://github.com/owen-hwlee/" target="_blank" rel="noopener noreferrer">
			<img class="footer-icon" src={githubLogo} alt="GitHub">
			<span>GitHub</span>
		</a>
		<a href="https://www.linkedin.com/in/owen-hwlee" target="_blank" rel="noopener noreferrer">
			<img class="footer-icon" src={linkedinLogo} alt="LinkedIn">
			<span>LinkedIn</span>
		</a>
		<a href="https://kit.svelte.dev" target="_blank" rel="noopener noreferrer">
			<img class="footer-icon" src={svelteLogo} alt="Svelte">
			<span>Built with SvelteKit</span>
		</a>
	</div>

	<div class="footer-copy">
		© {currentYear} Lee Ho Wan Owen. All rights reserved.
	</div>
</footer>

<style>
	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}

	.footer-links {
		margin: 0.5rem 0;
		display: flex;
		justify-content: center;
		gap: 1.5rem;
	}

	.footer-links a {
		color: #61dafb;
		text-decoration: none;
		font-size: 1.1rem;
		display: table-cell;
	}
	
	.footer-links a span:hover {
		text-decoration: underline;
	}

	.footer-links a * {
		vertical-align: middle;
	}
	
	.footer-icon {
		width: 30px;
		height: 30px;
	}

	.footer-copy {
		margin-top: 0.5rem;
		font-size: 0.9rem;
	}
</style>
