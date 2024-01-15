import { styled } from "styled-components";
import Home from "../Home/Home";
import Logo from "../../../assets/svg/logo.svg";
import SearchOutline from "../../../assets/svg/searchoutline.svg";
import Sunny from "../../../assets/svg/sunny.svg";
const Navigation = () => {
  const ONavbar = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 2rem 21.88rem;
  `;
  const LogoParent = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 7.38rem;
  `;
  const LogoIcon = styled.img`
    position: relative;
    width: 9.88rem;
    height: 2.25rem;
  `;
  const MenuParent = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 1.31rem;
  `;
  const Menu = styled.div`
    width: 41.69rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 2.5rem;
  `;
  const Item = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
  `;

  const AtomsInputParent = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 2.5rem;
    font-size: 0.88rem;
    color: #a1a1aa;
    font-family: Inter;
  `;
  const AtomsInput = styled.div`
    border-radius: 5px;
    background-color: #f4f4f5;
    width: 10.38rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: 0.5rem 0.5rem 0.5rem 1rem;
    box-sizing: border-box;
    gap: 0.75rem;
  `;
  const Placeholder = styled.div`
    flex: 1;
    position: relative;
    line-height: 1.25rem;
  `;
  const SearchOutlineIcon = styled.img`
    position: relative;
    width: 1rem;
    height: 1rem;
    overflow: hidden;
    flex-shrink: 0;
  `;
  const Swich = styled.div`
    position: relative;
    width: 3rem;
    height: 1.75rem;
  `;
  const SwichChild = styled.div`
    position: absolute;
    top: 0rem;
    left: 0rem;
    border-radius: 100px;
    background-color: #e8e8ea;
    width: 3rem;
    height: 1.75rem;
  `;
  const SunnyWrapper = styled.div`
    position: absolute;
    top: 0.13rem;
    left: 0.13rem;
    border-radius: 100px;
    background-color: #fff;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.12);
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0.31rem;
  `;
  const SunnyIcon = styled.img`
    position: relative;
    width: 0.88rem;
    height: 0.88rem;
    overflow: hidden;
    flex-shrink: 0;
  `;

  return (
    <ONavbar>
      <LogoParent>
        <LogoIcon alt="" src={Logo} />
        <MenuParent>
          <Menu>
            <Item>
              <Home>Home</Home>
            </Item>
            <Item>
              <Home>Blog</Home>
            </Item>
            <Item>
              <Home>Single Post</Home>
            </Item>
            <Item>
              <Home>Pages</Home>
            </Item>
            <Item>
              <Home>Contact</Home>
            </Item>
          </Menu>
          <AtomsInputParent>
            <AtomsInput>
              <Placeholder>Search</Placeholder>
              <SearchOutlineIcon alt="" src={SearchOutline} />
            </AtomsInput>
            <Swich>
              <SwichChild />
              <SunnyWrapper>
                <SunnyIcon alt="" src={Sunny} />
              </SunnyWrapper>
            </Swich>
          </AtomsInputParent>
        </MenuParent>
      </LogoParent>
    </ONavbar>
  );
};

export default Navigation;
