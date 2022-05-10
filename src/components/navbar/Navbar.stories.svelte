<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import Navbar from './Navbar.svelte';
</script>

<!-- More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export -->
<!-- More on argTypes: https://storybook.js.org/docs/svelte/api/argtypes -->
<Meta
	title="Example/Navbar"
	component={Navbar}
	argTypes={{
		backgroundColor: { control: 'color' },
		label: { control: 'text' },
		onClick: { action: 'onClick' },
		primary: { control: 'boolean' },
		size: {
			control: { type: 'select' },
			options: ['small', 'medium', 'large']
		}
	}}
/>

<!-- More on component templates: https://storybook.js.org/docs/svelte/writing-stories/introduction#using-args -->
<Template let:args>
	<Navbar {...args} on:click={args.onClick} />
</Template>

<!-- More on args: https://storybook.js.org/docs/svelte/writing-stories/args -->
<Story
	name="Primary"
	args={{
		primary: true,
		label: 'Navbar'
	}}
/>

<Story
	name="Secondary"
	args={{
		label: 'Navbar'
	}}
/>
<Story
	name="Large"
	args={{
		size: 'large',
		label: 'Navbar'
	}}
/>

<Story
	name="Small"
	args={{
		size: 'small',
		label: 'Navbar'
	}}
/>
