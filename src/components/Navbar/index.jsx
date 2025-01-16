import { Box, Typography } from "@mui/material";
import { SearchBar } from "./SearchBar";
import { Notifications } from "./Notifications.jsx";
import { UserProfile } from "./UserProfile.jsx";

export const NavBar = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        px: 2,
        py: 2,
        backgroundColor: "#f9f9fb",
      }}
    >
      <Box
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "flex-start",
        }}
      >
        <Typography
          variant="h6"
          sx={{ fontWeight: "bold", fontFamily: "Montserrat" }}
        >
          Cosmediate
        </Typography>
      </Box>

      <SearchBar />

      <Box
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          gap: 3,
        }}
      >
        <Notifications />
        <UserProfile />
      </Box>
    </Box>
  );
};
