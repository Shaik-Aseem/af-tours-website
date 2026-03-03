import * as React from "react";

type IconProps = React.SVGProps<SVGSVGElement> & {
  title?: string;
};

function Svg({ title, children, ...props }: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : "presentation"}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      {children}
    </svg>
  );
}

export function IconPhone(props: IconProps) {
  return (
    <Svg {...props}>
      <path
        d="M8.9 3.3c.4-1 1.6-1.6 2.6-1.1l1.9.9c.8.4 1.2 1.3 1 2.2l-.6 2.3c-.2.7 0 1.5.5 2 1.1 1.3 2.3 2.5 3.6 3.6.6.5 1.3.7 2 .5l2.3-.6c.9-.2 1.8.2 2.2 1l.9 1.9c.5 1 .1 2.2-1.1 2.6-1.2.4-2.5.6-3.8.5-9.1-.8-16.3-8-17.1-17.1-.1-1.3.1-2.6.5-3.8Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function IconWhatsApp(props: IconProps) {
  return (
    <Svg {...props}>
      <path
        d="M12 2a9.5 9.5 0 0 0-8.2 14.3L3 22l5.9-1.6A9.5 9.5 0 1 0 12 2Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M8.7 8.6c.2-.6.7-.9 1.2-.9h.7c.3 0 .6.2.7.5l.6 1.4c.1.3.1.7-.1 1l-.5.6c.6 1.1 1.5 2 2.6 2.6l.6-.5c.3-.3.7-.3 1-.1l1.4.6c.3.1.5.4.5.7v.7c0 .5-.3 1-.9 1.2-.8.3-1.6.2-2.4 0-3.5-1.1-6.3-3.9-7.4-7.4-.2-.8-.3-1.6 0-2.4Z"
        fill="currentColor"
        opacity="0.9"
      />
    </Svg>
  );
}

export function IconMail(props: IconProps) {
  return (
    <Svg {...props}>
      <path
        d="M4 7.5A2.5 2.5 0 0 1 6.5 5h11A2.5 2.5 0 0 1 20 7.5v9A2.5 2.5 0 0 1 17.5 19h-11A2.5 2.5 0 0 1 4 16.5v-9Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M6.5 7.2 12 11l5.5-3.8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function IconMapPin(props: IconProps) {
  return (
    <Svg {...props}>
      <path
        d="M12 21s7-5.3 7-12a7 7 0 1 0-14 0c0 6.7 7 12 7 12Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M12 12.2a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
    </Svg>
  );
}

export function IconStar(props: IconProps) {
  return (
    <Svg {...props}>
      <path
        d="M12 2.8l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.8 1-6.1-4.4-4.3 6.1-.9L12 2.8Z"
        fill="currentColor"
      />
    </Svg>
  );
}

export function IconArrowRight(props: IconProps) {
  return (
    <Svg {...props}>
      <path
        d="M5 12h12"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M13 7l5 5-5 5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

