import { useSelect } from '@wordpress/data';
import { RichText } from "@wordpress/block-editor";
import { updateData } from '../../../../../bpl-tools/utils/functions';
const HorizontalTable = ({ attributes, setAttributes }) => {
    const { horizontalTableData, footerData, featuresColumn } = attributes;
    const isEditor = useSelect((select) => select('core/editor'));

    return (
        <div className='main-container'>
            <div className="pricing-container">
                {horizontalTableData?.map((singleData, idx) => (

                    <div className={`${singleData.featured ? "featured" : "pricing-card"} pricing-card-${idx} `} key={idx}>
                        {/* Title */}
                        <div className={`card-section ${featuresColumn === 1 ? "card-section-oneCol" : ""}`}>
                                {isEditor
                                    ? <RichText className="card-h2" tagName="h2" value={singleData?.title} placeholder="Enter Your Title "
                                        onChange={val => setAttributes({ horizontalTableData: updateData(horizontalTableData, val, idx, 'title') })}
                                        allowedFormats={['core/bold', 'core/italic', 'core/link', 'core/text-color']}
                                    />
                                    : <RichText.Content tagName="h2" className="card-h2" value={singleData?.title} />
                                }
                                <div className="price">
                                    {isEditor
                                        ? <>
                                            <span className="amount" dangerouslySetInnerHTML={{ __html: singleData?.currency }} />

                                            <RichText className="amount" tagName="span" value={singleData?.price} placeholder="Price "
                                                onChange={val => setAttributes({ horizontalTableData: updateData(horizontalTableData, val, idx, 'price') })}
                                                allowedFormats={['core/bold', 'core/italic', 'core/link', 'core/text-color']}
                                            />
                                            <RichText className="period" tagName="span" value={singleData?.period} placeholder="Period "
                                                onChange={val => setAttributes({ horizontalTableData: updateData(horizontalTableData, val, idx, 'period') })}
                                                allowedFormats={['core/bold', 'core/italic', 'core/link', 'core/text-color']}
                                            />
                                        </>
                                        :
                                        <>
                                            <span className="amount" dangerouslySetInnerHTML={{ __html: singleData?.currency }} />
                                            <RichText.Content tagName="span" className="amount" value={singleData?.price} />

                                            <RichText.Content tagName="span" className="period" value={singleData?.period} />
                                        </>
                                    }
                                </div>
                                {isEditor
                                    ? <RichText className="description" tagName="p" value={singleData?.description} placeholder="Enter Your description "
                                        onChange={val => setAttributes({ horizontalTableData: updateData(horizontalTableData, val, idx, 'description') })}
                                        allowedFormats={['core/bold', 'core/italic', 'core/link', 'core/text-color']}
                                    />
                                    : <RichText.Content
                                        tagName="p"
                                        className='description'
                                        value={singleData?.description}
                                    />
                                }
                        </div>
                 
                        {/* feature */}
                        <div className={`features-section ${featuresColumn === 1 ? "featuresOneCol" : ""}`}>
                            <div className="feature-list">
                                {singleData?.features?.map((feature, index) => (
                                    <>
                                        <div className="feature">
                                            {isEditor
                                                ?
                                                <>
                                                    <span className={`checkmark icon-${index}`} dangerouslySetInnerHTML={{ __html: feature?.icon }} />
                                                    <RichText className="fea-item" tagName="span" value={feature?.title}
                                                        placeholder="Enter Your feature "
                                                        onChange={val => setAttributes({ horizontalTableData: updateData(horizontalTableData, val, idx, 'features', index, 'title') })}
                                                        allowedFormats={['core/bold', 'core/italic', 'core/link', 'core/text-color']}
                                                    />
                                                </>
                                                :
                                                <>
                                                    {feature?.title && (
                                                        <>
                                                            <span className={`checkmark icon-${index}`} dangerouslySetInnerHTML={{ __html: feature?.icon }} />
                                                            <RichText.Content tagName="span" className="fea-item" value={feature?.title} />
                                                        </>
                                                    )}
                                                </>
                                            }
                                        </div>
                                    </>))}
                            </div>
                        </div>

                        {/* button */}
                        <div className="action-section">
                            {isEditor
                                ?
                                <a href={singleData?.buttonLink || '#'} className="link-a" target={singleData?.buttonNewTab ? "_blank" : "_self"}
                                    rel={singleData?.buttonNewTab ? "noopener noreferrer" : undefined} onClick={(e) => e.preventDefault()}>
                                    <RichText className="get-started" tagName="div" value={singleData.buttonText} placeholder="Enter Button Name "
                                        onChange={val => setAttributes({ horizontalTableData: updateData(horizontalTableData, val, idx, 'buttonText') })}
                                        allowedFormats={['core/bold', 'core/italic', 'core/link', 'core/text-color']}
                                    />
                                </a>
                                :
                                <>
                                    {
                                        singleData?.buttonText && (
                                            <a href={singleData?.buttonLink || '#'} className="link-a" target={singleData?.buttonNewTab ? "_blank" : "_self"}
                                                rel={singleData?.buttonNewTab ? "noopener noreferrer" : undefined} >
                                                <RichText.Content tagName="div" className="get-started" value={singleData.buttonText} />
                                            </a>
                                        )
                                    }
                                </>
                            }
                        </div>

                    </div>
                ))}
            </div>

            {/* footer */}
            <div className="footer-content">
                <div className="footer-section">
                    <div className="footer-text">
                        {isEditor
                            ?
                            <>
                                <RichText className="footer-h3" tagName="h3" value={footerData?.title} placeholder="Enter Your text"
                                    onChange={(newtext) => { setAttributes({ footerData: { ...footerData, title: newtext } }) }}
                                    allowedFormats={['core/bold', 'core/italic', 'core/link', 'core/text-color']}
                                />
                                <RichText className="footer-p" tagName="p" value={footerData?.des} placeholder="Enter Your Header Title "
                                    onChange={(newtext) => { setAttributes({ footerData: { ...footerData, des: newtext } }) }}
                                    allowedFormats={['core/bold', 'core/italic', 'core/link', 'core/text-color']}
                                />
                            </>
                            :
                            <>
                                <RichText.Content tagName="h3" className="footer-h3" value={footerData?.title} />
                                <RichText.Content tagName="p" className="footer-p" value={footerData?.des} />
                            </>
                        }
                    </div>
                    {/* Footer */}
                    <div className="footer-icon ">
                        {isEditor
                            ?
                            <>
                                <a className='link-a' href={footerData?.buttonLink || '#'} target={footerData.buttonNewTab ? "_blank" : "_self"}
                                    rel={footerData?.buttonNewTab ? "noopener noreferrer" : undefined} onClick={(e) => e.preventDefault()} >
                                    <RichText className="footer-icon-text" tagName="p" value={footerData?.buttonName} placeholder="Enter Button Name"
                                        onChange={(newtext) => { setAttributes({ footerData: { ...footerData, buttonName: newtext } }) }}
                                        allowedFormats={['core/bold', 'core/italic', 'core/link', 'core/text-color']}
                                    />
                                    <span className="icon" dangerouslySetInnerHTML={{ __html: footerData?.icon }} />
                                </a>
                            </>
                            :
                            <>
                                {footerData?.buttonName && (
                                    <a className='link-a' href={footerData?.buttonLink || '#'} target={footerData.buttonNewTab ? "_blank" : "_self"}
                                        rel={footerData?.buttonNewTab ? "noopener noreferrer" : undefined} >

                                        <RichText.Content tagName="div" className="footer-icon-text" value={footerData?.buttonName} />

                                        <span className="icon" dangerouslySetInnerHTML={{ __html: footerData?.icon }} />
                                    </a>
                                )}
                            </>
                        }
                    </div>
                </div>
            </div>
        </div>

    );
};

export default HorizontalTable;
