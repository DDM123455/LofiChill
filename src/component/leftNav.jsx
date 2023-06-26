import { forwardRef, useState } from "react";
import MixTool from "../icon/mix-tool";
import Scenes from "../icon/scenes";
import Template from "../icon/template";
import Tool from "../icon/tool";
import { Tooltip } from "react-tooltip";
import { MixerDiv, ScenesDiv, Text } from "../styled/style";
import Back from "../icon/back";
import Moon34 from "../icon/moon34";
import Guitar from "../icon/ghitar";
import Cafe from "../icon/cafe";
import MusicNote from "../icon/musicNote";
import lofiLogo from "../video/lofi-logo.png";
import Spotify from "../icon/spotify";
import Loa1 from "../icon/Loa1";
import Loa2 from "../icon/Loa2";
function LeftNav({ data, handleBG, handleVolumeChange, volume }) {
  const [scenes, setScenes] = useState(false);
  const [mix, setMix] = useState(true);
  const [show, setShow] = useState(true);
  const [datadetail, setDataDetail] = useState();
  const [tab, setTab] = useState(0);
  const [tabLeft, setTabLeft] = useState(0);

  const handleScenes = () => {
    setScenes(!scenes);
  };
  const handleOpenScenes = (item) => {
    setDataDetail(item);
    setShow(!show);
  };
  const handleTab = (index) => {
    setTab(index);
  };
  const handleScenesBG = (selectedItem, index) => {
    // if (data[index].id == selectedItem.id) {
    //   console.log(data.filter((item) => item.id != selectedItem.id));
    //   if (
    //     (data.map((item) => item.id != selectedItem.id).id = data[index].id)
    //   ) {
    //     selectedItem.isSelect = true;
    //     // data.map((item) => item.id != selectedItem.id)={...data.map((item) => item.id != selectedItem.id),isSelect:false}
    //   }
    // }
    // handleBG(selectedItem);
    // setTab((pre) => {
    //   const updatedItems = pre.videoBG?.map((item) => {
    //     if (item === selectedItem) {
    //       return { ...item, isSelect: true };
    //     } else {
    //       return { ...item, isSelect: false };
    //     }
    //   });
    //   console.log(updatedItems);
    //   return updatedItems;
    // });
    // console.log(tab);
  };
  const handleTableft = (index) => {
    setTabLeft(index);
  };
  return (
    <div className="leftNav">
      <div
        className="leftNavItem"
        data-tooltip-id="my-tooltip21"
        data-tooltip-content="Mixer!"
        style={{ paddingTop: 40 }}
      >
        <MixTool />
        <Tooltip
          float
          id="my-tooltip21"
          place="left"
          // type="dark"
          effect="float"
        />
      </div>
      <MixerDiv>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            width: 100 + "%",
          }}
        >
          <div className="music">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: 14,
                alignItems: "center",
                fontSize: 14,
                marginBottom: 14,
              }}
            >
              <span style={{ color: "hsla(0,0%,100%,.7)" }}>MUSIC</span>{" "}
              <MusicNote />
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div
                className={tab !== 1 ? "moodbtn" : "moodbtn active"}
                onClick={() => handleTab(1)}
              >
                <Moon34 />
              </div>
              <div
                className={tab !== 2 ? "moodbtn" : "moodbtn active"}
                onClick={() => handleTab(2)}
              >
                <div>
                  <Guitar />
                </div>
              </div>
              <div
                className={tab !== 3 ? "moodbtn" : "moodbtn active"}
                onClick={() => handleTab(3)}
              >
                <Cafe />
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                color: "hsla(0,0%,100%,.3)",
              }}
            >
              <div>Sleepy</div>
              <div style={{ marginLeft: -9 }}>Jazzy</div>
              <div style={{ marginRight: 8 }}>Chill</div>
            </div>
          </div>
          <div className="leftMusic">
            <div
              className={tabLeft == 1 ? "btnLeft acitveLeft" : "btnLeft"}
              style={{ backgroundColor: "transparent", color: "White" }}
              onClick={() => handleTableft(1)}
            >
              <img alt="lofi" width={22} height={22} src={lofiLogo} />
              <span>lofi.co</span>
            </div>
            <div
              className={tabLeft == 2 ? "btnLeft acitveLeft" : "btnLeft"}
              style={{ backgroundColor: "transparent", color: "White" }}
              onClick={() => handleTableft(2)}
            >
              <Spotify />
              <span>Spotify</span>
            </div>
          </div>
        </div>
        <div className="musicVo">
          <div
            style={{
              fontSize: 14,
              color: "hsla(0,0%,100%,.7)",
              marginTop: 20,
              textAlign: "initial",
              marginLeft: 20,
              fontWeight: 700,
              marginBottom: 15,
            }}
          >
            MUSIC VOLUMN
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Loa1 />
            <input
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={volume}
              onChange={handleVolumeChange}
              id={"volumn"}
              style={{
                width: 68 + "%",
                color: "#f3a952",
                textAlign: "initial",
                marginLeft: 15,
                marginRight: 15,
              }}
            />
            <Loa2 />
          </div>
        </div>
      </MixerDiv>

      <div
        className="leftNavItem"
        data-tooltip-id="my-tooltip3"
        data-tooltip-content="Template"
      >
        <Template />
        <Tooltip float id="my-tooltip3" place="left" effect="float" />
      </div>
      <div
        className="leftNavItem"
        data-tooltip-id="my-tooltip4"
        data-tooltip-content="Scenes"
        onClick={handleScenes}
      >
        <Scenes />
        <Tooltip float id="my-tooltip4" place="left" effect="float" />
      </div>
      <div>
        {scenes && (
          <ScenesDiv>
            <Text>
              {show ? (
                "Scenes"
              ) : (
                <div style={{ display: "flex", marginRight: 40 }}>
                  <div
                    style={{ cursor: "pointer" }}
                    onClick={() => setShow(!show)}
                  >
                    <Back />
                  </div>{" "}
                  <span style={{ marginLeft: 25 }}>Switch Scenes</span>
                </div>
              )}{" "}
            </Text>

            {show
              ? data.map((item, index) => (
                  <div key={index}>
                    <div>
                      <img
                        src={`${item.img}`}
                        alt="1221"
                        onClick={() => handleOpenScenes(item)}
                      />
                    </div>
                  </div>
                ))
              : datadetail.videoBG.map((item, index) => (
                  <div>
                    <div>
                      <div style={{ position: "relative" }}>
                        <div></div>
                        {
                          <div
                            style={{
                              height: 20,
                              width: 20,
                              top: 10,
                              borderRadius: 50 + "%",
                              backgroundColor: "orange",
                              position: "absolute",
                              right: 40,
                            }}
                          ></div>
                        }
                        <img
                          src={`${item.img}`}
                          alt="1221"
                          onClick={() => {
                            handleBG(item);
                            handleScenesBG(item, index);
                          }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
          </ScenesDiv>
        )}
      </div>
      <div
        className="leftNavItem"
        data-tooltip-id="my-tooltip5"
        data-tooltip-content="Tool"
        style={{ paddingBottom: 40 }}
      >
        <Tool />
        <Tooltip float id="my-tooltip5" place="left" effect="float" />
      </div>
    </div>
  );
}

export default forwardRef(LeftNav);
