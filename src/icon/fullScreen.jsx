function FullScreen({ color }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="35"
      height="35"
      viewBox="0 0 35 35"
      fill="none"
    >
      <rect width="35" height="35" rx="8" fill="#121212" fillOpacity="0.75" />
      <path
        d="M12.1429 19.6429H10V25H15.3571V22.8571H12.1429V19.6429ZM10 15.3571H12.1429V12.1429H15.3571V10H10V15.3571ZM22.8571 22.8571H19.6429V25H25V19.6429H22.8571V22.8571ZM19.6429 10V12.1429H22.8571V15.3571H25V10H19.6429Z"
        fill={color ?? "white"}
      />
    </svg>
  );
}

export default FullScreen;
