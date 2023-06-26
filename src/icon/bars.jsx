function Bars({ color }) {
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
        d="M10 25H25V22.5H10V25ZM10 18.75H25V16.25H10V18.75ZM10 10V12.5H25V10H10Z"
        fill="white"
      />
    </svg>
  );
}

export default Bars;
