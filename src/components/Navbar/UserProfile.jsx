import { Box, Typography, Avatar } from "@mui/material";
import KeyboardArrowDownSharpIcon from "@mui/icons-material/KeyboardArrowDownSharp";

export const UserProfile = () => {
  return (
    <Box display="flex" alignItems="center" gap={1}>
      <Avatar
        src="https://via.placeholder.com/40"
        alt="User Avatar"
        sx={{ width: 40, height: 40 }}
      />

      <Box>
        <Typography
          variant="body1"
          fontWeight={500}
          sx={{ fontFamily: "Montserrat" }}
        >
          Tim Bouwman
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          sx={{ fontFamily: "Montserrat" }}
        >
          Alestec Amsterdam
        </Typography>
      </Box>
      <KeyboardArrowDownSharpIcon />
    </Box>
  );
};
