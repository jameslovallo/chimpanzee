import ardi, { html } from '//unpkg.com/ardi'

ardi({
	component: 'home-grid',
	template() {
		return html`
			<slot></slot>
			<style>
				${this.css}
			</style>
		`
	},
	css: /* css */ `
		:host {
			display: grid;
			gap: 1rem;
			margin-block: 1rem;
			text-align: center;
		}
		@media (min-width: 768px) {
			:host {
				grid-template-columns: repeat(3, 1fr);
			}
		}
	`,
})