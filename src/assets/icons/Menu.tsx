import { IconProps } from "@/src/types/icon";

const Menu = ({ size, className, style }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size || "24"}
      height={size || "24"}
      viewBox="0 0 24 24"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className={className}
      style={style}
    >
      <path d="M4 12h16" />
      <path d="M4 18h16" />
      <path d="M4 6h16" />
    </svg>
  );
};

export default Menu;
