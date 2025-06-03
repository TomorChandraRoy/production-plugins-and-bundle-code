
import { getBoxCSS, getTypoCSS, isValidCSS } from '../../../../bpl-tools/utils/getCSS';

const Style = ({ attributes, id, }) => {
	const { style, MinimalPriceCardData ,colorToggle} = attributes;

	const generateIconFillCSS = () => {
		return MinimalPriceCardData.map((card, cardIndex) =>
			card.features.map((feature, featureIndex) => 
				`.pricing-card-${cardIndex} .icon-${featureIndex} svg path {
                  fill: ${colorToggle ? style?.iconGobalColor : feature.iconColor};
                }`).join('\n')
		).join('\n');
	};


	const { priceCardStyle, columns } = style;
	const { priceCardBackgroundColor, cardPadding, cardRadius, borderWidth, borderColor, shadow, hightlightStyle, CardTitleTypo, cardTitleColor, cardMargin, CardAmountTypo, cardAmountColor, CardPeriodTypo, cardPeriodColor, cardPeriodMargin, CardDesTypo, cardDesColor, cardDesMargin, cardButtonTypo, cardButtonPadding, cardButtonRadius, cardButtonColor, cardButtonHightlightColor, cardButtonHightlightBackgroundColor, cardButtonHightlightBgHoverColor, cardButtonBGColor, cardButtonBGHoverColor, propularShadow, propularBorderColor, propularWidth, priceFeatures } = priceCardStyle;


	const { featuresPadding, featuresTypo, featuresMargin, iconWidth, iconMargin } = priceFeatures;
	const { bgColor, color, padding, hightLightRadius, hightLightTypo } = hightlightStyle;

	const boxShadowValue = shadow?.map(s => `${s.hOffset} ${s.vOffset} ${s.blur} ${s.spreed} ${s.color}`).join(', ');
	const popularShadowValue = propularShadow?.map(s => `${s.hOffset} ${s.vOffset} ${s.blur} ${s.spreed} ${s.color}`).join(', ');

	const mainSl = `#${id}`;
	const bBlocksPriceCardContent = `${mainSl} .bBlocksPriceCardContent`;
	const pricingContainer = `${bBlocksPriceCardContent} .pricing-container`;
	const pricingWrapper = `${pricingContainer} .pricing-wrapper`;


	const pricingHeader = `${pricingWrapper} .pricing-header`;
	const pricingH1 = `${pricingHeader} .pricing-h1`;
	const pricingP = `${pricingHeader} .pricing-p`;


	const pricingGrid = `${pricingWrapper} .pricing-grid`;
	const pricingCard = `${pricingGrid} .pricing-card`;
	const popularTag = `${pricingCard} .popular-tag`;
	const cardHeader = `${pricingCard} .card-header`;
	const cardH3 = `${cardHeader} .card-h3`;
	const price = `${cardHeader} .price`;
	const amount = `${price} .amount`;
	const period = `${price} .period`;
	const description = `${cardHeader} .description`;
	const btn = `${cardHeader} .btn`;
	const btnPrimary = `${cardHeader} .btn-primary`;
	const btnOutline = `${cardHeader} .btn-outline`;

	const cardFeatures = `${pricingCard} .card-features`;
	const cardUi = `${cardFeatures} .card-ui`;
	const cardLi = `${cardUi} .card-li`;
	const icon = `${cardLi} .icon`;


	return <style dangerouslySetInnerHTML={{
		__html: `
		${getTypoCSS('', style?.headerStyle?.titleStyle?.typo)?.googleFontLink}
		${getTypoCSS('', style?.headerStyle?.desStyle?.desTypo)?.googleFontLink}
		${getTypoCSS('', hightLightTypo)?.googleFontLink}
		${getTypoCSS('', CardTitleTypo)?.googleFontLink}
		${getTypoCSS('', CardAmountTypo)?.googleFontLink}
		${getTypoCSS('', CardPeriodTypo)?.googleFontLink}
		${getTypoCSS('', CardDesTypo)?.googleFontLink}
		${getTypoCSS('', cardButtonTypo)?.googleFontLink}
		${getTypoCSS('', featuresTypo)?.googleFontLink}

		${getTypoCSS(pricingH1, style?.headerStyle?.titleStyle?.typo)?.styles}
		${getTypoCSS(pricingP, style?.headerStyle?.desStyle?.desTypo)?.styles}
		${getTypoCSS(popularTag, hightLightTypo)?.styles}
		${getTypoCSS(cardH3, CardTitleTypo)?.styles}
		${getTypoCSS(amount, CardAmountTypo)?.styles}
		${getTypoCSS(period, CardPeriodTypo)?.styles}
		${getTypoCSS(description, CardDesTypo)?.styles}
		${getTypoCSS(btn, cardButtonTypo)?.styles}
		${getTypoCSS(cardUi, featuresTypo)?.styles}


		${pricingH1}{
		  color:${style?.headerStyle?.titleStyle?.color};
		}
		${pricingP}{
		  color:${style?.headerStyle?.desStyle?.desColor};
		}
		${pricingGrid}{
		  grid-template-columns: repeat(${columns.desktop}, 1fr);
		  gap:${style?.columnGap};
		}
		${pricingCard}{
		  background: ${priceCardBackgroundColor?.includes('gradient') ? priceCardBackgroundColor : `${priceCardBackgroundColor}`};
		  ${isValidCSS("border-radius", getBoxCSS(cardRadius))}
		  border : ${borderWidth} solid ${borderColor};
		  box-shadow: ${boxShadowValue};
		}
		${pricingCard}.popular{
		  border : ${propularWidth} solid ${propularBorderColor};
		  box-shadow: ${popularShadowValue};
		}
		${popularTag}{
		  background: ${bgColor?.includes('gradient') ? bgColor : `${bgColor}`};
		  color:${color};
		  ${isValidCSS("border-radius", getBoxCSS(hightLightRadius))}
		  ${isValidCSS("padding", getBoxCSS(padding?.desktop))}
		}
		${cardHeader}{
		   ${isValidCSS("padding", getBoxCSS(cardPadding?.desktop))}
		}
		${cardH3}{
		   ${isValidCSS("margin", getBoxCSS(cardMargin?.desktop))}
		   color:${cardTitleColor};
		}
		${amount}{
		  color:${cardAmountColor};
		}
		${period}{
		  color:${cardPeriodColor};
		  ${isValidCSS("margin", getBoxCSS(cardPeriodMargin?.desktop))}
		}
		${description}{
		  color:${cardDesColor};
		  ${isValidCSS("margin", getBoxCSS(cardDesMargin?.desktop))}
		}
		${btn}{
		  ${isValidCSS("border-radius", getBoxCSS(cardButtonRadius))}
		  ${isValidCSS("padding", getBoxCSS(cardButtonPadding?.desktop))}
		}
		${btnOutline}{
			color:${cardButtonColor};
			background: ${cardButtonBGColor?.includes('gradient') ? cardButtonBGColor : `${cardButtonBGColor}`};
		}
		${btnOutline}:hover{
			background: ${cardButtonBGHoverColor?.includes('gradient') ? cardButtonBGHoverColor : `${cardButtonBGHoverColor}`};
		}
		${btnPrimary}{
			color:${cardButtonHightlightColor};
			background: ${cardButtonHightlightBackgroundColor?.includes('gradient') ? cardButtonHightlightBackgroundColor : `${cardButtonHightlightBackgroundColor}`};
		}
		${btnPrimary}:hover{
			background: ${cardButtonHightlightBgHoverColor?.includes('gradient') ? cardButtonHightlightBgHoverColor : `${cardButtonHightlightBgHoverColor}`};
		}
		${cardFeatures}{
		  ${isValidCSS("padding", getBoxCSS(featuresPadding?.desktop))}
		}
		${cardLi}{
		  ${isValidCSS("margin", getBoxCSS(featuresMargin?.desktop))}
		}
		${icon}{
		  width:${iconWidth};
		  height:${iconWidth};
		  ${isValidCSS("margin", getBoxCSS(iconMargin?.desktop))}
		}
   	    ${generateIconFillCSS()}


		@media only screen and (min-width: 641px) and (max-width: 1024px) {
            ${popularTag} {
	          ${isValidCSS("padding", getBoxCSS(padding?.tablet))}
            }
			${cardHeader}{
		      ${isValidCSS("padding", getBoxCSS(cardPadding?.tablet))}
		    }
			${cardH3}{
		      ${isValidCSS("margin", getBoxCSS(cardMargin?.tablet))}
		    }
			${period}{
		      ${isValidCSS("margin", getBoxCSS(cardPeriodMargin?.tablet))}
		    }
			${description}{
		      ${isValidCSS("margin", getBoxCSS(cardDesMargin?.tablet))}
		    }
			${btn}{
		      ${isValidCSS("padding", getBoxCSS(cardButtonPadding?.tablet))}
		    }
			${btn}{
		      ${isValidCSS("padding", getBoxCSS(cardButtonPadding?.tablet))}
		    }
			${cardFeatures}{
		      ${isValidCSS("padding", getBoxCSS(featuresPadding?.tablet))}
		    }
			${cardLi}{
		      ${isValidCSS("margin", getBoxCSS(featuresMargin?.tablet))}
		    }
			${icon}{
		      ${isValidCSS("margin", getBoxCSS(iconMargin?.tablet))}
		    }
			${pricingGrid}{
			  grid-template-columns: repeat(${columns?.tablet}, 1fr);
			}
		}

		@media only screen and (max-width: 641px) {
			${popularTag} {
	          ${isValidCSS("padding", getBoxCSS(padding?.mobile))}
            }
			${cardHeader} {
	          ${isValidCSS("padding", getBoxCSS(cardPadding?.mobile))}
            }
			${cardH3}{
		      ${isValidCSS("margin", getBoxCSS(cardMargin?.mobile))}
		    }
			${period}{
		      ${isValidCSS("margin", getBoxCSS(cardPeriodMargin?.mobile))}
		    }
			${description}{
		      ${isValidCSS("margin", getBoxCSS(cardDesMargin?.mobile))}
		    }
			${btn}{
		      ${isValidCSS("Padding", getBoxCSS(cardButtonPadding?.mobile))}
		    }
			${cardFeatures}{
		      ${isValidCSS("Padding", getBoxCSS(featuresPadding?.mobile))}
		    }
			${cardLi}{
		      ${isValidCSS("margin", getBoxCSS(featuresMargin?.mobile))}
		    }
			${icon}{
		      ${isValidCSS("margin", getBoxCSS(iconMargin?.mobile))}
		    }
		    ${pricingGrid}{
			  grid-template-columns: repeat(${columns?.mobile}, 1fr);
			}
	    }
	`}} />;
}
export default Style;
