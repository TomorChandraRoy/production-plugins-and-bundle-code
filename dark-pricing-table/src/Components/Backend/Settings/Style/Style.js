import { __ } from "@wordpress/i18n";
import {PanelBody,PanelRow,__experimentalSpacer as Spacer,__experimentalUnitControl as UnitControl,__experimentalBorderControl as BorderControl,} from "@wordpress/components";
import { updateData } from "../../../../utils/functions";
import { BoxControl, ColorControl, Device, Label, SolidBackground, Typography} from "../../../../../../bpl-tools/Components";
import { mostPeriodMargin, periodMargin, resetButtonPadding, resetButtonRadius, resetButtonRadiuss, resetMostButtonPadding, resetMostButtonRadiuss, resetMostPricingPadding, resetpopularButtonMargin, resetPopularButtonPadding,  resetpriceCardRadius,  resetPricingPadding } from "../../../../utils/options";
import { emUnit, perUnit, pxUnit } from "../../../../../../bpl-tools/utils/options";

const Style = ({ attributes, setAttributes, device }) => {
  const { style } = attributes;

  return (
    <>
      <PanelBody className="bPlPanelBody" title={__("Pricing Table Style", "b-pricing-table")} initialOpen={false}>
        <Spacer />
        <SolidBackground
          label={__("Background Color :")}
          value={style?.pricingColBg} 
          onChange={(bgcolor) => { setAttributes({ style: updateData(style, bgcolor, "pricingColBg") });}}
        />
        <Spacer />
        <PanelRow>
          <Label className="">{__("Padding :", "b-pricing-table")}</Label>
          <Device />
        </PanelRow>
        <BoxControl
          values={style?.pricingPadding[device]}  resetValues={resetPricingPadding}
          onChange={(padd) => { setAttributes({ style: updateData(style, padd, "pricingPadding", device) }); }}
        />
        <Spacer />
        <BoxControl 
          label={__("Radius :", "b-pricing-table")}
            values={style?.priceCardRadius} resetValues={resetpriceCardRadius}
          onChange={(value) => { setAttributes({ style: updateData(style, value, "priceCardRadius") }); }}
        />
        <Spacer />
        <Typography
          label={__("Title Typography :", "b-pricing-table")}
          value={style?.pricingTitleTypo}
          defaults={{fontSize: { desktop: 20, tablet: 20, mobile: 20 }}}
          onChange={(typog) => { setAttributes({ style: updateData(style, typog, "pricingTitleTypo") }); }}
        />
        <Spacer />
        <ColorControl
          label={__("Title Color :", "b-pricing-table")} defaultColor="#ffffff"
          value={style?.pricingTitleColor}
          onChange={(newColor) => { setAttributes({ style: updateData(style, newColor, 'pricingTitleColor') }); }}
        />
        <Spacer />
        <UnitControl label={__('Currency Size:', 'b-pricing-table')} labelPosition='left'
          value={style?.currencyIconHeight}
          units={[pxUnit(), perUnit(), emUnit()]}
          onChange={(iconWidth) => { setAttributes({ style: updateData(style, iconWidth, "currencyIconHeight") }); }}
        />
        <Spacer />
        <ColorControl
          label={__("Currency Symbol Color", "b-pricing-table")}
          defaultColor="#ffffff"
          value={style?.currencyIconColor}
          onChange={(color) =>setAttributes({style: updateData(style, color, 'currencyIconColor')})}
        />
        <Spacer />
        <Typography
          label={__("Price Typography :", "b-pricing-table")}
          value={style?.pricingPriceTypo}
          defaults={{fontSize: { desktop: 48, tablet: 48, mobile: 48}}}
          onChange={(typog) => { setAttributes({ style: updateData(style, typog, "pricingPriceTypo") }); }}
        />
        <Spacer />
        <ColorControl
          label={__("Price Color :", "b-pricing-table")} defaultColor="#ffffff"
          value={style?.pricingPriceColor}
          onChange={(newColor) => { setAttributes({ style: updateData(style, newColor, 'pricingPriceColor') }); }}
        />
        <Spacer />
        <Typography
          label={__("Period Typography :", "b-pricing-table")}
          value={style?.periodTypo}
          defaults={{fontSize: { desktop: 20, tablet: 20, mobile: 20}}}
          onChange={(typog) => { setAttributes({ style: updateData(style, typog, "periodTypo") }); }}
        />
        <Spacer />
        <ColorControl
          label={__("Period Color :", "b-pricing-table")} defaultColor="#9ca3af"
          value={style?.periodColor}
          onChange={(newColor) => { setAttributes({ style: updateData(style, newColor, 'periodColor') }); }}
        />
       <Spacer />
        <PanelRow>
          <Label className="">{__("Period Margin :", "b-pricing-table")}</Label>
          <Device />
        </PanelRow>
        <BoxControl
          values={style?.periodMargin[device]}
          resetValues={periodMargin}
          onChange={(marin) => { setAttributes({ style: updateData(style, marin, "periodMargin", device) }); }}
        />
        <Spacer />

        <Typography
          label={__("Description Typography :", "b-pricing-table")}
          value={style?.desTypo}
          defaults={{fontSize: { desktop: 22, tablet: 22, mobile: 22 }}}
          onChange={(typog) => { setAttributes({ style: updateData(style, typog, "desTypo") }); }}
        />
        <Spacer />
        <ColorControl
          label={__("Description Color :", "b-pricing-table")} defaultColor="#9ca3af"
          value={style?.desColor}
          onChange={(newColor) => { setAttributes({ style: updateData(style, newColor, 'desColor') }); }}
        />
       <Spacer />

       <UnitControl
          label={__("Feature Icon Size :", "b-pricing-table")}
          value={style?.featureIconHeight}
          onChange={(width) => { setAttributes({ style: updateData(style, width, 'featureIconHeight') }); }}
        />
        <Spacer />
        <Typography
          label={__("Feature Typography :", "b-pricing-table")}
          value={style?.featureTypo}
          defaults={{fontSize: { desktop: 18, tablet: 18, mobile: 18 }}}
          onChange={(typog) => { setAttributes({ style: updateData(style, typog,"featureTypo") }); }}
        />
        <Spacer />
        <ColorControl
          label={__("Feature Color :", "b-pricing-table")} defaultColor="#d1d5db"
          value={style?.featureColor}
          onChange={(newColor) => { setAttributes({ style: updateData(style, newColor,'featureColor') }); }}
        />
        <Spacer />

        {/* BUTTON */}
        <Typography
          label={__("Button Typography :", "b-pricing-table")}
          value={style?.buttonTypo}
          defaults={{fontSize: { desktop: 16, tablet: 16, mobile: 16 }}}
          onChange={(typog) => { setAttributes({ style: updateData(style, typog, "buttonTypo") }); }}
        />
        <Spacer />
        <ColorControl
          label={__("Button Text Color :", "b-pricing-table")} defaultColor="#ffffff"
          value={style?.buttonTextColor}
          onChange={(newColor) => { setAttributes({ style: updateData(style, newColor,'buttonTextColor') }); }}
        />
        <Spacer />
        <SolidBackground
          label={__("Button Bg Color :")}
          value={style?.buttonBg}
          onChange={(bgcolor) => { setAttributes({ style: updateData(style, bgcolor, "buttonBg") }); }}
        />
        <Spacer />
        <SolidBackground defaultColor="#4b5563"
          label={__("Button Bg Hover Color  :")}
          value={style?.buttonHoverBg}
          onChange={(bgcolor) => { setAttributes({ style: updateData(style, bgcolor, "buttonHoverBg") }); }}
        />
        <Spacer />
        <ColorControl defaultColor="#ffffff"
          label={__("Button Hover Text Color  :")}
          value={style?.buttonHoverTextColor}
          onChange={(bgcolor) => { setAttributes({ style: updateData(style, bgcolor, "buttonHoverTextColor") }); }}
        />
        <Spacer />
        <BorderControl
          label={__("Button Border:", "b-pricing-table")} 
          value={style?.buttonBorder}
          onChange={(color) => { setAttributes({ style: updateData(style, color, 'buttonBorder') }); }}
        />
        <Spacer />
        <BoxControl label={__("Button Radius :")}
          values={style?.buttonRadius} resetValues={resetButtonRadiuss}
          onChange={(value) => { setAttributes({ style: updateData(style, value, "buttonRadius") }); }}
        />
        <Spacer />
        <PanelRow>
          <Label className="">{__("Button Padding :", "b-pricing-table")}</Label>
          <Device />
        </PanelRow>
        <BoxControl
          values={style?.buttonPadding[device]}
          resetValues={resetButtonPadding}
          onChange={(padd) => {setAttributes({ style: updateData(style, padd, "buttonPadding", device) });}}
        />
        <Spacer />
      </PanelBody>

      {/* Most Popular */}
      <PanelBody className="bPlPanelBody" title={__(" Popular Pricing Table Style", "b-pricing-table")} initialOpen={false}>
      <Spacer />
        <SolidBackground
          label={__("Background Color :")}
          value={style?.mostPopularStyle?.mostPricingColBg} 
          onChange={(bgcolor) => { setAttributes({ style: updateData(style, bgcolor,"mostPopularStyle","mostPricingColBg") });}}
        />
        <Spacer />
        <PanelRow>
          <Label className="">{__("Padding :", "b-pricing-table")}</Label>
          <Device />
        </PanelRow>
        <BoxControl
          values={style?.mostPopularStyle?.mostPricingPadding[device]}
          resetValues={resetMostPricingPadding}
          onChange={(padd) => { setAttributes({ style: updateData(style, padd,"mostPopularStyle","mostPricingPadding", device) }); }}
        />
        <Spacer />

        <SolidBackground
          label={__("Popular Button Bg :")}
          value={style?.mostPopularStyle?.popluarButtonBg} 
          onChange={(bgcolor) => { setAttributes({ style: updateData(style, bgcolor,"mostPopularStyle","popluarButtonBg") });}}
        />
        <Spacer />
        <Typography
          label={__("Popular Title Typography :", "b-pricing-table")}
          value={style?.mostPopularStyle?.popularButtonTitleTypo}
          defaults={{
            fontSize: { desktop: 12, tablet: 12, mobile: 12 },
          }}
          onChange={(typog) => { setAttributes({ style: updateData(style, typog,"mostPopularStyle","popularButtonTitleTypo") }); }}
        />
        <Spacer />
        <ColorControl
          label={__("Popular Button Title Color :", "b-pricing-table")} defaultColor="#ffffff"
          value={style?.mostPopularStyle?.popularButtonTitleColor}
          onChange={(newColor) => { setAttributes({ style: updateData(style, newColor,"mostPopularStyle","popularButtonTitleColor") }); }}    
         />
        <Spacer />
        <BoxControl label={__("Popular Button Radius :")}
          values={style?.mostPopularStyle?.popularButtonRadius} resetValues={resetButtonRadius}
          onChange={(value) => { setAttributes({ style: updateData(style, value, "mostPopularStyle", "popularButtonRadius") }); }}
        />
        <Spacer />
        <PanelRow>
          <Label className="">{__("Popular Button Padding :", "b-pricing-table")}</Label>
          <Device />
        </PanelRow>
        <BoxControl
          values={style?.mostPopularStyle?.popularButtonPadding[device]}
          resetValues={resetPopularButtonPadding}
          onChange={(padd) => { setAttributes({ style: updateData(style, padd,"mostPopularStyle","popularButtonPadding", device) }); }}
        />
        <Spacer />
        <PanelRow>
          <Label className="">{__("Popular Button Margin :", "b-pricing-table")}</Label>
          <Device />
        </PanelRow>
        <BoxControl
          values={style?.mostPopularStyle?.popularButtonMargin[device]}
          resetValues={resetpopularButtonMargin}
          onChange={(padd) => { setAttributes({ style: updateData(style, padd,"mostPopularStyle","popularButtonMargin", device) }); }}
        />

        <Spacer />
        <UnitControl
          label={__("Border :", "b-pricing-table")}
          value={style?.mostPopularStyle?.mostPricingBorderWidth}
          onChange={(color) => { setAttributes({ style: updateData(style, color,'mostPopularStyle','mostPricingBorderWidth') }); }}
        />
        <Spacer />
        <ColorControl
          label={__("Border Color :", "b-pricing-table")} defaultColor="#c5baba26"
          value={style?.mostPopularStyle?.mostPricingBorderColor}
          onChange={(newColor) => { setAttributes({ style: updateData(style, newColor,"mostPopularStyle","mostPricingBorderColor") }); }}
        />
       <Spacer />
        <Typography
          label={__("Title Typography :", "b-pricing-table")}
          value={style?.mostPopularStyle?.pricingPopularTitleTypo}
          defaults={{fontSize: { desktop: 20, tablet: 20, mobile: 20 }}}
          onChange={(typog) => { setAttributes({ style: updateData(style, typog,"mostPopularStyle","pricingPopularTitleTypo") }); }}
        />
        <Spacer />
        <ColorControl
          label={__("Title Color :", "b-pricing-table")} defaultColor="#ffffff"
          value={style?.mostPopularStyle?.mostPricingTitleColor}
          onChange={(newColor) => { setAttributes({ style: updateData(style, newColor,"mostPopularStyle","mostPricingTitleColor") }); }}
        />
      <Spacer />
        <UnitControl label={__('Currency Size:', 'b-pricing-table')} labelPosition='left'
          value={style?.mostPopularStyle?.mostCurrencyIconHeight}
          units={[pxUnit(), perUnit(), emUnit()]}
          onChange={(iconWidth) => { setAttributes({ style: updateData(style, iconWidth,"mostPopularStyle","mostCurrencyIconHeight") }); }}
        />
        <Spacer />
        <ColorControl
          label={__("Currency Color", "b-pricing-table")}
          defaultColor="#ffffff"
          value={style?.mostPopularStyle?.mostCurrencyIconColor}
          onChange={(color) =>setAttributes({style: updateData(style, color, 'mostPopularStyle','mostCurrencyIconColor')})}
        />
        <Spacer />
        <Typography
          label={__("Price Typography :", "b-pricing-table")}
          value={style?.mostPopularStyle?.mostPricingPriceTypo}
          defaults={{fontSize: { desktop: 48, tablet: 48, mobile: 48}}}
          onChange={(typog) => { setAttributes({ style: updateData(style, typog, "mostPopularStyle", "mostPricingPriceTypo") }); }}
        />
        <Spacer />
        <ColorControl
          label={__("Price Color :", "b-pricing-table")} defaultColor="#ffffff"
          value={style?.mostPopularStyle?.mostPricingPriceColor}
          onChange={(newColor) => { setAttributes({ style: updateData(style, newColor,'mostPopularStyle','mostPricingPriceColor') }); }}
        />
        <Spacer />
        <Typography
          label={__("Period Typography :", "b-pricing-table")}
          value={style?.mostPopularStyle?.mostPeriodTypo}
          defaults={{fontSize: { desktop: 20, tablet: 20, mobile: 20}}}
          onChange={(typog) => { setAttributes({ style: updateData(style, typog, "mostPopularStyle","mostPeriodTypo") }); }}
        />
        <Spacer />
        <ColorControl
          label={__("Period Color :", "b-pricing-table")} defaultColor="#9ca3af"
          value={style?.mostPopularStyle?.mostPeriodColor}
          onChange={(newColor) => { setAttributes({ style: updateData(style, newColor, "mostPopularStyle", 'mostPeriodColor') }); }}
        />
       <Spacer />
        <PanelRow>
          <Label className="">{__("Period Margin :", "b-pricing-table")}</Label>
          <Device />
        </PanelRow>
        <BoxControl
          values={style?.mostPopularStyle?.mostPeriodMargin[device]}
          resetValues={mostPeriodMargin}
          onChange={(marin) => { setAttributes({ style: updateData(style, marin, "mostPopularStyle", "mostPeriodMargin", device) }); }}
        />
        <Spacer />
        <Typography
          label={__("Description Typography :", "b-pricing-table")}
          value={style?.mostPopularStyle?.mostDesTypo}
          defaults={{fontSize: { desktop: 22, tablet: 22, mobile: 22 }}}
          onChange={(typog) => { setAttributes({ style: updateData(style, typog,"mostPopularStyle","mostDesTypo") }); }}
        />
        <Spacer />
        <ColorControl
          label={__("Description Color :", "b-pricing-table")} defaultColor="#9ca3af"
          value={style?.mostPopularStyle?.mostDesColor}
          onChange={(newColor) => { setAttributes({ style: updateData(style, newColor,'mostPopularStyle','mostDesColor') }); }}
        />
       <Spacer />

       <UnitControl
          label={__("Feature Icon Size :", "b-pricing-table")}
          value={style?.mostPopularStyle?.mostFeatureIconHeight}
          onChange={(width) => { setAttributes({ style: updateData(style, width, 'mostPopularStyle','mostFeatureIconHeight') }); }}
        />
        <Spacer />
        <Typography
          label={__("Feature Typography :", "b-pricing-table")}
          value={style?.mostPopularStyle?.mostFeatureTypo}
          defaults={{fontSize: { desktop: 18, tablet: 18, mobile: 18 }}}
          onChange={(typog) => { setAttributes({ style: updateData(style, typog, "mostPopularStyle", "mostFeatureTypo") }); }}
        />
        <Spacer />
        <ColorControl
          label={__("Feature Color :", "b-pricing-table")} defaultColor="#d1d5db"
          value={style?.mostPopularStyle?.mostFeatureColor}
          onChange={(newColor) => { setAttributes({ style: updateData(style, newColor,'mostPopularStyle','mostFeatureColor') }); }}
        />
        <Spacer />
       {/* BUTTON */}
        <Typography
          label={__("Button Typography :", "b-pricing-table")}
          value={style?.mostPopularStyle?.mostButtonTypo}
          defaults={{fontSize: { desktop: 16, tablet: 16, mobile: 16 }}}
          onChange={(typog) => { setAttributes({ style: updateData(style, typog,"mostPopularStyle","mostButtonTypo") }); }}
        />
        <Spacer />
        <ColorControl
          label={__("Button Text Color :", "b-pricing-table")} defaultColor="#ffffff"
          value={style?.mostPopularStyle?.mostButtonTextColor}
          onChange={(newColor) => { setAttributes({ style: updateData(style, newColor,'mostPopularStyle','mostButtonTextColor') }); }}
        />
        <Spacer />
       <SolidBackground
          label={__("Button Bg Color :")}
          value={style?.mostPopularStyle?.mostButtonBg}
          onChange={(bgcolor) => { setAttributes({ style: updateData(style, bgcolor,"mostPopularStyle","mostButtonBg") }); }}
        />
      <Spacer />
       <SolidBackground defaultColor="#4338ca"
          label={__("Button Bg Hover Color  :")}
          value={style?.mostPopularStyle?.mostButtonHoverBg}
          onChange={(bgcolor) => { setAttributes({ style: updateData(style, bgcolor,"mostPopularStyle", "mostButtonHoverBg") }); }}
        />
      <Spacer />
       <ColorControl defaultColor="#ffffff"
          label={__("Button Hover Text Color  :")}
          value={style?.mostPopularStyle?.mostButtonHoverTextColor}
          onChange={(bgcolor) => { setAttributes({ style: updateData(style, bgcolor, "mostPopularStyle","mostButtonHoverTextColor") }); }}
        />
      <Spacer />
        <BorderControl
          label={__("Button Border:", "b-pricing-table")} 
          value={style?.mostPopularStyle?.mostButtonBorder}
          onChange={(color) => { setAttributes({ style: updateData(style, color,'mostPopularStyle','mostButtonBorder') }); }}
        />
        <Spacer />
        <BoxControl label={__("Button Radius :")}
        values={style?.mostPopularStyle?.mostButtonRadius} resetValues={resetMostButtonRadiuss}
        onChange={(value) => { setAttributes({ style: updateData(style, value,"mostPopularStyle","mostButtonRadius") }); }}
        />
        <Spacer />
        <PanelRow>
          <Label className="">{__("Button Padding :", "b-pricing-table")}</Label>
          <Device />
        </PanelRow>
        <BoxControl
          values={style?.mostPopularStyle?.mostButtonPadding[device]}
          resetValues={resetMostButtonPadding}
          onChange={(padd) => {setAttributes({ style: updateData(style, padd,"mostPopularStyle","mostButtonPadding", device) });}}
        />
        <Spacer />
      </PanelBody>
    </>
  );
};

export default Style;
