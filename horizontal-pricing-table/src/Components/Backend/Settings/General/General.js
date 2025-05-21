import { __ } from '@wordpress/i18n';
import { PanelBody} from '@wordpress/components';



const General = () => {

  return (
    <PanelBody className="bPlPanelBody" title={__('Purpose', 'b-pricing-table')} initialOpen={false}>

    </PanelBody>
  )
}

export default General;