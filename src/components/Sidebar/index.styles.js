export const sxStyles = () => {
  return {
    sidebarMainContainer: {
      width: "20%",
      padding: "30px 20px 10px 20px",
    },
    sidebarContents: {
      backgroundColor: "#ffffff",
      height: "100%",
      borderRadius: "15px",
      display: "flex",
      flexDirection: "column",
    },
    logoSection: {
      display: "flex",
      alignItems: "center",
      height: "10%",
      padding: "25px",
    },
    helpContents: {
      width: "80%",
      alignItems: "center",
      justifyContent: "space-between",
      display: "flex",
      flexDirection: "column",
      marginLeft: 2,
      border: "solid 1px rgba(0, 0, 0, 0.12)",
      height: "150px",
      marginBottom: "20px",
    },
    active: {
      backgroundColor: "red",
    },
  };
};
