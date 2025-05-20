import { __ } from '@wordpress/i18n';
import { PanelBody, __experimentalInputControl as InputControl, __experimentalSpacer as Spacer, __experimentalUnitControl as UnitControl, TextareaControl, PanelRow, RangeControl } from '@wordpress/components';
import { Device, ItemsPanel, Label } from '../../../../../../bpl-tools/Components';
import { updateData } from '../../../../../../bpl-tools/utils/functions';
import { emUnit, perUnit, pxUnit } from '../../../../../../bpl-tools/utils/options';
import { PricingColumn } from '../PricingColumn/PricingColumn';


const General = ({ attributes, setAttributes, device = "desktop" }) => {
  const { MinimalPriceHeaderData, style } = attributes;

  return (
    <>
    {/* theme SelectControl */}
    {/* <PanelBody className='bPlPanelBody' title={__('Theme', 'b-pricing-table')} initialOpen={false}>
      <SelectControl
        label={__('Theme', 'b-pricing-table')}
        labelPosition='left'
        value={themeStyle}
        options={purposeTypeOptions}
        onChange={(v) => setAttributes({ themeStyle: updateData(themeStyle, v) })}
      />
    </PanelBody> */}


      <PanelBody className="bPlPanelBody" title={__("Header Content", "b-pricing-table")} initialOpen={false}>
        <InputControl
          label={__("Title", "b-pricing-table")}
          placeholder="Enter Your Title"
          value={MinimalPriceHeaderData?.title?.replace(/<\/?[^>]+(>|$)/g, "")}
          onChange={(newtext) => { setAttributes({ MinimalPriceHeaderData: { ...MinimalPriceHeaderData, title: newtext } }) }}
        />

        <Spacer />

        <TextareaControl
          label={__("Decription", "b-pricing-table")}
          placeholder="Enter Your Decription"
          value={MinimalPriceHeaderData?.dec?.replace(/<\/?[^>]+(>|$)/g, "")}
          onChange={(newtext) => { setAttributes({ MinimalPriceHeaderData: { ...MinimalPriceHeaderData, dec: newtext } }) }}
        />
      </PanelBody>

      <PanelBody
        className="bPlPanelBody"
        title={__("Pricing Column", "b-pricing-table")}
        initialOpen={true}
      >

        <ItemsPanel  {...{ attributes, setAttributes }}
          arrKey="MinimalPriceCardData"
          newItem={{
            "highlightText": "POPULAR",
            "name": "New Card",
            "id": false,
            "currency": "$",
            "price": "29",
            "period": "/month",
            "description": "For growing teams and businesses",
            "buttonText": "New Button",
            "buttonLink": "https://bplugins.com/blog/",
            "buttonNewTab": false,
            "highlighted": false,
            "features": [
              {
                "title": "1 user",
                "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path fill=\"#53df55\" d=\"M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z\"/></svg>"
              },
              {
                "title": "5GB storage",
                "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path fill=\"#53df55\" d=\"M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z\"/></svg>"
              },
              {
                "title": "Community support",
                "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path fill=\"#53df55\" d=\"M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z\"/></svg>"
              }
            ]
          }}
          ItemSettings={PricingColumn}
          itemLabel="Column"
          design="sortable"
        />
      </PanelBody>
      
      <PanelBody
        className="bPlPanelBody"
        title={__("Responsive", "b-pricing-table")}
        initialOpen={false}
      >

        <PanelRow>
          <Label className="">{__('Columns', "b-pricing-table")}</Label>
          <Device />
        </PanelRow>

        <RangeControl
          value={style?.columns[device]}
          onChange={(newCol) => {
            const updatedStyle = updateData(style, newCol, "columns", device);
            setAttributes({ style: updatedStyle });
          }}
          min={1}
          max={4}
        />
        <Spacer />
        <UnitControl  label={__('Column Gap:', 'b-pricing-table')} labelPosition='left' value={style?.columnGap} 
         units={[pxUnit(), perUnit(), emUnit()]}
          onChange={(newColgap) => {
            const updatedStyle = updateData(style, newColgap, "columnGap",);
            setAttributes({ style: updatedStyle });
          }}
        />
      </PanelBody>
    </>



  )
}

export default General