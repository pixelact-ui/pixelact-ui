import { IconProps } from "@/src/types/icon";

const LightMode = (props: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      {...props}
    >
      <circle cx="12" cy="12" r="4" color={props.color} />
      <path d="M12 2v2" color={props.color} />
      <path d="M12 20v2" color={props.color} />
      <path d="m4.93 4.93 1.41 1.41" color={props.color} />
      <path d="m17.66 17.66 1.41 1.41" color={props.color} />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m6.34 17.66-1.41 1.41" color={props.color} />
      <path d="m19.07 4.93-1.41 1.41" color={props.color} />
    </svg>
  );
};

export default LightMode;
