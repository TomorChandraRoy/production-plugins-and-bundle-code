import { useBlockProps } from "@wordpress/block-editor";
import { withSelect } from '@wordpress/data';
import Settings from "./Settings/Settings";
import Style from "../Common/Style";
import Theme from "../Common/theme/Theme";

const Edit = (props) => {
  const { attributes, setAttributes, clientId, device } = props;
  // const { themeStyle } = attributes;

  return (
    <>
      <Settings {...{ attributes, setAttributes }} />

      <div {...useBlockProps()}>
        <Style attributes={attributes} id={`block-${clientId}`} device={device} />

        <div className="bBlocksPriceCardContent">


          {/* {themeStyle === "style-1" ? (
            <p>
              Every text is written for a reason. For example, every text
              message you send has a purpose, whether that is to let your mum
              know when you will be home.
            </p>
          ) : (
            <p>
              If someone sends you an invitation to a party, for example, they
              are telling you what time to arrive and what the sender is
              celebrating, and they might even.
            </p>
          )} */}

        <Theme  {...{ attributes, setAttributes, device}} />

        </div>
      </div>
    </>
  );
};

export default withSelect((select) => {
  const { getDeviceType } = select("core/editor");
  return {
    device: getDeviceType()?.toLowerCase(),
  };
})(Edit);
