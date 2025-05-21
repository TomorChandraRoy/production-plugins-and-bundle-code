// import { getColorsCSS } from '../../../../bpl-tools/utils/getCSS';

const Style = ({ id }) => {
	// const { colors } = attributes;

	const mainSl = `#${id}`;
	const blockSl = `${mainSl} .bBlocksHorizontalPricingTable`;
	const pricingContainer=`${blockSl} .pricing-container`; 
	const pricingCard=`${pricingContainer} .pricing-card`; 

	return <style dangerouslySetInnerHTML={{
		__html: `
         ${pricingCard} {
		   
		 }
		

	`}} />;
}
export default Style;
	