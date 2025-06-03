import { useState } from 'react';
import { useBlockProps } from '@wordpress/block-editor';
import { produce } from 'immer';

import Settings from './Settings/Settings';
import Style from '../Common/Style';
import { prefix } from '../../utils/data';
import PriceTable from './PriceTable';

const Edit = props => {
	const { attributes, setAttributes, clientId } = props;
	const { pricingTables, columns } = attributes;
	const blockProps = useBlockProps();
	const { className } = blockProps;

	const [activeIndex, setActiveIndex] = useState(0);

	const id = `${prefix}-${clientId}`;

	const updatePriceTable = (type, val, otherIndex = false, otherType = false) => {
		const newPricingTable = produce(pricingTables, draft => {
			if (false !== otherIndex && otherType) {
				draft[activeIndex][type][otherIndex][otherType] = val;
			} else {
				draft[activeIndex][type] = val;
			}
		});
		setAttributes({ pricingTables: newPricingTable });
	}

	const isStandard = className.includes('standard');
	const isUltimate = className.includes('ultimate');

	return <>
		<Settings attributes={attributes} setAttributes={setAttributes} updatePriceTable={updatePriceTable} activeIndex={activeIndex} setActiveIndex={setActiveIndex} />

		<div {...blockProps} className={`${className} ${!isStandard && !isUltimate ? 'is-style-basic' : ''}`} id={id}>
			<Style attributes={attributes} id={id} isStandard={isStandard} />

			<div className={`${prefix} columns-${columns.desktop} columns-tablet-${columns.tablet} columns-mobile-${columns.mobile}`}>
				{pricingTables?.map((priceTable, index) => <PriceTable key={index} {...{ priceTable, index, className, activeIndex, setActiveIndex, updatePriceTable }} />)}
			</div>
		</div>
	</>;
};
export default Edit;