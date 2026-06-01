import { getBorderCSS, getColorsCSS, getShadowCSS, getSpaceCSS, getTypoCSS, isValidCSS } from '../../../../bpl-tools/utils/getCSS';

const Style = ({ attributes, id }) => {
	const { alignment, btnTypo, btnColors, btnHoverColors, btnPadding, btnBorder, btnShadow, hoverBtnShadow, icon } = attributes || {};
	
	const printSl = `#${id} .ppbPrintPage`;

	return <style dangerouslySetInnerHTML={{
		__html: `
		
			${getTypoCSS('', btnTypo)?.googleFontLink}
			${getTypoCSS(`${printSl} button`, btnTypo)?.styles}

			${printSl}{
				${isValidCSS('text-align', alignment)}
			}

			${printSl} button{
				${getColorsCSS(btnColors)}
				${getBorderCSS(btnBorder)}
				${isValidCSS('padding', getSpaceCSS(btnPadding))}
				${isValidCSS('box-shadow', getShadowCSS(btnShadow))}
			}

			${printSl} button:hover{
				${getColorsCSS(btnHoverColors)}
				${isValidCSS('box-shadow', getShadowCSS(hoverBtnShadow))}
			}

			${icon.type === 'default' ? `${printSl} .iconWrapper { background-color: #e0e7ff; }` : ''}

		`.replace(/\s+/g, ' ')
	}} />
}
export default Style;