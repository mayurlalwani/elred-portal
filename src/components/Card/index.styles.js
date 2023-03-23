export const sxStyles = () => {
  return {
    cardMainContainer: {
      border: "solid 1px rgba(0, 0, 0, 0.12)",
      display: "flex",
      flexDirection: "column",
      borderRadius: "10px",
      padding: "20px",
      height: "100%",
    },
    cardContents: {
      display: "flex",
      justifyContent: "space-between",
    },
    addMoreButton: {
      mt: 3,
      height: 50,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#FFF2F2",
      cursor: "pointer",
    },
    saveButton: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    editEmail: {
      maxWidth: "100%",
      mt: 10,
    },
  };
};
