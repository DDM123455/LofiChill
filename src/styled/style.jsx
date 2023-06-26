import styled from "styled-components";

export const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
  input {
    opacity: 0;
    width: 0;
    height: 0;
  }
`;

export const HeaderDiv = styled.div`
  position: absolute;
  z-index: 3;
  width: 100%;
  display: inline-flex;
  align-items: center;
  left: 0;
  right: 0;
  justify-content: space-between;
`;
export const ScenesDiv = styled.div`
  background-color: rgba(18, 18, 18, 0.75);
  width: 357px;
  height: auto;
  position: absolute;
  z-index: 9999999;
  right: 45px;
  bottom: -113px;
  overflow-y: auto;
  border-radius: 12px;
  margin-top: 90px;
  img {
    aspect-ratio: 16/9 !important;
    border-radius: 16px;
    /* height: 190px; */
    object-fit: cover;
    width: 318px;
    margin-bottom: 20px;
  }
`;
export const MixerDiv = styled.div`
  background-color: hsla(0, 0%, 7%, 0.75);
  width: 357px;
  height: auto;

  position: absolute;
  z-index: 9999999;
  right: 500px;
  /* bottom: -113px; */
  min-height: 306px;
  overflow-y: auto;
  border-radius: 12px;
  margin-top: 90px;
  bottom: 20px;
  .musicVo {
    background-color: hsla(0, 0%, 100%, 0.05);
    border: 1px solid hsla(0, 0%, 100%, 0.1);
    border-radius: 8px;
    margin: 2px 12px;
  }
`;

export const Text = styled.p`
  color: white;
  font-size: 15px;
  font-weight: 500;
  text-align: unset;
  width: fit-content;
  padding-left: 22px;
`;
