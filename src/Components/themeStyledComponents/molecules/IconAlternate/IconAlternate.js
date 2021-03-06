import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { Avatar, colors } from "@material-ui/core";
/**
 * Component to display the icon
 *
 * @param {Object} props
 */
const Icon = props => {
  const { fontIconClass, size, fontIconColor, className, ...rest } = props;

  const classes = useStyles();

  return (
    <i
      className={clsx(
        "icon",
        classes.root,
        fontIconClass,
        classes[size],
        className
      )}
      style={{ color: fontIconColor }}
      {...rest}
    />
  );
};

Icon.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * The classes of the font icon
   */
  fontIconClass: PropTypes.string.isRequired,
  /**
   * Source set for the responsive images
   */
  size: PropTypes.oneOf(["extraSmall", "small", "medium", "large"]),
  /**
   * Color of the icon
   */
  fontIconColor: PropTypes.string
};

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex !important"
  },
  extraSmall: {
    width: 20,
    height: 20
  },
  small: {
    width: 50,
    height: 50
  },
  medium: {
    width: "70px !important",
    height: "70px !important",
    fontSize: "25px"
  },
  large: {
    width: 90,
    height: 90
  },
  circle: {
    borderRadius: "100%"
  },
  square: {
    borderRadius: theme.spacing(2)
  }
}));

/**
 * Component to display the alternate icon
 *
 * @param {Object} props
 */
const IconAlternate = props => {
  const {
    iconProps,
    fontIconClass,
    size,
    color,
    shape,
    className,
    ...rest
  } = props;

  const classes = useStyles();
  const useBackgroundStyles = makeStyles(() => ({
    background: {
      background: color[50]
    }
  }));
  const backgroundClasses = useBackgroundStyles();

  return (
    <Avatar
      className={clsx(
        "icon-alternate",
        classes.root,
        classes[size],
        classes[shape],
        backgroundClasses.background,
        className
      )}
      {...rest}
    >
      <Icon
        fontIconClass={fontIconClass}
        fontIconColor={color[500]}
        className="icon-alternate__icon"
        {...iconProps}
      />
    </Avatar>
  );
};

IconAlternate.defaultProps = {
  size: "medium",
  shape: "square",
  iconProps: {}
};

IconAlternate.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * The classes of the font icon
   */
  fontIconClass: PropTypes.string.isRequired,
  /**
   * Sizes of the icon
   */
  size: PropTypes.oneOf(["extraSmall", "small", "medium", "large"]),
  /**
   * Color of the icon
   */
  color: PropTypes.oneOf([
    colors.red,
    colors.pink,
    colors.purple,
    colors.deepPurple,
    colors.indigo,
    colors.blue,
    colors.lightBlue,
    colors.cyan,
    colors.teal,
    colors.green,
    colors.lightGreen,
    colors.lime,
    colors.yellow,
    colors.amber,
    colors.orange,
    colors.deepOrange,
    colors.brown,
    colors.grey,
    colors.blueGrey
  ]),
  /**
   * The shape of the alternate icon
   */
  shape: PropTypes.oneOf(["circle", "square"]),
  /**
   * Additional properties to pass to the Icon component
   */
  iconProps: PropTypes.object
};

export default IconAlternate;
