import { __ } from "@wordpress/i18n";
import { TextControl, __experimentalSpacer as Spacer, TextareaControl, ToggleControl, __experimentalNumberControl as NumberControl, PanelBody, IconButton, Button } from '@wordpress/components';
import { updateData } from '../../../../../../bpl-tools/utils/functions';
import { ColorControl, IconLibrary, } from "../../../../../../bpl-tools/Components";

export const CardItems = ({ attributes, setAttributes, arrKey, index }) => {
    const { colorToggle, style } = attributes;

    const MinimalPriceCardData = attributes[arrKey];

    const addFeature = (index) => {
        const updatedPlans = JSON.parse(JSON.stringify(MinimalPriceCardData));
        const newFeature = { title: " New 5GB storage", icon: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path fill=\"#53df55\" d=\"M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z\"/></svg>" };

        updatedPlans[index].features.push(newFeature);
        setAttributes({ [arrKey]: updatedPlans });
    };

    const duplicateFeature = (index, featureIndex) => {
        const updatedPlans = JSON.parse(JSON.stringify(MinimalPriceCardData));

        const featureToDuplicate = updatedPlans[index].features[featureIndex];
        const duplicatedFeature = { ...featureToDuplicate };
        updatedPlans[index].features.splice(featureIndex + 1, 0, duplicatedFeature);
        setAttributes({ [arrKey]: updatedPlans });
    };

    const removeFeature = (index, featureIndex) => {
        const updatedPlans = JSON.parse(JSON.stringify(MinimalPriceCardData));
        updatedPlans[index].features.splice(featureIndex, 1);
        setAttributes({ [arrKey]: updatedPlans });
    };



    return (
        <div>
            <Spacer />
            <ToggleControl
                label={__("Highlight Card", "b-pricing-card")}
                checked={MinimalPriceCardData[index]?.highlighted || false}
                onChange={(value) => setAttributes({ MinimalPriceCardData: updateData(MinimalPriceCardData, value, index, 'highlighted') })}
            />
            <Spacer />
            {MinimalPriceCardData[index]?.highlighted && (
                <TextControl
                    value={MinimalPriceCardData[index]?.highlightText.replace(/<[^>]*>/g, '')}
                    label={__("Highlight Text", "b-pricing-card")}
                    placeholder="Enter Your Text"
                    onChange={val => setAttributes({ MinimalPriceCardData: updateData(MinimalPriceCardData, val, index, 'highlightText') })}
                />
            )}
            <Spacer />
            <ToggleControl
                label={__("Button Highlight", "b-pricing-card")}
                checked={MinimalPriceCardData[index]?.id || false}
                onChange={(value) => setAttributes({ MinimalPriceCardData: updateData(MinimalPriceCardData, value, index, 'id') })}
            />
            <Spacer />

            <TextControl
                value={MinimalPriceCardData[index]?.name.replace(/<[^>]*>/g, '')}
                label={__("Card Name", "b-pricing-card")}
                placeholder="Enter Card Name"
                onChange={val => setAttributes({ MinimalPriceCardData: updateData(MinimalPriceCardData, val, index, 'name') })}
            />
            <Spacer />
            <TextControl
                value={MinimalPriceCardData[index]?.currency.replace(/<[^>]*>/g, '')}
                label={__("Currency", "b-pricing-card")}
                placeholder="Enter Your Currency"
                onChange={val => setAttributes({ MinimalPriceCardData: updateData(MinimalPriceCardData, val, index, 'currency') })}
            />
            <Spacer />
            <NumberControl
                value={MinimalPriceCardData[index]?.price.replace(/<[^>]*>/g, '')}
                label={__("Price", "b-pricing-card")}
                placeholder="Enter Your Price"
                onChange={val => setAttributes({ MinimalPriceCardData: updateData(MinimalPriceCardData, val, index, 'price') })}
            />
            <Spacer />
            <TextControl
                value={MinimalPriceCardData[index]?.period.replace(/<[^>]*>/g, '')}
                label={__("Period", "b-pricing-card")}
                placeholder="Enter Your Period"
                onChange={val => setAttributes({ MinimalPriceCardData: updateData(MinimalPriceCardData, val, index, 'period') })}
            />
            <Spacer />
            <TextareaControl
                label={__("Description", "b-pricing-card")}
                value={MinimalPriceCardData[index]?.description.replace(/<[^>]*>/g, '')}
                onChange={dec => setAttributes({ MinimalPriceCardData: updateData(MinimalPriceCardData, dec, index, 'description') })}
                placeholder="Enter Your Description"
            />
            <Spacer />

            <TextControl
                value={MinimalPriceCardData[index]?.buttonText.replace(/<[^>]*>/g, '')}
                label={__("Button Name", "b-pricing-card")}
                placeholder="Enter Your Button Name"
                onChange={val => setAttributes({ MinimalPriceCardData: updateData(MinimalPriceCardData, val, index, 'buttonText') })}
            />
            <Spacer />
            <TextControl
                label={__("Button URL", "b-pricing-card")}
                value={MinimalPriceCardData[index]?.buttonLink || '#'}
                onChange={url => setAttributes({ MinimalPriceCardData: updateData(MinimalPriceCardData, url, index, 'buttonLink') })}
                placeholder="Enter URL"
            />
            <Spacer />
            <ToggleControl
                label={__("Open In New Tab", "b-pricing-card")}
                checked={MinimalPriceCardData[index]?.buttonNewTab || false}
                onChange={(value) => setAttributes({ MinimalPriceCardData: updateData(MinimalPriceCardData, value, index, 'buttonNewTab') })}
            />
            <Spacer />
            <PanelBody className="bPlPanelBody" title={__("Feature Items", "b-pricing-card")} initialOpen={false}>
                <Spacer />
                <ToggleControl
                    label={__("Icon Specific/Global Color ", "b-pricing-card")}
                    checked={colorToggle || false}
                    onChange={(value) => setAttributes({ colorToggle: value })}
                />
                <Spacer />
                {MinimalPriceCardData[index]?.features?.map((feature, featureIndex) => {
                    const { title, icon, iconColor } = feature;
                    return (
                        <div key={featureIndex} className=''>

                            <IconLibrary
                                label={__("Icon", "b-pricing-card")}
                                value={icon}
                                onChange={val => setAttributes({ MinimalPriceCardData: updateData(MinimalPriceCardData, val, index, "features", featureIndex, 'icon') })}
                            />
                            <Spacer />
                            {colorToggle
                                ? (
                                    <ColorControl
                                        label={__("Global Icon Color :", "b-pricing-card")}
                                        defaultColor="#53df55"
                                        value={style?.iconGobalColor}
                                        onChange={(color) =>
                                            setAttributes({
                                                style: updateData(style, color, 'iconGobalColor'),
                                            })
                                        }
                                    />
                                ) : (
                                    <ColorControl
                                        label={__("Icon Color :", "b-pricing-card")} defaultColor="#53df55"
                                        value={iconColor}
                                        onChange={(color) => { setAttributes({ MinimalPriceCardData: updateData(MinimalPriceCardData, color, index, 'features', featureIndex, 'iconColor') }); }}
                                    />
                                )
                            }
                            <Spacer />

                            <TextControl value={title} placeholder="Enter Feature"
                                onChange={vl => setAttributes({ MinimalPriceCardData: updateData(MinimalPriceCardData, vl, index, 'features', featureIndex, "title") })}
                            />
                            <Spacer />
                            {/* Features Duplicate Button */}
                            <IconButton
                                icon="admin-page"
                                onClick={() => duplicateFeature(index, featureIndex)}
                            />
                            {/* Features Remove Button */}
                            <IconButton style={{ color: "red", }}
                                icon="trash"
                                onClick={() => removeFeature(index, featureIndex)}
                            />
                        </div>
                    )
                })}
                <Spacer />
                {/* New Features Added */}
                <div className="button-wrapper">
                    <Button className="addButton" onClick={() => addFeature(index)}>
                        Add Feature
                    </Button>
                </div>

            </PanelBody>
            <Spacer />
        </div>
    )
}
