import Theme from "../Common/theme/Theme";

const MinimalPricingCard = ({ attributes }) => {
	return <div className='bBlocksPriceCardContent'>
		<Theme  {...{ attributes }} />
	</div>
}
export default MinimalPricingCard;