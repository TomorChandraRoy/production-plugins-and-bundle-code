import { PriceCardOne } from "./PriceCardOne";
import { PriceCardThree } from "./PriceCardThree";
import { PriceCardTwo } from "./PriceCardTwo";

const Theme = (props) => {
    const { attributes } = props;
    const { themeStyle } = attributes;
    return (
        <div>
            {
                themeStyle === "style-1" ? <PriceCardOne {...props} /> : themeStyle === "style-2" ? <PriceCardTwo {...props} /> : themeStyle === "style-3" ? <PriceCardThree {...props} /> : null
            }
        </div>
    );
};

export default Theme;