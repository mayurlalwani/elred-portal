export const sxStyles = (props: any) => {
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
    // secondaryButton: {
    //   background: (props.backgroundColor && props.backgroundColor) || "#EDE7FA",
    //   color: (props.color && props.color) || "#1E0191",
    //   width: props.width && props.width,
    //   height: (props.height && props.height) || 32,
    //   borderRadius: (props.borderRadius && props.borderRadius) || 0,
    //   fontWeight: props.fontWeight,
    //   fontSize: (props.fontSize && props.fontSize) || 14,
    //   display: "inline-flex",
    //   padding: props.padding && props.padding,
    //   transition: "all 0.25s ease",
    //   ":hover": {
    //     backgroundColor: "#4E12CE",
    //     color: "#FFFF",
    //     cursor: "pointer",
    //     textDecoration: "none",
    //     fontWeight: 700,
    //     transform: "translateY(-0.1em)",
    //   },
    //   width: props.width && props.width,
    //   height: (props.height && props.height) || 32,
    // },
  };
};
