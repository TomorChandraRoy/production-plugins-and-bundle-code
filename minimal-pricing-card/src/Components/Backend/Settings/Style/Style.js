import { __ } from "@wordpress/i18n";
import { PanelBody, PanelRow, __experimentalSpacer as Spacer,  __experimentalUnitControl as UnitControl } from "@wordpress/components";
import { BoxControl, ColorControl, Device, Label, ShadowControl, SolidBackground, Typography } from "../../../../../../bpl-tools/Components";
import { updateData } from "../../../../../../bpl-tools/utils/functions";
import { paddingReset, resetCardButtonPadding, resetCardButtonRadius, resetcardDesMargin, resetcardMargin, resetCardPadding, resetCardPeriodMargin, resetFeaturesMargin, resetFeaturesPadding, resetHightRadius, resetIconMargin, resetRadius, } from "../../../../utils/options";


const Style = ({ attributes, setAttributes, device }) => {
  const { style} = attributes;

  const { headerStyle, priceCardStyle } = style;

  const { titleStyle, desStyle } = headerStyle;
  const { typo, color } = titleStyle;
  const { desTypo, desColor } = desStyle;

  const { hightlightStyle } = priceCardStyle;


  return (
    <>
      <PanelBody
        className="bPlPanelBody"
        title={__("Header styles", "b-pricing-card")}
        initialOpen={false}
      >
        <Typography
          label={__("Typography :", "b-pricing-card")}
          value={typo}
          defaults={{
            fontSize: { desktop: 48, tablet: 45, mobile: 40 },
          }}
          onChange={(typog) => {
            const updatedStyle = updateData(style, typog, "headerStyle", "titleStyle", "typo");
            setAttributes({ style: updatedStyle });
          }}
        />
        <Spacer />

        <ColorControl
          label={__("Title Color :", "b-pricing-card")}
          defaultColor="#111827"
          value={color}
          onChange={(newcolor) => {
            const updatedStyle = updateData(style, newcolor, "headerStyle", "titleStyle", "color");
            setAttributes({ style: updatedStyle });
          }}
        />
        <Typography
          label={__("Typography :", "b-pricing-card")}
          value={desTypo}
          defaults={{
            fontSize: { desktop: 20, tablet: 19, mobile: 18 },
          }}
          onChange={(typog) => {
            const updatedStyle = updateData(style, typog, "headerStyle", "desStyle", "desTypo");
            setAttributes({ style: updatedStyle });
          }}
        />
        <Spacer />

        <ColorControl
          label={__("Des Color :", "b-pricing-card")}
          defaultColor="#8a8f95"
          value={desColor}
          onChange={(newcolor) => {
            const updatedStyle = updateData(style, newcolor, "headerStyle", "desStyle", "desColor");
            setAttributes({ style: updatedStyle });
          }}
        />
      </PanelBody>
      <PanelBody
        className="bPlPanelBody"
        title={__("Minimal Pricing Card ", "b-pricing-card")}
        initialOpen={false}
      >
        <SolidBackground
          label={__("Card Background Color :")}
          value={priceCardStyle?.priceCardBackgroundColor}
          onChange={(bgcolor) => { setAttributes({ style: updateData(style, bgcolor, "priceCardStyle", "priceCardBackgroundColor") }); }}
        />
        <Spacer />
        <PanelRow>
          <Label className="">{__("Card Padding :", "b-pricing-card")}</Label>
          <Device />
        </PanelRow>
        <BoxControl
          values={priceCardStyle?.cardPadding[device]}
          resetValues={resetCardPadding}
          onChange={(padd) => { setAttributes({ style: updateData(style, padd, "priceCardStyle", "cardPadding", device) }); }}
        />
        <Spacer />
        <BoxControl label={__("Card Radius :")} values={priceCardStyle?.cardRadius} resetValues={resetRadius}
          onChange={(value) => { setAttributes({ style: updateData(style, value, "priceCardStyle", "cardRadius") }); }}
        />
        <Spacer />
        <UnitControl
          label={__("Card Border Width :", "b-pricing-card")}
          value={priceCardStyle?.borderWidth}
          onChange={(width) => { setAttributes({ style: updateData(style, width, 'priceCardStyle', 'borderWidth') }); }}
        />
        <Spacer />
        <ColorControl
          label={__("Card Border Color :", "b-pricing-card")} defaultColor="#e5e7eb"
          value={priceCardStyle?.borderColor}
          onChange={(color) => { setAttributes({ style: updateData(style, color, 'priceCardStyle', 'borderColor') }); }}
        />
        <Spacer />
        <ShadowControl
          label={__("Card Shadow :", "b-pricing-card")}
          value={priceCardStyle?.shadow}
          onChange={(newShadow) => { setAttributes({ style: updateData(style, newShadow, 'priceCardStyle', 'shadow') }); }}
        />
        <Spacer />
        {/* Propular Card */}
        <UnitControl
          label={__(" Propular Card Border Width :", "b-pricing-card")}
          value={priceCardStyle?.propularWidth}
          onChange={(width) => { setAttributes({ style: updateData(style, width, 'priceCardStyle', 'propularWidth') }); }}
        />
        <Spacer />
        <ColorControl
          label={__("Propular Card Border Color :", "b-pricing-card")} defaultColor="#111827"
          value={priceCardStyle?.propularBorderColor}
          onChange={(color) => { setAttributes({ style: updateData(style, color, 'priceCardStyle', 'propularBorderColor') }); }}
        />
        <Spacer />
        <ShadowControl
          label={__("Propular Card Shadow :", "b-pricing-card")}
          value={priceCardStyle?.propularShadow}
          onChange={(newShadow) => { setAttributes({ style: updateData(style, newShadow, 'priceCardStyle', 'propularShadow') }); }}
        />
        <Spacer />

        <SolidBackground
          label={__("Hightlight BG Color :", "b-pricing-card")}
          value={hightlightStyle?.bgColor}
          onChange={(bgcolor) => { setAttributes({ style: updateData(style, bgcolor, "priceCardStyle", "hightlightStyle", "bgColor") }); }}
        />
        <Spacer />
        <ColorControl
          label={__("Hightlight Text Color :", "b-pricing-card")} defaultColor="#e5e7eb"
          value={hightlightStyle?.color}
          onChange={(color) => { setAttributes({ style: updateData(style, color, 'priceCardStyle', 'hightlightStyle', 'color') }); }}
        />
        <Spacer />
        <BoxControl label={__("Hightlight Radius :", "b-pricing-card")}
          values={hightlightStyle?.hightLightRadius} resetValues={resetHightRadius}
          onChange={(value) => { setAttributes({ style: updateData(style, value, "priceCardStyle", "hightlightStyle", "hightLightRadius") }); }}
        />
        <Spacer />

        <PanelRow>
          <Label className="">{__("Hightlight Padding :", "b-pricing-card")}</Label>
          <Device />
        </PanelRow>
        <BoxControl
          values={hightlightStyle?.padding[device]}
          resetValues={paddingReset}
          onChange={(padd) => { setAttributes({ style: updateData(style, padd, "priceCardStyle", "hightlightStyle", "padding", device) }); }}
        />
        <Spacer />
        <Typography
          label={__("Hightlight Typography :", "b-pricing-card")}
          value={hightlightStyle?.hightLightTypo}
          defaults={{
            fontSize: { desktop: 12, tablet: 12, mobile: 12 },
          }}
          onChange={(typog) => { setAttributes({ style: updateData(style, typog, "priceCardStyle", "hightlightStyle", "hightLightTypo") }); }}
        />
        <Spacer />
        <ColorControl
          label={__("Card Title Color :", "b-pricing-card")} defaultColor="#111827"
          value={priceCardStyle?.cardTitleColor}
          onChange={(newColor) => { setAttributes({ style: updateData(style, newColor, 'priceCardStyle', 'cardTitleColor') }); }}
        />
        <Spacer />
        <Typography
          label={__("Card Title Typography :", "b-pricing-card")}
          value={priceCardStyle?.CardTitleTypo}
          defaults={{
            fontSize: { desktop: 25, tablet: 25, mobile: 25 },
          }}
          onChange={(typog) => { setAttributes({ style: updateData(style, typog, "priceCardStyle", "CardTitleTypo") }); }}
        />
        <Spacer />
        <PanelRow>
          <Label className="">{__("Card Title Margin :", "b-pricing-card")}</Label>
          <Device />
        </PanelRow>
        <BoxControl
          values={priceCardStyle?.cardMargin[device]}
          resetValues={resetcardMargin}
          onChange={(margin) => { setAttributes({ style: updateData(style, margin, "priceCardStyle", "cardMargin", device) }); }}
        />
        <Spacer />
        <Typography
          label={__("Card Amount Typography :", "b-pricing-card")}
          value={priceCardStyle?.CardAmountTypo}
          defaults={{
            fontSize: { desktop: 36, tablet: 36, mobile: 36 },
          }}
          onChange={(typog) => { setAttributes({ style: updateData(style, typog, "priceCardStyle", "CardAmountTypo") }); }}
        />
        <Spacer />
        <ColorControl
          label={__("Card Amount Color :", "b-pricing-card")} defaultColor="#111827"
          value={priceCardStyle?.cardAmountColor}
          onChange={(newColor) => { setAttributes({ style: updateData(style, newColor, 'priceCardStyle', 'cardAmountColor') }); }}
        />
        <Spacer />
        <Typography
          label={__("Card Period Typography :", "b-pricing-card")}
          value={priceCardStyle?.CardPeriodTypo}
          defaults={{
            fontSize: { desktop: 22, tablet: 22, mobile: 22 },
          }}
          onChange={(typog) => { setAttributes({ style: updateData(style, typog, "priceCardStyle", "CardPeriodTypo") }); }}
        />
        <Spacer />
        <ColorControl
          label={__("Card Period Color :", "b-pricing-card")} defaultColor="#6b7280"
          value={priceCardStyle?.cardPeriodColor}
          onChange={(newColor) => { setAttributes({ style: updateData(style, newColor, 'priceCardStyle', 'cardPeriodColor') }); }}
        />
        <Spacer />
        <PanelRow>
          <Label className="">{__("Card Period Margin :", "b-pricing-card")}</Label>
          <Device />
        </PanelRow>
        <BoxControl
          values={priceCardStyle?.cardPeriodMargin[device]}
          resetValues={resetCardPeriodMargin}
          onChange={(margin) => { setAttributes({ style: updateData(style, margin, "priceCardStyle", "cardPeriodMargin", device) }); }}
        />
        <Spacer />
        <Typography
          label={__("Card Description Typography :", "b-pricing-card")}
          value={priceCardStyle?.CardDesTypo}
          defaults={{
            fontSize: { desktop: 20, tablet: 20, mobile: 20 },
          }}
          onChange={(typog) => { setAttributes({ style: updateData(style, typog, "priceCardStyle", "CardDesTypo") }); }}
        />
        <Spacer />
        <ColorControl
          label={__("Card Description Color :", "b-pricing-card")} defaultColor="#4b5563"
          value={priceCardStyle?.cardDesColor}
          onChange={(newColor) => { setAttributes({ style: updateData(style, newColor, 'priceCardStyle', 'cardDesColor') }); }}
        />
        <Spacer />
        <PanelRow>
          <Label className="">{__("Card Description Margin :", "b-pricing-card")}</Label>
          <Device />
        </PanelRow>
        <BoxControl
          values={priceCardStyle?.cardDesMargin[device]}
          resetValues={resetcardDesMargin}
          onChange={(margin) => { setAttributes({ style: updateData(style, margin, "priceCardStyle", "cardDesMargin", device) }); }}
        />
      </PanelBody>

      {/* button */}
      <PanelBody
        className="bPlPanelBody"
        title={__("Button ", "b-pricing-card")}
        initialOpen={false}
      >
        <Spacer />
        <Typography
          label={__("Text Typography :", "b-pricing-card")}
          value={priceCardStyle?.cardButtonTypo}
          defaults={{
            fontSize: { desktop: 22, tablet: 22, mobile: 22 },
          }}
          onChange={(typog) => { setAttributes({ style: updateData(style, typog, "priceCardStyle", "cardButtonTypo") }); }}
        />
        <Spacer />
        <ColorControl
          label={__("Text Default Color :", "b-pricing-card")} defaultColor="black"
          value={priceCardStyle?.cardButtonColor}
          onChange={(newColor) => { setAttributes({ style: updateData(style, newColor, 'priceCardStyle', 'cardButtonColor') }); }}
        />
        <Spacer />
        <SolidBackground
          label={__("Default BG Color :", "b-pricing-card")}
          value={priceCardStyle?.cardButtonBGColor}
          onChange={(newBgcolor) => { setAttributes({ style: updateData(style, newBgcolor, "priceCardStyle", "cardButtonBGColor") }); }}
        />
        <Spacer />
        <SolidBackground
          label={__("Default Hover BG Color :", "b-pricing-card")}
          value={priceCardStyle?.cardButtonBGHoverColor}
          onChange={(newBgcolor) => { setAttributes({ style: updateData(style, newBgcolor, "priceCardStyle", "cardButtonBGHoverColor") }); }}
        />
        <Spacer />
        <ColorControl
          label={__("Text Hightlight Color :", "b-pricing-card")} defaultColor="white"
          value={priceCardStyle?.cardButtonHightlightColor}
          onChange={(newColor) => { setAttributes({ style: updateData(style, newColor, 'priceCardStyle', 'cardButtonHightlightColor') }); }}
        />
        <Spacer />
        <SolidBackground
          label={__("Hightlight BG Color :", "b-pricing-card")}
          value={priceCardStyle?.cardButtonHightlightBackgroundColor}
          onChange={(newBgcolor) => { setAttributes({ style: updateData(style, newBgcolor, "priceCardStyle", "cardButtonHightlightBackgroundColor") }); }}
        />
        <Spacer />
        <SolidBackground
          label={__("Hightlight BG Hover Color  :", "b-pricing-card")}
          value={priceCardStyle?.cardButtonHightlightBgHoverColor}
          onChange={(newBgcolor) => { setAttributes({ style: updateData(style, newBgcolor, "priceCardStyle", "cardButtonHightlightBgHoverColor") }); }}
        />
        <Spacer />
        <BoxControl label={__("Radius :", "b-pricing-card")}
          values={priceCardStyle?.cardButtonRadius} resetValues={resetCardButtonRadius}
          onChange={(value) => { setAttributes({ style: updateData(style, value, "priceCardStyle", "cardButtonRadius") }); }}
        />
        <Spacer />
        <PanelRow>
          <Label className="">{__("Padding :", "b-pricing-card")}</Label>
          <Device />
        </PanelRow>
        <BoxControl
          values={priceCardStyle?.cardButtonPadding[device]}
          resetValues={resetCardButtonPadding}
          onChange={(margin) => { setAttributes({ style: updateData(style, margin, "priceCardStyle", "cardButtonPadding", device) }); }}
        />
      </PanelBody>

      <Spacer />
      {/* Features */}
      <PanelBody
        className="bPlPanelBody"
        title={__("Features ", "b-pricing-card")}
        initialOpen={false}
      >
        <Typography
          label={__("Text Typography :", "b-pricing-card")}
          value={priceCardStyle?.priceFeatures?.featuresTypo}
          defaults={{
            fontSize: { desktop: 19, tablet: 19, mobile: 19 },
          }}
          onChange={(typog) => { setAttributes({ style: updateData(style, typog, "priceCardStyle", "priceFeatures", "featuresTypo") }); }}
        />
        <Spacer />
        <PanelRow>
          <Label className="">{__("Padding :", "b-pricing-card")}</Label>
          <Device />
        </PanelRow>
        <BoxControl
          values={priceCardStyle?.priceFeatures?.featuresPadding?.[device]}
          resetValues={resetFeaturesPadding}
          onChange={(padding) => { setAttributes({ style: updateData(style, padding, "priceCardStyle", "priceFeatures", "featuresPadding", device) }); }}
        />
        <Spacer />
        <PanelRow>
          <Label className="">{__("Margin :", "b-pricing-card")}</Label>
          <Device />
        </PanelRow>
        <BoxControl
          values={priceCardStyle?.priceFeatures?.featuresMargin?.[device]}
          resetValues={resetFeaturesMargin}
          onChange={(margin) => { setAttributes({ style: updateData(style, margin, "priceCardStyle", "priceFeatures", "featuresMargin", device) }); }}
        />
        <Spacer />
        <UnitControl
          label={__(" Icon Width :", "b-pricing-card")}
          value={priceCardStyle?.priceFeatures?.iconWidth}
          onChange={(width) => { setAttributes({ style: updateData(style, width, 'priceCardStyle', "priceFeatures", 'iconWidth') }); }}
        />
        <Spacer />
        <PanelRow>
          <Label className="">{__("Icon Margin :", "b-pricing-card")}</Label>
          <Device />
        </PanelRow>
        <BoxControl
          values={priceCardStyle?.priceFeatures?.iconMargin[device]}
          resetValues={resetIconMargin}
          onChange={(margin) => { setAttributes({ style: updateData(style, margin, "priceCardStyle", "priceFeatures", "iconMargin", device) }); }}
        />

      </PanelBody>
    </>
  );
};

export default Style;
