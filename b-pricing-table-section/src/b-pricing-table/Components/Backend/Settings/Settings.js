import { __ } from '@wordpress/i18n';
import { withSelect } from '@wordpress/data';
import { InspectorControls, AlignmentToolbar, BlockControls } from '@wordpress/block-editor';
import { TabPanel, PanelBody, PanelRow, TextControl, RangeControl, ToolbarGroup, ToolbarButton, __experimentalUnitControl as UnitControl, Button, Dashicon, __experimentalNumberControl as NumberControl, CheckboxControl, Tooltip } from '@wordpress/components';

import { BBlocksAds, Label, ColorControl, Device, HelpPanel } from '../../../../../../bpl-tools/Components';
import { ShadowControl, SpaceControl } from '../../../../../../bpl-tools/Components/Deprecated';
import { gearIcon } from '../../../../../../bpl-tools/utils/icons';
import { pxUnit, perUnit, emUnit } from '../../../../../../bpl-tools/utils/options';

import { generalStyleTabs } from '../../../utils/options';
import { docsLink, pluginSlug } from '../../../utils/data';

const Settings = ({ attributes, setAttributes, updatePriceTable, activeIndex, setActiveIndex, device }) => {
	const { pricingTables, columns, columnGap, rowGap, textAlign, padding, shadow } = attributes;

	const addPricingTable = () => {
		setAttributes({
			pricingTables: [...pricingTables, {
				name: 'Ultimate',
				price: 14.99,
				priceCurrency: '$',
				period: 'Month',
				link: '#',
				linkLabel: 'Enroll Now',
				color: '#4527a4',
				features: [
					{
						isEnable: true,
						label: 'Unlimited Disk Space'
					},
					{
						isEnable: true,
						label: 'Unlimited Website'
					},
					{
						isEnable: true,
						label: 'Unlimited Email Accounts'
					},
					{
						isEnable: true,
						label: 'Unlimited Bandwidth'
					},
					{
						isEnable: true,
						label: 'Unlimited Subdomains'
					},
					{
						isEnable: true,
						label: 'Maintenance'
					}
				]
			}]
		});
		setActiveIndex(updatePriceTable.length);
	}

	const duplicatePricingTable = e => {
		e.preventDefault();

		setAttributes({ pricingTables: [...pricingTables.slice(0, activeIndex), { ...pricingTables[activeIndex] }, ...pricingTables.slice(activeIndex)] });

		setActiveIndex(activeIndex + 1);
	}

	const removePricingTable = e => {
		e.preventDefault();

		setAttributes({ pricingTables: [...pricingTables.slice(0, activeIndex), ...pricingTables.slice(activeIndex + 1)] });

		setActiveIndex(0 === activeIndex ? 0 : activeIndex - 1);
	}

	const { name = '', price = 0, priceCurrency = '', period = '', features = [], linkLabel = '', link = '', color = '' } = pricingTables[activeIndex] || {};

	const addFeature = e => {
		e.preventDefault();
		updatePriceTable('features', [...features, {
			isEnable: '#', label: 'New Feature of Price'
		}]);
	}

	return <>
		<InspectorControls>
			<div className='bPlInspectorInfo'>
				<BBlocksAds />
			</div>

			<TabPanel className='bPlTabPanel' activeClass='activeTab' tabs={generalStyleTabs}>{tab => <>
				{'general' === tab.name && <>
					<HelpPanel slug={pluginSlug} docsLink={docsLink} />


					<PanelBody className='bPlPanelBody addRemoveItems editItem' title={__('Add or Remove Prices', 'b-pricing-table')}>
						{null !== activeIndex && <>
							<h3 className='bplItemTitle'>{__(`Price No ${activeIndex + 1}:`, 'b-pricing-table')}</h3>

							<TextControl label={__('Plan Name:', 'b-pricing-table')} value={name} onChange={val => updatePriceTable('name', val)} />

							<NumberControl className='mt10' label={__('Price:', 'b-pricing-table')} labelPosition='left' value={price} onChange={val => updatePriceTable('price', parseFloat(val))} />

							<PanelRow className='mt10'>
								<Label className=''>{__('Currency:', 'b-pricing-table')}</Label>
								<TextControl value={priceCurrency} onChange={val => updatePriceTable('priceCurrency', val)} />
							</PanelRow>

							<PanelRow className='mt10'>
								<Label className=''>{__('Period:', 'b-pricing-table')}</Label>
								<TextControl value={period} onChange={val => updatePriceTable('period', val)} />
							</PanelRow>

							<Label>{__('Features:', 'b-pricing-table')}</Label>
							{features?.map((feature, featureIndex) => {
								const { isEnable, label } = feature;

								const removeFeature = e => {
									e.preventDefault();
									updatePriceTable('features', [...features.slice(0, featureIndex), ...features.slice(featureIndex + 1)]);
								}

								return <PanelRow key={featureIndex} className='editPriceFeature'>
									<CheckboxControl className='priceFeatureIsEnable' checked={isEnable} onChange={val => updatePriceTable('features', val, featureIndex, 'isEnable')} />

									<TextControl value={label} onChange={val => updatePriceTable('features', val, featureIndex, 'label')} />

									<Tooltip text={__('Remove the feature', 'b-pricing-table')} placement='top' position='top'>
										<a className='removeItem' onClick={removeFeature}><Dashicon icon='no' /></a>
									</Tooltip>
								</PanelRow>;
							})}

							<div className='addItem addFeature mt5'>
								<Button className='addItem' label={__('Add New Feature', 'b-pricing-table')} onClick={addFeature}><Dashicon icon='plus' />{__('Add New Feature', 'b-pricing-table')}</Button>
							</div>

							<PanelRow className='mt20'>
								<Label className=''>{__('Button Label:', 'b-pricing-table')}</Label>
								<TextControl value={linkLabel} onChange={val => updatePriceTable('linkLabel', val)} />
							</PanelRow>

							<Label>{__('Link:', 'b-pricing-table')}</Label>
							<TextControl value={link} onChange={val => updatePriceTable('link', val)} />

							<ColorControl label={__('Color:', 'b-pricing-table')} value={color} onChange={val => updatePriceTable('color', val)} defaultColor='#4527a4' />

							<PanelRow className='itemAction mt20 mb15'>
								{1 < pricingTables?.length && <Button className='removeItem' label={__('Remove', 'b-pricing-table')} onClick={removePricingTable} ><Dashicon icon='no' />{__('Remove', 'b-pricing-table')}</Button>}

								<Button className='duplicateItem' label={__('Duplicate', 'b-pricing-table')} onClick={duplicatePricingTable} >{gearIcon}{__('Duplicate', 'b-pricing-table')}</Button>
							</PanelRow>
						</>}

						<div className='addItem'>
							<Button label={__('Add New Price', 'b-pricing-table')} onClick={addPricingTable}><Dashicon icon='plus' />{__('Add New Price', 'b-pricing-table')}</Button>
						</div>
					</PanelBody>


					<PanelBody className='bPlPanelBody' title={__('Layout Settings', 'b-pricing-table')} initialOpen={false}>
						<PanelRow className='mt20'>
							<Label className='mb5'>{__('Columns:', 'b-pricing-table')}</Label>
							<Device />
						</PanelRow>
						<RangeControl value={columns[device]} onChange={val => { setAttributes({ columns: { ...columns, [device]: val } }) }} min={1} max={6} step={1} beforeIcon='grid-view' />

						<UnitControl className='mt20' label={__('Column Gap:', 'b-pricing-table')} labelPosition='left' value={columnGap} onChange={val => setAttributes({ columnGap: val })} units={[pxUnit(), perUnit(), emUnit()]} />

						<UnitControl className='mt20' label={__('Row Gap:', 'b-pricing-table')} labelPosition='left' value={rowGap} onChange={val => setAttributes({ rowGap: val })} units={[pxUnit(), perUnit(), emUnit()]} />
					</PanelBody>
				</>}


				{'style' === tab.name && <>
					<PanelBody className='bPlPanelBody' title={__('Pricing Table', 'b-pricing-table')}>
						<SpaceControl className='mt20' label={__('Padding:', 'b-pricing-table')} value={padding} onChange={val => setAttributes({ padding: val })} defaults={{ vertical: '35px', horizontal: '25px' }} />

						<ShadowControl className='mt20' label={__('Shadow:', 'b-pricing-table')} value={shadow} onChange={val => setAttributes({ shadow: val })} defaults={{ blur: '30px', color: '#6e8faf4d' }} />
					</PanelBody>
				</>}
			</>}</TabPanel>
		</InspectorControls>


		<BlockControls>
			<ToolbarGroup className='bPlToolbar'>
				<ToolbarButton label={__('Add New Price', 'b-pricing-table')} onClick={addPricingTable}><Dashicon icon='plus' /></ToolbarButton>
			</ToolbarGroup>

			<AlignmentToolbar value={textAlign} onChange={val => setAttributes({ textAlign: val })} />
		</BlockControls>
	</>;
};
export default withSelect(select => {
	const { getDeviceType } = select('core/editor');

	return {
		device: getDeviceType()?.toLowerCase(),
	};
})(Settings);