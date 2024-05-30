const ArrowRightBold: React.FC<React.SVGProps<SVGSVGElement>> = ({
  opacity,
  width,
  height,
  ...props
}: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={14}
      height={14}
      // width="100%"
      // height="100%"
      viewBox="0 0 14 14"
      fill="none"
      className={`object-contain ${width} ${height}`}
    >
      <path
        stroke="#FFF"
        strokeLinecap="round"
        strokeLinejoin="round"
        // strokeWidth={1.67}
        strokeWidth={2}
        d="M1.167 7h11.666m0 0L7 1.167M12.833 7 7 12.833"
      />
    </svg>
  );
};

export default ArrowRightBold;
