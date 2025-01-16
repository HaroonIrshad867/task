import { Box, List, ListItem, Typography, Badge } from "@mui/material";
import dashboard from "../../assets/dashboard.svg";
import message from "../../assets/message.svg";
import calender from "../../assets/calendar.svg";
import userReview from "../../assets/comment-user.svg";
import Settings from "../../assets/settings.svg";
import logout from "../../assets/sign-out.svg";
import menuItems from "../../static-data/sideMenu.json";

const Sidebar = () => {
  const renderIcon = (iconName) => {
    switch (iconName) {
      case "dashboard":
        return (
          <img src={dashboard} alt="Dashboard Icon" width="24" height="24" />
        );
      case "message":
        return <img src={message} alt="Message Icon" width="20" height="20" />;
      case "calender":
        return (
          <img src={calender} alt="Calendar Icon" width="24" height="24" />
        );
      case "userReview":
        return (
          <img src={userReview} alt="User Review Icon" width="24" height="24" />
        );
      case "Settings":
        return (
          <img src={Settings} alt="Settings Icon" width="24" height="24" />
        );
      case "logout":
        return <img src={logout} alt="Logout Icon" width="24" height="24" />;
      default:
        return null;
    }
  };

  return (
    <Box
      sx={{
        width: "100px",
        backgroundColor: "#f9f9fb",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      {/* Top Menu Items */}
      <List>
        {menuItems.menuItems.map((item, index) => (
          <ListItem
            button
            key={index}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: "96px",
              height: "88px",
            }}
          >
            <Badge
              badgeContent={item.notification ? item.count : 0}
              color="error"
              sx={{
                "& .MuiBadge-badge": {
                  fontSize: "10px",
                  height: "18px",
                  minWidth: "18px",
                  borderRadius: "9px",
                  top: "-2px",
                  right: "0px",
                  position: "absolute",
                },
              }}
            >
              {renderIcon(item.icon)}
            </Badge>
            <Typography
              sx={{
                textAlign: "center",
                fontFamily: "Montserrat",
                fontWeight: 500,
                fontSize: "9px",
                lineHeight: "9px",
                letterSpacing: "2%",
                color: "#8F95A9",
                marginTop: "8px",
              }}
            >
              {item.label}
            </Typography>
          </ListItem>
        ))}
      </List>

      {/* Bottom Menu Item */}
      <List>
        <ListItem
          button
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {renderIcon("logout")}
          <Typography
            sx={{
              textAlign: "center",
              fontFamily: "Montserrat",
              fontWeight: 500,
              fontSize: "9px",
              lineHeight: "9px",
              letterSpacing: "2%",
              color: "#8F95A9",
              marginTop: "8px",
            }}
          >
            Logout
          </Typography>
        </ListItem>
      </List>
    </Box>
  );
};

export default Sidebar;
