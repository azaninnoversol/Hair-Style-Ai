import React, { memo } from "react";

function Button({
  children,
  className = "",
  onClick = () => {},
  disabled = false,
  ...rest
}) {
  return (
    <button
      className={`${className} hover:bg-[#E2E2E2] bg-[#f8f8f8] transition btn`}
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
}

export default memo(Button);
