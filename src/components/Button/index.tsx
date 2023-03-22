import { Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React from "react";
import { sxStyles } from "./index.styles";

interface IButtonProps {
  width: string;
  height?: string;
  padding?: string;
  fontSize?: string;
  backgroundColor?: string;
  color?: string;
  borderRadius?: string;
  onClick: any;
  title: string;
  startIcon?: any;
}

const PrimaryButton = (props: IButtonProps) => {
  const theme = useTheme();
  const sxStylesprops = {
    width: props.width,
    height: props.height,
    padding: props.padding,
    fontSize: props.fontSize,
    backgroundColor: props.backgroundColor,
    color: props.color,
    borderRadius: props.borderRadius,
  };
  const styles = sxStyles(sxStylesprops);
  return (
    <Button
      variant="contained"
      startIcon={props?.startIcon}
      sx={styles.buttonStyle}
      onClick={props.onClick}
    >
      {props.title}
    </Button>
  );
};

export default PrimaryButton;
