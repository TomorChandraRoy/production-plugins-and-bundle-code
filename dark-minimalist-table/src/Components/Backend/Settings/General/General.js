import { __ } from '@wordpress/i18n';
import { PanelBody,PanelRow,RangeControl,__experimentalUnitControl as UnitControl} from '@wordpress/components';
import { Device, ItemsPanel, Label } from '../../../../../../bpl-tools/Components';
import DarkMinimalist from '../DarkMinimalist';
import { perUnit, pxUnit, remUnit } from '../../../../../../bpl-tools/utils/options';
import { updateData } from './../../../../utils/functions';



const General = ({ attributes, setAttributes, device}) => {
  const { style, } = attributes;

  return (
    <>
      {/* Responsive */}
      <PanelBody className='bPlPanelBody' title={__('Layout Settings', 'b-pricing-table')} initialOpen={false}>
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

      <PanelBody className='bPlPanelBody' title={__('Pricing Table Columns', 'b-pricing-table')} initialOpen={true}>
        <ItemsPanel  {...{ attributes, setAttributes }}
          arrKey="darkMinimalistTableData"
          newItem={
            {
              "title": "NextAi Pro",
              "titleIcon": "<svg fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\"><path d=\"M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 0 0 .95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 0 0-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 0 0-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 0 0-.363-1.118L2.576 10.1c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 0 0 .951-.69l1.519-4.674z\"/></svg>",
              "priceCurrency": "<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"48\" viewBox=\"0 0 16.202 30\" xml:space=\"preserve\"><path d=\"M16.202 19.432c0-3.313-1.768-5.338-6.15-6.885-3.129-1.178-4.418-1.951-4.418-3.166 0-1.031.773-2.063 3.166-2.063 1.423 0 2.569.243 3.476.532a1.844 1.844 0 0 0 2.346-1.3l.02-.077a2.346 2.346 0 0 0-1.719-2.863c-.823-.2-1.788-.344-2.923-.405V1a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v2.511c-3.798.826-6 3.319-6 6.495 0 3.572 2.688 5.412 6.628 6.738 2.725.921 3.902 1.805 3.902 3.203 0 1.474-1.436 2.283-3.534 2.283-1.504 0-2.92-.306-4.148-.742a1.94 1.94 0 0 0-2.534 1.347l-.009.032a2.454 2.454 0 0 0 1.675 2.958c1.195.358 2.594.608 4.02.674V29a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2.843c4-.831 6.202-3.545 6.202-6.725\"/><g/></svg>",
              "price": "49",
              "period": "/month",
              "popularToggle": false,
              "popularTitle": "Popular",
              "description": "For organizations ready to improve engineering velocity, code quality, and developer experience.",
              "features": [
                {
                  "title": "Api Access",
                  "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"335.765\" height=\"335.765\" viewBox=\"0 0 335.765 335.765\" xml:space=\"preserve\"><path d=\"M311.757 41.803 107.573 245.96l-83.587-83.596L0 186.393l107.573 107.569L335.765 65.795z\"/></svg>",
                  "iconColor": "#6366f1"
                },
                {
                  "title": "User Analytics",
                  "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"335.765\" height=\"335.765\" viewBox=\"0 0 335.765 335.765\" xml:space=\"preserve\"><path d=\"M311.757 41.803 107.573 245.96l-83.587-83.596L0 186.393l107.573 107.569L335.765 65.795z\"/></svg>",
                  "iconColor": "#6366f1"
                },
                {
                  "title": "100 Captured Contacts",
                  "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"335.765\" height=\"335.765\" viewBox=\"0 0 335.765 335.765\" xml:space=\"preserve\"><path d=\"M311.757 41.803 107.573 245.96l-83.587-83.596L0 186.393l107.573 107.569L335.765 65.795z\"/></svg>",
                  "iconColor": "#6366f1"
                },
                {
                  "title": "2 Languages Support",
                  "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"335.765\" height=\"335.765\" viewBox=\"0 0 335.765 335.765\" xml:space=\"preserve\"><path d=\"M311.757 41.803 107.573 245.96l-83.587-83.596L0 186.393l107.573 107.569L335.765 65.795z\"/></svg>",
                  "iconColor": "#6366f1"
                },
                {
                  "title": "Multi-Currency Support",
                  "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"335.765\" height=\"335.765\" viewBox=\"0 0 335.765 335.765\" xml:space=\"preserve\"><path d=\"M311.757 41.803 107.573 245.96l-83.587-83.596L0 186.393l107.573 107.569L335.765 65.795z\"/></svg>",
                  "iconColor": "#6366f1"
                },
                {
                  "title": "1 CMS collection",
                  "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"335.765\" height=\"335.765\" viewBox=\"0 0 335.765 335.765\" xml:space=\"preserve\"><path d=\"M311.757 41.803 107.573 245.96l-83.587-83.596L0 186.393l107.573 107.569L335.765 65.795z\"/></svg>",
                  "iconColor": "#6366f1"
                }
              ],
              "buttonText": "Buy Now",
              "buttonIcon": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M17.707 9.293l-5-5a.999.999 0 10-1.414 1.414L14.586 9H3a1 1 0 100 2h11.586l-3.293 3.293a.999.999 0 101.414 1.414l5-5a.999.999 0 000-1.414z\" /></svg>",
              "buttonLink": "https://bplugins.com/",
              "buttonNewTab": false
            }
          }
          ItemSettings={DarkMinimalist}
          itemLabel="Column"
          design="sortable"
        />
      </PanelBody>
    </>
  )
}

export default General