import { useState } from "react";
import { Grid, InputAdornment, TextField } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import { sxStyles } from "./index.styles";
import SearchIcon from "../../assets/search.svg";

const StyledInput = styled(TextField)(() => ({
  ".MuiInputBase-input": {
    "&::placeholder": {
      color: "black",
      opacity: 1,
      fontWeight: 600,
    },
  },
  ".MuiOutlinedInput-input": {
    height: 30,
    padding: "0 10px",
    fontSize: 12,
    color: "#9e9ea6",
  },
  "& .MuiOutlinedInput-root": {
    borderRadius: 0,
    width: 600,
    backgroundColor: "#eff2f9",
    height: 40,

    "& .Mui-focused fieldset": {
      border: "1px solid #D9D9D9",
    },
  },
}));

interface ISearchProps {
  placeholder: string;
  direction: string;
}

const Search = ({ placeholder, direction = "row" }: ISearchProps) => {
  const [searchInput, setSearchInput] = useState();
  const theme = useTheme();
  const styles = sxStyles({ theme });

  const handleChange = (e: any) => {
    const InputValue = e.target.value;
  };

  return (
    <Grid container direction="row">
      <Grid item xs={direction === "row" ? 4 : 12}>
        <StyledInput
          placeholder={placeholder}
          fullWidth={true}
          InputLabelProps={{
            shrink: false,
          }}
          size="small"
          onChange={handleChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <img src={SearchIcon} />
              </InputAdornment>
            ),
          }}
        />
      </Grid>
    </Grid>
  );
};

export default Search;
