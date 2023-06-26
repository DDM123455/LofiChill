import { forwardRef, useEffect } from "react";
import FullScreen from "../icon/fullScreen";
import PictureInPicture from "../icon/pictureInPicture";
function ScreenModal(props, ref) {
  const handleFullScreen = () => {
    document.documentElement.requestFullscreen();
  };
  const handlePIP = () => {
    if ("pictureInPictureEnabled" in document) {
      if (document.pictureInPictureEnabled) {
        ref?.current?.requestPictureInPicture();
      } else {
        console.log("Picture-in-Picture is not enabled");
      }
    } else {
      console.log("Picture-in-Picture is not supported");
    }
  };

  return (
    <div className="screenModal">
      <div className="screen-modal-item">
        <div onClick={handleFullScreen}>
          <FullScreen />
        </div>
        <div style={{ height: 28 }}>Full Screen</div>
      </div>
      <div className="screen-modal-item">
        <div
          style={{
            marginLeft: 10,
          }}
          onClick={handlePIP}
        >
          <PictureInPicture />
        </div>
        <div>Picture in Picture</div>
      </div>
    </div>
  );
}

export default forwardRef(ScreenModal);
