import { Badge } from "@mui/material";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";

export const Notifications = () => {
  return (
    <Badge
      color="error"
      variant="dot"
      overlap="circular"
      sx={{
        "& .MuiBadge-dot": {
          width: "7px",
          height: "7px",
          borderRadius: "50%",
          top: "7px",
          right: "6px",
          position: "absolute",
        },
      }}
    >
      <NotificationsOutlinedIcon sx={{ color: "#6C63FF", fontSize: "24px" }} />
    </Badge>
  );
};
