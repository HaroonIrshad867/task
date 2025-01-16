import  { useState } from "react";
import styled from "styled-components";
import Sidebar from "../components/SideBar";
import { NavBar } from "../components/Navbar";
import Treatments from "../components/Setting/Treatments";
import SettingsMenu from "../components/Setting/SettingsMenu";

const SettingsPage = () => {
  const [currentMenu, setCurrentMenu] = useState("Treatments");

  return (
    <PageContainer>
      {/* Main Content */}
      <MainContent>
        {/* Navbar */}
        <NavBar />

        {/* Content Layout */}
        <ContentLayout>
          {/* Sidebar */}
          <Sidebar />

          <MenuContainer>
            <SettingsMenu
              currentMenu={currentMenu}
              setCurrentMenu={setCurrentMenu}
            />
          </MenuContainer>

          <ContentBox>
            {currentMenu === "General" && (
              <Message>No available</Message>
            )}
            {currentMenu === "Password" && (
              <Message>No available</Message>
            )}
            {currentMenu === "Price" && (
              <Message>No available</Message>
            )}
            {currentMenu === "Treatments" && <Treatments />}
          </ContentBox>
        </ContentLayout>
      </MainContent>
    </PageContainer>
  );
};

export default SettingsPage;

// Styled Components
const PageContainer = styled.div`
  display: flex;
  height: 100vh;
`;

const MainContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const ContentLayout = styled.div`
  display: flex;
  flex: 1;
`;

const MenuContainer = styled.div`
  width: 20%;
  padding: 16px;
  padding-top: 4rem;
`;

const ContentBox = styled.div`
  flex: 1;
  padding: 3rem 1rem;
`;

const Message = styled.p`
  text-align: center;
  color: #757575;
  font-style: italic;
  padding: 8px;
`;
