import { useSelect } from '@wordpress/data';
import { RichText } from "@wordpress/block-editor";
import { updateData } from '../../utils/functions';

const DarkTable = ({ attributes, setAttributes }) => {
    const { darkPricingTable } = attributes;

    const isEditor = useSelect((select) => select('core/editor'));

    return (
        <div className="pricing-container">
            <div className="pricing-table-section">
                <div className="pricing-table-card">
                    {darkPricingTable?.map((data, index) => (
                        <div key={index} className={`pricing-card-${index} ${data?.popularToggle ? "popular" : "pricing-card"}`}>
                            {data.popularToggle && (
                                <>
                                    {isEditor
                                        ? <RichText className="tag" tagName="span" value={data?.popularTitle} placeholder="Enter Your Name "
                                            onChange={val => setAttributes({ darkPricingTable: updateData(darkPricingTable, val, index, 'popularTitle') })}
                                            allowedFormats={['core/bold', 'core/italic', 'core/link', 'core/text-color']}
                                        />
                                        : <>
                                            {data?.popularTitle && (
                                                <RichText.Content tagName="span" className="tag" value={data?.popularTitle} />
                                            )}
                                        </>
                                    }
                                </>
                            )}
                            {isEditor
                                ? <RichText className="pricing-title" tagName="h3" value={data?.title} placeholder="Enter Your Title "
                                    onChange={val => setAttributes({ darkPricingTable: updateData(darkPricingTable, val, index, 'title') })}
                                    allowedFormats={['core/bold', 'core/italic', 'core/link', 'core/text-color']}
                                />
                                : <RichText.Content tagName="h3" className="pricing-title" value={data?.title} />
                            }
                            <div className="price-row">
                                {isEditor
                                    ?
                                    <>
                                        <div className='pricing'>
                                            <p className="icon" dangerouslySetInnerHTML={{ __html: data?.priceCurrency }} />
                                            <RichText className="price" tagName="span" value={data?.price} placeholder="Enter Your Price"
                                                onChange={val => setAttributes({ darkPricingTable: updateData(darkPricingTable, val, index, 'price') })}
                                                allowedFormats={['core/bold', 'core/italic', 'core/link', 'core/text-color']}
                                            />
                                        </div>
                                        <RichText className="period" tagName="span" value={data?.period} placeholder="Enter Your Period"
                                            onChange={val => setAttributes({ darkPricingTable: updateData(darkPricingTable, val, index, 'period') })}
                                            allowedFormats={['core/bold', 'core/italic', 'core/link', 'core/text-color']}
                                        />

                                    </>
                                    :
                                    <>
                                        <div className='pricing'>
                                            <p className="icon" dangerouslySetInnerHTML={{ __html: data?.priceCurrency }} />
                                            <RichText.Content tagName="span" className="price" value={data?.price} />
                                        </div>
                                        <RichText.Content tagName="span" className="period" value={data?.period} />
                                    </>
                                }
                            </div>
                            {isEditor
                                ? <RichText className="description" tagName="p" value={data?.description} placeholder="Enter Your Description "
                                    onChange={val => setAttributes({ darkPricingTable: updateData(darkPricingTable, val, index, 'description') })}
                                    allowedFormats={['core/bold', 'core/italic', 'core/link', 'core/text-color']}
                                />
                                : <RichText.Content tagName="p" className="description" value={data?.description} />
                            }
                            {/* features */}
                            <ul className="pricing-feature">
                                {data?.features?.map((feature, idx) => (
                                    <>
                                        <div className='pricing-fea-icon'>

                                            {isEditor
                                                ?
                                                <>
                                                   <span className={`checkmark icon-${idx}`} dangerouslySetInnerHTML={{ __html: feature?.icon }} /> 
                                                    <RichText className="feature" tagName="li" value={feature?.title} placeholder="Enter Your Feature"
                                                        onChange={val => setAttributes({ darkPricingTable: updateData(darkPricingTable, val, index, 'features', idx, 'title') })}
                                                        allowedFormats={['core/bold', 'core/italic', 'core/link', 'core/text-color']}
                                                    />
                                                </>
                                                :
                                                <>
                                                    {feature?.title && (
                                                        <>
                                                            <span className={`checkmark icon-${idx}`} dangerouslySetInnerHTML={{ __html: feature?.icon }} />
                                                            <RichText.Content tagName="li" className="feature" value={feature?.title} />
                                                        </>
                                                    )}
                                                </>
                                            }
                                            {/* <li className="feature" key={idx}>{feature?.title}</li> */}
                                        </div>
                                    </>
                                ))}
                            </ul>
                            {/* button */}
                            {
                                data?.buttonName && (
                                    <button className={`button ${data?.popularToggle ? "popularButton" : ""}`}>

                                        {isEditor
                                            ?
                                            <a href={data?.buttonLink || '#'} className="link-a" target={data?.buttonNewTab ? "_blank" : "_self"}
                                                rel={data?.buttonNewTab ? "noopener noreferrer" : undefined} onClick={(e) => e.preventDefault()}>
                                                <RichText value={data?.buttonName} placeholder="Enter Your Button Name"
                                                    onChange={val => setAttributes({ darkPricingTable: updateData(darkPricingTable, val, index, 'buttonName') })}
                                                    allowedFormats={['core/bold', 'core/italic', 'core/link', 'core/text-color']}
                                                />
                                            </a>

                                            :

                                            <>

                                                <a href={data?.buttonLink || '#'} className="link-a" target={data?.buttonNewTab ? "_blank" : "_self"}
                                                    rel={data?.buttonNewTab ? "noopener noreferrer" : undefined} >
                                                    <RichText.Content value={data?.buttonName} />
                                                </a>
                                            </>
                                        }

                                    </button>
                                )
                            }
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DarkTable;