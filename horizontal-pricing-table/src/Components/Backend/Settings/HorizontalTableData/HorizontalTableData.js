import { __ } from "@wordpress/i18n";
import { TextControl, __experimentalSpacer as Spacer, PanelBody, ToggleControl, TextareaControl, __experimentalNumberControl as NumberControl, SelectControl, } from '@wordpress/components';
import { ColorControl, IconLibrary } from "../../../../../../bpl-tools/Components";
import { updateData } from '../../../../../../bpl-tools/utils/functions';

const HorizontalTableData = ({ attributes, setAttributes, arrKey, index }) => {
    const { iconToggle, style } = attributes;
    const horizontalTableData = attributes[arrKey];



    const addFeature = (index) => {
        const updatedPlans = JSON.parse(JSON.stringify(horizontalTableData));
        const newFeature = { title: " New 5GB storage", icon: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path  d=\"M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z\"/></svg>", "iconColor": "#53df55" };

        updatedPlans[index].features.push(newFeature);
        setAttributes({ [arrKey]: updatedPlans });
    };

    const duplicateFeature = (index, featureIndex) => {
        const updatedPlans = JSON.parse(JSON.stringify(horizontalTableData));

        const featureToDuplicate = updatedPlans[index].features[featureIndex];
        const duplicatedFeature = { ...featureToDuplicate };
        updatedPlans[index].features.splice(featureIndex + 1, 0, duplicatedFeature);
        setAttributes({ [arrKey]: updatedPlans });
    };

    const removeFeature = (index, featureIndex) => {
        const updatedPlans = JSON.parse(JSON.stringify(horizontalTableData));
        updatedPlans[index].features.splice(featureIndex, 1);
        setAttributes({ [arrKey]: updatedPlans });
    };

    return (
        <div>
            <Spacer />
            <ToggleControl
                label={__("Make Popular ", "b-pricing-table")}
                checked={horizontalTableData[index]?.featured || false}
                onChange={(value) => setAttributes({ horizontalTableData: updateData(horizontalTableData, value, index, 'featured') })}
            />
            <Spacer />
            <TextControl
                value={horizontalTableData[index]?.title.replace(/<[^>]*>/g, '')}
                label={__("Title :", "b-pricing-table")}
                placeholder="Enter Your Row Name"
                onChange={val => setAttributes({ horizontalTableData: updateData(horizontalTableData, val, index, 'title') })}
            />
            {/* start */}
            <IconLibrary
                label={__("Currency Icon :", "b-pricing-table")}
                value={horizontalTableData[index]?.currency}
                onChange={val => setAttributes({ horizontalTableData: updateData(horizontalTableData, val, index, 'currency') })}
            />
            <Spacer />
            <NumberControl
                min={1}
                value={horizontalTableData[index]?.price.replace(/<[^>]*>/g, '')}
                label={__("Price :", "b-pricing-table")}
                placeholder="Enter Your Price"
                onChange={val => setAttributes({ horizontalTableData: updateData(horizontalTableData, val, index, 'price') })}
            />
            <Spacer />
            <TextControl
                value={horizontalTableData[index]?.period.replace(/<[^>]*>/g, '')}
                label={__("Period :", "b-pricing-table")}
                placeholder="Enter Your Period"
                onChange={val => setAttributes({ horizontalTableData: updateData(horizontalTableData, val, index, 'period') })}
            />
            <Spacer />
            <TextareaControl
                label={__("Description :", "b-pricing-table")}
                value={horizontalTableData[index]?.description.replace(/<[^>]*>/g, '')}
                onChange={dec => setAttributes({ horizontalTableData: updateData(horizontalTableData, dec, index, 'description') })}
                placeholder="Enter Your Description"
            />
            <Spacer />

            <TextControl
                value={horizontalTableData[index]?.buttonText.replace(/<[^>]*>/g, '')}
                label={__("Button Text :", "b-pricing-table")}
                placeholder="Enter Your Button Name"
                onChange={val => setAttributes({ horizontalTableData: updateData(horizontalTableData, val, index, 'buttonText') })}
            />
            <Spacer />
            <TextControl
                label={__("Button URL :", "b-pricing-table")}
                value={horizontalTableData[index]?.buttonLink || '#'}
                onChange={url => setAttributes({ horizontalTableData: updateData(horizontalTableData, url, index, 'buttonLink') })}
                placeholder="Enter URL"
            />
            <Spacer />
            <ToggleControl
                label={__("Open In New Tab ", "b-pricing-table")}
                checked={horizontalTableData[index]?.buttonNewTab || false}
                onChange={(value) => setAttributes({ horizontalTableData: updateData(horizontalTableData, value, index, 'buttonNewTab') })}
            />
            <Spacer />
            <PanelBody className="bPlPanelBody" title={__("Features", "b-pricing-table")} initialOpen={false}>
                <SelectControl
                    label={__("Feature Column :", "b-pricing-table")}
                    options={[
                        { label: __("Two Column", "b-pricing-table"), value:"2" },
                        { label: __("One Column", "b-pricing-table"), value: "1"},
                    ]}
                    onChange={val => setAttributes({ featuresColumn: parseInt(val) })}
                />
              <Spacer />

                <ToggleControl
                    label={iconToggle ? __("Icon Global Color", "b-pricing-table") : __("Icon Single Color", "b-pricing-table")}
                    checked={iconToggle || false}
                    onChange={(value) => setAttributes({ iconToggle: value })}
                />
                <Spacer />
                {iconToggle &&
                    <ColorControl
                        label={__("Global Icon Color", "b-pricing-table")}
                        defaultColor="#10b981"
                        value={style?.tabileRowStyle?.featuresSectionStyle?.checkmarkGobalColor}
                        onChange={(color) => setAttributes({ style: updateData(style, color, 'tabileRowStyle', 'featuresSectionStyle', 'checkmarkGobalColor'), })}
                    />
                }
                <Spacer />
                {horizontalTableData[index]?.features?.map((feature, featureIndex) => {
                    const { title, icon, iconColor } = feature;
                    return (
                        <div key={featureIndex} className=''>
                            <Spacer style={{ marginBottom: "20px" }} />
                            <IconLibrary
                                label={__("Icon :", "b-pricing-table")}
                                value={icon}
                                onChange={val => setAttributes({ horizontalTableData: updateData(horizontalTableData, val, index, "features", featureIndex, 'icon') })}
                            />
                            <Spacer />
                            {iconToggle === false
                                ? (
                                    <ColorControl
                                        label={__("Icon Color :", "b-pricing-table")} defaultColor="#10b981"
                                        value={iconColor}
                                        onChange={(color) => { setAttributes({ horizontalTableData: updateData(horizontalTableData, color, index, 'features', featureIndex, 'iconColor') }); }}
                                    />
                                ) : ""

                            }
                            <Spacer />

                            <TextControl value={title} placeholder="Enter Feature"
                                onChange={vl => setAttributes({ horizontalTableData: updateData(horizontalTableData, vl, index, 'features', featureIndex, "title") })}
                            />
                            <Spacer />
                            <div className="featuresButton">
                                {/* Features Duplicate Button */}
                                <button className="duplicate" onClick={() => duplicateFeature(index, featureIndex)}>Duplicate
                                </button>
                                {/* Features Remove Button */}
                                <button className="remove" onClick={() => removeFeature(index, featureIndex)}>Delete
                                </button>
                            </div>
                        </div>
                    )
                })}
                <Spacer />
                {/* New Features Added */}
                <div className="button-wrapper">
                    <button className="addButton" onClick={() => addFeature(index)}>
                        + Add Feature
                    </button>
                </div>

            </PanelBody>
        </div>
    );
};

export default HorizontalTableData;