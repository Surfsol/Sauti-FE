import { createMuiTheme, responsiveFontSizes } from "@material-ui/core";

import palette from "./palette";

const theme = responsiveFontSizes(
  createMuiTheme({
    palette,
    typography: {
      fontFamily: "Lato",
      h1: {
        color: palette.text.primary,
        fontWeight: 700,
        fontSize: "4.79856 rem",
        lineHeight: 1.167
      },
      h2: {
        color: palette.text.primary,
        fontWeight: 900,
        fontSize: "96px",
        lineHeight: 1.5
      },
      h3: {
        color: palette.text.primary,
        fontWeight: 900,
        fontSize: "76.77696px",
        lineHeight: 1.167
      },
      h4: {
        color: palette.text.primary,
        fontSize: "51.82208px",
        fontWeight: "500",
        lineHeight: "1.235"
      },
      h5: {
        color: palette.text.primary,
        fontWeight: 400,
        fontSize: "38.38208px",
        lineHeight: 1.334
      },
      h6: {
        color: palette.text.primary,
        fontSize: "2rem",
        fontWeight: "500",
        lineHeight: "1.6"
      },
      subtitle1: {
        color: palette.text.primary,
        fontSize: "16px",
        lineHeight: 1.4
      },
      subtitle2: {
        color: palette.text.secondary,
        fontWeight: 400,
        fontSize: "16px",
        lineHeight: 1.4
      },
      body1: {
        color: palette.text.primary,
        fontSize: "16px",
        lineHeight: 1.5
      },
      body2: {
        color: palette.text.secondary,
        fontSize: "14px",
        lineHeight: 1.3
      },
      button: {
        color: palette.text.primary,
        fontSize: "24px",
        fontWeight: 500,
        lineHeight: 1.75
      },
      caption: {
        color: palette.text.secondary,
        fontSize: "12px",
        lineHeight: 1.35
      },
      overline: {
        fontSize: "19px",
        textTransform: "uppercase",
        fontWeight: "400"
      }
    },
    zIndex: {
      appBar: 1200,
      drawer: 1100
    },
    overrides: {
      MuiButton: {
        containedSecondary: {
          color: "white"
        },
        containedSizeLarge: {
          fontSize: "15px"
        },
        outlinedSizeLarge: {
          fontSize: "15px"
        }
      }
    }
  })
);

export default theme;
