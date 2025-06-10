import type { SVGProps } from "react";

export function Bootstrap(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      width="1em"
      height="1em"
      {...props}>
      <g fill="none">
        <rect
          width="256"
          height="256"
          fill="url(#skillIconsBootstrap0)"
          rx="60"></rect>
        <g filter="url(#skillIconsBootstrap2)">
          <path
            fill="url(#skillIconsBootstrap1)"
            d="M131.97 196.157c29.676 0 47.559-14.531 47.559-38.497c0-18.117-12.759-31.232-31.706-33.309v-.754c13.92-2.265 24.843-15.192 24.843-29.628c0-20.57-16.239-33.969-40.986-33.969H76v136.157zM97.653 77.267h28.807c15.66 0 24.553 6.983 24.553 19.627c0 13.493-10.343 21.041-29.096 21.041H97.653zm0 101.623v-44.819h28.613c20.494 0 31.127 7.548 31.127 22.268c0 14.719-10.343 22.551-29.87 22.551z"></path>
          <path
            stroke="#fff"
            strokeWidth="2"
            d="M131.97 196.157c29.676 0 47.559-14.531 47.559-38.497c0-18.117-12.759-31.232-31.706-33.309v-.754c13.92-2.265 24.843-15.192 24.843-29.628c0-20.57-16.239-33.969-40.986-33.969H76v136.157zM97.653 77.267h28.807c15.66 0 24.553 6.983 24.553 19.627c0 13.493-10.343 21.041-29.096 21.041H97.653zm0 101.623v-44.819h28.613c20.494 0 31.127 7.548 31.127 22.268c0 14.719-10.343 22.551-29.87 22.551z"></path>
        </g>
        <defs>
          <linearGradient
            id="skillIconsBootstrap0"
            x1="0"
            x2="256"
            y1="0"
            y2="256"
            gradientUnits="userSpaceOnUse">
            <stop stopColor="#9013FE"></stop>
            <stop
              offset="1"
              stopColor="#6B11F4"></stop>
          </linearGradient>
          <linearGradient
            id="skillIconsBootstrap1"
            x1="85.793"
            x2="148.541"
            y1="68.962"
            y2="175.084"
            gradientUnits="userSpaceOnUse">
            <stop stopColor="#fff"></stop>
            <stop
              offset="1"
              stopColor="#F1E5FC"></stop>
          </linearGradient>
          <filter
            id="skillIconsBootstrap2"
            width="137.529"
            height="170.157"
            x="59"
            y="47"
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse">
            <feFlood
              floodOpacity="0"
              result="BackgroundImageFix"></feFlood>
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix>
            <feOffset dy="4"></feOffset>
            <feGaussianBlur stdDeviation="8"></feGaussianBlur>
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"></feColorMatrix>
            <feBlend
              in2="BackgroundImageFix"
              result="effect1_dropShadow_158_100"></feBlend>
            <feBlend
              in="SourceGraphic"
              in2="effect1_dropShadow_158_100"
              result="shape"></feBlend>
          </filter>
        </defs>
      </g>
    </svg>
  );
}
