import { gutenbergTabIcon, shortcodeTabIcon } from "./icons";

const slug = 'print-page';

export const dashboardInfo = (info) => {
	const { version, isPremium, hasPro, deleteDataOnUninstall, uninstallNonce, adminUrl = '' } = info;

	const proSuffix = isPremium ? ' Pro' : '';

	return {
		name: `Print Page Block${proSuffix}`,
		displayName: `Print Page Block${proSuffix} - Print Full Page or Specific Section`,
		description: 'Add a customizable print button to your page. You can print a full page or a specific section, include an icon or text, and control layout options like headers, footers, and styles.',
		slug,
		version,
		isPremium,
		hasPro,
		deleteDataOnUninstall,
		uninstallNonce,
		adminUrl,
		displayOurPlugins: true,
		media: {
			logo: `https://ps.w.org/${slug}/assets/icon-128x128.png`,
			banner: `https://ps.w.org/${slug}/assets/banner-772x250.png`,
			thumbnail: `https://bplugins.com/wp-content/themes/b-technologies/assets/images/products/${slug}.png`,
		},
		pages: {
			org: `https://wordpress.org/plugins/${slug}/`,
			landing: `https://bplugins.com/products/${slug}/`,
			// docs: `https://bplugins.com/docs/${slug}/`,
			docs: `https://bblockswp.com/docs/${slug}`,
			pricing: `https://bplugins.com/products/${slug}/pricing`,
		},
		freemius: {
			product_id: 21137,
			plan_id: 35268,
			public_key: 'pk_0009bfe45ac358eb763ddf7022975',
		},
		startButton: {
			label: 'Start Now',
			url: `${adminUrl}post-new.php?post_type=print_page`
		}
	}
}

export const demoInfo = {
	demos: [
		{
			icon: '',
			title: 'Default',
			type: 'iframe',
			url: 'https://bblockswp.com/demo/print-page-2/'
		},
		{
			icon: '',
			title: 'Icon Focus',
			type: 'iframe',
			url: 'https://bblockswp.com/demo/print-page-icon-focus/'
		},
		{
			icon: '',
			title: 'Rounded Pill',
			type: 'iframe',
			url: 'https://bblockswp.com/demo/print-page-rounded-pill/'
		},
		{
			icon: '',
			title: 'Outline Style',
			type: 'iframe',
			url: 'https://bblockswp.com/demo/print-page-outline-style/'
		},
		{
			icon: '',
			title: 'Floating Action',
			type: 'iframe',
			url: 'https://bblockswp.com/demo/print-page-floating-action/'
		},
		{
			icon: '',
			title: 'Interactive Hover',
			type: 'iframe',
			url: 'https://bblockswp.com/demo/print-page-interactive-hover/'
		},
		{
			icon: '',
			title: 'Retro',
			type: 'iframe',
			url: 'https://bblockswp.com/demo/print-page-retro/'
		},
		{
			icon: '',
			title: 'Brutalist',
			type: 'iframe',
			url: 'https://bblockswp.com/demo/print-page-brutalist/'
		},
		{
			icon: '',
			title: '3D Effect',
			type: 'iframe',
			url: 'https://bblockswp.com/demo/print-page-3d-effect/'
		},
		{
			icon: '',
			title: 'Text Heavy',
			type: 'iframe',
			url: 'https://bblockswp.com/demo/print-page-text-heavy/'
		},
	]
}

export const pricingInfo = {
	logo: `https://ps.w.org/${slug}/assets/icon-128x128.png`,
	pluginId: 21137,
	planId: 35268,
	licenses: [
		1,
		3,
		null
	],
	button: {
		label: 'Buy Now ➜'
	},
	featured: {
		selected: 3,
	}
}

export const welcomeInfo = (adminUrl) => ({
	keywords: ['Print Page', 'Gutenberg Block', 'Shortcode', 'Layout Customization', 'Section Print', 'Orientation Settings'],
	keywordsLabel: 'Features',
	gettingStarted: {
		tabs: [
			{
				key: 'gutenberg',
				label: 'Gutenberg',
				icon: gutenbergTabIcon,
				steps: [
					{
						num: 1,
						title: 'Add the Print Page Block',
						body: 'Open the block editor on any page or post. Click the <strong>+</strong> icon in the top-left corner or type <strong>/Print Page</strong> to insert the block.',
						link: { url: `${adminUrl}post-new.php?post_type=page`, label: 'Open Editor' }
					},
					{
						num: 2,
						title: 'Select Print Target',
						body: 'Choose whether you want the button to print the entire page or a specific section selector (like a CSS ID or class).'
					},
					{
						num: 3,
						title: 'Configure Button Styles',
						body: 'Select button text, display icon, configure color customization, borders, padding, and alignment in the block sidebar. Publish your page.'
					}
				]
			},
			{
				key: 'shortcode',
				label: 'Shortcode',
				icon: shortcodeTabIcon,
				steps: [
					{
						num: 1,
						title: 'Create a New Print Button',
						body: 'Navigate to <strong>Print Page -> Add New</strong>. Give it a title and configure your print settings and styles.',
						link: { url: `${adminUrl}post-new.php?post_type=print_page`, label: 'Add New' }
					},
					{
						num: 2,
						title: 'Configure Options',
						body: 'Set up custom print targets, specify elements to remove, select colors, and click <strong>Publish</strong>.'
					},
					{
						num: 3,
						title: 'Copy & Paste Shortcode',
						body: 'Copy the generated shortcode (e.g. <code>[print_page id="123"]</code>) from the print button editor screen or list, and paste it into any post, page, or widget.'
					}
				]
			}
		]
	},
	changelogs: [
		{
			type: 'update',
			version: '1.3.1 - 14 Jun, 2026',
			list: [
				'Updated: Modernized the admin settings dashboard layout.'
			]
		},
		{
			type: 'new',
			version: '1.3.0 - 02 Jun, 2026',
			list: [
				'Added: Added uninstall data clean-up option in the admin settings dashboard to wipe plugin configurations on deletion.',
				'Added: Added uninstall.php script to securely remove all custom post types and options if the cleanup setting is enabled.',
				'Added: Added Gulp task configurations (gulpfile.js and package.json) to automate cross-platform release packaging.',
				'Updated: Redesigned the shortcode copy-to-clipboard UI column in the print CPT admin table for a better user experience.',
				'Updated: Migrated PHP class controllers directly under the includes/ directory and refactored code to use namespace PrintPage to comply with standard coding guidelines.',
				'Improved: Unlocked previously locked pro fields in the Gutenberg editor and introduced a clean, non-intrusive notices UI to display premium feature requirements.',
				'Fixed: Fixed multiple security issues flagged by WordPress Plugin Check (PCP), including direct access checks (ABSPATH), wp_unslash sanitization for AJAX, and translation string escaping for wp_die.'
			]
		}
	],
	changelogsLimit: 5,
	changelogsReadMoreLabel: 'View More Changelogs',
	proFeatures: [
		'10 Exclusive Pro Button Styles',
		'Advanced Print Options & Layouts',
		'Elegant Modal-Based Print Preview',
		'Enhanced Print Controls',
		'Page Orientation Settings',
		'Remove Specific Elements Before Print',
		'Advanced Button Typography',
		'Responsive Padding & Spacing',
		'Dashed, Dotted & Double Borders',
		'Button Shadow & Hover Effects'
	]
})


