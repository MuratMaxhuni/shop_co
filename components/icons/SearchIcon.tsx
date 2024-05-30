const SearchIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({
  opacity,
  ...props
}: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      opacity={opacity}
      fill="none"
    >
      <path
        fill="#000"
        d="m20.796 19.204-4.452-4.454a8.636 8.636 0 1 0-1.594 1.594l4.456 4.457a1.126 1.126 0 1 0 1.594-1.594l-.004-.003ZM3.125 9.5A6.375 6.375 0 1 1 9.5 15.875 6.381 6.381 0 0 1 3.125 9.5Z"
      />
    </svg>
  );
};

export default SearchIcon;
