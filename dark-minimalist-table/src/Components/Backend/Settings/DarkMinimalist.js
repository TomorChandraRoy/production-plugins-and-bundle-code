import { __ } from "@wordpress/i18n";
import { __experimentalSpacer as Spacer, ToggleControl, TextareaControl, __experimentalNumberControl as NumberControl, TextControl, PanelBody, } from '@wordpress/components';
import { updateData } from '../../../utils/functions';
import {ColorControl, IconLibrary } from "../../../../../bpl-tools/Components";

const DarkMinimalist = ({ attributes, setAttributes, arrKey, index }) => {
    const darkMinimalistTableData = attributes[arrKey];
    const { style } = attributes;

    // feature add function
    const addFeature = (index) => {
        const updatedPlans = JSON.parse(JSON.stringify(darkMinimalistTableData));
        const newFeature = { title: " New 5GB storage", icon: "<svg height=\"30\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M20.664 5.253a1 1 0 0 1 .083 1.411l-10.666 12a1 1 0 0 1-1.495 0l-5.333-6a1 1 0 0 1 1.494-1.328l4.586 5.159 9.92-11.16a1 1 0 0 1 1.411-.082\"/></svg>", "iconColor": "#6366f1" };

        updatedPlans[index].features.push(newFeature);
        setAttributes({ [arrKey]: updatedPlans });
    };

    // feature duplicate function
    const duplicateFeature = (index, featureIndex) => {
        const updatedPlans = JSON.parse(JSON.stringify(darkMinimalistTableData));

        const featureToDuplicate = updatedPlans[index].features[featureIndex];
        const duplicatedFeature = { ...featureToDuplicate };
        updatedPlans[index].features.splice(featureIndex + 1, 0, duplicatedFeature);
        setAttributes({ [arrKey]: updatedPlans });
    };

    // feature remove function
    const removeFeature = (index, featureIndex) => {
        const updatedPlans = JSON.parse(JSON.stringify(darkMinimalistTableData));
        updatedPlans[index].features.splice(featureIndex, 1);
        setAttributes({ [arrKey]: updatedPlans });
    };
    return (
        <div>
            <Spacer />
            <ToggleControl
                label={__("Make Popular ", "b-pricing-table")}
                checked={darkMinimalistTableData[index]?.popularToggle || false}
                onChange={(value) => setAttributes({ darkMinimalistTableData: updateData(darkMinimalistTableData, value, index, 'popularToggle') })}
            />
            <Spacer />
            {darkMinimalistTableData[index]?.popularToggle && (
                <TextControl
                    value={darkMinimalistTableData[index]?.popularTitle.replace(/<[^>]*>/g, '')}
                    label={__("Popular Name :", "b-pricing-table")}
                    placeholder="Enter Your Popular Text"
                    onChange={val => setAttributes({ darkMinimalistTableData: updateData(darkMinimalistTableData, val, index, 'popularTitle') })}
                />
            )}
            <Spacer />
            <IconLibrary
                label={__("Title Icon :", "b-pricing-table")}
                value={darkMinimalistTableData[index]?.titleIcon}
                onChange={val => setAttributes({ darkMinimalistTableData: updateData(darkMinimalistTableData, val, index, 'titleIcon') })}
            />
            <Spacer />
            <TextControl
                value={darkMinimalistTableData[index]?.title.replace(/<[^>]*>/g, '')}
                label={__("Title :", "b-pricing-table")}
                placeholder="Enter Your Title"
                onChange={val => setAttributes({ darkMinimalistTableData: updateData(darkMinimalistTableData, val, index, 'title') })}
            />
            <Spacer />
            <IconLibrary
                label={__("Currency Icon :", "b-pricing-table")}
                value={darkMinimalistTableData[index]?.priceCurrency}
                onChange={val => setAttributes({ darkMinimalistTableData: updateData(darkMinimalistTableData, val, index, 'priceCurrency') })}
            />
            <Spacer />
            <NumberControl
                label={__("Price :", "b-pricing-table")}
                value={darkMinimalistTableData[index]?.price}
                onChange={val => setAttributes({ darkMinimalistTableData: updateData(darkMinimalistTableData, val, index, 'price') })}
                min={0}
                step={1}
            />
            <Spacer />
            <TextControl
                value={darkMinimalistTableData[index]?.period.replace(/<[^>]*>/g, '')}
                label={__("Period :", "b-pricing-table")}
                placeholder="Enter Your Period"
                onChange={val => setAttributes({ darkMinimalistTableData: updateData(darkMinimalistTableData, val, index, 'period') })}
            />
            <Spacer />
            <TextareaControl
                value={darkMinimalistTableData[index]?.description.replace(/<[^>]*>/g, '')}
                label={__("Description :", "b-pricing-table")}
                placeholder="Enter Your Description"
                onChange={val => setAttributes({ darkMinimalistTableData: updateData(darkMinimalistTableData, val, index, 'description') })}
            />
            <Spacer />
            <IconLibrary
                label={__("Button Icon :", "b-pricing-table")}
                value={darkMinimalistTableData[index]?.buttonIcon}
                onChange={val => setAttributes({ darkMinimalistTableData: updateData(darkMinimalistTableData, val, index, 'buttonIcon') })}
            />
            <Spacer />
            <TextControl
                value={darkMinimalistTableData[index]?.buttonText.replace(/<[^>]*>/g, '')}
                label={__("Button Text :", "b-pricing-table")}
                placeholder="Enter Your Button Name"
                onChange={val => setAttributes({ darkMinimalistTableData: updateData(darkMinimalistTableData, val, index, 'buttonText') })}
            />
            <Spacer />
            <TextControl
                label={__("Button URL :", "b-pricing-table")}  help="Button link disabled on editor"
                value={darkMinimalistTableData[index]?.buttonLink || '#'}
                onChange={url => setAttributes({ darkMinimalistTableData: updateData(darkMinimalistTableData, url, index, 'buttonLink') })}
                placeholder="Enter URL"
            />
            <Spacer />
            <ToggleControl
                label={__("Open In New Tab ", "b-pricing-table")}
                checked={darkMinimalistTableData[index]?.buttonNewTab || false}
                onChange={(value) => setAttributes({ darkMinimalistTableData: updateData(darkMinimalistTableData, value, index, 'buttonNewTab') })}
            />
            <Spacer style={{marginBottom:"15px"}}/>

            {/* Features PanelBody */}
            <PanelBody className='bPlPanelBody' title={__('Features', 'b-blocks')} initialOpen={false}>
                <Spacer  />
                <ToggleControl
                    label={style?.iconToggle ? __("Icon Global Color", "b-pricing-table") : __("Icon Single Color", "b-pricing-table")}
                    checked={style?.iconToggle || false}
                    onChange={(value) => setAttributes({ style:updateData(style, value,"iconToggle")})}
                />
                <Spacer />
                {style?.iconToggle  && 
                <ColorControl
                    label={__("Global Icon Color", "b-pricing-table")}
                    defaultColor="#ffffff"
                    value={style?.iconGobalColor}
                    onChange={(color) =>setAttributes({style: updateData(style, color,'iconGobalColor'),})}
                />}
                <Spacer style={{marginBottom:"15px"}} />

                {darkMinimalistTableData[index]?.features?.map((feature, featureIndex) => (
                    <div key={featureIndex} className="feature-item">
                        <TextControl
                            value={feature.title.replace(/<[^>]*>/g, '')}
                            label={__("Feature Name :", "b-pricing-table")}
                            placeholder="Enter Feature Title"
                            onChange={val => setAttributes({ darkMinimalistTableData: updateData(darkMinimalistTableData, val, index, 'features', featureIndex, 'title') })}
                        />
                        <Spacer />
                        <IconLibrary
                            label={__("Feature Icon :", "b-pricing-table")}
                            value={feature?.icon}
                            onChange={val => setAttributes({ darkMinimalistTableData: updateData(darkMinimalistTableData, val, index, 'features', featureIndex, 'icon') })}
                        />
                        <Spacer />
                        {style?.iconToggle === false
                            ? (
                                <ColorControl
                                    label={__("Feature Icon Color :", "b-pricing-table")} defaultColor="#6366f1"
                                    value={feature?.iconColor}
                                    onChange={(color) => { setAttributes({ darkMinimalistTableData: updateData(darkMinimalistTableData, color, index, 'features', featureIndex, 'iconColor') }) }}
                                    />
                            ) : ""        
                        }
                        <Spacer />
                        <div className="featuresButton">
                            {/* Features Duplicate Button */}
                             <button className="duplicate"  onClick={() => duplicateFeature(index, featureIndex)}>Duplicate
                            </button>
                            {/* Features Remove Button */}
                            <button className="remove" onClick={() => removeFeature(index, featureIndex)}>Delete
                            </button>
                        </div>
                        <Spacer />
                    </div>
                ))}
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

export default DarkMinimalist;