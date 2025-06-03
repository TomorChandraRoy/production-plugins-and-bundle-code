import { getBoxCSS, getTypoCSS, isValidCSS } from '../../../../bpl-tools/utils/getCSS';

const Style = ({ attributes, id }) => {
	const { style,darkPricingTable } = attributes;



	const generateIconFillCSS = () => {
		return darkPricingTable.map((card, index) =>
			card.features.map((feature, idx) => 
				`.pricing-card-${index} .pricing-feature .pricing-fea-icon .icon-${idx} svg {
                  fill: ${style?.iconToggle ? style?.iconGobalColor : feature.iconColor};
                }`).join('\n')
		).join('\n');
	};


	// dynamicCSS ClassName;
	const mainSl = `#${id}`;
	const blockSl = `${mainSl} .bBlocksDarkPricingTable`;
	const pricingContainer = `${blockSl} .pricing-container`;
	const pricingTableSection = `${pricingContainer} .pricing-table-section`;
	const pricingTableCard = `${pricingTableSection} .pricing-table-card`;
	const pricingCard = `${pricingTableCard} .pricing-card`;
	const pricingTitle = `${pricingCard} .pricing-title`;
	const priceRow = `${pricingCard} .price-row`;
	const pricing = `${priceRow} .pricing`;
	const price = `${priceRow} .price`;
	const period = `${priceRow} .period`;

	const description = `${pricingCard} .description`;
	const pricingFeature = `${pricingCard} .pricing-feature`;
	const pricingFeaIcon = `${pricingFeature} .pricing-fea-icon`;
	const checkmark = `${pricingFeaIcon} .checkmark`;
	const feature = `${pricingFeaIcon} .feature`;

	const button = `${pricingCard} .button`;
    const linkA= `${button} .link-a`;



	// most popular class
	const popular = `${pricingTableCard} .popular`;
	const tag = `${popular} .tag`;
	const popularPricingTitle = `${popular} .pricing-title`;
    const popularPriceRow = `${popular} .price-row`;
	const popularPricing = `${popularPriceRow} .pricing`;
	const popularPrice = `${popularPriceRow} .price`;
	const popularPeriod = `${popularPriceRow} .period`;
	const popularDescription = `${popular} .description`;

	const popularPricingFeature = `${popular} .pricing-feature`;
	const popularPricingFeaIcon = `${popularPricingFeature} .pricing-fea-icon`;
	const popularCheckmark = `${popularPricingFeaIcon} .checkmark`;
	const popularfeature = `${popularPricingFeaIcon} .feature`;

	const popularButton = `${popular} .button`;
	const popularButtonn = `${popular} .popularButton`;
	const popularButtonlinkA  = `${popularButtonn} .link-a`;

	return <style dangerouslySetInnerHTML={{
		__html: `
		${getTypoCSS('', style?.pricingTitleTypo)?.googleFontLink}
		${getTypoCSS('', style?.mostPopularStyle?.pricingPopularTitleTypo)?.googleFontLink}
		${getTypoCSS('', style?.mostPopularStyle?.popularButtonTitleTypo)?.googleFontLink}
		${getTypoCSS('', style?.pricingPriceTypo)?.googleFontLink}
		${getTypoCSS('', style?.mostPopularStyle?.mostPricingPriceTypo)?.googleFontLink}
		${getTypoCSS('', style?.periodTypo)?.googleFontLink}
		${getTypoCSS('', style?.mostPopularStyle?.mostPeriodTypo)?.googleFontLink}
		${getTypoCSS('', style?.desTypo)?.googleFontLink}
		${getTypoCSS('', style?.mostPopularStyle?.mostDesTypo)?.googleFontLink}
		${getTypoCSS('', style?.mostPopularStyle?.mostFeatureTypo)?.googleFontLink}
		${getTypoCSS('', style?.featureTypo)?.googleFontLink}
		${getTypoCSS('', style?.buttonTypo)?.googleFontLink}
		${getTypoCSS('', style?.mostPopularStyle?.mostButtonTypo)?.googleFontLink}

		${getTypoCSS(pricingTitle, style?.pricingTitleTypo)?.styles}
		${getTypoCSS(popularPricingTitle, style?.mostPopularStyle?.pricingPopularTitleTypo)?.styles}
		${getTypoCSS(tag, style?.mostPopularStyle?.popularButtonTitleTypo)?.styles}
		${getTypoCSS(price, style?.pricingPriceTypo)?.styles}
		${getTypoCSS(popularPrice, style?.mostPopularStyle?.mostPricingPriceTypo)?.styles}
		${getTypoCSS(period, style?.periodTypo)?.styles}
		${getTypoCSS(popularPeriod, style?.mostPopularStyle?.mostPeriodTypo)?.styles}
		${getTypoCSS(description, style?.desTypo)?.styles}
		${getTypoCSS(popularDescription, style?.mostPopularStyle?.mostDesTypo)?.styles}
		${getTypoCSS(popularfeature, style?.mostPopularStyle?.mostFeatureTypo)?.styles}
		${getTypoCSS(feature, style?.featureTypo)?.styles}
		${getTypoCSS(button, style?.buttonTypo)?.styles}

		${getTypoCSS(popularButton, style?.mostPopularStyle?.mostButtonTypo)?.styles}

		${pricingContainer} {
		  max-width:${style?.layoutSize};
		}
		${pricingTableSection}{
		  ${isValidCSS("border-radius", getBoxCSS(style?.priceCardRadius))}
		}
		${pricingTableCard}{
		   grid-template-columns: repeat(${style?.layoutCol?.desktop}, minmax(0, 1fr));
		   row-gap:${style?.layRowGap?.desktop};
		   column-gap:${style?.layColumGap?.desktop};
		}
		${generateIconFillCSS()}
		${pricingCard}{
		  background: ${style?.pricingColBg?.includes('gradient') ? style?.pricingColBg : `${style?.pricingColBg}`};
		  ${isValidCSS("padding", getBoxCSS(style?.pricingPadding?.desktop))}
		    
		}
		${pricingTitle}{
		  color: ${style?.pricingTitleColor};
		}
		${pricing} svg{
		  fill:${style?.currencyIconColor};
		  height: ${style?.currencyIconHeight};
		}
		${price}{
		  color: ${style?.pricingPriceColor};
		}
		${period}{
		  color: ${style?.periodColor};
		  ${isValidCSS("margin", getBoxCSS(style?.periodMargin?.desktop))}
		}
		${description}{
		  color: ${style?.desColor};
		}
		${checkmark} svg{
		  height: ${style?.featureIconHeight};
		}
		${feature}{
		  color: ${style?.featureColor};
		}
		${button}{
		  background: ${style?.buttonBg?.includes('gradient') ? style?.buttonBg : `${style?.buttonBg}`};
		  border: ${style?.buttonBorder?.width} ${style?.buttonBorder?.style} ${style?.buttonBorder?.color};
		  ${isValidCSS("border-radius", getBoxCSS(style?.buttonRadius))};
		  ${isValidCSS("padding", getBoxCSS(style?.buttonPadding?.desktop))}
		}
		${button}:hover{
		  background: ${style?.buttonHoverBg?.includes('gradient') ? style?.buttonHoverBg : `${style?.buttonHoverBg}`};
		}
		${linkA}{
		  color: ${style?.buttonTextColor};
		}
		${linkA}:hover{
		 color: ${style?.buttonHoverTextColor};
		}
		



		${popular}{
		  background: ${style?.mostPopularStyle?.mostPricingColBg?.includes('gradient') ? style?.mostPopularStyle?.mostPricingColBg : `${style?.mostPopularStyle?.mostPricingColBg}`};
		  ${isValidCSS("padding",getBoxCSS(style?.mostPopularStyle?.mostPricingPadding?.desktop))}
		}
        ${tag}{
		  color: ${style?.mostPopularStyle?.popularButtonTitleColor};
		  background: ${style?.mostPopularStyle?.popluarButtonBg?.includes('gradient') ? style?.mostPopularStyle?.popluarButtonBg : `${style?.mostPopularStyle?.popluarButtonBg}`};
		  ${isValidCSS("border-radius", getBoxCSS(style?.mostPopularStyle?.popularButtonRadius))}
		  ${isValidCSS("padding",getBoxCSS(style?.mostPopularStyle?.popularButtonPadding?.desktop))}
		  ${isValidCSS("margin",getBoxCSS(style?.mostPopularStyle?.popularButtonMargin?.desktop))}
		}

		${popular}{
		  border-left: ${style?.mostPopularStyle?.mostPricingBorderWidth} solid ${style?.mostPopularStyle?.mostPricingBorderColor};
          border-right: ${style?.mostPopularStyle?.mostPricingBorderWidth} solid ${style?.mostPopularStyle?.mostPricingBorderColor};
		}

		${popularPricingTitle}{
		  color: ${style?.mostPopularStyle?.mostPricingTitleColor};
		}
		${popularPricing} svg{
		  fill:${style?.mostPopularStyle?.mostCurrencyIconColor};
		  height: ${style?.mostPopularStyle?.mostCurrencyIconHeight};
		}
		${popularPrice}{
		  color: ${style?.mostPopularStyle?.mostPricingPriceColor};
		}
		${popularPeriod}{
		  color: ${style?.mostPopularStyle?.mostPeriodColor};
		  ${isValidCSS("margin", getBoxCSS(style?.mostPopularStyle?.mostPeriodMargin?.desktop))}
		}
		${popularDescription}{
		  color: ${style?.mostPopularStyle?.mostDesColor};
		}
		${popularCheckmark} svg{
		  height: ${style?.mostPopularStyle?.mostFeatureIconHeight};
		}
		${popularfeature}{
		  color: ${style?.mostPopularStyle?.mostFeatureColor};
	    }
		${popularButtonlinkA}{
		  color: ${style?.mostPopularStyle?.mostButtonTextColor};
		}
		${popularButtonlinkA}:hover{
		 color: ${style?.mostPopularStyle?.mostButtonHoverTextColor};
		}

		${popularButtonn}{
		  background: ${style?.mostPopularStyle?.mostButtonBg?.includes('gradient') ? style?.mostPopularStyle?.mostButtonBg : `${style?.mostPopularStyle?.mostButtonBg}`};
		  ${isValidCSS("border-radius", getBoxCSS(style?.mostPopularStyle?.mostButtonRadius))};
		  ${isValidCSS("padding",getBoxCSS(style?.mostPopularStyle?.mostButtonPadding?.desktop))}
		  border: ${style?.mostPopularStyle?.mostButtonBorder?.width} ${style?.mostPopularStyle?.mostButtonBorder?.style} ${style?.mostPopularStyle?.mostButtonBorder?.color};
		}

		${popularButtonn}:hover{
		  background: ${style?.mostPopularStyle?.mostButtonHoverBg?.includes('gradient') ? style?.mostPopularStyle?.mostButtonHoverBg : `${style?.mostPopularStyle?.mostButtonHoverBg}`};
		}








		@media only screen and (min-width: 641px) and (max-width: 1024px) {
		  ${pricingTableCard}{
		     grid-template-columns: repeat(${style?.layoutCol?.tablet}, minmax(0, 1fr));
		     row-gap:${style?.layRowGap?.tablet};
		     column-gap:${style?.layColumGap?.tablet};
		    }
		  ${pricingCard}{
		     ${isValidCSS("padding", getBoxCSS(style?.pricingPadding?.tablet))}
		    }
		  ${popular}{
		     ${isValidCSS("padding", getBoxCSS(style?.mostPopularStyle?.mostPricingPadding?.tablet))}
		    }
		  ${tag}{
		     ${isValidCSS("padding", getBoxCSS(style?.mostPopularStyle?.popularButtonPadding?.tablet))}
			 ${isValidCSS("margin", getBoxCSS(style?.mostPopularStyle?.popularButtonMargin?.tablet))}
		    }
		 ${period}{
		     ${isValidCSS("margin", getBoxCSS(style?.periodMargin?.tablet))}
		    }
		 ${popularPeriod}{
		     ${isValidCSS("margin", getBoxCSS(style?.mostPopularStyle?.mostPeriodMargin?.tablet))}
		   }
		 ${button}{
             ${isValidCSS("padding", getBoxCSS(style?.buttonPadding?.tablet))}
		    }
		 ${popularButtonn}{
		     ${isValidCSS("padding",getBoxCSS(style?.mostPopularStyle?.mostButtonPadding?.tablet))}
		    }
		 ${popular}{
		     border-top: ${style?.mostPopularStyle?.mostPricingBorderWidth} solid ${style?.mostPopularStyle?.mostPricingBorderColor};
             border-bottom: ${style?.mostPopularStyle?.mostPricingBorderWidth} solid ${style?.mostPopularStyle?.mostPricingBorderColor};
		    }

		}

		@media only screen and (max-width: 641px) {
		  ${pricingTableCard}{
		     grid-template-columns: repeat(${style?.layoutCol?.mobile}, minmax(0, 1fr)); 
		     row-gap:${style?.layRowGap?.mobile};
		     column-gap:${style?.layColumGap?.mobile};
		    }
		  ${pricingCard}{
		     ${isValidCSS("padding", getBoxCSS(style?.pricingPadding?.mobile))}
		    }
		  ${popular}{
		     ${isValidCSS("padding", getBoxCSS(style?.mostPopularStyle?.mostPricingPadding?.mobile))}
		    }
		  ${tag}{
		     ${isValidCSS("padding", getBoxCSS(style?.mostPopularStyle?.popularButtonPadding?.mobile))}
			 ${isValidCSS("margin", getBoxCSS(style?.mostPopularStyle?.popularButtonMargin?.mobile))}
		    }
		  ${period}{
		     ${isValidCSS("margin", getBoxCSS(style?.periodMargin?.mobile))}
		    }
		 ${popularPeriod}{
		     ${isValidCSS("margin", getBoxCSS(style?.mostPopularStyle?.mostPeriodMargin?.mobile))}
		   }
		 ${button}{
             ${isValidCSS("padding", getBoxCSS(style?.buttonPadding?.mobile))}
		    }
		 ${popularButtonn}{
		     ${isValidCSS("padding",getBoxCSS(style?.mostPopularStyle?.mostButtonPadding?.mobile))}
		    }
		 ${popular}{
		     border-top: ${style?.mostPopularStyle?.mostPricingBorderWidth} solid ${style?.mostPopularStyle?.mostPricingBorderColor};
             border-bottom: ${style?.mostPopularStyle?.mostPricingBorderWidth} solid ${style?.mostPopularStyle?.mostPricingBorderColor};
		    }
		}

	`}} />;
}
export default Style;