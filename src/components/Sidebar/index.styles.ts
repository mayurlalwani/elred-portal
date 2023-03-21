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
    },
    logoSection: {
      display: "flex",
      alignItems: "center",
      height: "10%",
      padding: "25px",
    },
    logo: {
      borderRadius: "50px",
      height: "50px",
      width: "50px",
      marginTop: "20px",
    },
    helpSection: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    helpContents: {
      padding: "25px",
      width: "80%",
      alignItems: "center",
      justifyContent: "space-between",
      display: "flex",
      flexDirection: "column",
    },
    active: {
      backgroundColor: "red",
    },
  };
};
