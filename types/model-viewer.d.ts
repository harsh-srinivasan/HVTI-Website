import React from "react";

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "model-viewer": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          src?: string;
          alt?: string;
          "auto-rotate"?: boolean | string;
          "rotation-per-second"?: string;
          "camera-controls"?: boolean | string;
          "interaction-prompt"?: string;
          "shadow-intensity"?: string | number;
          "shadow-softness"?: string | number;
          exposure?: string | number;
          "camera-orbit"?: string;
          "min-camera-orbit"?: string;
          "max-camera-orbit"?: string;
          loading?: string;
          reveal?: string;
        },
        HTMLElement
      >;
    }
  }
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "model-viewer": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          src?: string;
          alt?: string;
          "auto-rotate"?: boolean | string;
          "rotation-per-second"?: string;
          "camera-controls"?: boolean | string;
          "interaction-prompt"?: string;
          "shadow-intensity"?: string | number;
          "shadow-softness"?: string | number;
          exposure?: string | number;
          "camera-orbit"?: string;
          "min-camera-orbit"?: string;
          "max-camera-orbit"?: string;
          loading?: string;
          reveal?: string;
        },
        HTMLElement
      >;
    }
  }
}
