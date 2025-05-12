import { __ } from '@wordpress/i18n';
import { PanelBody, SelectControl } from '@wordpress/components';
import { purposeTypeOptions } from '../../../../utils/options';
import { updateData } from '../../../../utils/functions';


const General = ({ attributes, setAttributes }) => {
  const { themeStyle } = attributes;
  return (
    <PanelBody className='bPlPanelBody' title={__('Theme', 'b-blocks')} initialOpen={false}>
      <SelectControl
        label={__('Theme', 'b-blocks')}
        labelPosition='left'
        value={themeStyle}
        options={purposeTypeOptions}
        onChange={(v) => setAttributes({ themeStyle: updateData(themeStyle, v) })}
      />
    </PanelBody>
  )
}

export default General