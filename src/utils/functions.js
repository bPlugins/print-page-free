import { produce } from "immer";

export const printSection = (sectionSelector, isModal, isHeaderFooter, removeSelectors, isLayout) => {
	const printTarget = sectionSelector && document.querySelector(sectionSelector);

	if (!printTarget) return;

	const printStyle = document.createElement('style');
	printStyle.innerHTML = getPrintCSS(isHeaderFooter, removeSelectors, isLayout);
	document.head.appendChild(printStyle);

	if (isModal) {
		const bodyDivs = document.querySelectorAll('body > div');
		const parentNode = printTarget.parentElement;

		bodyDivs.forEach(div => document.body.removeChild(div));
		document.body.appendChild(printTarget);

		window.print();

		setTimeout(() => {
			printStyle.remove();
			document.body.removeChild(printTarget);
			bodyDivs.forEach(div => document.body.appendChild(div));
			parentNode.appendChild(printTarget);
		}, 1000);

	} else {
		const originalContent = document.body.innerHTML;
		document.body.innerHTML = '';
		document.body.appendChild(printTarget);

		window.print();
		location.reload();

		setTimeout(() => {
			printStyle.remove();
			document.body.innerHTML = originalContent;
		}, 1000);
	}
};

export const applyPrintStyles = (isHeaderFooter, removeSelectors, isLayout) => {
	const style = document.createElement('style');
	style.id = 'ppb-print-styles';
	style.innerHTML = getPrintCSS(isHeaderFooter, removeSelectors, isLayout)
	document.head.appendChild(style);
};

const getPrintCSS = (isHeaderFooter, removeSelectors, isLayout) => {
	let removeCSS = '';
	if (removeSelectors) {
		const selectors = removeSelectors
			.split(',')
			.map(s => s.trim())
			.filter(Boolean);
		if (selectors.length > 0) {
			removeCSS = selectors.map(sel => `${sel} { display: none !important; }`).join('\n');
		}
	}

	const pageCSS = `
		@page {
			size: ${isLayout ? 'auto' : 'portrait'};
			margin: ${isHeaderFooter ? '0.5in' : '0'};
		}
	`;

	return `
		${pageCSS}

		@media print {
			${!isHeaderFooter ? `
				header, .header, [class*="header"] { display: none !important; }
				footer, .footer, [class*="footer"] { display: none !important; }
				body { padding: 0.5in !important; box-sizing: border-box; } 

			` : ''}

			${!isLayout ? `
				body {
					transform: none !important;
					width: 100% !important;
					height: auto !important;
					max-width: none !important;
				}
			` : ''}

			${removeCSS}
		}
	`;
};

export const removePrintStyles = () => {
	const existingStyle = document.getElementById('ppb-print-styles');
	if (existingStyle) {
		existingStyle.remove();
	}
};

