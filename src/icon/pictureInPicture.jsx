function PictureInPicture({ color }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="14"
      viewBox="0 0 15 14"
      fill="none"
    >
      <path
        d="M0.960591 6.37193C0.751231 6.37193 0.575616 6.301 0.433744 6.15912C0.291872 6.01725 0.221182 5.84188 0.221675 5.63302C0.221675 5.42366 0.292611 5.24804 0.434483 5.10617C0.576355 4.9643 0.751724 4.89361 0.960591 4.8941H2.88177L0.221675 2.25247C0.0738916 2.10469 0 1.92932 0 1.72637C0 1.52341 0.0738916 1.34779 0.221675 1.19952C0.369458 1.05174 0.545074 0.977844 0.748522 0.977844C0.95197 0.977844 1.12734 1.05174 1.27463 1.19952L3.91626 3.85962V1.93844C3.91626 1.72908 3.98719 1.55346 4.12906 1.41159C4.27094 1.26972 4.4463 1.19903 4.65517 1.19952C4.86453 1.19952 5.04015 1.27046 5.18202 1.41233C5.32389 1.5542 5.39458 1.72957 5.39409 1.93844V5.63302C5.39409 5.84238 5.32315 6.01799 5.18128 6.15986C5.03941 6.30174 4.86404 6.37243 4.65517 6.37193H0.960591ZM1.69951 13.0222C1.2931 13.0222 0.945074 12.8774 0.655419 12.5877C0.365763 12.298 0.221182 11.9503 0.221675 11.5443V8.58868C0.221675 8.37932 0.292611 8.20371 0.434483 8.06183C0.576355 7.91996 0.751724 7.84927 0.960591 7.84976C1.16995 7.84976 1.34557 7.9207 1.48744 8.06257C1.62931 8.20444 1.7 8.37981 1.69951 8.58868V11.5443H6.87192C7.08128 11.5443 7.2569 11.6153 7.39877 11.7572C7.54064 11.899 7.61133 12.0744 7.61084 12.2833C7.61084 12.4926 7.5399 12.6682 7.39803 12.8101C7.25616 12.952 7.08079 13.0227 6.87192 13.0222H1.69951ZM14.2611 7.84976C14.0517 7.84976 13.8761 7.77883 13.7342 7.63696C13.5924 7.49508 13.5217 7.31972 13.5222 7.11085V2.67735H7.61084C7.40148 2.67735 7.22586 2.60642 7.08399 2.46454C6.94212 2.32267 6.87143 2.1473 6.87192 1.93844C6.87192 1.72908 6.94286 1.55346 7.08473 1.41159C7.2266 1.26972 7.40197 1.19903 7.61084 1.19952H13.5222C13.9286 1.19952 14.2766 1.34435 14.5663 1.634C14.8559 1.92366 15.0005 2.27144 15 2.67735V7.11085C15 7.32021 14.9291 7.49582 14.7872 7.6377C14.6453 7.77957 14.4699 7.85026 14.2611 7.84976ZM9.82759 13.0222C9.61823 13.0222 9.44261 12.9512 9.30074 12.8094C9.15887 12.6675 9.08818 12.4921 9.08867 12.2833V10.0665C9.08867 9.85715 9.15961 9.68154 9.30148 9.53967C9.44335 9.39779 9.61872 9.3271 9.82759 9.3276H14.2611C14.4704 9.3276 14.6461 9.39853 14.7879 9.54041C14.9298 9.68228 15.0005 9.85765 15 10.0665V12.2833C15 12.4926 14.9291 12.6682 14.7872 12.8101C14.6453 12.952 14.4699 13.0227 14.2611 13.0222H9.82759Z"
        fill={color ?? "white"}
      />
    </svg>
  );
}

export default PictureInPicture;