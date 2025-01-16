import { Button } from "@mui/material";
import { styled } from "@mui/system";

const StyledButton = styled(Button)(({ variantType }) => ({
  borderRadius: "12px",
  padding: "10px 20px",
  fontWeight: 600,
  fontSize: "14px",
  lineHeight: "16px",
  boxShadow: "none",
  textTransform: "none",
  fontFamily: "Montserrat",
  transition: "all 0.3s ease",
  ...(variantType === "outlined" && {
    border: "2px solid #E4E4F8",
    color: "#6968EC",
    backgroundColor: "transparent",
    "&:hover": {
      backgroundColor: "#ffffff",
      borderColor: "#E4E4F8",
    },
  }),
  ...(variantType === "contained" && {
    backgroundColor: "#6968EC",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#6968EC",
    },
  }),
}));

// eslint-disable-next-line react/prop-types
const CustomButton = ({ variantType, children, ...props }) => {
  return (
    <StyledButton variantType={variantType} {...props}>
      {children}
    </StyledButton>
  );
};

export default CustomButton;
