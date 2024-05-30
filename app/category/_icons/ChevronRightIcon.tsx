const ChevronRightIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({
  opacity,
  ...props
}: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={7} height={12} fill="none">
      <path
        fill="#000"
        fillOpacity={opacity}
        d="m1.53.47 5 5a.75.75 0 0 1 0 1.062l-5 5a.751.751 0 1 1-1.062-1.063L4.938 6 .468 1.53A.751.751 0 1 1 1.53.469V.47Z"
      />
    </svg>
  );
};

export default ChevronRightIcon;