export const variantSwitch = (buttonVariant = 'default', attributes = {}) => produce(attributes, (draft) => {
	draft['buttonVariant'] = buttonVariant;

	switch (buttonVariant) {
		case 'default':
			draft['btnTypo']['fontSize'] = { desktop: 22, tablet: 20, mobile: 18 };
			draft['btnColors'] = { color: '#4527a4', bg: '#4527a433' };
			draft['btnHoverColors'] = { color: '#4527a4', bg: '#4527a433' };
			draft['btnPadding'] = { vertical: '5px', horizontal: '15px' };
			draft['btnBorder'] = { radius: '5px' };
			draft['btnShadow'] = {};
			draft['hoverBtnShadow'] = {};
			break;

		case 'iconFocus':
			draft['btnTypo']['fontSize'] = { desktop: 22, tablet: 20, mobile: 18 };
			draft['btnColors'] = { color: '#374151', bg: 'transparent' };
			draft['btnHoverColors'] = { color: '', bg: '#f5f5f5' };
			draft['btnPadding'] = { vertical: '16px', horizontal: '16px' };
			draft['btnBorder'] = { radius: '8px' };
			draft['btnShadow'] = {};
			draft['hoverBtnShadow'] = {};
			break;

		case 'roundedPill':
			draft['btnTypo']['fontSize'] = { desktop: 22, tablet: 20, mobile: 18 };
			draft['btnColors'] = { color: '#fff', bg: '#22c55e' };
			draft['btnHoverColors'] = { color: '#fff', bg: '#16a34a' };
			draft['btnPadding'] = { vertical: '12px', horizontal: '24px' };
			draft['btnBorder'] = { radius: '9999px' };
			draft['btnShadow'] = { hOffset: '0px', vOffset: '4px', blur: '6px', color: 'rgba(0, 0, 0, 0.1)' };
			draft['hoverBtnShadow'] = { hOffset: '0px', vOffset: '6px', blur: '10px', color: 'rgba(0, 0, 0, 0.15)' };
			break;

		case 'outlineStyle':
			draft['btnTypo']['fontSize'] = { desktop: 22, tablet: 20, mobile: 18 };
			draft['btnColors'] = { color: '#ef4444', bg: '#0000' };
			draft['btnHoverColors'] = { color: '#ef4444', bg: '#fef2f2' };
			draft['btnPadding'] = { vertical: '8px', horizontal: '16px' };
			draft['btnBorder'] = { width: '2px', style: 'solid', color: '#ef4444', radius: '8px' };
			draft['btnShadow'] = {};
			draft['hoverBtnShadow'] = {};
			break;

		case 'floatingAction':
			draft['btnTypo']['fontSize'] = { desktop: 22, tablet: 20, mobile: 18 };
			draft['btnColors'] = { color: '#ffffff', bg: '#06b6d4' };
			draft['btnHoverColors'] = { color: '#ffffff', bg: '#0891b2' };
			draft['btnPadding'] = { vertical: '8px', horizontal: '16px' };
			draft['btnBorder'] = { radius: '50%' };
			draft['btnShadow'] = { hOffset: '0px', vOffset: '10px', blur: '15px', color: 'rgba(0, 0, 0, 0.1)' };
			draft['hoverBtnShadow'] = { hOffset: '0px', vOffset: '15px', blur: '25px', color: 'rgba(0, 0, 0, 0.15)' };
			break;

		case 'interactiveHover':
			draft['btnTypo']['fontSize'] = { desktop: 22, tablet: 20, mobile: 18 };
			draft['btnColors'] = { color: '#ffffff', bg: '#cf5d1f' };
			draft['btnHoverColors'] = { color: '#ffffff', bg: 'transparent' };
			draft['btnPadding'] = { vertical: '8px', horizontal: '20px' };
			draft['btnBorder'] = { radius: '8px' };
			draft['btnShadow'] = {};
			draft['hoverBtnShadow'] = {};
			break;

		case 'retro':
			draft['btnTypo']['fontSize'] = { desktop: 22, tablet: 20, mobile: 18 };
			draft['btnColors'] = { color: '#fff', bg: '#a855f7' };
			draft['btnHoverColors'] = { color: '#fff', bg: '#a855f7' };
			draft['btnPadding'] = { vertical: '12px', horizontal: '16px' };
			draft['btnBorder'] = { width: '4px', style: 'solid', color: '#facc15', radius: '8px' };
			draft['btnShadow'] = { hOffset: '0px', vOffset: '10px', blur: '15px', speed: '-3px', color: 'rgba(0, 0, 0, 0.1)' };
			draft['hoverBtnShadow'] = { hOffset: '0px', vOffset: '20px', blur: '25px', speed: '-5px', color: 'rgba(0, 0, 0, 0.1)' };
			break;

		case 'brutalist':
			draft['btnTypo']['fontSize'] = { desktop: 22, tablet: 20, mobile: 18 };
			draft['btnColors'] = { color: '#fff', bg: '#000' };
			draft['btnHoverColors'] = { color: '#fff', bg: '#111827' };
			draft['btnPadding'] = { vertical: '12px', horizontal: '12px' };
			draft['btnBorder'] = { width: '4px', style: 'solid', color: '#fff' };
			draft['btnShadow'] = {};
			draft['hoverBtnShadow'] = {};
			break;

		case 'effect':
			draft['btnTypo']['fontSize'] = { desktop: 22, tablet: 20, mobile: 18 };
			draft['btnColors'] = { color: '#fff', bg: '#16a34a' };
			draft['btnHoverColors'] = { color: '#fff', bg: '#16a34a' };
			draft['btnPadding'] = { vertical: '12px', horizontal: '18px' };
			draft['btnBorder'] = { radius: '8px' };
			draft['btnShadow'] = { hOffset: '0px', vOffset: '10px', blur: '15px', speed: '-3px', color: 'rgba(34, 197, 94, 0.5)' };
			draft['hoverBtnShadow'] = { hOffset: '0px', vOffset: '10px', blur: '10px', speed: '-5px', color: 'rgba(34, 197, 94, 0.5)' };
			break;

		case 'textHeavy':
			draft['btnTypo']['fontSize'] = { desktop: 22, tablet: 20, mobile: 18 };
			draft['btnColors'] = { color: '#b45309', bg: '#fef3c7' };
			draft['btnHoverColors'] = { color: '#b45309', bg: '#fbeaa5' };
			draft['btnPadding'] = { vertical: '12px', horizontal: '12px' };
			draft['btnBorder'] = { width: '1px', style: 'solid', color: '#ebcf5e', radius: '8px' };
			draft['btnShadow'] = {};
			draft['hoverBtnShadow'] = {};
			break;
	}
});




