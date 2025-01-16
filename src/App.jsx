import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SettingsPage from "./pages/SettingsPage.jsx";
import { Box } from "@mui/material";

function App() {
  return (
    <Box>
      <Router>
        <Routes>
          <Route path="/" element={<SettingsPage />} />
        </Routes>
      </Router>
    </Box>
  );
}

export default App;
