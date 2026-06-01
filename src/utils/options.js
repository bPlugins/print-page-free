import { __ } from '@wordpress/i18n';

import { printerIcons } from './icons';

export const iconTypes = [
	{ label: __('Default', 'print-page'), value: 'default' },
	{ label: __('URL/Upload', 'print-page'), value: 'url' }
];

export const defaultIcons = [
	{ label: __('FC Printer', 'print-page'), value: 'fcPrinter' },
	{ label: __('FA Printer', 'print-page'), value: 'faPrinter' },
	{ label: __('FI Printer', 'print-page'), value: 'fiPrinter' },
	{ label: __('AI Fill Printer', 'print-page'), value: 'aiFillPrinter' },
	{ label: __('AI Outline Printer', 'print-page'), value: 'aiOutlinePrinter' },
	{ label: __('AI Twotone Printer', 'print-page'), value: 'aiTwotonePrinter' },
	{ label: __('BI Printer', 'print-page'), value: 'biPrinter' }
].map(item => ({ ...item, icon: printerIcons[item.value] }));

export const generalStyleTabs = [
	{ name: 'general', title: __('General', 'print-page') },
	{ name: 'style', title: __('Style', 'print-page') }
];

export const variantOptions = [
    { label: 'Default', value: 'default' },
    { label: 'Icon Focus', value: 'iconFocus' },
    { label: 'Rounded Pill', value: 'roundedPill' },
    { label: 'Outline Style', value: 'outlineStyle' },
    { label: 'Floating Action', value: 'floatingAction' },
    { label: 'Interactive Hover', value: 'interactiveHover' },
    { label: 'Retro', value: 'retro' },
    { label: 'Brutalist', value: 'brutalist' },
    { label: '3D Effect', value: 'effect' },
    { label: 'Text Heavy', value: 'textHeavy' },
];

export const toolTipPresets = [
	{
		label: "Default",
        value: "default",
		img: "https://i.ibb.co.com/50D8Bht/default.png",
		height: "auto",
		width: "160px",
		isPro: false
	},
	{
		label: "Icon Focus",
        value: "iconFocus",
		img: "https://i.ibb.co.com/1tGqC6ng/icon-focus.png",
		height: "auto",
		width: "160px",
		isPro: true
	},
	{
		label: "Rounded Pill",
        value: "roundedPill",
		img: "https://i.ibb.co.com/SwtRDyMt/rounded-pill.png",
		height: "auto",
		width: "160px",
		isPro: true
	},
	{
		label: "Outline Style",
        value: "outlineStyle",
		img: "https://i.ibb.co.com/zVJzF0Rt/outline.png",
		height: "auto",
		width: "160px",
		isPro: true
	},
	{
		label: "Floating Action",
        value: "floatingAction",
		img: "https://i.ibb.co.com/7JCQtDkg/floating.png",
		height: "auto",
		width: "160px",
		isPro: true
	},
	{
		label: "Interactive Hover",
        value: "interactiveHover",
		img: "https://i.ibb.co.com/Gvh6X1Tk/interactive.png",
		height: "auto",
		width: "160px",
		isPro: true
	},
	{
		label: "Retro",
        value: "retro",
		img: "https://i.ibb.co.com/ccLM5bfb/retro.png",
		height: "auto",
		width: "160px",
		isPro: true
	},
	{
		label: "Brutalist",
        value: "brutalist",
		img: "https://i.ibb.co.com/Ld6JzM6f/brutalist.png",
		height: "auto",
		width: "160px",
		isPro: true
	},
	{
		label: "3D Effect",
        value: "effect",
		img: "https://i.ibb.co.com/xKz1p31g/effect.png",
		height: "auto",
		width: "160px",
		isPro: true
	},
	{
		label: "Text Heavy",
        value: "textHeavy",
		img: "https://i.ibb.co.com/tMDvcVVF/text-heavy.png",
		height: "auto",
		width: "160px",
		isPro: true
	},
];