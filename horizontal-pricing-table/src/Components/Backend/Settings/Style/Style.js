import { __ } from "@wordpress/i18n";
import {PanelBody} from "@wordpress/components";
import { ColorControl } from "../../../../../../bpl-tools/Components";

const Style = () => {


  return (
    <>
      <PanelBody
        className="bPlPanelBody"
        title={__("Purpose styles title", "b-pricing-table")}
        initialOpen={false}
      >
        <ColorControl
          label={__("Title Color :", "b-pricing-table")}
          defaultColor="#111827"
          
       
        />
      </PanelBody>
    </>
  );
};

export default Style;
