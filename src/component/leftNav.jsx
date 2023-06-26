import { useState } from "react";
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
function LeftNav({ data, handleBG }) {
  const [scenes, setScenes] = useState(false);
  const [mix, setMix] = useState(true);
  const [show, setShow] = useState(true);
  const [datadetail, setDataDetail] = useState();
  const [tab, setTab] = useState();

  const handleScenes = () => {
    setScenes(!scenes);
  };
  const handleOpenScenes = (item) => {
    setDataDetail(item);
    setShow(!show);
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
        <div className="music">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>MUSIC</span> <MixTool />
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div className="moodbtn">
              <Moon34 />
            </div>
            <div className="moodbtn">
              <Guitar />
            </div>
            <div className="moodbtn">
              <Cafe />
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>Sleepy</div>
            <div>Jazzy</div>
            <div>Chill</div>
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
                            setTab(item);
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

export default LeftNav;
