import { useEffect, useRef } from 'react';

import PriceFeatures from '../Common/PriceFeatures';
import { prefix } from '../../utils/data';

const PricingTable = ({ attributes, id, isBasic, isStandard, isUltimate }) => {
	const { pricingTables, columns } = attributes;

	useEffect(() => {
		const priceFeaturesAll = document.querySelectorAll(`#${id} .priceItem .priceFeatures`);
		const priceFeaturesHeight = [];

		priceFeaturesAll?.forEach(priceFeatures => {
			priceFeaturesHeight.push(priceFeatures?.clientHeight);
		});

		priceFeaturesAll?.forEach(priceFeatures => {
			priceFeatures.style.height = Math.max(...priceFeaturesHeight) + 'px';
		});
	}, [pricingTables]);

	// Single Price Table
	const PriceTable = ({ priceTable, index }) => {
		const { name, price, priceCurrency, period, link, linkLabel, features } = priceTable;

		const priceTableEl = useRef(null);
		const priceAmountWrapEl = useRef(null);

		useEffect(() => {
			if (isUltimate) {
				const widthOfPriceWrap = priceTableEl?.current?.clientHeight / 100 * 82;

				priceAmountWrapEl.current.style.width = `${widthOfPriceWrap}px`;
				priceAmountWrapEl.current.style.top = `${widthOfPriceWrap / 2}px`;
				priceAmountWrapEl.current.style.left = `${-widthOfPriceWrap / 2 + 60}px`;
			}
		}, []);

		const priceAmountEl = <span className='priceAmount'>{priceCurrency}{price}</span>;
		const pricePeriodEl = <span className='pricePeriod' dangerouslySetInnerHTML={{ __html: period }} />;

		return <div key={index} id={`priceItem-${index}`}>
			<div className='priceItem' ref={priceTableEl}>
				<h3 className='priceName' dangerouslySetInnerHTML={{ __html: name }} />

				{isStandard || isUltimate ? <div className='priceAmountWrap' ref={priceAmountWrapEl}>{priceAmountEl}{period ? ` / ` : ''}{pricePeriodEl}</div> : ''}

				<PriceFeatures features={features} />

				{!isStandard && !isUltimate ? <div className='priceAmountWrap'>{priceAmountEl}{period ? ` /` : ''}{pricePeriodEl}</div> : ''}
				{!isBasic && <br />}

				{linkLabel && <a className='priceLink' href={link} dangerouslySetInnerHTML={{ __html: linkLabel }} />}
			</div>
		</div>;
	}

	return <div className={`${prefix} columns-${columns.desktop} columns-tablet-${columns.tablet} columns-mobile-${columns.mobile}`}>
		{pricingTables?.map((priceTable, index) => <PriceTable key={index} priceTable={priceTable} index={index} />)}
	</div>
}
export default PricingTable;