<script>
	function toggle() {
		// Toggle the dark mode
		document.body.classList.toggle('dark-mode');
	}
</script>

<button class="drkButton" on:click={toggle}>
	<slot />
</button>

<style>
	.drkButton {
		background-color: #f76027;
		color: white;
		border: none;
		border-radius: 4px;
		padding: 0.5rem;
		text-transform: uppercase;
	}
	:global(body.dark-mode) button {
		background-color: #0084f6;
		color: white;
		--clr-bg: #23283e;
		--clr-bg-alt: #2a2f4c;
		--clr-fg: #ffffff;
		--clr-fg-alt: #ffffff;
		--clr-primary: #90a0d9;
		--shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
	}
</style>
