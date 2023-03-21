export const sxStyles = (props: any) => {
  return {
    placeHolderStyle: {
      "& input::placeholder": {
        fontSize: props.placeHolderFontSize,
        padding: 0,
      },
    },
  };
};
