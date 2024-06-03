const Arrow_Down: React.FC<React.SVGProps<SVGSVGElement>> = ({
  opacity,
  width,
  height,
  ...props
}: React.SVGProps<SVGSVGElement>) => {
  return (
    // <svg
    //   xmlns="http://www.w3.org/2000/svg"
    //   width={14}
    //   height={14}
    //   // width="100%"
    //   // height="100%"
    //   viewBox="0 0 14 14"
    //   fill="none"
    //   className={`object-contain ${width} ${height}`}
    // >
    //   <path
    //     stroke="#FFF"
    //     strokeLinecap="round"
    //     strokeLinejoin="round"
    //     // strokeWidth={1.67}
    //     strokeWidth={2}
    //     d="M1.167 7h11.666m0 0L7 1.167M12.833 7 7 12.833"
    //   />
    // </svg>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={12}
      height={7}
      fill="none"
      viewBox="0 0 12 7"
      className={`object-contain ${width} ${height}`}
    >
      <path
        fill="#000"
        d="M11.53 1.53l-5 5a.75.75 0 01-1.062 0l-5-5A.751.751 0 011.531.469L6 4.938l4.47-4.47a.751.751 0 111.062 1.062h-.001z"
      ></path>
    </svg>
  );
};

export default Arrow_Down;
