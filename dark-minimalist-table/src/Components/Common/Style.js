import { mobileBreakpoint, tabBreakpoint } from '../../../../bpl-tools/utils/data';
import { getBoxCSS, getTypoCSS, isValidCSS } from '../../../../bpl-tools/utils/getCSS';

const Style = ({ attributes, id }) => {
	const { style,darkMinimalistTableData } = attributes;


	// feature icons single Color Function
	const generateIconFillCSS = () => {
		return darkMinimalistTableData.map((card, index) =>
			card.features.map((feature, i) => 
				`.card-${index} .features .feature .icon-${i} svg {
                  fill: ${style?.iconToggle ? style?.iconGobalColor : feature.iconColor};
                }`).join('\n')
		).join('\n');
	};
	// generate gradient string function Popular Pricing
	const generateGradientString = (gradient) => {
	if (!gradient) return '';

	const { type, radialType, colors, angel, centerPositions } = gradient;

	const colorStops = colors.map(c => `${c.color} ${c.position}%`).join(', ');

	if (type === 'linear') {
		return `linear-gradient(${angel}deg, ${colorStops})`;
	} else {
		return `radial-gradient(${radialType} at ${centerPositions.x}% ${centerPositions.y}%, ${colorStops})`;
	}
	};


	const mainSl = `#${id}`;
	const blockSl = `${mainSl} .pTableDarkMinimalist`;
	const mainContainer = `${blockSl} .main-container`;
	const pricingWrapper = `${mainContainer} .pricing-wrapper`;
	const pricingContainer = `${pricingWrapper} .pricing-container`;
	const pricingGrid = `${pricingContainer} .pricing-grid`;

	const pricingCard = `${pricingGrid} .pricing-card`;

	const cardHeader = `${pricingCard} .card-header`;
	const icon = `${cardHeader} .icon`;
	const planName = `${cardHeader} .plan-name`;

	const priceSection = `${pricingCard} .price-section`;
	const priceContainer = `${priceSection} .price-container`;

	const priceCurrency = `${priceContainer} .price-currency`;
	const currency = `${priceCurrency} .currency`;
	const price = `${priceCurrency} .price`;

	const period = `${priceContainer} .period`;

    const description = `${pricingCard} .description`;

    const features = `${pricingCard} .features`;
    const feature = `${features} .feature`;
    const checkIcons = `${feature} .check-icons`;
    const featureText = `${feature} .feature-text`;

	const buyButton = `${pricingCard} .buy-button`;
	const arrowIcon = `${buyButton} .arrow-icon`;

    // popular
	const popular = `${pricingGrid} .popular`;
	const popularBadge = `${popular} .popular-badge`;

	

	const popularCardHeader = `${popular} .card-header`;  
	const popularIcon = `${popularCardHeader} .icon`; 
	const popularPlanName = `${popularCardHeader} .plan-name`; 

    const popularPriceSection = `${popular} .price-section`;  
    const popularPriceContainer = `${popularPriceSection} .price-container`;  
    const popularPriceCurrency = `${popularPriceContainer} .price-currency`;  
    const popularCurrency = `${popularPriceCurrency} .currency`;  
    const popularPrice = `${popularPriceCurrency} .price`;  

    const popularPeriod = `${popularPriceContainer} .period`; 

	const popularDescription = `${popular} .description`; 

	const popularFeatures = `${popular} .features`;  
	const popularFeature = `${popularFeatures} .feature`;  
	const popularCheckIcons = `${popularFeature} .check-icons`;  
	const popularFeatureText = `${popularFeature} .feature-text`;
	
	const popularbuyButton = `${popular} .buy-button`;
	const popularArrowIcon = `${popularbuyButton} .arrow-icon`;

	const popularButton = `${popular} .popular-button`;
	
  
	return <style dangerouslySetInnerHTML={{
		__html: `
	    ${getTypoCSS('', style?.pricingTitleTypo)?.googleFontLink}
	    ${getTypoCSS('', style?.priceTypo)?.googleFontLink}
	    ${getTypoCSS('', style?.periodTypo)?.googleFontLink}
	    ${getTypoCSS('', style?.desTypo)?.googleFontLink}
	    ${getTypoCSS('', style?.featureTextTypo)?.googleFontLink}
	    ${getTypoCSS('', style?.buttonTextTypo)?.googleFontLink}
	    ${getTypoCSS('', style?.popularButtonTextTypo)?.googleFontLink}
	    ${getTypoCSS('', style?.popularTitleTypo)?.googleFontLink}
	    ${getTypoCSS('', style?.popularPriceTypo)?.googleFontLink}
	    ${getTypoCSS('', style?.popularPeriodTypo)?.googleFontLink}
	    ${getTypoCSS('', style?.popularDesTypo)?.googleFontLink}
	    ${getTypoCSS('', style?.popularFeatureTextTypo)?.googleFontLink}
	    ${getTypoCSS('', style?.popularButtonTextTyp)?.googleFontLink}


		${getTypoCSS(planName, style?.pricingTitleTypo)?.styles}
		${getTypoCSS(price, style?.priceTypo)?.styles}
		${getTypoCSS(period, style?.periodTypo)?.styles}
		${getTypoCSS(description, style?.desTypo)?.styles}
		${getTypoCSS(featureText, style?.featureTextTypo)?.styles}
		${getTypoCSS(buyButton, style?.buttonTextTypo)?.styles}
		${getTypoCSS(popularBadge, style?.popularButtonTextTypo)?.styles}
		${getTypoCSS(popularPlanName, style?.popularTitleTypo)?.styles}
		${getTypoCSS(popularPrice, style?.popularPriceTypo)?.styles}
		${getTypoCSS(popularPeriod, style?.popularPeriodTypo)?.styles}
		${getTypoCSS(popularDescription, style?.popularDesTypo)?.styles}
		${getTypoCSS(popularFeatureText, style?.popularFeatureTextTypo)?.styles}
		${getTypoCSS(popularbuyButton, style?.popularButtonTextTyp)?.styles}
	




		${pricingWrapper}{
		  max-width: ${style?.layoutSize};
		}

		${pricingGrid}{
			grid-template-columns: repeat(${style?.layoutCol?.desktop}, 1fr);
			row-gap: ${style?.layRowGap?.desktop};
			column-gap: ${style?.layColumGap?.desktop};
		}
		${pricingCard}{
		  background: ${style?.pricingCardBg?.includes('gradient') ? style?.pricingCardBg : `${style?.pricingCardBg}`};
		  ${isValidCSS("padding", getBoxCSS(style?.pricingCardPadding?.desktop))}
		  ${isValidCSS("border-radius", getBoxCSS(style?.priceCardRadius))}
		}
		${icon} svg{
		  width: ${style?.pricingTitlIconSize};
		  height: ${style?.pricingTitlIconSize};
		  color: ${style?.pricingTitleIconColor};
		  fill: ${style?.pricingTitleIconColor};
		}
		${planName}{
		  color: ${style?.pricingTitleColor};
		}
		${currency}{
		  fill: ${style?.priceCurrencyColor};
		}
		${currency} svg{
		  height: ${style?.priceCurrencySize};
		}
		${price}{
		   color: ${style?.priceColor};
		}
		${period}{
		  color: ${style?.periodColor};
		  ${isValidCSS("margin", getBoxCSS(style?.periodMargin?.desktop))}
		}
		${description}{
		  color: ${style?.desColor};
		  ${isValidCSS("margin", getBoxCSS(style?.desMargin?.desktop))}
		}
		${features}{
		  gap: ${style?.featureGap};
		}
		${feature}{
		  gap: ${style?.featureIconGap};
		}
		${checkIcons} svg{
		  width: ${style?.featureIconSize};
		  height: ${style?.featureIconSize};
		}
		${featureText}{
		  color: ${style?.featureTextColor};
		}
		${buyButton}{
		  background: ${style?.buttonBGColor?.includes('gradient') ? style?.buttonBGColor : `${style?.buttonBGColor}`};
		  color: ${style?.buttonTextColor};
		  ${isValidCSS("padding", getBoxCSS(style?.buttonPadding?.desktop))}
		  ${isValidCSS("border-radius", getBoxCSS(style?.buttonRadius))}
		}
		${buyButton}:hover{
		  background: ${style?.buttonBGHoverColor?.includes('gradient') ? style?.buttonBGHoverColor : `${style?.buttonBGHoverColor}`};
		  color: ${style?.buttonHoverTextColor};

		}
		${arrowIcon} svg{
		  width: ${style?.buttonIconSize};
		  height: ${style?.buttonIconSize};
		  fill: ${style?.buttonIconColor};
		}
		${buyButton}:hover .arrow-icon svg {
		  fill: ${style?.buttonIconHoverColor};
		}

		

		${popular}{
		   background: ${generateGradientString(style?.popularBgColor)};
		   ${isValidCSS("padding", getBoxCSS(style?.popularPadding?.desktop))}
           ${isValidCSS("border-radius", getBoxCSS(style?.popularRadius))}
		   border: ${style?.popularBorder?.width} ${style?.popularBorder?.style} ${style?.popularBorder?.color};
		}
		
		${popularBadge}{
		   background: ${style?.popularButtonBgColor?.includes('gradient') ? style?.popularButtonBgColor : `${style?.popularButtonBgColor}`};
		   color: ${style?.popularColor};
		   ${isValidCSS("border-radius", getBoxCSS(style?.popularButtonRadius))}
		   ${isValidCSS("padding", getBoxCSS(style?.popularButtonPadding?.desktop))}
		}

		${popularIcon} svg{
		  width: ${style?.popularTitlIconSize};
		  height: ${style?.popularTitlIconSize};
		  color: ${style?.popularTitleIconColor};
		  fill: ${style?.popularTitleIconColor};
		}
		${popularPlanName}{
		  color: ${style?.popularTitleColor};
		}
		${popularCurrency}{
		  fill: ${style?.popularCurrencyColor};
		}
		${popularCurrency} svg{
		  height: ${style?.popularCurrencySize};
		}
		${popularPrice}{
		   color: ${style?.popularPriceColor};
		}
        ${popularPeriod}{
		  color: ${style?.popularPeriodColor};
		  ${isValidCSS("margin", getBoxCSS(style?.popularPeriodMargin?.desktop))}
	    }
		${popularDescription}{
		  color: ${style?.popularDesColor};
		  ${isValidCSS("margin", getBoxCSS(style?.popularDesMargin?.desktop))}
		}
        ${popularCheckIcons} svg{
		  width: ${style?.popularFeatureIconSize};
		  height: ${style?.popularFeatureIconSize};
		}
        ${popularFeature}{
		  gap: ${style?.popularFeatureIconGap};
		}
		${popularFeatureText}{
		  color: ${style?.popularFeatureTextColor};
		}
		${popularFeatures}{
		  gap: ${style?.popularFeatureGap};
		}
        ${popularButton}{
		   color: ${style?.popularButtonTextColor};
		   background: ${style?.popularButtonBGColor?.includes('gradient') ? style?.popularButtonBGColor : `${style?.popularButtonBGColor}`};
        }

		${popularButton}:hover{
		  background: ${style?.popularButtonBGHoverColor?.includes('gradient') ? style?.popularButtonBGHoverColor : `${style?.popularButtonBGHoverColor}`};
		  color: ${style?.popularButtonHoverTextColor};
		}
		${popularbuyButton}{
		 ${isValidCSS("padding", getBoxCSS(style?.popularButtonsPadding?.desktop))}
		 ${isValidCSS("border-radius", getBoxCSS(style?.popularButtonRadiuss))}
		}

		${popularArrowIcon} svg{
		  width: ${style?.popularButtonIconSize};	
		  height: ${style?.popularButtonIconSize};
		  fill: ${style?.popularButtonIconColor};
		}
		${popularButton}:hover .arrow-icon svg {
		  fill: ${style?.popularButtonHoverIconColor};
		}



		${tabBreakpoint}{
			${pricingGrid}{
			  grid-template-columns: repeat(${style?.layoutCol?.tablet}, 1fr);
			  row-gap: ${style?.layRowGap?.tablet};
			  column-gap: ${style?.layColumGap?.tablet};
			}
			${pricingCard}{
			  ${isValidCSS("padding", getBoxCSS(style?.pricingCardPadding?.tablet))}
			}
			${period}{
			  ${isValidCSS("margin", getBoxCSS(style?.periodMargin?.tablet))}
			}
			${description}{
			  ${isValidCSS("margin", getBoxCSS(style?.desMargin?.tablet))}
			}
			${buyButton}{
			  ${isValidCSS("padding", getBoxCSS(style?.buttonPadding?.tablet))}
			}
		   ${popular}{
		     ${isValidCSS("padding", getBoxCSS(style?.popularPadding?.tablet))}
		   }
		   ${popularBadge}{
			 ${isValidCSS("padding", getBoxCSS(style?.popularButtonPadding?.tablet))}
		    }
           ${popularPeriod}{
		     ${isValidCSS("margin", getBoxCSS(style?.popularPeriodMargin?.tablet))}
	        }
		   ${popularDescription}{
		     ${isValidCSS("margin", getBoxCSS(style?.popularDesMargin?.tablet))}
		    }
		   ${popularbuyButton}{
		     ${isValidCSS("padding", getBoxCSS(style?.popularButtonsPadding?.tablet))}
		    }
		}
		${mobileBreakpoint}{
			${pricingGrid}{
				grid-template-columns: repeat(${style?.layoutCol?.mobile}, 1fr);
				row-gap: ${style?.layRowGap?.mobile};
				column-gap: ${style?.layColumGap?.mobile};
			}
			${pricingCard}{
			  ${isValidCSS("padding", getBoxCSS(style?.pricingCardPadding?.mobile))}
			}
			${period}{
			  ${isValidCSS("margin", getBoxCSS(style?.periodMargin?.mobile))}
			}
			${description}{
			  ${isValidCSS("margin", getBoxCSS(style?.desMargin?.mobile))}
			}
			${buyButton}{
			  ${isValidCSS("padding", getBoxCSS(style?.buttonPadding?.mobile))}
			}
		   ${popular}{
		     ${isValidCSS("padding", getBoxCSS(style?.popularPadding?.mobile))}
		   }
		   ${popularBadge}{
			 ${isValidCSS("padding", getBoxCSS(style?.popularButtonPadding?.mobile))}
		    }
           ${popularPeriod}{
		     ${isValidCSS("margin", getBoxCSS(style?.popularPeriodMargin?.mobile))}
	        }
		   ${popularDescription}{
		     ${isValidCSS("margin", getBoxCSS(style?.popularDesMargin?.mobile))}
		    }
		   ${popularbuyButton}{
		     ${isValidCSS("padding", getBoxCSS(style?.popularButtonsPadding?.mobile))}
		    }
		}
		${generateIconFillCSS()};

	`}} />;
}
export default Style;