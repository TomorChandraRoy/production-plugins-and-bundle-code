import { useBlockProps } from "@wordpress/block-editor";
import Settings from "./Settings/Settings";
import { withSelect } from '@wordpress/data';
import Style from "../Common/Style";
import DarkMinimalistTable from "../Common/DarkMinimalistTable";

const Edit = (props) => {
  const { attributes, setAttributes, clientId, device } = props;

  return (
    <>
      <Settings {...{ attributes, setAttributes, device }} />

      <div {...useBlockProps()}>
        <Style attributes={attributes} id={`block-${clientId}`} device={device} />

        <div className="pTableDarkMinimalist">
           <DarkMinimalistTable {...{ attributes, setAttributes, device}}/>
        </div>
      </div>
    </>
  );
};
export default withSelect((select) =>{
  const {getDeviceType} = select("core/editor");
  return{
    device: getDeviceType()?.toLowerCase(),
  };
})(Edit);




