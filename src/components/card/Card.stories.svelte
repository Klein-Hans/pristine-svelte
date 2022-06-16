<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import Card from './Card';
</script>

<!-- More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export -->
<!-- More on argTypes: https://storybook.js.org/docs/svelte/api/argtypes -->
<Meta
	title="Example/Card"
	component={Card}
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
	<Card {...args} />
</Template>

<!-- More on args: https://storybook.js.org/docs/svelte/writing-stories/args -->
<Story
	name="Primary"
	args={{
		primary: true,
		label: 'Button'
	}}
/>

<Story
	name="Secondary"
	args={{
		label: 'Button'
	}}
/>
<Story
	name="Large"
	args={{
		size: 'large',
		label: 'Button'
	}}
/>

<Story
	name="Small"
	args={{
		size: 'small',
		label: 'Button'
	}}
/>
