import { MinimalPricingCard } from "./MinimalPricingCard";
const Theme = (props) => {
    const { attributes } = props;
    const { themeStyle } = attributes;
    return (
        <>
            {
                themeStyle === "style-1" ? <MinimalPricingCard {...props} /> 
                : null
            }
            {/* {
                themeStyle === "style-1" ? <MinimalPricingCard {...props} /> : themeStyle === "style-2"
                 ? <PriceCardTwo {...props} /> : themeStyle === "style-3"
                ? <PriceCardThree {...props} /> : null
            } */}

        </>

    );
};

export default Theme;