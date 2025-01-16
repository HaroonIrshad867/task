import  { useState, useEffect } from "react";
import {
  List,
  ListItem,
  ListItemText,
  IconButton,
  Typography,
  Stack,
  Box,
  InputLabel,
  Select,
  MenuItem,
  FormControl,
} from "@mui/material";
import deleteIcon from "../../assets/x.svg";
import plus from "../../assets/plus.svg";
import CustomButton from "../button";

const Treatments = () => {
  const [categories, setCategories] = useState([
    {
      name: "Injectables",
      subcategories: ["Botox", "Dermal Fillers", "Kybella"],
    },
    {
      name: "Skin Improvement",
      subcategories: [
        "Chemical Peels",
        "Microneedling",
        "Laser Skin Resurfacing",
      ],
    },
    {
      name: "Hair Removal",
      subcategories: ["Laser Hair Removal", "Electrolysis"],
    },
    {
      name: "Plastic Surgery",
      subcategories: ["Facelift", "Rhinoplasty", "Liposuction"],
    },
  ]);
  const [selectedCategory, setSelectedCategory] = useState("Skin Improvement");
  const [newSubcategory, setNewSubcategory] = useState("");

  const handleAddSubcategory = () => {
    if (
      newSubcategory.trim() &&
      !categories
        .find((cat) => cat.name === selectedCategory)
        ?.subcategories.includes(newSubcategory)
    ) {
      setCategories((prev) =>
        prev.map((cat) =>
          cat.name === selectedCategory
            ? { ...cat, subcategories: [...cat.subcategories, newSubcategory] }
            : cat
        )
      );
      setNewSubcategory("");
    } else {
      alert("Subcategory already exists or is invalid!");
    }
  };

  const handleRemoveSubcategory = (index) => {
    setCategories((prev) =>
      prev.map((cat) =>
        cat.name === selectedCategory
          ? {
              ...cat,
              subcategories: cat.subcategories.filter((_, i) => i !== index),
            }
          : cat
      )
    );
  };

  const handleSave = () => {
    localStorage.setItem("categories", JSON.stringify(categories));
    alert("Data saved successfully!");
  };

  useEffect(() => {
    const savedData = localStorage.getItem("categories");
    if (savedData) setCategories(JSON.parse(savedData));
  }, []);

  const selectedCategoryData = categories.find(
    (cat) => cat.name === selectedCategory
  );

  return (
    <Stack>
      <Box sx={{ display: "flex", marginLeft:"40px",}}>
        <Box sx={{ display: "flex", width: "100%", }}>
          {/* Category List */}
          <Stack direction="column" sx={{ width: "40%" }}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                fontSize: "20px",
                color: "#3E4147",
                fontFamily: "Montserrat",
                mt: 7,
              }}
            >
              Treatments
            </Typography>
            <Box
              sx={{
                backgroundColor: "#ffffff",
                
                overflow: "hidden",
               
                mt: 2,
              }}
            >
              {categories.map((cat) => (
                <Box
                  key={cat.name}
                  sx={{
                    padding: "12px 20px",
                    borderRadius: "12px",
                    backgroundColor:
                      selectedCategory === cat.name ? "#F2F5FF" : "#ffffff",
                    cursor: "pointer",
                    transition:
                      "background-color 0.3s ease, transform 0.2s ease",
                    "&:hover": {
                      transform: "scale(1.02)",
                    },
                    "&:active": {
                      transform: "scale(0.98)",
                    },
                  }}
                  onClick={() => setSelectedCategory(cat.name)}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      color:
                        selectedCategory === cat.name
                          ? "#6968ec"
                          : "text.primary",
                      transition: "color 0.3s ease",
                      fontFamily: "Montserrat",
                    }}
                  >
                    {cat.name}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Stack>

          {/* Subcategory List */}
          <Stack
            direction="column"
            spacing={5}
            sx={{
              width: "90%",
              padding: "16px",
              borderRadius: "16px",
              backgroundColor: "#F9FAFF",
              ml: 10,
              mt:10,
            }}
          >
            <Typography
              variant="h6"
              sx={{ fontWeight: 600, fontFamily: "Montserrat" }}
            >
              {`${selectedCategory} (${
                selectedCategoryData?.subcategories.length || 0
              })`}
            </Typography>
            <List
              sx={{
                border: "1px solid #e0e0e0",
                borderRadius: "8px",
                padding: "8px",
                gap: "8px",
                backgroundColor: "#fafafa",
              }}
            >
              {selectedCategoryData?.subcategories.length === 0 ? (
                <Typography
                  variant="body2"
                  sx={{
                    textAlign: "center",
                    color: "#757575",
                    fontStyle: "italic",
                    padding: "8px",
                  }}
                >
                  No available subcategories
                </Typography>
              ) : (
                selectedCategoryData?.subcategories.map((sub, index) => (
                  <ListItem
                    key={index}
                    secondaryAction={
                      <IconButton
                        edge="end"
                        onClick={() => handleRemoveSubcategory(index)}
                      >
                        <img
                          src={deleteIcon}
                          alt="Delete Icon"
                          width="20"
                          height="20"
                        />
                      </IconButton>
                    }
                    sx={{
                      padding: "6px 14px",
                      "&:not(:last-child)": {
                        borderBottom: "1px solid #e0e0e0",
                      },
                    }}
                  >
                    <ListItemText primary={sub} />
                  </ListItem>
                ))
              )}
            </List>

            {/* Add Subcategory */}
            <Stack direction="row" spacing={2}>
              <FormControl fullWidth sx={{ fontFamily: "Montserrat" }}>
                <InputLabel id="subcategory-label">
                  Select Treatment...
                </InputLabel>
                <Select
                  labelId="subcategory-label"
                  value={newSubcategory}
                  onChange={(e) => setNewSubcategory(e.target.value)}
                  displayEmpty
                  sx={{
                    backgroundColor: "#ffffff",
                    borderRadius: "12px",
                  }}
                >
                  {[
                    "Chemical Peels",
                    "Microdermabrasion",
                    "Laser Treatments",
                    "Light Therapies",
                  ]
                    .filter(
                      (option) =>
                        !selectedCategoryData?.subcategories.includes(option)
                    )
                    .map((option) => (
                      <MenuItem key={option} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                </Select>
              </FormControl>
              <Box
                sx={{
                  borderRadius: "12px",
                  border: "1px solid #E4E4F8",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#ffffff",
                  width: "48px",
                  height: "48px",
                  cursor: "pointer",
                }}
                onClick={handleAddSubcategory}
              >
                <img src={plus} alt="Add Icon" width="24" height="24" />
              </Box>
            </Stack>

            {/* Save and Cancel Buttons */}
            <Stack direction="row" spacing={2} sx={{ mt: 2, width: "100%" }}>
              <CustomButton
                sx={{ mt: 2, width: "50%" }}
                variantType="outlined"
                onClick={() =>
                  setCategories(JSON.parse(localStorage.getItem("categories")))
                }
                disable={true}
              >
                Cancel
              </CustomButton>
              <CustomButton
                variantType="contained"
                onClick={handleSave}
                sx={{ mt: 2, width: "50%" }}
              >
                Save
              </CustomButton>
            </Stack>
          </Stack>
        </Box>
      </Box>
    </Stack>
  );
};

export default Treatments;
