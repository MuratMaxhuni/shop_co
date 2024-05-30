const FilterIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({
  opacity,
  onClick,
  ...props
}: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={22}
      height={20}
      opacity={opacity}
      fill="none"
      onClick={onClick}
    >
      <path
        fill="#000"
        d="M12.125 9.625v8.625a1.125 1.125 0 1 1-2.25 0V9.625a1.125 1.125 0 0 1 2.25 0ZM17.75 16a1.125 1.125 0 0 0-1.125 1.125v1.125a1.125 1.125 0 1 0 2.25 0v-1.125A1.125 1.125 0 0 0 17.75 16ZM20 12.25h-1.125V1.75a1.125 1.125 0 1 0-2.25 0v10.5H15.5a1.125 1.125 0 1 0 0 2.25H20a1.125 1.125 0 1 0 0-2.25ZM4.25 13a1.125 1.125 0 0 0-1.125 1.125v4.125a1.125 1.125 0 0 0 2.25 0v-4.125A1.125 1.125 0 0 0 4.25 13ZM6.5 9.25H5.375v-7.5a1.125 1.125 0 0 0-2.25 0v7.5H2a1.125 1.125 0 0 0 0 2.25h4.5a1.125 1.125 0 1 0 0-2.25Zm6.75-4.5h-1.125v-3a1.125 1.125 0 1 0-2.25 0v3H8.75a1.125 1.125 0 0 0 0 2.25h4.5a1.125 1.125 0 0 0 0-2.25Z"
      />
    </svg>
  );
};

export default FilterIcon;
