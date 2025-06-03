import { getShadowCSS, getSpaceCSS } from '../../../../../bpl-tools/utils/getCSS';

import { prefix } from '../../utils/data';

const Style = ({ attributes, id, isStandard }) => {
	const { pricingTables, columnGap, rowGap, textAlign, padding, shadow } = attributes;

	const mainSl = `#${id}`;
	const tableSl = `${mainSl} .${prefix}`;

	return <style dangerouslySetInnerHTML={{
		__html: `
		${tableSl}{
			grid-gap: ${rowGap} ${columnGap};
			text-align: ${textAlign};
			padding: ${isStandard ? '30px 0' : '0'}
		}
		${tableSl} .priceItem{
			padding: ${getSpaceCSS(padding)};
			box-shadow: ${getShadowCSS(shadow)};
		}

		${pricingTables?.map((priceTable, index) => {
			const { color } = priceTable;

			const defPriceTableSelect = `${tableSl} #priceItem-${index} .priceItem`;
			const priceTableSelect = hasClass => `${mainSl}.is-style-${hasClass} .${prefix} #priceItem-${index} .priceItem`;

			return `
				${defPriceTableSelect} .priceName,
				${priceTableSelect('basic')} .priceAmountWrap,
				${priceTableSelect('standard')} .priceAmountWrap{
					color: ${color};
				}
				${defPriceTableSelect} .priceLink,
				${priceTableSelect('basic')} .priceName,
				${priceTableSelect('standard')}::before,
				${priceTableSelect('ultimate')} .priceAmountWrap{
					color: #fff;
					background-color: ${color};
				}
				${priceTableSelect('basic')} .priceName::before{
					border-top-color: ${color};
				}
			`;
		}).join(' ')}
		`.replace(/\s+/g, ' ')
	}} />
}
export default Style;