import { useBlockProps } from "@wordpress/block-editor";

import Settings from "./Settings/Settings";
import Style from "../Common/Style";

const Edit = (props) => {
  const { attributes, setAttributes, clientId } = props;
  const { purposeType } = attributes;

  return (
    <>
      <Settings {...{ attributes, setAttributes }} />

      <div {...useBlockProps()}>
        <Style attributes={attributes} id={`block-${clientId}`} />

        <div className="bBlocksTestPurpose">
          {purposeType === "test" ? (
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
          )}
        </div>
      </div>
    </>
  );
};
export default Edit;
