import icon from "../video/logo.0cbf9e63b4a021661126.gif";
import { forwardRef, useEffect, useRef, useState } from "react";
import Moon from "../icon/moon";
import Sun from "../icon/sun";
import img2 from "../icon/image-svgrepo-com.png";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import Loa from "../icon/loa";
import Screen from "../icon/screen";
import Bars from "../icon/bars";
import LoginIcon from "../icon/loginIcon";
import Setting from "../icon/setting";
import Tag from "../icon/tag";
import Question from "../icon/Question";
import FAQ from "../icon/Faq";
import Share from "../icon/share";
import AboutUs from "../icon/about";
import { Tooltip } from "react-tooltip";
import LoaIcon from "../icon/LoaIcon";
import ScreenModal from "./screenModal";
import SongList from "../data";
import { Switch, HeaderDiv } from "../styled/style.jsx";
function Header(handleClick, ref) {
  const [isTrue, setTrue] = useState(false);
  const [isOpen, setOpen] = useState(false);

  var [index, setIndex] = useState(0);
  const [isShow, setShow] = useState(false);
  const [isShowList, setShowList] = useState(false);
  const [isShowScreen, setShowScreen] = useState(false);
  const [isMuted, setMute] = useState(false);

  const [volume, setVolume] = useState(0.5); // initial volume is 1 (max volume)
  const audioRef = useRef(null); // create a ref to access the AudioPlayer component instance

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.audio.current.volume = volume; // set the volume of the HTMLAudioElement to the current volume
    }
  }, [volume]);

  const handleVolumeChange = (e) => {
    setVolume(parseFloat(e.target.value)); // update the volume state when the input range value changes
  };
  const handleMuted = () => {
    if (isMuted) {
      document
        .querySelectorAll("audio, video")
        .forEach((el) => (el.muted = false));
      setMute(false);
    } else {
      document
        .querySelectorAll("audio, video")
        .forEach((el) => (el.muted = true));
      setMute(true);
    }
  };
  var time = new Date();
  var hour = time.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  return (
    <HeaderDiv>
      <div>
        <img src={icon} alt="icon" color="red" id="img" />
      </div>
      <div className="leftside">
        <div
          className="timer"
          onClick={() => {
            setOpen(!isOpen);
            handleClick.handleClickOpen(!isOpen);
          }}
        >
          {hour}
        </div>
        {handleClick.BG !== "" && (
          <Switch>
            <div
              style={{
                position: "absolute",
                zIndex: 2,
                top: 6,
                left: 9,
              }}
            >
              {isTrue ? (
                <Sun />
              ) : (
                <div style={{ marginLeft: 30 }}>
                  <Moon />
                </div>
              )}
            </div>

            <input
              type="checkbox"
              checked={isTrue}
              onChange={() => {
                setTrue(!isTrue);
                handleClick.handleClick(!isTrue);
              }}
              onClick={(event) => {
                setTrue(!isTrue);
                handleClick.handleClick(!isTrue);
              }}
            />
            <span className="slider round"></span>
          </Switch>
        )}
        <div className="access">
          <div>
            {" "}
            <img
              src={img2}
              color="red"
              id="img"
              alt="ghi"
              style={{ width: 20, paddingLeft: 13 }}
            />
          </div>

          <div>Access 40+ scenes with premium</div>
        </div>
        <div style={{ width: 163 }}>
          <div
            style={{ display: "flex" }}
            className={isShow ? "border" : "containerAudio"}
          >
            <AudioPlayer
              hasDefaultKeyBindings={true}
              // src={musicList?.items[index]?.track.external_urls.spotify}
              src={`${SongList[index].url}`}
              onClickNext={() =>
                setIndex(index === SongList.length ? 0 : index + 1)
              }
              onEnded={() => setIndex((index += 1))}
              onClickPrevious={() =>
                setIndex(index === 0 ? SongList.length - 1 : index - 1)
              }
              onPlay={(e) => console.log("onPlay")}
              volumeControls={true}
              volume={volume}
              ref={audioRef}
              // controls={false}
              showSkipControls
              autoPlay={false}
              showJumpControls={false}
              className="audio"
              layout="horizontal-reverse"
              // other props here
            />{" "}
            <div
              className={isShow ? "loa audio" : "loa"}
              onClick={() => setShow(!isShow)}
            >
              <Loa />
            </div>
          </div>
          <div className="containerVo">
            <input
              type="range"
              min="0"
              max="1"
              step="0.05"
              style={{ color: "#f3a952" }}
              value={volume}
              onChange={handleVolumeChange}
              id={isShow ? "volumn" : "volumnelse"}
            />
          </div>
        </div>
        <div
          className="muted"
          data-tooltip-id="my-tooltip"
          data-tooltip-content="Tắt âm!"
          style={{ backgroundColor: "transparent" }}
          onClick={handleMuted}
        >
          <div className={isMuted ? "mutedItem" : ""}>
            <LoaIcon />
          </div>{" "}
          <Tooltip id="my-tooltip" place="bottom"></Tooltip>
        </div>
        {/* <div>
          <Muted />
          <ReactTooltip id="my-tooltip" />
        </div> */}
        <div className="muted" onClick={() => setShowScreen(!isShowScreen)}>
          <Screen color="white" />
          {isShowScreen && <ScreenModal ref={ref} />}
        </div>
        {/* <ScreenModal /> */}
        <div className="muted" onClick={() => setShowList(!isShowList)}>
          <Bars color="white" />
          <div className={isShowList ? "listbars" : "hidden"}>
            <div className="droplistitem">
              <LoginIcon color="white" /> Login
            </div>
            <div className="droplistitem">
              <Setting color="white" /> General Setting
            </div>
            <div className="droplistitem">
              <Tag color="white" /> Price
            </div>
            <div className="droplistitem">
              <Question color="white" /> How It works
            </div>
            <div className="droplistitem">
              <FAQ /> FAQ
            </div>
            <div className="droplistitem">
              <Share /> Share
            </div>
            <div className="droplistitem">
              <AboutUs /> About us
            </div>
            {/* <li>
                <FeedBack /> Share feedback
              </li> */}
          </div>
        </div>
      </div>
    </HeaderDiv>
  );
}

export default forwardRef(Header);
