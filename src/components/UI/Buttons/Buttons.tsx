import React from "react";

import { ButtonProps } from "../../../types/UI/Button";
import Styles from "./Buttons.module.css";

const BTN_STYLES = {
  goldenOutlined: Styles.goldenOutlined,
  goldenFilled: Styles.goldenOutlined,
};

const BTN_SIZE = {
  small: Styles.btnSmall,
  medium: Styles.btnMed,
  large: Styles.btnLarge,
};

const Buttons: React.FC<ButtonProps> = ({
  variant,
  color,
  className,
  onClick,
  disabled,
  loading,
  children,
}) => {
  return (
    <button
      className={`${className} ${BTN_STYLES[color]} ${BTN_SIZE[variant]}`}
      onClick={onClick}
      disabled={disabled}
    >
      {loading! ? children : "spinner"}
    </button>
  );
};

export default Buttons;
