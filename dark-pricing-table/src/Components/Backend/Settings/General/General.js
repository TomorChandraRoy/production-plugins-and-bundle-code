import { __ } from '@wordpress/i18n';
import { PanelBody,PanelRow,RangeControl,__experimentalUnitControl as UnitControl, } from '@wordpress/components';
import { updateData } from './../../../../utils/functions';
import {perUnit, pxUnit, remUnit } from "../../../../../../bpl-tools/utils/options";
import { Device, ItemsPanel, Label } from '../../../../../../bpl-tools/Components';
import DarkPricingTable from '../DarkPricingTable';


const General = ({ attributes, setAttributes,device  }) => {
  const { style } = attributes;

  return (
    <>
     {/* Responsive */}
    <PanelBody className='bPlPanelBody' title={__('Layout Settings', 'b-blocks')} initialOpen={false}>
        <UnitControl
          label={__("Width :", "b-pricing-table")}
          value={style?.layoutSize}
          units={[pxUnit(), perUnit(), remUnit()]}
          onChange={(width) => { setAttributes({ style: updateData(style, width, 'layoutSize') }) }}
        />
        <PanelRow className='mt20'>
					<Label className='mb5'>{__('Columns:', 'b-pricing-table')}</Label>
						<Device />
				</PanelRow>
						<RangeControl value={style?.layoutCol[device]} 
            onChange={(newCol) => {
              const updatedStyle = updateData(style, newCol, "layoutCol", device);
              setAttributes({ style: updatedStyle });}}
              min={1} max={4} step={1} beforeIcon='grid-view' />
            

        <PanelRow className='mt20'>
					<Label className='mb5'>{__('Columns Gap:', 'b-pricing-table')}</Label>
						<Device />
				</PanelRow>
				<UnitControl  labelPosition='left' 
          value={style?.layColumGap[device]} 
          onChange={val =>{ setAttributes({ style:updateData(style,val,"layColumGap",device)})}} 
          units={[pxUnit(), perUnit()]} />
        <PanelRow className='mt20'>
					<Label className='mb5'>{__('Row Gap:', 'b-pricing-table')}</Label>
						<Device />
				</PanelRow>
				<UnitControl  labelPosition='left' 
          value={style?.layRowGap[device]} 
          onChange={val => {setAttributes({ style:updateData(style, val, "layRowGap",device) })}}
          units={[pxUnit(), perUnit()]} />
    </PanelBody>

     <PanelBody className='bPlPanelBody' title={__('Pricing Table Columns', 'b-blocks')} initialOpen={true}>
        <ItemsPanel  {...{ attributes, setAttributes }}
          arrKey="darkPricingTable"
          newItem={
            {
              "title": "New Freelancer",
              "popularTitle": "Most popular",
              "popularToggle": false,
              "price": "24",
              "priceCurrency": "<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"48\" viewBox=\"0 0 16.202 30\" xml:space=\"preserve\"><path d=\"M16.202 19.432c0-3.313-1.768-5.338-6.15-6.885-3.129-1.178-4.418-1.951-4.418-3.166 0-1.031.773-2.063 3.166-2.063 1.423 0 2.569.243 3.476.532a1.844 1.844 0 0 0 2.346-1.3l.02-.077a2.346 2.346 0 0 0-1.719-2.863c-.823-.2-1.788-.344-2.923-.405V1a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v2.511c-3.798.826-6 3.319-6 6.495 0 3.572 2.688 5.412 6.628 6.738 2.725.921 3.902 1.805 3.902 3.203 0 1.474-1.436 2.283-3.534 2.283-1.504 0-2.92-.306-4.148-.742a1.94 1.94 0 0 0-2.534 1.347l-.009.032a2.454 2.454 0 0 0 1.675 2.958c1.195.358 2.594.608 4.02.674V29a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2.843c4-.831 6.202-3.545 6.202-6.725\"/><g/></svg>",
              "period": "/month",
              "description": "Advanced tools for teams",
              "buttonName": "Contact Sales",
              "buttonLink": "https://bplugins.com/pricing/",
              "buttonNewTab": false,
              "features": [
                {
                  "title": "1 user",
                  "icon": "<svg height=\"30\" viewBox=\"0 0 24 24\" fill=\"#6366f1\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M20.664 5.253a1 1 0 0 1 .083 1.411l-10.666 12a1 1 0 0 1-1.495 0l-5.333-6a1 1 0 0 1 1.494-1.328l4.586 5.159 9.92-11.16a1 1 0 0 1 1.411-.082\"/></svg>",
                  "iconColor": "#6366f1"
                },
                {
                  "title": "5 projects",
                  "icon": "<svg height=\"30\" viewBox=\"0 0 24 24\" fill=\"#6366f1\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M20.664 5.253a1 1 0 0 1 .083 1.411l-10.666 12a1 1 0 0 1-1.495 0l-5.333-6a1 1 0 0 1 1.494-1.328l4.586 5.159 9.92-11.16a1 1 0 0 1 1.411-.082\"/></svg>",
                  "iconColor": "#6366f1"
                },
                {
                  "title": "10GB storage",
                  "icon": "<svg height=\"30\" viewBox=\"0 0 24 24\" fill=\"#6366f1\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M20.664 5.253a1 1 0 0 1 .083 1.411l-10.666 12a1 1 0 0 1-1.495 0l-5.333-6a1 1 0 0 1 1.494-1.328l4.586 5.159 9.92-11.16a1 1 0 0 1 1.411-.082\"/></svg>",
                  "iconColor": "#6366f1"
                },
                {
                  "title": "Basic analytics",
                  "icon": "<svg height=\"30\" viewBox=\"0 0 24 24\" fill=\"#6366f1\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M20.664 5.253a1 1 0 0 1 .083 1.411l-10.666 12a1 1 0 0 1-1.495 0l-5.333-6a1 1 0 0 1 1.494-1.328l4.586 5.159 9.92-11.16a1 1 0 0 1 1.411-.082\"/></svg>",
                  "iconColor": "#6366f1"
                },
                {
                  "title": "Email support",
                  "icon": "<svg height=\"30\" viewBox=\"0 0 24 24\" fill=\"#6366f1\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M20.664 5.253a1 1 0 0 1 .083 1.411l-10.666 12a1 1 0 0 1-1.495 0l-5.333-6a1 1 0 0 1 1.494-1.328l4.586 5.159 9.92-11.16a1 1 0 0 1 1.411-.082\"/></svg>",
                  "iconColor": "#6366f1"
                }
              ],
            }
          }
          ItemSettings={DarkPricingTable}
          itemLabel="Column"
          design="sortable"
        />
     </PanelBody>
    </>
  )
}

export default General