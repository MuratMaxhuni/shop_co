const StarIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({
  width,
  height,

  opacity,
  ...props
}: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={18.5}
      height={18.5}
      // width="100%"
      // height="100%"
      viewBox="0 0 18.5 18.5"
      fill="none"
      className={`object-contain ${width} ${height}`}
      // className="object-contain w-ful h-auto"
    >
      <path
        fill="#FFC633"
        d="m9.245.255 2.62 5.64 6.172.748-4.554 4.234 1.196 6.102-5.434-3.023-5.434 3.023 1.196-6.102L.452 6.643l6.174-.748L9.245.255Z"
      />
    </svg>
  );
};

export default StarIcon;
