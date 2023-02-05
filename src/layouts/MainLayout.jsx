import TopBar from "./TopBar";
import styled from "styled-components";

const MainLayout = ({children}) => {
  return (
    <>
        <TopBar />
        <Wrapper>
            {children}
        </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  padding: 20px 40px;
`

export default MainLayout;