import { __ } from "@wordpress/i18n";
import { PanelBody, PanelRow, __experimentalSpacer as Spacer, __experimentalBorderControl as BorderControl, __experimentalUnitControl as UnitControl } from "@wordpress/components";
import { BoxControl, ColorControl, Device, Label, ShadowControl, SolidBackground, Typography } from "../../../../../../bpl-tools/Components";
import { updateData } from "../../../../../../bpl-tools/utils/functions";
import { emUnit, perUnit, pxUnit } from "../../../../../../bpl-tools/utils/options";
import { featuredPriceingMargin, featuredTitleMargin, resetButtonRadius, resetCardMargin, resetCardPadding, resetFeatureddButtonRadius, resetFeaturedGetStartedPadding, resetFeaturedPadding, resetFeaturedPriceMargin, resetFeaturedRadius, resetFeaturesPadding, resetfooterDesMargin, resetgetStartedPadding, resetPriceMargin, resetRadius } from "../../../../utils/options";


const Style = ({ attributes, setAttributes, device }) => {
  const { style } = attributes;


  return (
    <>
      <PanelBody
        className="bPlPanelBody"
        title={__("Pricing Row Styles", "b-pricing-table")}
        initialOpen={true}
      >
        <Spacer />
        <UnitControl label={__('Row Gap:', 'b-pricing-table')} labelPosition='left'
          value={style?.tabileRowStyle?.rowGap}
          units={[pxUnit(), perUnit(), emUnit()]}
          onChange={(newRowgap) => { setAttributes({ style: updateData(style, newRowgap, "tabileRowStyle", "rowGap") }); }}
        />
        <Spacer />
        <SolidBackground
          label={__("Background Color :")}
          value={style?.tabileRowStyle?.backgroundColor}
          onChange={(bgcolor) => { setAttributes({ style: updateData(style, bgcolor, "tabileRowStyle", "backgroundColor") }); }}
        />
        <Spacer />
        <BoxControl label={__("Radius :")}
        values={style?.tabileRowStyle?.tableRadius} resetValues={resetRadius}
        onChange={(value) => { setAttributes({ style: updateData(style, value, "tabileRowStyle", "tableRadius") }); }}
        />
        <Spacer />
        <ShadowControl
          label={__("Shadow :", "b-pricing-table")} 
          value={style?.tabileRowStyle?.tableShadow}
          defaults={[{hOffset: '0px',vOffset: '0px',blur: '0px',spreed: '0px',color: 'rgba(0, 0, 0, 0.05)', isInset: false,}]}
          onChange={(newShadow) => { setAttributes({ style: updateData(style, newShadow, 'tabileRowStyle', 'tableShadow') }); }}
        />
        <Spacer />
        <BorderControl
          label={__("Border Color :", "b-pricing-table")} 
          value={style?.tabileRowStyle?.tableBorder}
          onChange={(color) => { setAttributes({ style: updateData(style, color, 'tabileRowStyle', 'tableBorder') }); }}
        />
        <Spacer />
        <PanelRow>
          <Label className="">{__(" Padding :", "b-pricing-table")}</Label>
          <Device />
        </PanelRow>
        <BoxControl
          values={style?.tabileRowStyle?.tablePadding[device]}
          resetValues={resetCardPadding}
          onChange={(padd) => { setAttributes({ style: updateData(style, padd, "tabileRowStyle", "tablePadding", device) }); }}
        />
        <Spacer />
        <Typography
          label={__("Title Typography :", "b-pricing-table")}
          value={style?.tabileRowStyle?.titleStyle?.titleTypo}
          defaults={{fontSize: { desktop: 24, tablet: 24, mobile: 24 }}}
          onChange={(typog) => { setAttributes({ style: updateData(style, typog, "tabileRowStyle", "titleStyle", "titleTypo") }); }}
        />
        <Spacer />
        <ColorControl
          label={__("Title Color :", "b-pricing-table")} defaultColor="#000000"
          value={style?.tabileRowStyle?.titleStyle?.titleColor}
          onChange={(newColor) => { setAttributes({ style: updateData(style, newColor, 'tabileRowStyle', 'titleStyle','titleColor') }); }}
        />
        <Spacer />
        <PanelRow>
          <Label className="">{__("Title Margin :", "b-pricing-table")}</Label>
          <Device />
        </PanelRow>
        <BoxControl
          values={style?.tabileRowStyle?.titleStyle?.titleMargin[device]}
          resetValues={resetCardMargin}
          onChange={(marin) => { setAttributes({ style: updateData(style, marin, "tabileRowStyle", "titleStyle","titleMargin", device) }); }}
        />
        <Spacer />
         {/* start */}
        <UnitControl label={__('Currency Size:', 'b-pricing-table')} labelPosition='left'
          value={style?.tabileRowStyle?.priceIconWidth}
          units={[pxUnit(), perUnit(), emUnit()]}
          onChange={(iconWidth) => { setAttributes({ style: updateData(style, iconWidth, "tabileRowStyle", "priceIconWidth") }); }}
        />
        <Spacer />
        <ColorControl
          label={__("Currency Color", "b-pricing-table")}
            defaultColor="#000000"
            value={style?.tabileRowStyle?.priceIconColor}
            onChange={(color) =>setAttributes({style: updateData(style, color, 'tabileRowStyle', 'priceIconColor')})}
        />
        <Spacer />
        <Typography
          label={__("Price Typography :", "b-pricing-table")}
          value={style?.tabileRowStyle?.priceStyle?.amountTypo}
          defaults={{fontSize: { desktop: 38, tablet: 38, mobile: 38 }}}
          onChange={(typog) => { setAttributes({ style: updateData(style, typog, "tabileRowStyle", "priceStyle", "amountTypo") }); }}
        />
        <Spacer />
        <ColorControl
          label={__("Price Color :", "b-pricing-table")} defaultColor="#000000"
          value={style?.tabileRowStyle?.priceStyle?.amountColor}
          onChange={(newColor) => { setAttributes({ style: updateData(style, newColor, 'tabileRowStyle', 'priceStyle','amountColor') }); }}
        />
        <Spacer />
        <Typography
          label={__("Period Typography :", "b-pricing-table")}
          value={style?.tabileRowStyle?.priceStyle?.periodTypo}
          defaults={{fontSize: { desktop: 22, tablet: 22, mobile: 22 }}}
          onChange={(typog) => { setAttributes({ style: updateData(style, typog, "tabileRowStyle", "priceStyle", "periodTypo") }); }}
        />
        <Spacer />
        <ColorControl
          label={__("Period Color :", "b-pricing-table")} defaultColor="#6b7280"
          value={style?.tabileRowStyle?.priceStyle?.periodColor}
          onChange={(newColor) => { setAttributes({ style: updateData(style, newColor, 'tabileRowStyle', 'priceStyle','periodColor') }); }}
        />
       <Spacer />
        <PanelRow>
          <Label className="">{__("Price Margin :", "b-pricing-table")}</Label>
          <Device />
        </PanelRow>
        <BoxControl
          values={style?.tabileRowStyle?.priceStyle?.priceMarging[device]}
          resetValues={resetPriceMargin}
          onChange={(marin) => { setAttributes({ style: updateData(style, marin, "tabileRowStyle", "priceStyle","priceMarging", device) }); }}
        />
        <Spacer />
        <Typography
          label={__("Description Typography :", "b-pricing-table")}
          value={style?.tabileRowStyle?.priceStyle?.descriptionTypo}
          defaults={{fontSize: { desktop: 21, tablet: 21, mobile: 21 }}}
          onChange={(typog) => { setAttributes({ style: updateData(style, typog, "tabileRowStyle", "priceStyle", "descriptionTypo") }); }}
        />
        <Spacer />
        <ColorControl
          label={__("Description Color :", "b-pricing-table")} defaultColor="#6b7280"
          value={style?.tabileRowStyle?.priceStyle?.descriptionColor}
          onChange={(newColor) => { setAttributes({ style: updateData(style, newColor, 'tabileRowStyle', 'priceStyle','descriptionColor') }); }}
        />
       <Spacer />
      <Typography
          label={__("Feature Typography :", "b-pricing-table")}
          value={style?.tabileRowStyle?.featuresSectionStyle?.featureTypo}
          defaults={{fontSize: { desktop: 20, tablet: 20, mobile: 20 }}}
          onChange={(typog) => { setAttributes({ style: updateData(style, typog, "tabileRowStyle", "featuresSectionStyle", "featureTypo") }); }}
        />
        <Spacer />
        <SolidBackground
          label={__("Feature BG Color :", "b-pricing-table")} defaultColor="#d3cece12"
          value={style?.tabileRowStyle?.featuresSectionStyle?.featuresBackgroundColor}
          onChange={(newColor) => { setAttributes({ style: updateData(style, newColor, 'tabileRowStyle', 'featuresSectionStyle','featuresBackgroundColor') }); }}
        />
        <Spacer />
        <ColorControl
          label={__("Feature Color :", "b-pricing-table")} defaultColor="#111111"
          value={style?.tabileRowStyle?.featuresSectionStyle?.featureColor}
          onChange={(newColor) => { setAttributes({ style: updateData(style, newColor, 'tabileRowStyle', 'featuresSectionStyle','featureColor') }); }}
        />
       <Spacer />
        <PanelRow>
          <Label className="">{__("Feature Padding :", "b-pricing-table")}</Label>
          <Device />
        </PanelRow>
        <BoxControl
          values={style?.tabileRowStyle?.featuresSectionStyle?.featuresPadding[device]}
          resetValues={resetFeaturesPadding}
          onChange={(padd) => { setAttributes({ style: updateData(style, padd, "tabileRowStyle", "featuresSectionStyle","featuresPadding", device) }); }}
        />
        <Spacer />
        <UnitControl label={__('Feature Gap:', 'b-pricing-table')} labelPosition='left'
          value={style?.tabileRowStyle?.featuresSectionStyle?.featurelistGap}
          units={[pxUnit(), perUnit(), emUnit()]}
          onChange={(newRowgap) => { setAttributes({ style: updateData(style, newRowgap, "tabileRowStyle", "featuresSectionStyle","featurelistGap") }); }}
        />
        <Spacer />
        <UnitControl
          label={__("Feature Icon Size :", "b-pricing-table")}
          value={style?.tabileRowStyle?.featuresSectionStyle?.checkmarkWidth}
          onChange={(width) => { setAttributes({ style: updateData(style, width, 'tabileRowStyle', "featuresSectionStyle", 'checkmarkWidth') }); }}
        />
        <Spacer />
        <Typography
          label={__("Button Typography :", "b-pricing-table")}
          value={style?.tabileRowStyle?.actionStyle?.getStartedTypo}
          defaults={{fontSize: { desktop: 16, tablet: 16, mobile: 16 }}}
          onChange={(typog) => { setAttributes({ style: updateData(style, typog, "tabileRowStyle", "actionStyle", "getStartedTypo") }); }}
        />
        <Spacer />
        <ColorControl
          label={__("Button Text Color :", "b-pricing-table")} defaultColor="white"
          value={style?.tabileRowStyle?.actionStyle?.getStartedColor}
          onChange={(newColor) => { setAttributes({ style: updateData(style, newColor, 'tabileRowStyle', 'actionStyle','getStartedColor') }); }}
        />
        <Spacer />
        <ShadowControl
          label={__("Button Shadow :", "b-pricing-table")}
          value={style?.tabileRowStyle?.actionStyle?.getStartedShadow}
          defaults={[{hOffset: '0px',vOffset: '1px',blur: '2px',spreed: '0px',color: 'rgba(0, 0, 0, 0.05)', isInset: false,}]}
          onChange={(newShadow) => { setAttributes({ style: updateData(style, newShadow, 'tabileRowStyle','actionStyle', 'getStartedShadow') }); }}
        />
        <Spacer />
       <SolidBackground
          label={__("Button Bg Color :")}
          value={style?.tabileRowStyle?.actionStyle?.getStartedBgColor}
          onChange={(bgcolor) => { setAttributes({ style: updateData(style, bgcolor, "tabileRowStyle", "actionStyle","getStartedBgColor") }); }}
        />
      <Spacer />
       <ColorControl defaultColor="#1053e2"
          label={__("Button Bg Hover Color  :")}
          value={style?.tabileRowStyle?.actionStyle?.getStartedBgHover}
          onChange={(bgcolor) => { setAttributes({ style: updateData(style, bgcolor, "tabileRowStyle", "actionStyle","getStartedBgHover") }); }}
        />
      <Spacer />
       <ColorControl defaultColor="#ffffff"
          label={__("Button Hover Text Color  :")}
          value={style?.tabileRowStyle?.actionStyle?.getStartedBgHoverTextColor}
          onChange={(bgcolor) => { setAttributes({ style: updateData(style, bgcolor, "tabileRowStyle", "actionStyle","getStartedBgHoverTextColor") }); }}
        />
      <Spacer />
      <BoxControl label={__("Button Radius :")}
        values={style?.tabileRowStyle?.actionStyle?.getStartedRadius} resetValues={resetButtonRadius}
        onChange={(value) => { setAttributes({ style: updateData(style, value, "tabileRowStyle","actionStyle", "getStartedRadius") }); }}
      />
      <Spacer />
      <PanelRow>
          <Label className="">{__("Button Padding :", "b-pricing-table")}</Label>
          <Device />
        </PanelRow>
        <BoxControl
          values={style?.tabileRowStyle?.actionStyle?.getStartedPadding[device]}
          resetValues={resetgetStartedPadding}
          onChange={(padd) => { setAttributes({ style: updateData(style, padd, "tabileRowStyle", "actionStyle","getStartedPadding", device) }); }}
        />
        <Spacer />
      </PanelBody>
     {/* Popular Table Row Style */}
      <PanelBody className="bPlPanelBody" title={__("Popular Pricing Row Styles", "b-pricing-table")} initialOpen={false}>
        <SolidBackground
          label={__("Background Color :")} 
          value={style?.tabileRowStyle?.featuredStyle?.featuredBgColor}
          onChange={(bgColor) => { setAttributes({ style: updateData(style, bgColor, "tabileRowStyle","featuredStyle","featuredBgColor") });}}
        />
        <Spacer />

        <BoxControl label={__("Radius :")}
          values={style?.tabileRowStyle?.featuredStyle?.featuredRadius} resetValues={resetFeaturedRadius}
          onChange={(value) => { setAttributes({ style: updateData(style, value, "tabileRowStyle", "featuredStyle","featuredRadius") }); }}
        />
        <Spacer />
        <BorderControl
          label={__("Border Color :", "b-pricing-table")} 
          value={style?.tabileRowStyle?.featuredStyle?.featuredBorder}
          onChange={(color) => { setAttributes({ style: updateData(style, color, 'tabileRowStyle','featuredStyle','featuredBorder') }); }}
        />
        <Spacer />
        <PanelRow>
          <Label className="">{__("Padding :", "b-pricing-table")}</Label>
          <Device />
        </PanelRow>
        <BoxControl
          values={style?.tabileRowStyle?.featuredStyle?.featuredPadding[device]}
          resetValues={resetFeaturedPadding}
          onChange={(padd) => {setAttributes({ style: updateData(style, padd, "tabileRowStyle", "featuredStyle","featuredPadding", device) });}}
        />
        <Spacer />
        <ShadowControl
          label={__("Shadow :", "b-pricing-table")}
          defaults={[{hOffset: '0px',vOffset: '0px',blur: '0px',spreed: '0px',color: 'rgba(0, 0, 0, 0.05)', isInset: false}]}
          value={style?.tabileRowStyle?.featuredStyle?.featuredShadow}
          onChange={(newShadow) => { setAttributes({ style: updateData(style, newShadow, 'tabileRowStyle','featuredStyle','featuredShadow') }); }}
        />
        <Spacer />
        <Typography
          label={__("Title Typography :", "b-pricing-table")}
          value={style?.tabileRowStyle?.featuredStyle?.featuredTitleTypo}
          defaults={{ fontSize: { desktop: 24, tablet: 24, mobile: 24 }}}
          onChange={(typog) => { setAttributes({ style: updateData(style, typog, "tabileRowStyle", "featuredStyle", "featuredTitleTypo") }); }}
        />
        <ColorControl
          label={__("Title Color :", "b-pricing-table")} defaultColor="#FFFFFF"
          value={style?.tabileRowStyle?.featuredStyle?.featuredTitleColor}
          onChange={(color) => { setAttributes({ style: updateData(style, color, 'tabileRowStyle', 'featuredStyle', 'featuredTitleColor') }); }}
        />
        <Spacer />
        <PanelRow>
          <Label className="">{__("Title Margin :", "b-pricing-table")}</Label>
          <Device />
        </PanelRow>
        <BoxControl
          values={style?.tabileRowStyle?.featuredStyle?.featuredTitleMargin[device]}
          resetValues={featuredTitleMargin}
          onChange={(mar) => { setAttributes({ style: updateData(style, mar, "tabileRowStyle", "featuredStyle", "featuredTitleMargin", device) }); }}
        />
        <Spacer />

        <PanelRow>
          <Label className="">{__("Price Margin :", "b-pricing-table")}</Label>
          <Device />
        </PanelRow>
        <BoxControl
          values={style?.tabileRowStyle?.featuredStyle?.featuredPriceMarging[device]}
          resetValues={featuredPriceingMargin}
          onChange={(mar) => { setAttributes({ style: updateData(style, mar, "tabileRowStyle", "featuredStyle", "featuredPriceMarging", device) }); }}
        />
        <Spacer />
        {/* start most */}
        <UnitControl label={__('Currency Size:', 'b-pricing-table')} labelPosition='left'
          value={style?.tabileRowStyle?.featuredStyle?.featuredPriceIconWidth}
          units={[pxUnit(), perUnit(), emUnit()]}
          onChange={(iconWidth) => { setAttributes({ style: updateData(style, iconWidth, "tabileRowStyle", "featuredStyle","featuredPriceIconWidth") }); }}
        />
        <Spacer />
        <ColorControl
          label={__("Currency Color", "b-pricing-table")}
          defaultColor="#FFFFFF"
          value={style?.tabileRowStyle?.featuredStyle?.featuredPriceIconColor}
          onChange={(color) =>setAttributes({style: updateData(style, color, 'tabileRowStyle', 'featuredStyle','featuredPriceIconColor')})}
          />
        <Spacer/>
          <Typography
          label={__("Price Typography :", "b-pricing-table")}
          value={style?.tabileRowStyle?.featuredStyle?.featuredAmountTypo}
          defaults={{fontSize: { desktop: 38, tablet: 38, mobile: 38 }}}
          onChange={(typog) => { setAttributes({ style: updateData(style, typog, "tabileRowStyle", "featuredStyle", "featuredAmountTypo") }); }}
        />
        <Spacer />
        <ColorControl
          label={__("Price Color :", "b-pricing-table")} defaultColor="white"
          value={style?.tabileRowStyle?.featuredStyle?.featuredAmountColor}
          onChange={(newColor) => { setAttributes({ style: updateData(style, newColor, 'tabileRowStyle', 'featuredStyle','featuredAmountColor') }); }}
        />
        <Spacer />
        <Typography
          label={__("Period Typography :", "b-pricing-table")}
          value={style?.tabileRowStyle?.featuredStyle?.featuredPeriodTypo}
          defaults={{fontSize: { desktop: 22, tablet: 22, mobile: 22 }}}
          onChange={(typog) => { setAttributes({ style: updateData(style, typog, "tabileRowStyle", "featuredStyle", "featuredPeriodTypo") }); }}
        />
        <Spacer />
        <ColorControl
          label={__("Period Color :", "b-pricing-table")} defaultColor="#edeff1"
          value={style?.tabileRowStyle?.featuredStyle?.featuredPeriodColor}
          onChange={(newColor) => { setAttributes({ style: updateData(style, newColor, 'tabileRowStyle', 'featuredStyle','featuredPeriodColor') }); }}
        />
       <Spacer />
        <PanelRow>
          <Label className="">{__("Price Margin :", "b-pricing-table")}</Label>
          <Device />
        </PanelRow>
        <BoxControl
          values={style?.tabileRowStyle?.featuredStyle?.featuredPeriodMargin[device]}
          resetValues={resetFeaturedPriceMargin}
          onChange={(marin) => { setAttributes({ style: updateData(style, marin, "tabileRowStyle", "featuredStyle","featuredPeriodMargin", device) }); }}
        />
        <Spacer />
        <Typography
          label={__("Description Typography :", "b-pricing-table")}
          value={style?.tabileRowStyle?.featuredStyle?.featuredDescriptionTypo}
          defaults={{fontSize: { desktop: 21, tablet: 21, mobile: 21 }}}
          onChange={(typog) => { setAttributes({ style: updateData(style, typog, "tabileRowStyle", "featuredStyle", "featuredDescriptionTypo") }); }}
        />
        <Spacer />
        <ColorControl
          label={__("Description Color :", "b-pricing-table")} defaultColor="#eff0f1"
          value={style?.tabileRowStyle?.featuredStyle?.featuredDescriptionColor}
          onChange={(newColor) => { setAttributes({ style: updateData(style, newColor, 'tabileRowStyle', 'featuredStyle','featuredDescriptionColor') }); }}
        />
       <Spacer />
      <Typography
          label={__("Feature Typography :", "b-pricing-table")}
          value={style?.tabileRowStyle?.featuredStyle?.featuredFeatureSectionStyle?.featureTypo}
          defaults={{fontSize: { desktop: 20, tablet: 20, mobile: 20 }}}
          onChange={(typog) => { setAttributes({ style: updateData(style, typog, "tabileRowStyle","featuredStyle","featuredFeatureSectionStyle", "featureTypo") }); }}
        />
        <Spacer />
    
        <SolidBackground
          label={__("Feature BG Color :", "b-pricing-table")} defaultColor="rgba(4, 81, 247, 0.658)"
          value={style?.tabileRowStyle?.featuredStyle?.featuredFeatureSectionStyle?.featuresBackgroundColor}
          onChange={(newColor) => { setAttributes({ style: updateData(style, newColor, 'tabileRowStyle','featuredStyle', 'featuredFeatureSectionStyle','featuresBackgroundColor') }); }}
        />
        <Spacer />
        <ColorControl
          label={__("Feature Color :", "b-pricing-table")} defaultColor="white"
          value={style?.tabileRowStyle?.featuredStyle?.featuredFeatureSectionStyle?.featureColor}
          onChange={(newColor) => { setAttributes({ style: updateData(style, newColor, 'tabileRowStyle', 'featuredStyle' ,'featuredFeatureSectionStyle','featureColor') }); }}
        />
       <Spacer />
        <PanelRow>
          <Label className="">{__("Feature Padding :", "b-pricing-table")}</Label>
          <Device />
        </PanelRow>
        <BoxControl
          values={style?.tabileRowStyle?.featuredStyle?.featuredFeatureSectionStyle?.featuresPadding[device]}
          resetValues={resetFeaturesPadding}
          onChange={(padd) => { setAttributes({ style: updateData(style, padd, "tabileRowStyle","featuredStyle" ,"featuredFeatureSectionStyle","featuresPadding", device) }); }}
        />
        <Spacer />
        <UnitControl label={__('Feature Gap:', 'b-pricing-table')} labelPosition='left'
          value={style?.tabileRowStyle?.featuredStyle?.featuredFeatureSectionStyle?.featurelistGap}
          units={[pxUnit(), perUnit(), emUnit()]}
          onChange={(newRowgap) => { setAttributes({ style: updateData(style, newRowgap, "tabileRowStyle","featuredStyle","featuredFeatureSectionStyle","featurelistGap") }); }}
        />
        <Spacer />
        <UnitControl
          label={__("Feature Icon Size :", "b-pricing-table")}
          value={style?.tabileRowStyle?.featuredStyle?.featuredFeatureSectionStyle?.checkmarkWidth}
          onChange={(width) => { setAttributes({ style: updateData(style, width, 'tabileRowStyle', 'featuredStyle','featuredFeatureSectionStyle', 'checkmarkWidth') }); }}
        />
        <Spacer /> 

      <Typography
          label={__("Button Typography :", "b-pricing-table")}
          value={style?.tabileRowStyle?.featuredStyle?.actionStyle?.getStartedTypo}
          defaults={{fontSize: { desktop: 16, tablet: 16, mobile: 16 }}}
          onChange={(typog) => { setAttributes({ style: updateData(style, typog, "tabileRowStyle","featuredStyle", "actionStyle", "getStartedTypo") }); }}
        />
        <Spacer />
        <ColorControl
          label={__("Button Text Color :", "b-pricing-table")} defaultColor="#2563eb"
          value={style?.tabileRowStyle?.featuredStyle?.actionStyle?.getStartedColor}
          onChange={(newColor) => { setAttributes({ style: updateData(style, newColor, 'tabileRowStyle','featuredStyle','actionStyle','getStartedColor') }); }}
        />
        <Spacer />
        <ShadowControl
          label={__("Button Shadow :", "b-pricing-table")}
          defaults={[{hOffset: '0px',vOffset: '1px',blur: '2px',spreed: '0px',color: 'rgba(0, 0, 0, 0.05)', isInset: false}]}
          value={style?.tabileRowStyle?.featuredStyle?.actionStyle?.getStartedShadow}
          onChange={(newShadow) => { setAttributes({ style: updateData(style, newShadow, 'tabileRowStyle','featuredStyle','actionStyle', 'getStartedShadow') }); }}
        />
        <Spacer />
       <SolidBackground
          label={__("Button Bg Color :")}
          value={style?.tabileRowStyle?.featuredStyle?.actionStyle?.getStartedBgColor}
          onChange={(bgcolor) => { setAttributes({ style: updateData(style, bgcolor, "tabileRowStyle", "featuredStyle","actionStyle","getStartedBgColor") }); }}
        />
      <Spacer />
       <ColorControl  defaultColor="#F3F3F3"
          label={__("Button Bg Hover Color  :")}
          value={style?.tabileRowStyle?.featuredStyle?.actionStyle?.getStartedBgHoverBg}
          onChange={(bgcolor) => { setAttributes({ style: updateData(style, bgcolor, "tabileRowStyle","featuredStyle","actionStyle","getStartedBgHoverBg") }); }}
        />
      <Spacer />
       <ColorControl defaultColor="#2563eb"
          label={__("Button Hover Text Color  :")}
          value={style?.tabileRowStyle?.featuredStyle?.actionStyle?.getStartedTextHoverColor}
          onChange={(bgcolor) => { setAttributes({ style: updateData(style, bgcolor, "tabileRowStyle","featuredStyle","actionStyle","getStartedTextHoverColor") }); }}
        />
      <Spacer />
      <BoxControl label={__("Button Radius :")}
        values={style?.tabileRowStyle?.featuredStyle?.actionStyle?.getStartedRadius} resetValues={resetFeatureddButtonRadius}
        onChange={(value) => { setAttributes({ style: updateData(style, value, "tabileRowStyle","featuredStyle","actionStyle", "getStartedRadius") }); }}
      />
      <Spacer />
      <PanelRow>
          <Label className="">{__("Button Padding :", "b-pricing-table")}</Label>
          <Device />
        </PanelRow>
        <BoxControl
          values={style?.tabileRowStyle?.featuredStyle?.actionStyle?.getStartedPadding[device]}
          resetValues={resetFeaturedGetStartedPadding}
          onChange={(padd) => { setAttributes({ style: updateData(style, padd, "tabileRowStyle","featuredStyle","actionStyle","getStartedPadding", device) }); }}
        />
        <Spacer />
      </PanelBody>

     {/* footer */}
     <PanelBody className="bPlPanelBody" title={__("Footer Style", "b-pricing-table")} initialOpen={false}>
        <Typography
          label={__("Title Typography :", "b-pricing-table")}
          value={style?.tabileRowStyle?.footerStyle?.footerTitleTypo}
          defaults={{fontSize: { desktop: 18, tablet: 18, mobile: 18 }}}
          onChange={(typog) => { setAttributes({ style: updateData(style, typog, "tabileRowStyle", "footerStyle", "footerTitleTypo") }); }}
        />
        <Spacer />
        <ColorControl
          label={__("Title Color :", "b-pricing-table")} defaultColor="rgb(17, 24, 39)"
          value={style?.tabileRowStyle?.footerStyle?.footerTitleColor}
          onChange={(color) => { setAttributes({ style: updateData(style, color, 'tabileRowStyle', 'footerStyle','footerTitleColor') }); }}
        />
        <Spacer />
        <Typography
          label={__("Description Typography :", "b-pricing-table")}
          value={style?.tabileRowStyle?.footerStyle?.footerDesTypo}
          defaults={{fontSize: { desktop: 15, tablet: 15, mobile: 15 }}}
          onChange={(typog) => { setAttributes({ style: updateData(style, typog, "tabileRowStyle", "footerStyle", "footerDesTypo") }); }}
        />
        <Spacer />
        <ColorControl
          label={__("Description Color :", "b-pricing-table")} defaultColor="rgb(75 85 99)"
          value={style?.tabileRowStyle?.footerStyle?.footerDesColor}
          onChange={(color) => { setAttributes({ style: updateData(style, color, 'tabileRowStyle', 'footerStyle','footerDesColor') }); }}
        />
        <Spacer />
        <PanelRow>
          <Label className="">{__("Description Margin :", "b-pricing-table")}</Label>
          <Device />
        </PanelRow>
        <BoxControl
          values={style?.tabileRowStyle?.footerStyle?.footerDesMargin[device]}
          resetValues={resetfooterDesMargin}
          onChange={(padd) => { setAttributes({ style: updateData(style, padd, "tabileRowStyle","footerStyle","footerDesMargin", device) }); }}
        />
        <Spacer />

        <Typography
          label={__("Button Text Typography :", "b-pricing-table")}
          value={style?.tabileRowStyle?.footerStyle?.footerIconTextTypo}
          defaults={{ fontSize: { desktop: 18, tablet: 18, mobile: 18 }}}
          onChange={(typog) => { setAttributes({ style: updateData(style, typog, "tabileRowStyle", "footerStyle", "footerIconTextTypo") }); }}
        />
        <Spacer />
        <ColorControl
          label={__("Button Text Color :", "b-pricing-table")} defaultColor="rgb(37 99 235)"
          value={style?.tabileRowStyle?.footerStyle?.footerIconTextColor}
          onChange={(color) => { setAttributes({ style: updateData(style, color, 'tabileRowStyle', 'footerStyle','footerIconTextColor') }); }}
        />
        <Spacer />
        <ColorControl defaultColor="#ec0404f6"
          label={__("Button Text Hover Color  :")}
          value={style?.tabileRowStyle?.footerStyle?.footerIconTextHoverColor}
          onChange={(bgcolor) => { setAttributes({ style: updateData(style, bgcolor, "tabileRowStyle","footerStyle","footerIconTextHoverColor") }); }}
        />
        <Spacer />

        <UnitControl
          label={__("Icon Width :", "b-pricing-table")}
          value={style?.tabileRowStyle?.footerStyle?.footerIconWidth}
          onChange={(width) => { setAttributes({ style: updateData(style, width, 'tabileRowStyle', 'footerStyle','footerIconWidth') }); }}
        />
        <Spacer /> 

      </PanelBody>
    </>
  );
};

export default Style;
