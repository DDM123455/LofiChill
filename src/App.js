import "./App.css";
import outside from "./video/outside.mp4";
import outsideNight from "./video/outside-night.mp4";
import Header from "./component/header";
import LeftNav from "./component/leftNav";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import trainMp3 from "./video/train.mp3";
import windowRain from "./video/window_rain.mp3";
import insideSun from "./video/inside_sun.mp4";
import inside from "./video/inside.mp4";

import outsideSun from "./video/outside_sun.mp4";
import insideNight from "./video/inside-night.mp4";
import outside1Night from "./video/outside-night.mp4";
import outside1 from "./video/outside.mp4";

import Img1 from "./video/cafe-set.588fc661c5366cd35582.png";
import Img2 from "./video/inthewoods-preview.f4f3ef5bee96b89890f6.png";
import Img3 from "./video/inthewoods-outside.a3cf569fddab44965ab4.png";
import cafeIn from "./video/cafe-in.98c81314f68a47ee58cb.png";
import cafeOut from "./video/cafe-out.0d307fb8651788cfd35c.png";

import { Tooltip } from "react-tooltip";
import Draggable from "react-draggable";

function App() {
  const [backgroundState, setBackGround] = useState(true);
  const [open, setOpen] = useState(true);
  const [isPlay, setPlay] = useState(false);
  const [isPlayRain, setPlayRain] = useState(false);
  const [soundClick, setSoundClick] = useState(false);
  const [soundClick2, setSoundClick2] = useState(false);
  const [timeOpen, setOpenTime] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [volume2, setVolume2] = useState(0.5);
  const [time, setTime] = useState(new Date());
  const [BG, setBG] = useState(outsideSun);
  const video = document.getElementById("vid");
  const ref = useRef();
  const refWindowRain = useRef();
  const videoref = useRef();

  const backroundMD = useMemo(() => {
    const arr = [
      {
        id: 1,
        videoBG: [
          {
            id: 1,
            soundOne: {
              name: "Rain sound",
              sound: windowRain,
            },
            soundTwo: {
              name: "City trafic",
              sound: trainMp3,
            },
            videoSun: inside,
            videoNight: insideNight,
            img: cafeIn,
          },
          {
            id: 2,
            soundOne: {
              name: "Rain sound",
              sound: windowRain,
              img: "",
            },
            soundTwo: {
              name: "City trafic",
              sound: trainMp3,
              img: "",
            },
            img: cafeOut,
            videoSun: outside1,
            videoNight: outside1Night,
          },
        ],
        img: Img1,
      },
      {
        id: 2,
        videoBG: [
          {
            id: 1,
            soundOne: {
              name: "Rain sound",
              sound: windowRain,
            },
            soundTwo: {
              name: "City trafic",
              sound: trainMp3,
            },
            videoSun: insideSun,
            videoNight: "",
            img: Img2,
          },
          {
            id: 2,
            soundOne: {
              name: "Rain sound",
              sound: windowRain,
              img: "",
            },
            soundTwo: {
              name: "City trafic",
              sound: trainMp3,
              img: "",
            },
            img: Img3,
            videoSun: outsideSun,
            videoNight: "",
          },
        ],
        img: Img3,
      },
    ];
    return arr;
  }, []);

  // useEffect(() => {
  //   if (video) {
  //     video.src = backgroundState ? outside : outsideNight;
  //   }
  // }, [backgroundState, video]);
  useEffect(() => {
    if (video) {
      video.src = backgroundState ? BG.videoSun : BG.videoNight;
    }
  }, [backgroundState, BG]);

  const handleClick = (num) => {
    setBackGround(!num);
    console.log(num);
  };
  const handleClickOpen = useCallback((state) => {
    setOpen(!state);
  }, []);
  const handleBG = (BG) => {
    return setBG(BG);
  };

  const handlePlay = () => {
    if (isPlay) {
      ref?.current.pause();
      setPlay(false);
    } else {
      ref?.current.play();
      setPlay(true);
    }
  };
  const handlePlayRain = () => {
    if (isPlayRain) {
      refWindowRain?.current.pause();
      setPlayRain(false);
    } else {
      refWindowRain?.current.play();
      setPlayRain(true);
    }
  };
  const handleCityTraficSound = () => {
    setSoundClick(!soundClick);
  };
  const handleCityRainSound = () => {
    setSoundClick2(!soundClick2);
  };

  useEffect(() => {
    ref.current.volume = volume;
    refWindowRain.current.volume = volume2;
  }, [volume, volume2]);

  const handleVolumeChange = (e) => {
    setVolume(parseFloat(e.target.value));
  };
  const handleVolumeChange2 = (e) => {
    setVolume2(parseFloat(e.target.value));
  };

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     setTime(new Date());
  //   }, 1000);

  //   return () => clearInterval(intervalId);
  // }, []);

  const hour = time.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  const date = time.getDay();
  const weekdays = [
    "Sunday ",
    "Monday ",
    "Tuesday ",
    "Wednesday ",
    "Thursday ",
    "Friday ",
    "Saturday ",
  ];
  const Months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let message;
  var hours = time.getHours();

  if (hours < 12) {
    message = "Good morning  ☀️";
  } else if (hours < 18) {
    message = "Good Afternoon 🌇";
  } else {
    message = "Good Evening 🌙️";
  }
  return (
    <div className="App">
      {open && (
        <Draggable>
          <div className="time">
            <div className="headerTime">
              <div> {message}</div>
              <div>
                {hour}
                <button
                  onClick={() => setOpen(false)}
                  style={{
                    background: "#fff",
                    height: 3,
                    width: 16,
                    position: "absolute",
                    zIndex: 999999,
                    top: 9 + "%",
                    cursor: "pointer",
                    right: -28,
                  }}
                ></button>
              </div>
            </div>
            <div className="content">
              <div>
                It's {weekdays[date]}, {Months[time.getMonth()]}{" "}
                {time.getDate()}
              </div>
            </div>
            <div style={{ fontSize: 15.3 }}>
              " Keep your face always toward the sunshine, and shadows will fall
              behind you.""
            </div>
          </div>
        </Draggable>
      )}

      <div>
        <Header
          BG={BG.videoNight}
          handleClick={handleClick}
          ref={videoref}
          handleClickOpen={handleClickOpen}
        />

        <video loop={true} autoPlay="autoplay" id="vid" muted ref={videoref}>
          <source
            src={backgroundState ? outside : outsideNight}
            type="video/mp4"
          />
        </video>
      </div>
      <LeftNav data={backroundMD} handleBG={handleBG} />

      <div className="content">
        <div
          className={isPlay ? "circle clicked" : "circle"}
          data-tooltip-id="my-tooltipTrain"
          data-tooltip-content="Train sound"
          clickable
        >
          <div
            className={isPlay ? "circleClick" : "circlehover"}
            onClick={handlePlay}
          ></div>
          <div className="train-audio">
            <audio ref={ref}>
              <source src={`${trainMp3}`} type="audio/mpeg" />
              Your browser does not support the audio tag.
            </audio>
            <Tooltip
              id="my-tooltipTrain"
              event="mouseenter"
              clickable
              place="bottom"
              content={
                <div className="tooltip-content">
                  <div onClick={handleCityTraficSound}>City trafic</div>
                  {soundClick && (
                    <input
                      type="range"
                      min="0"
                      max="1"
                      step="0.05"
                      style={{ color: "#f3a952" }}
                      value={volume}
                      onChange={handleVolumeChange}
                      id={"volumn"}
                    />
                  )}
                </div>
              }
            ></Tooltip>
          </div>
        </div>

        {/* <div>
          <button
            data-tip="This is a hoverable and clickable tooltip"
            data-for="my-tooltip"
          >
            Hover me
          </button>
          <Tooltip
            id="my-tooltip"
            event="mouseenter"
            clickable
            place="bottom"
          />
        </div> */}
        <div
          className={isPlayRain ? "circle-rain clicked" : "circle-rain"}
          data-tooltip-id="my-tooltipRain"
          data-tooltip-content="Rain sound"
        >
          <div
            className={
              isPlayRain ? "circlehover-rain circleClick" : "circlehover-rain"
            }
            onClick={() => handlePlayRain}
          >
            <audio ref={refWindowRain}>
              <source src={`${windowRain}`} type="audio/mpeg" />
              Your browser does not support the audio tag.
            </audio>
            <Tooltip
              id="my-tooltipRain"
              place="bottom"
              event="mouseenter"
              clickable
              content={
                <div className="tooltip-content">
                  <div onClick={handleCityRainSound}>Rain sound</div>
                  {soundClick2 ? (
                    <input
                      type="range"
                      min="0"
                      max="1"
                      step="0.05"
                      style={{ color: "#f3a952" }}
                      value={volume2}
                      onChange={handleVolumeChange2}
                      id={"volumn"}
                    />
                  ) : (
                    ""
                  )}
                </div>
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
