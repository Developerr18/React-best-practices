// import PropTypes from "prop-types";
import classnames from "classnames";
import { twMerge } from "tailwind-merge";

export default function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
  ...rest
}) {
  const finalClasses = twMerge(
    classnames(
      rest.className,
      "rest flex items-center gap-2 px-3 py-1.5 m-2 border",
      {
        "border-blue-500 bg-blue-500 text-white": primary,
        "border-gray-900 bg-gray-900 text-white": secondary,
        "border-green-500 bg-green-500 text-white": success,
        "border-yellow-400 bg-yellow-400 text-white": warning,
        "border-red-500 bg-red-500 text-white": danger,
        "rounded-full": rounded,
        "bg-white": outline,
        "text-blue-500": outline && primary,
        "text-gray-900": outline && secondary,
        "text-green-500": outline && success,
        "text-yellow-400": outline && warning,
        "text-red-500": outline && danger,
      }
    )
  );

  return (
    <button {...rest} className={finalClasses}>
      {children}
    </button>
  );
}

/*
const validateVariation = (props, propName, componentName) => {
  const variationProps = [
    "primary",
    "secondary",
    "success",
    "warning",
    "danger",
  ];

  const trueCount = variationProps.reduce((acc, key) => {
    return acc + (props[key] ? 1 : 0);
  }, 0);

  if (trueCount > 1) {
    return new Error(
      `Only one of [primary, secondary, success, warning, danger] can be true in <${componentName}>.`
    );
  }

  return null;
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  primary: validateVariation,
  secondary: validateVariation,
  success: validateVariation,
  warning: validateVariation,
  danger: validateVariation,
  outline: PropTypes.bool,
  rounded: PropTypes.bool,
};
*/
