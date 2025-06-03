import { useEffect, useRef } from 'react';
import { __ } from '@wordpress/i18n';
import { RichText } from '@wordpress/block-editor';

import PriceFeatures from '../Common/PriceFeatures';

const PriceTable = ({ priceTable, index, className, activeIndex, setActiveIndex, updatePriceTable }) => {
    const { name, price, priceCurrency, period, link, linkLabel, features } = priceTable;

    const isBasic = className.includes('basic');
    const isStandard = className.includes('standard');
    const isUltimate = className.includes('ultimate');

    const priceItem = useRef(null);
    const priceAmountWrap = useRef(null);

    useEffect(() => {
        if (isUltimate) {
            const widthOfPriceWrap = priceItem?.current?.clientHeight / 100 * 82;

            priceAmountWrap.current.style.width = `${widthOfPriceWrap}px`;
            priceAmountWrap.current.style.top = `${widthOfPriceWrap / 2}px`;
            priceAmountWrap.current.style.left = `${-widthOfPriceWrap / 2 + 60}px`;
        }
    }, [className, priceItem, priceAmountWrap]);

    const priceAmountEl = <span className='priceAmount'>{priceCurrency}{price}</span>;
    const pricePeriodEl = <RichText className='pricePeriod' tagName='span' value={period} onChange={val => updatePriceTable('period', val)} placeholder={__('Period', 'b-pricing-table')} inlineToolbar />;

    return <div key={index} onClick={() => setActiveIndex(index)} className={`${index === activeIndex ? 'bPlNowEditing' : ''}`} id={`priceItem-${index}`}>
        <div className='priceItem' ref={priceItem}>
            <RichText className='priceName' tagName='h3' value={name} onChange={val => updatePriceTable('name', val)} placeholder={__('Plan Name', 'b-pricing-table')} inlineToolbar />

            {isStandard || isUltimate ? <div className='priceAmountWrap' ref={priceAmountWrap}>{priceAmountEl}{period ? ` / ` : ''}{pricePeriodEl}</div> : ''}

            <PriceFeatures features={features} />

            {!isStandard && !isUltimate ? <div className='priceAmountWrap'>{priceAmountEl}</div> : ''}
            {!isBasic && <br />}

            {linkLabel && <RichText className='priceLink' tagName='a' value={linkLabel} href={link} onChange={val => updatePriceTable('linkLabel', val)} placeholder={__('Link Label', 'b-pricing-table')} inlineToolbar />}
        </div>
    </div>;
}
export default PriceTable;