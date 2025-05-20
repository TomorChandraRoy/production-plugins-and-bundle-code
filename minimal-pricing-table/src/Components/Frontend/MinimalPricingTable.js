import Theme from "../Common/theme/Theme";

const MinimalPricingTable = ({ attributes }) => {
	return <div className='bBlocksPriceCardContent'>
		<Theme  {...{ attributes }} />
	</div>
}
export default MinimalPricingTable;