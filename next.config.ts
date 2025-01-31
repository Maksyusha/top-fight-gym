import type { NextConfig } from "next";

const sassOptions = {
  additionalData: `
    $primary-color-main: #111;
    $primary-color-dark: #000;
    $primary-color-contras-text: #fff;
    $secondary-color-main: #fff;
    $secondary-color-dark: #dbdbdb;
    $secondary-color-contras-text: #000;
    $skeleton-color: #dbdbdb;
    $opacity: 0.8;
    $transition-duration: 0.15s;
    $transition-timing-func: ease-in-out;
    $max-content-width: 1280px;

    $screen-xs: 0px;
    $screen-sm: 432px;
    $screen-md: 688px;
    $screen-lg: 864px;
    $screen-xl: 1280px;

    @mixin sm {
      @media (min-width: #{$screen-sm}) {
        @content;
      }
    }

    @mixin md {
      @media (min-width: #{$screen-md}) {
        @content;
      }
    }

    @mixin lg {
      @media (min-width: #{$screen-lg}) {
        @content;
      }
    }

    @mixin xl {
      @media (min-width: #{$screen-xl}) {
        @content;
      }
    }
  `,
};

const nextConfig: NextConfig = {
  /* config options here */
  sassOptions: {
    ...sassOptions,
  },
};

export default nextConfig;
