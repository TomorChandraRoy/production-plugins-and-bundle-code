import { useSelect } from '@wordpress/data';
import { RichText } from "@wordpress/block-editor";
import { updateData } from './../../utils/functions';
const DarkMinimalistTable = ({ attributes, setAttributes }) => {
	const { darkMinimalistTableData } = attributes;
	const isEditor = useSelect((select) => select("core/editor"));

	return (
		<main className="main-container">
			<div className="pricing-wrapper">
				<div className="pricing-container">
					<div className="pricing-grid">
						{darkMinimalistTableData.map((data, index) => (
							<div className={`card-${index} ${data?.popularToggle ? "popular" : "pricing-card"}`} key={index}>
								{/* Card Header */}
								<div className="card-header">
									{/* Title Icon and Name */}
									<span className="icon" dangerouslySetInnerHTML={{ __html: data?.titleIcon }} />
									{isEditor
										?
										<RichText className="plan-name" tagName="h3" value={data?.title} placeholder="Enter Plan Title "
											onChange={val => setAttributes({ darkMinimalistTableData: updateData(darkMinimalistTableData, val, index, 'title') })}
											allowedFormats={['core/bold', 'core/italic', 'core/link', 'core/text-color']}
										/>
										: <RichText.Content tagName="h3" className="plan-name" value={data?.title} />
									}
									{/* popular button */}
									{data.popularToggle && (
										<>
											{isEditor
												?
												<RichText className="popular-badge" tagName="span" value={data?.popularTitle} placeholder="Enter PopularText"
													onChange={val => setAttributes({ darkMinimalistTableData: updateData(darkMinimalistTableData, val, index, 'popularTitle') })}
													allowedFormats={['core/bold', 'core/italic', 'core/link', 'core/text-color']}
												/>
												:
												<>
													{data?.popularTitle &&
														<RichText.Content tagName="span" className="popular-badge" value={data?.popularTitle} />
													}
												</>
											}
										</>
									)}

								</div>

								{/* Price Section */}
								<div className="price-section">
									<div className="price-container">
										<div className="price-currency">
											<p className="currency" dangerouslySetInnerHTML={{ __html: data?.priceCurrency }} />
											{
												isEditor
													?
													<RichText className="price" tagName="span"
														value={data?.price} placeholder="Price"
														onChange={val => setAttributes({ darkMinimalistTableData: updateData(darkMinimalistTableData, val, index, 'price') })}
														allowedFormats={['core/bold', 'core/italic', 'core/link', 'core/text-color']}
													/>
													: <RichText.Content tagName="span" className="price" value={data?.price}
													/>
											}
										</div>
										{
											isEditor
												?
												<RichText className="period" tagName="span"
													value={data?.period} placeholder="Price"
													onChange={val => setAttributes({ darkMinimalistTableData: updateData(darkMinimalistTableData, val, index, 'period') })}
													allowedFormats={['core/bold', 'core/italic', 'core/link', 'core/text-color']}
												/>
												: <RichText.Content tagName="span" className="period" value={data?.period} />
										}
									</div>
								</div>

								{/* Description */}
								{
									isEditor
										?
										<RichText className="description" tagName="span"
											value={data?.description} placeholder="Enter Description"
											onChange={val => setAttributes({ darkMinimalistTableData: updateData(darkMinimalistTableData, val, index, 'description') })}
											allowedFormats={['core/bold', 'core/italic', 'core/link', 'core/text-color']}
										/>
										: <RichText.Content tagName="span" className="description" value={data?.description}
										/>
								}

								{/* Features List */}
								<div className="features">
									{data?.features?.map((feature, i) => (
										<div className="feature" key={i}>
											{
												isEditor
													?
													<>
														<span className={`check-icons icon-${i}`} dangerouslySetInnerHTML={{ __html: feature?.icon }} />
														<RichText className="feature-text" tagName="span"
															value={feature?.title} placeholder="Enter Feature"
															onChange={val => setAttributes({ darkMinimalistTableData: updateData(darkMinimalistTableData, val, index, "features", i, 'title') })}
															allowedFormats={['core/bold', 'core/italic', 'core/link', 'core/text-color']}
														/>
													</>
													:
													<>
														{feature?.title && (
															<>
																<span className={`check-icons icon-${i}`} dangerouslySetInnerHTML={{ __html: feature?.icon }} />
																<RichText.Content tagName="span" className="feature-text" value={feature?.title} />
															</>
														)
														}
													</>

											}
										</div>
									))}
								</div>

								{/* Button */}
								{isEditor
									?
									<a href={data?.buttonLink || '#'} target={data?.buttonNewTab ? "_blank" : "_self"} rel={data?.buttonNewTab ? "noopener noreferrer" : undefined} onClick={(e) => e.preventDefault()} className={`buy-button ${data.popularToggle ? "popular-button" : ""}`}
									>
										<RichText value={data?.buttonText} placeholder="Your Button Text"
											onChange={val => setAttributes({ darkMinimalistTableData: updateData(darkMinimalistTableData, val, index, 'buttonText') })}
											allowedFormats={['core/bold', 'core/italic', 'core/link', 'core/text-color']}
										/>
										<span className="arrow-icon" dangerouslySetInnerHTML={{ __html: data?.buttonIcon }} />
									</a>
									:
									<>
										{data?.buttonText && (
											<>
												<a href={data?.buttonLink || '#'}
													className={`buy-button ${data.popularToggle ? "popular-button" : ""}`} target={data?.buttonNewTab ? "_blank" : "_self"}
													rel={data?.buttonNewTab ? "noopener noreferrer" : undefined} >
													<RichText.Content value={data?.buttonText} />
													<span className="arrow-icon" dangerouslySetInnerHTML={{ __html: data?.buttonIcon }} />
												</a>
											</>
										)}
									</>
								}
								{/* <button className={`buy-button ${data.popularToggle ? "popular-button" : ""}`}>
										{data?.buttonText}
										<span className="arrow-icon" dangerouslySetInnerHTML={{ __html: data?.buttonIcon }} />
								</button> */}
							</div>
						))}
					</div>
				</div>
			</div>
		</main>
	);
};

export default DarkMinimalistTable;