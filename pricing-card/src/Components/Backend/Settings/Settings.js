import { __ } from '@wordpress/i18n';
import { InspectorControls, BlockControls, AlignmentToolbar } from '@wordpress/block-editor';
import { TabPanel } from '@wordpress/components';
import { tabController } from '../../../../../bpl-tools/utils/functions';
import { generalStyleTabs } from '../../../utils/options';
import General from './General/General';
import Style from './Style/Style';

// import themeData from "./theme.json";
// import { BplBlockPreview } from '../../../../../bpl-tools/Components';

const Settings = ({ attributes, setAttributes,device }) => {
	const { alignment } = attributes;
	return <>
		<InspectorControls>
			<div className='bBlocksInspectorInfo'>
				Need more block like this? Checkout the bundle ➡ <a href='https://wordpress.org/plugins/b-blocks' target='_blank' rel='noopener noreferrer'>B Blocks</a>
			</div>

			<TabPanel className='bPlTabPanel wp-block-b-blocks-pricing-card' activeClass='activeTab' tabs={generalStyleTabs} onSelect={tabController}
			>
				{
					tab => <>
						{'general' === tab.name && <General attributes={attributes} setAttributes={setAttributes} />}

						{'style' === tab.name && <Style attributes={attributes} setAttributes={setAttributes} device={device}/>}
					</>
				}
			</TabPanel>

		</InspectorControls>

		<BlockControls>

			<AlignmentToolbar value={alignment} onChange={val => setAttributes({ alignment: val })} describedBy={__('Block Name Alignment')} alignmentControls={[
				{ title: __('Block Name in left', 'b-blocks'), align: 'left', icon: 'align-left' },
				{ title: __('Block Name in center', 'b-blocks'), align: 'center', icon: 'align-center' },
				{ title: __('Block Name in right', 'b-blocks'), align: 'right', icon: 'align-right' }
			]} />
			{/* <BplBlockPreview blocks={themeData} clientId={clientId} value={layout?.theme} minHeight="150px" minWidth="400px"
				onChange={(value) => { setAttributes({ layout: updateData(layout, value, "theme") }) }}
			/> */}
		</BlockControls>
	</>;
};
export default Settings;