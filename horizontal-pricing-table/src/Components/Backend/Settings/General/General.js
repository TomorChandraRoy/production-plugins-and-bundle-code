import { __ } from '@wordpress/i18n';
import { PanelBody, __experimentalUnitControl as UnitControl, __experimentalSpacer as Spacer, __experimentalInputControl as InputControl, TextareaControl, TextControl, ToggleControl,} from '@wordpress/components';
import { ColorControl, IconLibrary, ItemsPanel, } from '../../../../../../bpl-tools/Components';
import HorizontalTableData from '../HorizontalTableData/HorizontalTableData';
import { updateData } from '../../../../../../bpl-tools/utils/functions';


const General = ({ attributes, setAttributes,}) => {
  const { style, footerData } = attributes;

  return (
    <>
      {/* Row Width */}
      <PanelBody className="bPlPanelBody" title={__('Layout Settings', 'b-pricing-table')} initialOpen={false}>
        <UnitControl
          label={__("Width :", "b-pricing-table")}
          value={style?.rowWidth}
          onChange={(width) => { setAttributes({ style: updateData(style, width, 'rowWidth') }) }}
        />
      </PanelBody>

      {/* Horizontal Table Data Row */}
      <PanelBody className="bPlPanelBody" title={__("Pricing Table Rows ", "b-pricing-table")} initialOpen={true}>
        <ItemsPanel  {...{ attributes, setAttributes }}
          arrKey="horizontalTableData"
          newItem={
            {
              "title": "New Row",
              "featured": false,
              "currency": "$",
              "price": "20",
              "period": "/month",
              "description": "Advanced tools for teams",
              "buttonText": "Contact Sales",
              "buttonLink": "https://bplugins.com/pricing/",
              "buttonNewTab": false,
              "features": [
                {
                  "title": "Unlimited users",
                  "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path  d=\"M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z\"/></svg>",
                  "iconColor": "#53df55"
                },
                {
                  "title": "Unlimited projects",
                  "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path  d=\"M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z\"/></svg>",
                  "iconColor": "#53df55"
                },
                {
                  "title": "Unlimited projects",
                  "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path  d=\"M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z\"/></svg>",
                  "iconColor": "#53df55"
                },
                {
                  "title": "Unlimited users",
                  "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path  d=\"M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z\"/></svg>",
                  "iconColor": "#53df55"
                },
                {
                  "title": "Advanced analytics and reporting",
                  "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path  d=\"M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z\"/></svg>",
                  "iconColor": "#53df55"
                }
              ]
            }
          }
          ItemSettings={HorizontalTableData}
          itemLabel="Row"
          design="sortable"
        />
      </PanelBody>

      {/* footer */}
      <PanelBody className="bPlPanelBody" title={__('Footer', 'b-pricing-table')} initialOpen={false}>
        <InputControl
          label={__("Title :", "b-pricing-table")}
          placeholder="Enter Your Title"
          value={footerData?.title?.replace(/<\/?[^>]+(>|$)/g, "")}
          onChange={(newtext) => { setAttributes({ footerData: { ...footerData, title: newtext } }) }}
        />
        <Spacer />
        <TextareaControl
          label={__("Decription :", "b-pricing-table")}
          placeholder="Enter Your Decription"
          value={footerData?.des?.replace(/<\/?[^>]+(>|$)/g, "")}
          onChange={(newtext) => { setAttributes({ footerData: { ...footerData, des: newtext } }) }}
        />
        <Spacer />
        <InputControl
          label={__("Button Text :", "b-pricing-table")}
          placeholder="Enter Your Button Name"
          value={footerData?.buttonName?.replace(/<\/?[^>]+(>|$)/g, "")}
          onChange={(newtext) => { setAttributes({ footerData: { ...footerData, buttonName: newtext } }) }}
        />
        <Spacer />
        <IconLibrary
          label={__("Icon :", "b-pricing-table")}
          value={footerData?.icon}
          onChange={val => setAttributes({ footerData: updateData(footerData, val, 'icon') })}
        />
        <Spacer />
        <ColorControl defaultColor="#000000"
          label={__("Icon Color  :")}
          value={style?.tabileRowStyle?.footerStyle?.footerIconHoverColor}
          onChange={(bgcolor) => { setAttributes({ style: updateData(style, bgcolor, "tabileRowStyle","footerStyle","footerIconHoverColor") }); }}
        />
        <Spacer />

        <TextControl
          label={__("Button URL :", "b-pricing-table")}
          value={footerData?.buttonLink || '#'}
          onChange={url => setAttributes({ footerData: updateData(footerData, url, 'buttonLink') })}
          placeholder="Enter URL"
        />
        <Spacer />
        <ToggleControl
          label={__("Open In New Tab ", "b-pricing-table")}
          checked={footerData?.buttonNewTab || false}
          onChange={(value) => setAttributes({ footerData: updateData(footerData, value, 'buttonNewTab') })}
        />
        <Spacer />
      </PanelBody>

    </>

  )
}

export default General;