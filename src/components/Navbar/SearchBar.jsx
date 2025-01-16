import { Box, TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export const SearchBar = () => {
  return (
    <Box
      sx={{
        flex: 2,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <TextField
        variant="outlined"
        placeholder="Search"
        fullWidth
        size="small"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon style={{ color: "#9E9E9E" }} />
            </InputAdornment>
          ),
        }}
        sx={{
          maxWidth: "400px",
          "& .MuiOutlinedInput-root": {
            borderRadius: "12px",
            backgroundColor: "#F9F9F9",
            borderColor: "#E0E0E0",
            boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.1)",
            "&:hover fieldset": {
              borderColor: "#BDBDBD",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#9E9E9E",
            },
          },
        }}
      />
    </Box>
  );
};
