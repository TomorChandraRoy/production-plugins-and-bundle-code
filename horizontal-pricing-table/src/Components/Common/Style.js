import {getBoxCSS, getTypoCSS, isValidCSS } from '../../../../bpl-tools/utils/getCSS';

const Style = ({ attributes, id, }) => {
    const { style,horizontalTableData,iconToggle,featuresColumn} = attributes;


    // single Icon Color
		const generateIconFillCSS = () => {
		return horizontalTableData?.map((card, cardIndex) =>
			card.features.map((feature, featureIndex) => 
				`.pricing-card-${cardIndex} .icon-${featureIndex} svg {
                  fill: ${iconToggle ? style?.tabileRowStyle?.featuresSectionStyle?.checkmarkGobalColor : feature.iconColor};
                }`).join('\n')
		).join('\n');
	};


	const tableShadowValue = style?.tabileRowStyle?.tableShadow?.map(s => `${s.hOffset} ${s.vOffset} ${s.blur} ${s.spreed} ${s.color}`).join(', ');
	const buttonShadowValue = style?.tabileRowStyle?.actionStyle?.getStartedShadow?.map(s => `${s.hOffset} ${s.vOffset} ${s.blur} ${s.spreed} ${s.color}`).join(', ');
	const featuredShadowValue = style?.tabileRowStyle?.featuredStyle?.featuredShadow?.map(s => `${s.hOffset} ${s.vOffset} ${s.blur} ${s.spreed} ${s.color}`).join(', ');
	const featuredButtonShadowValue = style?.tabileRowStyle?.featuredStyle?.actionStyle?.getStartedShadow?.map(s => `${s.hOffset} ${s.vOffset} ${s.blur} ${s.spreed} ${s.color}`).join(', ');


	const mainSl = `#${id}`;
	const blockSl = `${mainSl} .bBlocksHorizontalPricingTable`;
	const mainContainer=`${blockSl} .main-container`; 
	const pricingContainer=`${mainContainer} .pricing-container`; 
	const pricingCard=`${pricingContainer} .pricing-card`; 
	const cardSection=`${pricingCard} .card-section`; 
	const cardH2=`${pricingCard} .card-h2`; 
	const price=`${pricingCard} .price`; 
	const amount=`${price} .amount`; 
	const period=`${price} .period`; 
	const description=`${cardSection} .description`; 
	const featuresSection=`${pricingCard} .features-section`; 
	const featureList=`${featuresSection} .feature-list`; 
	const feature=`${featureList} .feature`; 
	const checkmark=`${feature} .checkmark`; 
	const feaTtem=`${feature} .fea-item`; 
	const actionSection=`${pricingCard} .action-section`; 
	const linka=`${actionSection} .link-a`; 
	const getStarted=`${linka} .get-started`; 

	const featured=`${pricingContainer} .featured`; 
	const featuredCardSection=`${featured} .card-section`; 
	const featuredCardH2=`${featuredCardSection} .card-h2`;
	const featuredPrice=`${featuredCardSection} .price`;

	const featuredAmount=`${featuredPrice} .amount`; 
	const featuredPeriod=`${featuredPrice} .period`;
	const featuredDescription=`${featuredCardSection} .description`;  

	const featuredSection=`${featured} .features-section`; 
	const featuredList=`${featuredSection} .feature-list`; 
	const featuredFeature=`${featuredList} .feature`; 
	const featuredCheckmark=`${featuredFeature} .checkmark`; 
	const featuredFeaItem=`${featuredFeature} .fea-item`;

	const featuredActionSection=`${featured} .action-section`; 
	const featuredlinka=`${featured} .link-a`; 
	const featuredGetStarted=`${featuredlinka} .get-started`; 

	const footerContent=`${mainContainer} .footer-content`; 
	const footerSection=`${mainContainer} .footer-section`; 
	const footerText=`${footerSection} .footer-text`; 
	const footerh3=`${footerText} .footer-h3`; 
	const footerp=`${footerText} .footer-p`; 
	const footerIcon=`${footerSection} .footer-icon`; 
	const footerIconText=`${footerIcon} .footer-icon-text`; 
	const footerIcons=`${footerIcon} .icon`; 

	return <style dangerouslySetInnerHTML={{
		__html: `
	    ${getTypoCSS('', style?.tabileRowStyle?.titleStyle?.titleTypo)?.googleFontLink}
	    ${getTypoCSS('', style?.tabileRowStyle?.priceStyle?.amountTypo)?.googleFontLink}
	    ${getTypoCSS('', style?.tabileRowStyle?.priceStyle?.periodTypo)?.googleFontLink}
	    ${getTypoCSS('', style?.tabileRowStyle?.priceStyle?.descriptionTypo)?.googleFontLink}
	    ${getTypoCSS('', style?.tabileRowStyle?.featuresSectionStyle?.featureTypo)?.googleFontLink}
	    ${getTypoCSS('', style?.tabileRowStyle?.actionStyle?.getStartedTypo)?.googleFontLink}
	    ${getTypoCSS('', style?.tabileRowStyle?.featuredStyle?.featuredTitleTypo)?.googleFontLink}
	    ${getTypoCSS('', style?.tabileRowStyle?.featuredStyle?.featuredAmountTypo)?.googleFontLink}
	    ${getTypoCSS('', style?.tabileRowStyle?.featuredStyle?.featuredPeriodTypo)?.googleFontLink}
	    ${getTypoCSS('', style?.tabileRowStyle?.featuredStyle?.featuredDescriptionTypo)?.googleFontLink}
	    ${getTypoCSS('', style?.tabileRowStyle?.featuredStyle?.featuredFeatureSectionStyle?.featureTypo)?.googleFontLink}
	    ${getTypoCSS('', style?.tabileRowStyle?.featuredStyle?.actionStyle?.getStartedTypo)?.googleFontLink}
	    ${getTypoCSS('', style?.tabileRowStyle?.footerStyle?.footerTitleTypo)?.googleFontLink}
	    ${getTypoCSS('', style?.tabileRowStyle?.footerStyle?.footerDesTypo)?.googleFontLink}
	    ${getTypoCSS('', style?.tabileRowStyle?.footerStyle?.footerIconTextTypo)?.googleFontLink}

	   

        ${getTypoCSS(cardH2, style?.tabileRowStyle?.titleStyle?.titleTypo)?.styles}
        ${getTypoCSS(amount, style?.tabileRowStyle?.priceStyle?.amountTypo)?.styles}
        ${getTypoCSS(period, style?.tabileRowStyle?.priceStyle?.periodTypo)?.styles}
        ${getTypoCSS(description, style?.tabileRowStyle?.priceStyle?.descriptionTypo)?.styles}
        ${getTypoCSS(feaTtem, style?.tabileRowStyle?.featuresSectionStyle?.featureTypo)?.styles}
        ${getTypoCSS(getStarted, style?.tabileRowStyle?.actionStyle?.getStartedTypo)?.styles}
        ${getTypoCSS(featuredCardH2, style?.tabileRowStyle?.featuredStyle?.featuredTitleTypo)?.styles}
        ${getTypoCSS(featuredAmount, style?.tabileRowStyle?.featuredStyle?.featuredAmountTypo)?.styles}
        ${getTypoCSS(featuredPeriod, style?.tabileRowStyle?.featuredStyle?.featuredPeriodTypo)?.styles}
        ${getTypoCSS(featuredDescription, style?.tabileRowStyle?.featuredStyle?.featuredDescriptionTypo)?.styles}
        ${getTypoCSS(featuredFeaItem, style?.tabileRowStyle?.featuredStyle?.featuredFeatureSectionStyle?.featureTypo)?.styles}
        ${getTypoCSS(featuredGetStarted, style?.tabileRowStyle?.featuredStyle?.actionStyle?.getStartedTypo)?.styles}
        ${getTypoCSS(footerh3, style?.tabileRowStyle?.footerStyle?.footerTitleTypo)?.styles}
        ${getTypoCSS(footerp, style?.tabileRowStyle?.footerStyle?.footerDesTypo)?.styles}
        ${getTypoCSS(footerIconText, style?.tabileRowStyle?.footerStyle?.footerIconTextTypo)?.styles}
   
        

        ${mainContainer} {
		   max-width:${style?.rowWidth};
		 }
		${pricingContainer}{
			gap:${style?.tabileRowStyle?.rowGap};
		}
		${pricingCard}{
		  background: ${style?.tabileRowStyle?.backgroundColor?.includes('gradient') ? style?.tabileRowStyle?.backgroundColor : `${style?.tabileRowStyle?.backgroundColor}`};
		  ${isValidCSS("border-radius", getBoxCSS(style?.tabileRowStyle?.tableRadius))}
		  box-shadow: ${tableShadowValue};
		  border: ${style?.tabileRowStyle?.tableBorder?.width} ${style?.tabileRowStyle?.tableBorder?.style} ${style?.tabileRowStyle?.tableBorder?.color};
		}
		${cardSection}{
		  ${isValidCSS("padding", getBoxCSS(style?.tabileRowStyle?.tablePadding?.desktop))}
		}
		${cardH2}{
		  color:${style?.tabileRowStyle?.titleStyle?.titleColor};
		  ${isValidCSS("margin", getBoxCSS(style?.tabileRowStyle?.titleStyle?.titleMargin?.desktop))}
		}
		${price}{
		  ${isValidCSS("margin", getBoxCSS(style?.tabileRowStyle?.priceStyle?.priceMarging?.desktop))}
		}
		${amount}{
		  color:${style?.tabileRowStyle?.priceStyle?.amountColor};
		}
		${amount} svg{
		  height:${style?.tabileRowStyle?.priceIconWidth};
		  fill:${style?.tabileRowStyle?.priceIconColor};
		}
		${period}{
		  color:${style?.tabileRowStyle?.priceStyle?.periodColor};
		  ${isValidCSS("margin", getBoxCSS(style?.tabileRowStyle?.priceStyle?.periodMargin?.desktop))}
		}
		${description}{
		  color:${style?.tabileRowStyle?.priceStyle?.descriptionColor};
		}
		${featuresSection}{
		  background: ${style?.tabileRowStyle?.featuresSectionStyle?.featuresBackgroundColor?.includes('gradient') ? style?.tabileRowStyle?.featuresSectionStyle?.featuresBackgroundColor : `${style?.tabileRowStyle?.featuresSectionStyle?.featuresBackgroundColor}`};
		  ${isValidCSS("padding", getBoxCSS(style?.tabileRowStyle?.featuresSectionStyle?.featuresPadding?.desktop))}
		
		}
		${featureList}{
		  gap:${style?.tabileRowStyle?.featuresSectionStyle?.featurelistGap};
		  grid-template-columns: repeat(${featuresColumn}, 1fr);
		}
        ${feaTtem}{
		 color:${style?.tabileRowStyle?.featuresSectionStyle?.featureColor};
		}
		${checkmark}{
		  height:${style?.tabileRowStyle?.featuresSectionStyle?.checkmarkWidth};
		  width:${style?.tabileRowStyle?.featuresSectionStyle?.checkmarkWidth};
		}
        ${generateIconFillCSS()}
		${actionSection}{
		  background: ${style?.tabileRowStyle?.featuresSectionStyle?.featuresBackgroundColor?.includes('gradient') ? style?.tabileRowStyle?.featuresSectionStyle?.featuresBackgroundColor : `${style?.tabileRowStyle?.featuresSectionStyle?.featuresBackgroundColor}`};
		}
		${getStarted}{
		  color:${style?.tabileRowStyle?.actionStyle?.getStartedColor};
		  box-shadow:${buttonShadowValue};
		  background: ${style?.tabileRowStyle?.actionStyle?.getStartedBgColor?.includes('gradient') ? style?.tabileRowStyle?.actionStyle?.getStartedBgColor : `${style?.tabileRowStyle?.actionStyle?.getStartedBgColor}`};
		  ${isValidCSS("border-radius", getBoxCSS(style?.tabileRowStyle?.actionStyle?.getStartedRadius))}
		  ${isValidCSS("padding", getBoxCSS(style?.tabileRowStyle?.actionStyle?.getStartedPadding?.desktop))}
		}
		${linka}:hover .get-started{
		   background-color: ${style?.tabileRowStyle?.actionStyle?.getStartedBgHover}!important;
		   color:${style?.tabileRowStyle?.actionStyle?.getStartedBgHoverTextColor};
		}
        ${featured}{
		  background: ${style?.tabileRowStyle?.featuredStyle?.featuredBgColor?.includes('gradient') ? style?.tabileRowStyle?.featuredStyle?.featuredBgColor : `${style?.tabileRowStyle?.featuredStyle?.featuredBgColor}`};
		  ${isValidCSS("border-radius", getBoxCSS(style?.tabileRowStyle?.featuredStyle?.featuredRadius))}
		  border: ${style?.tabileRowStyle?.featuredStyle?.featuredBorder?.width} ${style?.tabileRowStyle?.featuredStyle?.featuredBorder?.style} ${style?.tabileRowStyle?.featuredStyle?.featuredBorder?.color};
		  box-shadow:${featuredShadowValue};
		}
		${featuredCardSection}{
		 ${isValidCSS("padding", getBoxCSS(style?.tabileRowStyle?.featuredStyle?.featuredPadding?.desktop))}
		}
		${featuredCardH2}{
		 color:${style?.tabileRowStyle?.featuredStyle?.featuredTitleColor};
		 ${isValidCSS("margin", getBoxCSS(style?.tabileRowStyle?.featuredStyle?.featuredTitleMargin?.desktop))}
		}
		${featuredPrice}{
           ${isValidCSS("margin", getBoxCSS(style?.tabileRowStyle?.featuredStyle?.featuredPriceMarging?.desktop))}
		}
        ${featuredAmount}{
		   color:${style?.tabileRowStyle?.featuredStyle?.featuredAmountColor};
		}
		${featuredAmount} svg{
		  height:${style?.tabileRowStyle?.featuredStyle?.featuredPriceIconWidth};
		  fill:${style?.tabileRowStyle?.featuredStyle?.featuredPriceIconColor};
		}
		${featuredPeriod}{
		  color:${style?.tabileRowStyle?.featuredStyle?.featuredPeriodColor};
		  ${isValidCSS("margin", getBoxCSS(style?.tabileRowStyle?.featuredStyle?.featuredPeriodMargin?.desktop))}
		}
		${featuredDescription}{
		  color:${style?.tabileRowStyle?.featuredStyle?.featuredDescriptionColor};
		}
		${featuredSection}{
		 ${isValidCSS("padding", getBoxCSS(style?.tabileRowStyle?.featuredStyle?.featuredFeatureSectionStyle?.featuresPadding?.desktop))}
		  background: ${style?.tabileRowStyle?.featuredStyle?.featuredFeatureSectionStyle?.featuresBackgroundColor?.includes('gradient') ? style?.tabileRowStyle?.featuredStyle?.featuredFeatureSectionStyle?.featuresBackgroundColor : `${style?.tabileRowStyle?.featuredStyle?.featuredFeatureSectionStyle?.featuresBackgroundColor}`};
		}
		${featuredList}{
		  gap:${style?.tabileRowStyle?.featuredStyle?.featuredFeatureSectionStyle?.featurelistGap};
		  grid-template-columns: repeat(${featuresColumn}, 1fr);
		}
		${featuredCheckmark}{
		  height:${style?.tabileRowStyle?.featuredStyle?.featuredFeatureSectionStyle?.checkmarkWidth};
		  width:${style?.tabileRowStyle?.featuredStyle?.featuredFeatureSectionStyle?.checkmarkWidth};
		}
		${featuredFeaItem}{
		 color: ${style?.tabileRowStyle?.featuredStyle?.featuredFeatureSectionStyle?.featureColor};
		}
		${featuredActionSection}{
		  background: ${style?.tabileRowStyle?.featuredStyle?.featuredFeatureSectionStyle?.featuresBackgroundColor?.includes('gradient') ? style?.tabileRowStyle?.featuredStyle?.featuredFeatureSectionStyle?.featuresBackgroundColor : `${style?.tabileRowStyle?.featuredStyle?.featuredFeatureSectionStyle?.featuresBackgroundColor}`};
		}
		${featuredGetStarted}{
		 color:${style?.tabileRowStyle?.featuredStyle?.actionStyle?.getStartedColor};
		 box-shadow:${featuredButtonShadowValue};
		 background: ${style?.tabileRowStyle?.featuredStyle?.actionStyle?.getStartedBgColor?.includes('gradient') ? style?.tabileRowStyle?.featuredStyle?.actionStyle?.getStartedBgColor : `${style?.tabileRowStyle?.featuredStyle?.actionStyle?.getStartedBgColor}`};
		 ${isValidCSS("border-radius", getBoxCSS(style?.tabileRowStyle?.featuredStyle?.actionStyle?.getStartedRadius))}
		 ${isValidCSS("padding", getBoxCSS(style?.tabileRowStyle?.featuredStyle?.actionStyle?.getStartedPadding?.desktop))}
		}
		${featuredlinka}:hover .get-started{
		  background-color: ${style?.tabileRowStyle?.featuredStyle?.actionStyle?.getStartedBgHoverBg}!important;
		  color:${style?.tabileRowStyle?.featuredStyle?.actionStyle?.getStartedTextHoverColor};
		}
		${footerContent}{
		
		}
        ${footerh3}{
	     color:${style?.tabileRowStyle?.footerStyle?.footerTitleColor};
        }
		${footerp}{
		  color:${style?.tabileRowStyle?.footerStyle?.footerDesColor};
		  ${isValidCSS("margin", getBoxCSS(style?.tabileRowStyle?.footerStyle?.footerDesMargin?.desktop))}
		}
	    ${footerIconText}{
		  color:${style?.tabileRowStyle?.footerStyle?.footerIconTextColor};
	    }
	    ${footerIconText}:hover{
		  color:${style?.tabileRowStyle?.footerStyle?.footerIconTextHoverColor};
	    }
        ${footerIcons} svg{
		  height:${style?.tabileRowStyle?.footerStyle?.footerIconWidth};
		  width:${style?.tabileRowStyle?.footerStyle?.footerIconWidth};
		  fill:${style?.tabileRowStyle?.footerStyle?.footerIconHoverColor};
		}





	    @media only screen and (min-width: 641px) and (max-width: 1024px) {
		  ${cardSection}{
             ${isValidCSS("padding", getBoxCSS(style?.tabileRowStyle?.tablePadding?.tablet))}
		  }
		  ${cardH2}{
		    ${isValidCSS("margin", getBoxCSS(style?.tabileRowStyle?.titleStyle?.titleMargin?.tablet))}
		  }
		  ${price}{
		    ${isValidCSS("margin", getBoxCSS(style?.tabileRowStyle?.priceStyle?.priceMarging?.tablet))}
		  }
		  ${period}{
		   ${isValidCSS("margin", getBoxCSS(style?.tabileRowStyle?.priceStyle?.periodMargin?.tablet))}
		  }
		  ${featuresSection}{
		   ${isValidCSS("padding", getBoxCSS(style?.tabileRowStyle?.featuresSectionStyle?.featuresPadding?.tablet))}
		  }
		  ${getStarted}{
		   ${isValidCSS("padding", getBoxCSS(style?.tabileRowStyle?.actionStyle?.getStartedPadding?.tablet))}
		  }
		  ${featuredCardH2}{
		   ${isValidCSS("margin", getBoxCSS(style?.tabileRowStyle?.featuredStyle?.featuredTitleMargin?.tablet))}
		  }
		  ${featuredPrice}{
           ${isValidCSS("margin", getBoxCSS(style?.tabileRowStyle?.featuredStyle?.featuredPriceMarging?.tablet))}
		  }
		  ${featuredPeriod}{
		   ${isValidCSS("margin", getBoxCSS(style?.tabileRowStyle?.featuredStyle?.featuredPeriodMargin?.tablet))}
		  }
		  ${featuredSection}{
		    ${isValidCSS("padding", getBoxCSS(style?.tabileRowStyle?.featuredStyle?.featuredFeatureSectionStyle?.featuresPadding?.tablet))}
		  }

		 ${featuredGetStarted}{
		 	${isValidCSS("padding", getBoxCSS(style?.tabileRowStyle?.featuredStyle?.actionStyle?.getStartedPadding?.tablet))}
		 }
		 ${footerp}{
		  ${isValidCSS("margin", getBoxCSS(style?.tabileRowStyle?.footerStyle?.footerDesMargin?.tablet))}
		 }
		}

	    @media only screen and (max-width: 641px) {
		  ${cardSection}{
		    ${isValidCSS("padding", getBoxCSS(style?.tabileRowStyle?.tablePadding?.mobile))}
		  }
		  ${cardH2}{
		    ${isValidCSS("margin", getBoxCSS(style?.tabileRowStyle?.titleStyle?.titleMargin?.mobile))}
		  }
		  ${price}{
		   ${isValidCSS("margin", getBoxCSS(style?.tabileRowStyle?.priceStyle?.priceMarging?.mobile))}
		  }
		  ${period}{
		   ${isValidCSS("margin", getBoxCSS(style?.tabileRowStyle?.priceStyle?.periodMargin?.mobile))}
		  }
		  ${featuresSection}{
		   ${isValidCSS("padding", getBoxCSS(style?.tabileRowStyle?.featuresSectionStyle?.featuresPadding?.mobile))}
		  }
		  ${getStarted}{
		   ${isValidCSS("padding", getBoxCSS(style?.tabileRowStyle?.actionStyle?.getStartedPadding?.mobile))}
		 }
		 ${featuredCardH2}{
		   ${isValidCSS("margin", getBoxCSS(style?.tabileRowStyle?.featuredStyle?.featuredTitleMargin?.mobile))}
	     }
		 ${featuredPrice}{
           ${isValidCSS("margin", getBoxCSS(style?.tabileRowStyle?.featuredStyle?.featuredPriceMarging?.mobile))}
		  }
		  ${featuredPeriod}{
		   ${isValidCSS("margin", getBoxCSS(style?.tabileRowStyle?.featuredStyle?.featuredPeriodMargin?.mobile))}
		  }
		  ${featuredSection}{
		    ${isValidCSS("padding", getBoxCSS(style?.tabileRowStyle?.featuredStyle?.featuredFeatureSectionStyle?.featuresPadding?.mobile))}
		  }
		 ${featuredGetStarted}{
		 	${isValidCSS("padding", getBoxCSS(style?.tabileRowStyle?.featuredStyle?.actionStyle?.getStartedPadding?.mobile))}
		 }
		 ${footerp}{
		  ${isValidCSS("margin", getBoxCSS(style?.tabileRowStyle?.footerStyle?.footerDesMargin?.mobile))}
		 }
		}

	`}} />;
}
export default Style;
	