import { useBlockProps } from "@wordpress/block-editor";
import Settings from "./Settings/Settings";
import Style from "../Common/Style";
import HorizontalTable from "../Common/HorizontalTable/HorizontalTable";

const Edit = (props) => {
  const { attributes, setAttributes, clientId ,device} = props;

  return (
    <>
      <Settings {...{ attributes, setAttributes }} />

      <div {...useBlockProps()}>
        <Style attributes={attributes} id={`block-${clientId}`} />

        <div className="bBlocksHorizontalPricingTable">
           <HorizontalTable {...{ attributes, setAttributes, device}}/>
        </div>
      </div>
    </>
  );
};
export default Edit;
