export const sxStyles = (props) => {
  return {
    buttonStyle: {
      backgroundColor: props.backgroundColor ? props.backgroundColor : "black",
      color: props.color ? props.color : "#fff",
      width: props.width && props.width,
      height: (props.height && props.height) || 40,
      borderRadius: props.borderRadius ? props.borderRadius : "5px",
      fontSize: 14,
      display: "inline-flex",
      transition: "all 0.25s ease",
      textTransform: "none",
      fontWeight: 600,
      "&:hover": {
        backgroundColor: "#ede7fa",
        cursor: "pointer",
        textDecoration: "none",
        fontWeight: 700,
        transform: "translateY(-0.1em)",
        color: "#2d1956",
      },
    },
  };
};
