import { Box, Stack, Typography } from "@mui/material";

// eslint-disable-next-line react/prop-types
const SettingsMenu = ({ currentMenu, setCurrentMenu }) => {
  const menuItems = ["General", "Password", "Price", "Treatments"];

  return (
    <Stack spacing={2} sx={{ ml: 4, width: "100%" }}>
      <Typography
        variant="h6"
        sx={{
          fontFamily: "Montserrat",
          fontWeight: 700,
          fontSize: "30px",
          lineHeight: "36px",
        }}
      >
        Settings
      </Typography>

      <Box
        sx={{
          backgroundColor: "#f3f6ff",
          borderRadius: "16px",
          width: "260px",
          padding: "8px",
          display: "flex",
          flexDirection: "column",
          gap: "8px",
        }}
      >
        {menuItems.map((item) => (
          <Box
            key={item}
            sx={{
              backgroundColor: currentMenu === item ? "#ffffff" : "transparent",
              cursor: "pointer",
              borderRadius: "12px",
              padding: "10px 16px",
              marginBottom: "4px",
              transition: "all 0.3s ease",
            }}
            onClick={() => setCurrentMenu(item)}
          >
            <Typography
              variant="body1"
              sx={{
                color: currentMenu === item ? "#6968ec" : "#000000",
                transition: "color 0.3s ease",
                fontFamily: "Montserrat",
              }}
            >
              {item}
            </Typography>
          </Box>
        ))}
      </Box>
    </Stack>
  );
};

export default SettingsMenu;
