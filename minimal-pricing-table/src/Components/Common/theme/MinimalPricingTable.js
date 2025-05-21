import { RichText } from "@wordpress/block-editor";
import { useSelect } from '@wordpress/data';
import { updateData } from "../../../../../bpl-tools/utils/functions";
export const MinimalPricingTable = ({ attributes, setAttributes }) => {
    const { MinimalPriceCardData, MinimalPriceHeaderData } = attributes;
    const { title, dec } = MinimalPriceHeaderData;
    const isEditor = useSelect((select) => select('core/editor'));
    return (
        <div className="pricing-container">
            <div className="pricing-wrapper">
                <div className="pricing-header">
                    {isEditor
                        ?
                        (
                            <>
                                <RichText className="pricing-h1" tagName="h1" value={title} placeholder="Enter Your Header Title "
                                    onChange={(newtext) => { setAttributes({ MinimalPriceHeaderData: { ...MinimalPriceHeaderData, title: newtext } }) }}
                                    allowedFormats={['core/bold', 'core/italic', 'core/link', 'core/text-color']} />

                                <RichText className="pricing-p" tagName="p" value={dec} placeholder="Enter Your Description "
                                    onChange={(newtext) => { setAttributes({ MinimalPriceHeaderData: { ...MinimalPriceHeaderData, dec: newtext } }) }} allowedFormats={['core/bold', 'core/italic', 'core/link', 'core/text-color']} />
                            </>
                        )
                        : (
                            <>
                                <h1 className="pricing-h1">{title}</h1>
                                <p className="pricing-p">{dec}</p>
                            </>
                        )}
                </div>

                <div className="pricing-grid">
                    {
                        MinimalPriceCardData?.map((data, index) => ( 
                        
                            <>
                                <div key={index} className={`pricing-card pricing-card-${index} ${data?.highlighted && data?.highlightText ? "popular" : ""}`}>
                                    {/* hightlight */}
                                    {isEditor
                                        ?
                                        (
                                            <>
                                                {data?.highlighted && (
                                                    <RichText className={`${data?.highlightText ? "popular-tag" : ""}`} tagName="div"
                                                        value={data?.highlightText || ""}
                                                        onChange={val => setAttributes({ MinimalPriceCardData: updateData(MinimalPriceCardData, val, index, 'highlightText') })}
                                                        allowedFormats={['core/bold', 'core/italic', 'core/link', 'core/text-color']} />
                                                )
                                                }
                                            </>
                                        )
                                        : (
                                            <>
                                                {data?.highlighted && (
                                                    <div className={`${data?.highlightText ? "popular-tag" : ""}`}>{data?.highlightText}</div>
                                                )}
                                            </>
                                        )}
                                    <div className="card-header">
                                        {isEditor
                                            ?
                                            (
                                                <>
                                                    <RichText className="card-h3" tagName="h3" value={data?.name}
                                                        placeholder="Enter Card Name"
                                                        onChange={val => setAttributes({ MinimalPriceCardData: updateData(MinimalPriceCardData, val, index, 'name') })}
                                                        allowedFormats={['core/bold', 'core/italic', 'core/link', 'core/text-color']} />

                                                </>
                                            )
                                            : (
                                                <>
                                                    <h3 className="card-h3">{data?.name}</h3>
                                                </>
                                            )}
                                        <div className="price">
                                            {isEditor
                                                ?
                                                (
                                                    <>
                                                        <RichText className="amount" tagName="span" value={data?.currency}
                                                            placeholder="$"
                                                            onChange={val => setAttributes({ MinimalPriceCardData: updateData(MinimalPriceCardData, val, index, 'currency') })}
                                                            allowedFormats={['core/bold', 'core/italic', 'core/link', 'core/text-color']}
                                                        />
                                                        <RichText className="amount" tagName="span" value={data?.price}
                                                            placeholder="Price"
                                                            onChange={val => setAttributes({ MinimalPriceCardData: updateData(MinimalPriceCardData, val, index, 'price') })}
                                                            allowedFormats={['core/bold', 'core/italic', 'core/link', 'core/text-color']}
                                                        />
                                                        <RichText className="period" tagName="span" value={data?.period}
                                                            placeholder="Your Period"
                                                            onChange={val => setAttributes({ MinimalPriceCardData: updateData(MinimalPriceCardData, val, index, 'period') })}
                                                            allowedFormats={['core/bold', 'core/italic', 'core/link', 'core/text-color']}
                                                        />
                                                    </>
                                                )
                                                : (
                                                    <>
                                                        <span className="amount">{data?.currency}</span>
                                                        <span className="amount">{data?.price}</span>
                                                        <span className="period">{data?.period}</span>
                                                    </>
                                                )}
                                        </div>
                                        {isEditor
                                            ?
                                            (
                                                <>
                                                    <RichText className="description" tagName="p"
                                                        value={data?.description}
                                                        onChange={dec => setAttributes({ MinimalPriceCardData: updateData(MinimalPriceCardData, dec, index, 'description') })}
                                                        placeholder="Enter Your Description"
                                                        allowedFormats={['core/bold', 'core/italic', 'core/link', 'core/text-color']}
                                                    />

                                                    <a href={data?.buttonLink || '#'} className="link" target={data.buttonNewTab ? "_blank" : "_self"}
                                                        rel={data?.buttonNewTab ? "noopener noreferrer" : undefined} onClick={(e) => e.preventDefault()}>
                                                        <RichText className={`btn ${data?.highlighted || data?.id === true ? "btn-primary" : "btn-outline"}`} tagName="p"
                                                            value={data?.buttonText}
                                                            placeholder="Enter Your Button Name"
                                                            onChange={val => setAttributes({ MinimalPriceCardData: updateData(MinimalPriceCardData, val, index, 'buttonText') })}
                                                            allowedFormats={['core/bold', 'core/italic', 'core/link', 'core/text-color']}
                                                        />
                                                    </a>

                                                </>
                                            )
                                            : (
                                                <>
                                                    <p className="description">{data?.description}</p>
                                                    {data?.buttonText && (
                                                        <a href={data?.buttonLink || '#'} className="link" target={data.buttonNewTab ? "_blank" : "_self"}
                                                        rel={data?.buttonNewTab ? "noopener noreferrer" : undefined} >
                                                        <button className={`btn ${data?.highlighted || data?.id === true ? "btn-primary" : "btn-outline"}`}>{data?.buttonText}</button>
                                                        </a>

                                                    )}
                                                </>
                                            )
                                        }
                                    </div>
                                    {/* features */}
                                    <div className="card-features">
                                        <ul className="card-ui">
                                            {
                                                data?.features.map((feature, inx) => (
                                                    <>
                                                        <li className="card-li" key={index}>
                                                            {isEditor
                                                                ?
                                                                (
                                                                    <>
                                                                        <div className={`icon icon-${index}`} dangerouslySetInnerHTML={{ __html: feature.icon }} />
                                                                        <RichText className="card-feature" tagName="span"
                                                                            value={feature?.title}
                                                                            placeholder="Enter Feature"
                                                                            onChange={vl => setAttributes({ MinimalPriceCardData: updateData(MinimalPriceCardData, vl, index, 'features', inx, "title") })}
                                                                            allowedFormats={['core/bold', 'core/italic', 'core/link', 'core/text-color']} />
                                                                    </>
                                                                )
                                                                : (
                                                                    <>
                                                                        {feature?.title && (
                                                                            <>
                                                                                <div className={`icon icon-${index}`} dangerouslySetInnerHTML={{ __html: feature.icon }} />
                                                                                <span className="card-feature">{feature.title}</span>
                                                                            </>
                                                                        )}

                                                                    </>
                                                                )}
                                                        </li>
                                                    </>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                </div>
                            </>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}


