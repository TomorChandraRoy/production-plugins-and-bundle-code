import { registerBlockType } from '@wordpress/blocks';

import './editor.scss';
import metadata from './block.json';
import Edit from './Components/Backend/Edit';
import { pricingTableIcon } from './utils/icons';

registerBlockType(metadata, {
	icon: pricingTableIcon,
	edit: Edit,
	save: () => null
});