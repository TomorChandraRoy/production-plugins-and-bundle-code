import { getColorsCSS } from '../../../../bpl-tools/utils/getCSS';

const Style = ({ attributes, id }) => {
	const { colors } = attributes;

	const mainSl = `#${id}`;
	const blockSl = `${mainSl} .bBlocksPriceCardContent`; 

	return <style dangerouslySetInnerHTML={{
		__html: `
		
		${blockSl} {
			${getColorsCSS(colors)}
		}

	`}} />;
}
export default Style;