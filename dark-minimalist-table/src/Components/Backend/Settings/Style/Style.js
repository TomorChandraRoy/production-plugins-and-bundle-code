import { __ } from "@wordpress/i18n";
import {PanelBody,__experimentalSpacer as Spacer, PanelRow,__experimentalUnitControl as UnitControl,__experimentalBorderControl as BorderControl} from "@wordpress/components";
import { BoxControl, ColorControl, Device, Gradient, Label, SolidBackground, Typography} from "../../../../../../bpl-tools/Components";
import { updateData } from "../../../../utils/functions";
import { resetButtonPadding, resetButtonRadiuss, resetDesMargin, resetPopularButtonPadding, resetPopularButtonRadius, resetPopularButtonRadiuss, resetPopularButtonsPadding, resetPopularDesMargin, resetPopularPriceRadius, resetPopularPricingPadding, resetPriceRadius, resetPricingMargin, resetPricingPadding } from "../../../../utils/options";
import { emUnit, perUnit, pxUnit } from "../../../../../../bpl-tools/utils/options";
const Style = ({ attributes, setAttributes,device }) => {
  const { style } = attributes;




  return (
    <>
      <PanelBody className="bPlPanelBody" title={__("Pricing Table Style", "b-pricing-table")}
        initialOpen={true}
      >
        <Spacer />
        <SolidBackground
          label={__("Background Color :")}
          value={style?.pricingCardBg} 
          onChange={(bgcolor) => { setAttributes({ style: updateData(style, bgcolor, "pricingCardBg") });}}
        />
        <Spacer />
        <PanelRow>
          <Label className="">{__("Padding :", "b-pricing-table")}</Label>
          <Device />
        </PanelRow>
        <BoxControl
          values={style?.pricingCardPadding[device]}  resetValues={resetPricingPadding}
          onChange={(padd) => { setAttributes({ style: updateData(style, padd, "pricingCardPadding", device) }); }}
        />
        <Spacer />
        <BoxControl 
          label={__("Radius :", "b-pricing-table")}
            values={style?.priceCardRadius} resetValues={resetPriceRadius}
          onChange={(value) => { setAttributes({ style: updateData(style, value, "priceCardRadius") }); }}
        />
        <Spacer />
        <UnitControl label={__('Title Icon Size:', 'b-pricing-table')} labelPosition='left'
          value={style?.pricingTitlIconSize}
          units={[pxUnit(), perUnit(), emUnit()]}
          onChange={(iconWidth) => { setAttributes({ style: updateData(style, iconWidth, "pricingTitlIconSize") }); }}
        />
        <Spacer />
        <ColorControl
          label={__("Title Icon Color :", "b-pricing-table")} defaultColor="#a1a1aa"
          value={style?.pricingTitleIconColor}
          onChange={(newColor) => { setAttributes({ style: updateData(style, newColor, 'pricingTitleIconColor') }); }}
        />
        <Spacer />
        <Typography
          label={__("Title Typography :", "b-pricing-table")}
          value={style?.pricingTitleTypo}
          defaults={{fontSize: { desktop: 24, tablet: 24, mobile: 24 }}}
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
          value={style?.priceCurrencySize}
          units={[pxUnit(), perUnit(), emUnit()]}
          onChange={(iconWidth) => { setAttributes({ style: updateData(style, iconWidth, "priceCurrencySize") }); }}
        />
        <Spacer />
        <ColorControl
          label={__("Currency Symbol Color", "b-pricing-table")}
          defaultColor="#ffffff"
          value={style?.priceCurrencyColor}
          onChange={(color) =>setAttributes({style: updateData(style, color, 'priceCurrencyColor')})}
        />
        <Spacer />
        <Typography
          label={__("Price Typography :", "b-pricing-table")}
          value={style?.priceTypo}
          defaults={{fontSize: { desktop: 60, tablet: 60, mobile: 60}}}
          onChange={(typog) => { setAttributes({ style: updateData(style, typog, "priceTypo") }); }}
        />
        <Spacer />
        <ColorControl
          label={__("Price Color", "b-pricing-table")}
          defaultColor="#ffffff"
          value={style?.priceColor}
          onChange={(color) =>setAttributes({style: updateData(style, color, 'priceColor')})}
        />
        <Spacer />
        <ColorControl
          label={__("Period Color :", "b-pricing-table")} defaultColor="#a1a1aa"
          value={style?.periodColor}
          onChange={(newColor) => { setAttributes({ style: updateData(style, newColor, 'periodColor') }); }}
        />
        <Spacer />
        <Typography
          label={__("Period Typography :", "b-pricing-table")}
          value={style?.periodTypo}
          defaults={{fontSize: { desktop: 18, tablet: 18, mobile: 18}}}
          onChange={(typog) => { setAttributes({ style: updateData(style, typog, "periodTypo") }); }}
        />
        <Spacer />
        <PanelRow>
          <Label className="">{__("Period Margin :", "b-pricing-table")}</Label>
          <Device />
        </PanelRow>
        <BoxControl
          values={style?.periodMargin[device]}  resetValues={resetPricingMargin}
          onChange={(margin) => { setAttributes({ style: updateData(style, margin, "periodMargin", device) }); }}
        />
        <Spacer />
        <Typography
          label={__("Description Typography :", "b-pricing-table")}
          value={style?.desTypo}
          defaults={{fontSize: { desktop: 16, tablet: 16, mobile: 16 }}}
          onChange={(typog) => { setAttributes({ style: updateData(style, typog, "desTypo") }); }}
        />
        <Spacer />
        <ColorControl
          label={__("Description Color :", "b-pricing-table")} defaultColor="#a1a1aa"
          value={style?.desColor}
          onChange={(newColor) => { setAttributes({ style: updateData(style, newColor, 'desColor') }); }}
        />
       <Spacer />
        <PanelRow>
          <Label className="">{__("Description Margin :", "b-pricing-table")}</Label>
          <Device />
        </PanelRow>
        <BoxControl
          values={style?.desMargin[device]}  resetValues={resetDesMargin}
          onChange={(margin) => { setAttributes({ style: updateData(style, margin, "desMargin", device) }); }}
        />
        <Spacer />
       <UnitControl
          label={__("Feature Icon Size :", "b-pricing-table")}
          value={style?.featureIconSize}
          onChange={(width) => { setAttributes({ style: updateData(style, width, 'featureIconSize') }); }}
        />
        <Spacer />
       <UnitControl
          label={__("Feature Icon Gap :", "b-pricing-table")}
          value={style?.featureIconGap}
          onChange={(width) => { setAttributes({ style: updateData(style, width, 'featureIconGap') }); }}
        />
        <Spacer />
        <Typography
          label={__("Feature Typography :", "b-pricing-table")}
          value={style?.featureTextTypo}
          defaults={{fontSize: { desktop: 14, tablet: 14, mobile: 14 }}}
          onChange={(typog) => { setAttributes({ style: updateData(style, typog,"featureTextTypo") }); }}
        />
        <Spacer />
        <ColorControl
          label={__("Feature Color :", "b-pricing-table")} defaultColor="#f3f3f5"
          value={style?.featureTextColor}
          onChange={(newColor) => { setAttributes({ style: updateData(style, newColor,'featureTextColor') }); }}
        />
        <Spacer />
       <UnitControl
          label={__("Feature Gap :", "b-pricing-table")}
          value={style?.featureGap}
          onChange={(width) => { setAttributes({ style: updateData(style, width, 'featureGap') }); }}
        />
        <Spacer />

        {/* BUTTON */}
        <Typography
          label={__("Button Typography :", "b-pricing-table")}
          value={style?.buttonTextTypo}
          defaults={{fontSize: { desktop: 16, tablet: 16, mobile: 16 }}}
          onChange={(typog) => { setAttributes({ style: updateData(style, typog, "buttonTextTypo") }); }}
        />
        <Spacer />
        <ColorControl
          label={__("Button Text Color :", "b-pricing-table")} defaultColor="#c7f32f"
          value={style?.buttonTextColor}
          onChange={(newColor) => { setAttributes({ style: updateData(style, newColor,'buttonTextColor') }); }}
        />
        <Spacer />
        <ColorControl defaultColor="#c7f32f"
          label={__("Button Icon Color  :")}
          value={style?.buttonIconColor}
          onChange={(bgcolor) => { setAttributes({ style: updateData(style, bgcolor, "buttonIconColor") }); }}
        />
        <Spacer />
        <SolidBackground
          label={__("Button Bg Color :")}
          value={style?.buttonBGColor}
          onChange={(bgcolor) => { setAttributes({ style: updateData(style, bgcolor, "buttonBGColor") }); }}
        />
        <Spacer />
        <SolidBackground defaultColor="#c7f32f"
          label={__("Button Bg Hover Color  :")}
          value={style?.buttonBGHoverColor}
          onChange={(bgcolor) => { setAttributes({ style: updateData(style, bgcolor, "buttonBGHoverColor") }); }}
        />
        <Spacer />
        <ColorControl defaultColor="#000000"
          label={__("Button Hover Text Color  :")}
          value={style?.buttonHoverTextColor}
          onChange={(bgcolor) => { setAttributes({ style: updateData(style, bgcolor, "buttonHoverTextColor") }); }}
        />
        <Spacer />
        <ColorControl defaultColor="#000000"
          label={__("Button Icon Hover Color  :")}
          value={style?.buttonIconHoverColor}
          onChange={(bgcolor) => { setAttributes({ style: updateData(style, bgcolor, "buttonIconHoverColor") }); }}
        />
        <Spacer />
       <UnitControl
          label={__("Button Icon Size :", "b-pricing-table")}
          value={style?.buttonIconSize}
          onChange={(width) => { setAttributes({ style: updateData(style, width, 'buttonIconSize') }); }}
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

      {/* Popular */}
      <PanelBody className="bPlPanelBody" title={__("Popular Pricing Table Style", "b-pricing-table")}
        initialOpen={false}
      >
      <Spacer />
        {/* <PanelBody className="bPlPanelBody" title={__("Popular Background Color", "b-pricing-table")}
          initialOpen={false}
        >
          <Gradient
            label={__("Background Color :")}
            value={style?.popularBgColor} 
            onChange={(bgcolor) => { setAttributes({ style: updateData(style, bgcolor, "popularBgColor") });}}
          />
        </PanelBody> */}
          <Gradient
            label={__("Background Color :")}
            value={style?.popularBgColor} 
            onChange={(bgcolor) => { setAttributes({ style: updateData(style, bgcolor, "popularBgColor") });}}
          />

        <Spacer />
        <PanelRow>
          <Label className="">{__("Padding :", "b-pricing-table")}</Label>
          <Device />
        </PanelRow>
        <BoxControl
          values={style?.popularPadding[device]}  resetValues={resetPopularPricingPadding}
          onChange={(padd) => { setAttributes({ style: updateData(style, padd, "popularPadding", device) }); }}
        />
        <Spacer />
        <BoxControl 
          label={__("Radius :", "b-pricing-table")}
            values={style?.popularRadius} resetValues={resetPopularPriceRadius}
          onChange={(value) => { setAttributes({ style: updateData(style, value, "popularRadius") }); }}
        />
        <Spacer />
        <BorderControl
          label={__("Border:", "b-pricing-table")} 
          value={style?.popularBorder}
          onChange={(color) => { setAttributes({ style: updateData(style, color,'popularBorder') }); }}
        />
        <Spacer />
        <SolidBackground
          label={__("Popular Bg Color :")}
          value={style?.popularButtonBgColor} 
          onChange={(bgcolor) => { setAttributes({ style: updateData(style, bgcolor,"popularButtonBgColor") });}}
        />
        <Spacer />
        <Typography
          label={__("Popular Title Typography :", "b-pricing-table")}
          value={style?.popularButtonTextTypo}
          defaults={{
            fontSize: { desktop: 12, tablet: 12, mobile: 12 },
          }}
          onChange={(typog) => { setAttributes({ style: updateData(style, typog,"popularButtonTextTypo") }); }}
        />
        <Spacer />
        <ColorControl
          label={__("Popular Title Color :", "b-pricing-table")} defaultColor="#c7f32f"
          value={style?.popularColor}
          onChange={(newColor) => { setAttributes({ style: updateData(style, newColor,"popularColor") }); }}    
         />
        <Spacer />
        <BoxControl label={__("Popular Button Radius :")}
          values={style?.popularButtonRadius} resetValues={resetPopularButtonRadius}
          onChange={(value) => { setAttributes({ style: updateData(style, value, "popularButtonRadius") }); }}
        />
        <Spacer />
        <PanelRow>
          <Label className="">{__("Popular Button Padding :", "b-pricing-table")}</Label>
          <Device />
        </PanelRow>
        <BoxControl
          values={style?.popularButtonPadding[device]}
          resetValues={resetPopularButtonPadding}
          onChange={(padd) => { setAttributes({ style: updateData(style, padd,"popularButtonPadding", device) }); }}
        />
        <Spacer />
        <UnitControl label={__('Title Icon Size:', 'b-pricing-table')} labelPosition='left'
          value={style?.popularTitlIconSize}
          units={[pxUnit(), perUnit(), emUnit()]}
          onChange={(iconWidth) => { setAttributes({ style: updateData(style, iconWidth, "popularTitlIconSize") }); }}
        />
        <Spacer />
        <ColorControl
          label={__("Title Icon Color :", "b-pricing-table")} defaultColor="#a1a1aa"
          value={style?.popularTitleIconColor}
          onChange={(newColor) => { setAttributes({ style: updateData(style, newColor, 'popularTitleIconColor') }); }}
        />
        <Spacer />
        <Typography
          label={__("Title Typography :", "b-pricing-table")}
          value={style?.popularTitleTypo}
          defaults={{fontSize: { desktop: 24, tablet: 24, mobile: 24 }}}
          onChange={(typog) => { setAttributes({ style: updateData(style, typog, "popularTitleTypo") }); }}
        />
        <Spacer />
        <ColorControl
          label={__("Title Color :", "b-pricing-table")} defaultColor="#ffffff"
          value={style?.popularTitleColor}
          onChange={(newColor) => { setAttributes({ style: updateData(style, newColor, 'popularTitleColor') }); }}
        />
        <Spacer />
        <UnitControl label={__('Currency Size:', 'b-pricing-table')} labelPosition='left'
          value={style?.popularCurrencySize}
          units={[pxUnit(), perUnit(), emUnit()]}
          onChange={(iconWidth) => { setAttributes({ style: updateData(style, iconWidth, "popularCurrencySize") }); }}
        />
        <Spacer />
        <ColorControl
          label={__("Currency Symbol Color", "b-pricing-table")}
          defaultColor="#ffffff"
          value={style?.popularCurrencyColor}
          onChange={(color) =>setAttributes({style: updateData(style, color, 'popularCurrencyColor')})}
        />
        <Spacer />
        <Typography
          label={__("Price Typography :", "b-pricing-table")}
          value={style?.popularPriceTypo}
          defaults={{fontSize: { desktop: 60, tablet: 60, mobile: 60}}}
          onChange={(typog) => { setAttributes({ style: updateData(style, typog, "popularPriceTypo") }); }}
        />
        <Spacer />
        <ColorControl
          label={__("Price Color", "b-pricing-table")}
          defaultColor="#ffffff"
          value={style?.popularPriceColor}
          onChange={(color) =>setAttributes({style: updateData(style, color, 'popularPriceColor')})}
        />
        <Spacer />
        <ColorControl
          label={__("Period Color :", "b-pricing-table")} defaultColor="#a1a1aa"
          value={style?.popularPeriodColor}
          onChange={(newColor) => { setAttributes({ style: updateData(style, newColor, 'popularPeriodColor') }); }}
        />
        <Spacer />
        <Typography
          label={__("Period Typography :", "b-pricing-table")}
          value={style?.popularPeriodTypo}
          defaults={{fontSize: { desktop: 18, tablet: 18, mobile: 18}}}
          onChange={(typog) => { setAttributes({ style: updateData(style, typog, "popularPeriodTypo") }); }}
        />
        <Spacer />
        <PanelRow>
          <Label className="">{__("Period Margin :", "b-pricing-table")}</Label>
          <Device />
        </PanelRow>
        <BoxControl
          values={style?.popularPeriodMargin[device]}  resetValues={resetPricingMargin}
          onChange={(margin) => { setAttributes({ style: updateData(style, margin, "popularPeriodMargin", device) }); }}
        />
        <Spacer />
        <Typography
          label={__("Description Typography :", "b-pricing-table")}
          value={style?.popularDesTypo}
          defaults={{fontSize: { desktop: 16, tablet: 16, mobile: 16 }}}
          onChange={(typog) => { setAttributes({ style: updateData(style, typog, "popularDesTypo") }); }}
        />
        <Spacer />
        <ColorControl
          label={__("Description Color :", "b-pricing-table")} defaultColor="#a1a1aa"
          value={style?.popularDesColor}
          onChange={(newColor) => { setAttributes({ style: updateData(style, newColor, 'popularDesColor') }); }}
        />
       <Spacer />
        <PanelRow>
          <Label className="">{__("Description Margin :", "b-pricing-table")}</Label>
          <Device />
        </PanelRow>
        <BoxControl
          values={style?.popularDesMargin[device]}  resetValues={resetPopularDesMargin}
          onChange={(margin) => { setAttributes({ style: updateData(style, margin, "popularDesMargin", device) }); }}
        />
        <Spacer />

       <UnitControl
          label={__("Feature Icon Size :", "b-pricing-table")}
          value={style?.popularFeatureIconSize}
          onChange={(width) => { setAttributes({ style: updateData(style, width, 'popularFeatureIconSize') }); }}
        />
        <Spacer />
       <UnitControl
          label={__("Feature Icon Gap :", "b-pricing-table")}
          value={style?.popularFeatureIconGap}
          onChange={(width) => { setAttributes({ style: updateData(style, width, 'popularFeatureIconGap') }); }}
        />
        <Spacer />
        <Typography
          label={__("Feature Typography :", "b-pricing-table")}
          value={style?.popularFeatureTextTypo}
          defaults={{fontSize: { desktop: 14, tablet: 14, mobile: 14 }}}
          onChange={(typog) => { setAttributes({ style: updateData(style, typog,"popularFeatureTextTypo") }); }}
        />
        <Spacer />
        <ColorControl
          label={__("Feature Color :", "b-pricing-table")} defaultColor="#f3f3f5"
          value={style?.popularFeatureTextColor}
          onChange={(newColor) => { setAttributes({ style: updateData(style, newColor,'popularFeatureTextColor') }); }}
        />
        <Spacer />
       <UnitControl
          label={__("Feature Gap :", "b-pricing-table")}
          value={style?.popularFeatureGap}
          onChange={(width) => { setAttributes({ style: updateData(style, width, 'popularFeatureGap') }); }}
        />
        <Spacer />



        {/* BUTTON */}
        <Typography
          label={__("Button Typography :", "b-pricing-table")}
          value={style?.popularButtonTextTyp}
          defaults={{fontSize: { desktop: 16, tablet: 16, mobile: 16 }}}
          onChange={(typog) => { setAttributes({ style: updateData(style, typog, "popularButtonTextTyp") }); }}
        />
        <Spacer />
        <ColorControl
          label={__("Button Text Color :", "b-pricing-table")} defaultColor="#000000"
          value={style?.popularButtonTextColor}
          onChange={(newColor) => { setAttributes({ style: updateData(style, newColor,'popularButtonTextColor') }); }}
        />
        <Spacer />
        <ColorControl defaultColor="#070802"
          label={__("Button Icon Color  :")}
          value={style?.popularButtonIconColor}
          onChange={(bgcolor) => { setAttributes({ style: updateData(style, bgcolor, "popularButtonIconColor") }); }}
        />
        <Spacer />
        <SolidBackground
          label={__("Button Bg Color :")}
          value={style?.popularButtonBGColor}
          onChange={(bgcolor) => { setAttributes({ style: updateData(style, bgcolor, "popularButtonBGColor") }); }}
        />
        <Spacer />
       <UnitControl
          label={__("Button Icon Size :", "b-pricing-table")}
          value={style?.popularButtonIconSize}
          onChange={(width) => { setAttributes({ style: updateData(style, width, 'popularButtonIconSize') }); }}
        />
        <Spacer />

        <SolidBackground defaultColor="#b3da28"
          label={__("Button Bg Hover Color  :")}
          value={style?.popularButtonBGHoverColor}
          onChange={(bgcolor) => { setAttributes({ style: updateData(style, bgcolor, "popularButtonBGHoverColor") }); }}
        />
        <Spacer />
        <ColorControl defaultColor="#000000"
          label={__("Button Hover Text Color  :")}
          value={style?.popularButtonHoverTextColor}
          onChange={(bgcolor) => { setAttributes({ style: updateData(style, bgcolor, "popularButtonHoverTextColor") }); }}
        />
        <Spacer />
        <ColorControl defaultColor="#070802"
          label={__("Button Icon Hover Color  :")}
          value={style?.popularButtonHoverIconColor}
          onChange={(bgcolor) => { setAttributes({ style: updateData(style, bgcolor, "popularButtonHoverIconColor") }); }}
        />
        <Spacer />

        <BoxControl label={__("Button Radius :")}
          values={style?.popularButtonRadiuss} resetValues={resetPopularButtonRadiuss}
          onChange={(value) => { setAttributes({ style: updateData(style, value, "popularButtonRadiuss") }); }}
        />
        <Spacer />
        <PanelRow>
          <Label className="">{__("Button Padding :", "b-pricing-table")}</Label>
          <Device />
        </PanelRow>
        <BoxControl
          values={style?.popularButtonsPadding[device]}
          resetValues={resetPopularButtonsPadding}
          onChange={(padd) => {setAttributes({ style: updateData(style, padd, "popularButtonsPadding", device) });}}
        />
        <Spacer /> 
      </PanelBody>
    </>
  );
};

export default Style;
