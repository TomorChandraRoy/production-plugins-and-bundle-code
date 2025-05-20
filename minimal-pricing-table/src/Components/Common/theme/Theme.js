import { MinimalPricingTable } from "./MinimalPricingTable";

const Theme = (props) => {
    const { attributes } = props;
    const { themeStyle } = attributes;
    return (
        <>
            {
                themeStyle === "style-1" ? <MinimalPricingTable {...props} /> 
                : null
            }
        </>

    );
};

export default Theme;