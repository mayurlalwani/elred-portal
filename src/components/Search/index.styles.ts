export const sxStyles = (props) => {
  return {
    placeHolderStyle: {
      "& input::placeholder": {
        fontSize: props.placeHolderFontSize,
        padding: 0,
      },
    },
  };
};
