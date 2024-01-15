import { FunctionComponent } from "react";
import styled from "styled-components";

const LogoIcon = styled.img`
  position: relative;
  width: 9.88rem;
  height: 2.25rem;
`;
const Home = styled.div`
  position: relative;
  line-height: 1.5rem;
`;
const Item = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;
const Menu = styled.div`
  width: 41.69rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 2.5rem;
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
const SwichChild = styled.div`
  position: absolute;
  top: 0rem;
  left: 0rem;
  border-radius: 100px;
  background-color: #e8e8ea;
  width: 3rem;
  height: 1.75rem;
`;
const SunnyIcon = styled.img`
  position: relative;
  width: 0.88rem;
  height: 0.88rem;
  overflow: hidden;
  flex-shrink: 0;
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
const Swich = styled.div`
  position: relative;
  width: 3rem;
  height: 1.75rem;
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
const MenuParent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 1.31rem;
`;
const LogoParent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 7.38rem;
`;
const ONavbar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 2rem 21.88rem;
`;
const PageTitle = styled.div`
  position: relative;
  line-height: 2.25rem;
  font-weight: 600;
`;
const Home1 = styled.div`
  position: relative;
  line-height: 1.5rem;
  color: #3b3c4a;
`;
const Divider = styled.div`
  position: relative;
  border-right: 1px solid #e8e8ea;
  box-sizing: border-box;
  width: 0.06rem;
  height: 1.06rem;
`;
const LinkOne = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 0.75rem;
`;
const LinkTwo = styled.div`
  display: none;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 0.75rem;
`;
const ABreadcrumb = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 0.75rem;
  font-size: 1rem;
  color: #696a75;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5rem;
`;
const OPageInfo = styled.div`
  background-color: #fff;
  width: 76rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem 0rem;
  box-sizing: border-box;
  text-align: center;
  font-size: 1.88rem;
  color: #181a2a;
`;
const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 1.5rem;
  font-size: 1rem;
`;
const Text1 = styled.div`
  position: relative;
  line-height: 1.25rem;
  font-weight: 500;
`;
const ABadge = styled.div`
  border-radius: 6px;
  background-color: #4b6bfb;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0.25rem 0.63rem;
`;
const Title = styled.div`
  position: relative;
  font-size: 2.25rem;
  line-height: 2.5rem;
  font-weight: 600;
  display: inline-block;
  width: 45rem;
`;
const Heading = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1rem;
`;
const ImageIcon = styled.img`
  position: relative;
  border-radius: 28px;
  width: 2.25rem;
  height: 2.25rem;
  object-fit: cover;
`;
const Author = styled.div`
  position: relative;
  line-height: 1.5rem;
  font-weight: 500;
`;
const ShortInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 1.25rem;
  font-size: 1rem;
`;
const Content1 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1.5rem;
`;
const MPostCardOverlay = styled.div`
  border-radius: 12px;
  width: 76rem;
  height: 28.13rem;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding: 2.5rem;
  box-sizing: border-box;
  background-image: url("/mpostcardoverlay@3x.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  color: #fff;
`;
const MPostCardGridChild = styled.img`
  position: relative;
  border-radius: 6px;
  width: 22.5rem;
  height: 15rem;
  object-fit: cover;
`;
const ABadge1 = styled.div`
  border-radius: 6px;
  background-color: rgba(75, 107, 251, 0.05);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0.25rem 0.63rem;
`;
const Title1 = styled.div`
  align-self: stretch;
  position: relative;
  font-size: 1.5rem;
  line-height: 1.75rem;
  font-weight: 600;
  color: #181a2a;
`;
const ShortInfo1 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 1.25rem;
  font-size: 1rem;
  color: #97989f;
`;
const Content2 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0.5rem;
  gap: 1.25rem;
`;
const MPostCardGrid = styled.div`
  border-radius: 12px;
  background-color: #fff;
  border: 1px solid #e8e8ea;
  box-sizing: border-box;
  width: 24.5rem;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  gap: 1rem;
`;
const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1.25rem;
`;
const Content3 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1.25rem;
`;
const AddIcon = styled.img`
  position: relative;
  width: 1.25rem;
  height: 1.25rem;
  overflow: hidden;
  flex-shrink: 0;
  display: none;
`;
const AButton = styled.div`
  border-radius: 6px;
  border: 1px solid rgba(105, 106, 117, 0.3);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.25rem;
  gap: 0.75rem;
  font-size: 1rem;
  color: #696a75;
`;
const OPostLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 2rem;
`;
const Advertisement = styled.div`
  position: relative;
  line-height: 1.25rem;
`;
const YouCanPlace = styled.div`
  position: relative;
  font-size: 1.25rem;
  line-height: 1.5rem;
  font-weight: 600;
`;
const X = styled.div`
  position: relative;
  font-size: 1.13rem;
  line-height: 1.63rem;
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;
const OAdsSpace = styled.div`
  border-radius: 12px;
  background-color: #e8e8ea;
  width: 46.88rem;
  height: 6.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #696a75;
`;
const About = styled.div`
  position: relative;
  line-height: 1.75rem;
  font-weight: 600;
`;
const Desciption = styled.div`
  position: relative;
  font-size: 1rem;
  line-height: 1.5rem;
  color: #696a75;
  display: inline-block;
  width: 17.5rem;
`;
const About1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.75rem;
`;
const Email = styled.span`
  font-weight: 600;
`;
const Infojstemplatenet = styled.span`
  color: #3b3c4a;
`;
const Contact = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.25rem;
  font-size: 1rem;
`;
const Info1 = styled.div`
  width: 18.06rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1.5rem;
`;
const LinkList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.5rem;
  font-size: 1rem;
  color: #3b3c4a;
`;
const QuickLink = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1.5rem;
`;
const Link = styled.div`
  width: 30.94rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  gap: 5rem;
`;
const WeeklyNewsletter = styled.div`
  position: relative;
  line-height: 1.5rem;
  font-weight: 600;
`;
const GetBlogArticles = styled.div`
  position: relative;
  font-size: 1rem;
  line-height: 1.5rem;
  color: #696a75;
`;
const Label = styled.div`
  position: relative;
  line-height: 1.25rem;
  font-weight: 500;
  display: none;
`;
const Placeholder1 = styled.div`
  flex: 1;
  position: relative;
  line-height: 1.5rem;
`;
const MailIcon = styled.img`
  position: relative;
  width: 1.25rem;
  height: 1.25rem;
  overflow: hidden;
  flex-shrink: 0;
`;
const Input = styled.div`
  align-self: stretch;
  border-radius: 6px;
  background-color: #fff;
  border: 1px solid #dcdddf;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 0.75rem 1rem;
  gap: 0.63rem;
  font-size: 1rem;
  color: #97989f;
`;
const Caption = styled.div`
  align-self: stretch;
  position: relative;
  line-height: 1.25rem;
  color: #696a75;
  display: none;
`;
const AInput = styled.div`
  width: 20rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.25rem;
`;
const AButton1 = styled.div`
  align-self: stretch;
  border-radius: 6px;
  background-color: #4b6bfb;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.25rem;
  gap: 0.75rem;
  font-size: 1rem;
  color: #fff;
`;
const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.5rem;
  text-align: left;
  font-size: 0.88rem;
  color: #3b3c4a;
`;
const MNewsletter = styled.div`
  border-radius: 12px;
  background-color: #fff;
  width: 24.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 2rem;
  box-sizing: border-box;
  gap: 1.88rem;
  text-align: center;
  font-size: 1.25rem;
  font-family: "Work Sans";
`;
const LogoIcon1 = styled.img`
  position: relative;
  width: 3rem;
  height: 3rem;
`;
const Meta = styled.span``;
const Blog = styled.span`
  font-weight: 800;
`;
const Metablog = styled.div`
  position: relative;
  line-height: 1.75rem;
`;
const JsTemplate = styled.span`
  color: #141624;
`;
const JsTemplate2023Container = styled.div`
  position: relative;
  font-size: 1rem;
  line-height: 1.5rem;
  color: #3b3c4a;
`;
const Text2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.13rem;
`;
const CopyrightInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 0.63rem;
`;
const Divider1 = styled.div`
  position: relative;
  border-right: 1px solid #e8e8ea;
  box-sizing: border-box;
  width: 0.06rem;
  height: 1.56rem;
`;
const Link1 = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  gap: 1rem;
  font-size: 1rem;
  color: #3b3c4a;
`;
const Copyright = styled.div`
  border-top: 1px solid #dcdddf;
  box-sizing: border-box;
  width: 76rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 2rem 0rem;
  gap: 4rem;
  font-size: 1.25rem;
  color: #141624;
`;
const OFooter = styled.div`
  background-color: #f6f6f7;
  border-top: 1px solid #e8e8ea;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 4rem 22rem 0rem;
  gap: 4rem;
  font-size: 1.13rem;
  color: #181a2a;
  font-family: "Plus Jakarta Sans";
`;
const Content4 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 5rem;
  color: #4b6bfb;
`;
const Content5 = styled.div`
  position: absolute;
  top: 0rem;
  left: 0rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 3rem;
`;
const BlogListingRoot = styled.div`
  position: relative;
  background-color: #fff;
  width: 100%;
  height: 194.63rem;
  overflow: hidden;
  text-align: left;
  font-size: 0.88rem;
  color: #3b3c4a;
  font-family: "Work Sans";
`;

const BlogListing: FunctionComponent = () => {
  return (
    <BlogListingRoot>
      <Content5>
        <Header>
          <ONavbar>
            <LogoParent>
              <LogoIcon alt="" src="/logo.svg" />
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
                    <SearchOutlineIcon alt="" src="/searchoutline.svg" />
                  </AtomsInput>
                  <Swich>
                    <SwichChild />
                    <SunnyWrapper>
                      <SunnyIcon alt="" src="/sunny.svg" />
                    </SunnyWrapper>
                  </Swich>
                </AtomsInputParent>
              </MenuParent>
            </LogoParent>
          </ONavbar>
          <OPageInfo>
            <Content>
              <PageTitle>Page TItle</PageTitle>
              <ABreadcrumb>
                <Home1>Home</Home1>
                <LinkOne>
                  <Divider />
                  <Home>Link One</Home>
                </LinkOne>
                <LinkTwo>
                  <Divider />
                  <Home>Link Two</Home>
                </LinkTwo>
                <LinkTwo>
                  <Divider />
                  <Home>Link Three</Home>
                </LinkTwo>
              </ABreadcrumb>
            </Content>
          </OPageInfo>
        </Header>
        <MPostCardOverlay>
          <Content1>
            <Heading>
              <ABadge>
                <Text1>Technology</Text1>
              </ABadge>
              <Title>
                The Impact of Technology on the Workplace: How Technology is
                Changing
              </Title>
            </Heading>
            <ShortInfo>
              <LinkOne>
                <ImageIcon alt="" src="/image@2x.png" />
                <Author>Tracey Wilson</Author>
              </LinkOne>
              <Home>August 20, 2022</Home>
            </ShortInfo>
          </Content1>
        </MPostCardOverlay>
        <Content4>
          <OPostLayout>
            <Content3>
              <Row>
                <MPostCardGrid>
                  <MPostCardGridChild alt="" src="/rectangle-38@2x.png" />
                  <Content2>
                    <Heading>
                      <ABadge1>
                        <Text1>Technology</Text1>
                      </ABadge1>
                      <Title1>
                        The Impact of Technology on the Workplace: How
                        Technology is Changing
                      </Title1>
                    </Heading>
                    <ShortInfo1>
                      <LinkOne>
                        <ImageIcon alt="" src="/image@2x.png" />
                        <Author>Tracey Wilson</Author>
                      </LinkOne>
                      <Home>August 20, 2022</Home>
                    </ShortInfo1>
                  </Content2>
                </MPostCardGrid>
                <MPostCardGrid>
                  <MPostCardGridChild alt="" src="/rectangle-38@2x.png" />
                  <Content2>
                    <Heading>
                      <ABadge1>
                        <Text1>Technology</Text1>
                      </ABadge1>
                      <Title1>
                        The Impact of Technology on the Workplace: How
                        Technology is Changing
                      </Title1>
                    </Heading>
                    <ShortInfo1>
                      <LinkOne>
                        <ImageIcon alt="" src="/image@2x.png" />
                        <Author>Jason Francisco</Author>
                      </LinkOne>
                      <Home>August 20, 2022</Home>
                    </ShortInfo1>
                  </Content2>
                </MPostCardGrid>
                <MPostCardGrid>
                  <MPostCardGridChild alt="" src="/rectangle-38@2x.png" />
                  <Content2>
                    <Heading>
                      <ABadge1>
                        <Text1>Technology</Text1>
                      </ABadge1>
                      <Title1>
                        The Impact of Technology on the Workplace: How
                        Technology is Changing
                      </Title1>
                    </Heading>
                    <ShortInfo1>
                      <LinkOne>
                        <ImageIcon alt="" src="/image@2x.png" />
                        <Author>Elizabeth Slavin</Author>
                      </LinkOne>
                      <Home>August 20, 2022</Home>
                    </ShortInfo1>
                  </Content2>
                </MPostCardGrid>
              </Row>
              <Row>
                <MPostCardGrid>
                  <MPostCardGridChild alt="" src="/rectangle-38@2x.png" />
                  <Content2>
                    <Heading>
                      <ABadge1>
                        <Text1>Technology</Text1>
                      </ABadge1>
                      <Title1>
                        The Impact of Technology on the Workplace: How
                        Technology is Changing
                      </Title1>
                    </Heading>
                    <ShortInfo1>
                      <LinkOne>
                        <ImageIcon alt="" src="/image@2x.png" />
                        <Author>Ernie Smith</Author>
                      </LinkOne>
                      <Home>August 20, 2022</Home>
                    </ShortInfo1>
                  </Content2>
                </MPostCardGrid>
                <MPostCardGrid>
                  <MPostCardGridChild alt="" src="/rectangle-38@2x.png" />
                  <Content2>
                    <Heading>
                      <ABadge1>
                        <Text1>Technology</Text1>
                      </ABadge1>
                      <Title1>
                        The Impact of Technology on the Workplace: How
                        Technology is Changing
                      </Title1>
                    </Heading>
                    <ShortInfo1>
                      <LinkOne>
                        <ImageIcon alt="" src="/image@2x.png" />
                        <Author>Eric Smith</Author>
                      </LinkOne>
                      <Home>August 20, 2022</Home>
                    </ShortInfo1>
                  </Content2>
                </MPostCardGrid>
                <MPostCardGrid>
                  <MPostCardGridChild alt="" src="/rectangle-38@2x.png" />
                  <Content2>
                    <Heading>
                      <ABadge1>
                        <Text1>Technology</Text1>
                      </ABadge1>
                      <Title1>
                        The Impact of Technology on the Workplace: How
                        Technology is Changing
                      </Title1>
                    </Heading>
                    <ShortInfo1>
                      <LinkOne>
                        <ImageIcon alt="" src="/image@2x.png" />
                        <Author>Tracey Wilson</Author>
                      </LinkOne>
                      <Home>August 20, 2022</Home>
                    </ShortInfo1>
                  </Content2>
                </MPostCardGrid>
              </Row>
              <Row>
                <MPostCardGrid>
                  <MPostCardGridChild alt="" src="/rectangle-38@2x.png" />
                  <Content2>
                    <Heading>
                      <ABadge1>
                        <Text1>Technology</Text1>
                      </ABadge1>
                      <Title1>
                        The Impact of Technology on the Workplace: How
                        Technology is Changing
                      </Title1>
                    </Heading>
                    <ShortInfo1>
                      <LinkOne>
                        <ImageIcon alt="" src="/image@2x.png" />
                        <Author>Jason Francisco</Author>
                      </LinkOne>
                      <Home>August 20, 2022</Home>
                    </ShortInfo1>
                  </Content2>
                </MPostCardGrid>
                <MPostCardGrid>
                  <MPostCardGridChild alt="" src="/rectangle-38@2x.png" />
                  <Content2>
                    <Heading>
                      <ABadge1>
                        <Text1>Technology</Text1>
                      </ABadge1>
                      <Title1>
                        The Impact of Technology on the Workplace: How
                        Technology is Changing
                      </Title1>
                    </Heading>
                    <ShortInfo1>
                      <LinkOne>
                        <ImageIcon alt="" src="/image@2x.png" />
                        <Author>Elizabeth Slavin</Author>
                      </LinkOne>
                      <Home>August 20, 2022</Home>
                    </ShortInfo1>
                  </Content2>
                </MPostCardGrid>
                <MPostCardGrid>
                  <MPostCardGridChild alt="" src="/rectangle-38@2x.png" />
                  <Content2>
                    <Heading>
                      <ABadge1>
                        <Text1>Technology</Text1>
                      </ABadge1>
                      <Title1>
                        The Impact of Technology on the Workplace: How
                        Technology is Changing
                      </Title1>
                    </Heading>
                    <ShortInfo1>
                      <LinkOne>
                        <ImageIcon alt="" src="/image@2x.png" />
                        <Author>Ernie Smith</Author>
                      </LinkOne>
                      <Home>August 20, 2022</Home>
                    </ShortInfo1>
                  </Content2>
                </MPostCardGrid>
              </Row>
            </Content3>
            <AButton>
              <AddIcon alt="" src="/add.svg" />
              <Author>Load More</Author>
              <AddIcon alt="" src="/add.svg" />
            </AButton>
          </OPostLayout>
          <OAdsSpace>
            <Info>
              <Advertisement>Advertisement</Advertisement>
              <YouCanPlace>You can place ads</YouCanPlace>
              <X>750x100</X>
            </Info>
          </OAdsSpace>
          <OFooter>
            <Row>
              <Info1>
                <About1>
                  <About>About</About>
                  <Desciption>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam
                  </Desciption>
                </About1>
                <Contact>
                  <Home>
                    <Email>{`Email : `}</Email>
                    <Infojstemplatenet>info@jstemplate.net</Infojstemplatenet>
                  </Home>
                  <Home>
                    <Email>{`Phone : `}</Email>
                    <Infojstemplatenet>880 123 456 789</Infojstemplatenet>
                  </Home>
                </Contact>
              </Info1>
              <Link>
                <QuickLink>
                  <About>Quick Link</About>
                  <LinkList>
                    <Home>Home</Home>
                    <Home>About</Home>
                    <Home>Blog</Home>
                    <Home>Archived</Home>
                    <Home>Author</Home>
                    <Home>Contact</Home>
                  </LinkList>
                </QuickLink>
                <QuickLink>
                  <About>Category</About>
                  <LinkList>
                    <Home>Lifestyle</Home>
                    <Home>Technology</Home>
                    <Home>Travel</Home>
                    <Home>Business</Home>
                    <Home>Economy</Home>
                    <Home>Sports</Home>
                  </LinkList>
                </QuickLink>
              </Link>
              <MNewsletter>
                <Content>
                  <WeeklyNewsletter>Weekly Newsletter</WeeklyNewsletter>
                  <GetBlogArticles>
                    Get blog articles and offers via email
                  </GetBlogArticles>
                </Content>
                <Form>
                  <AInput>
                    <Label>Label</Label>
                    <Input>
                      <AddIcon alt="" src="/mail.svg" />
                      <Placeholder1>Your Email</Placeholder1>
                      <MailIcon alt="" src="/mail.svg" />
                    </Input>
                    <Caption>This is a caption text for hint.</Caption>
                  </AInput>
                  <AButton1>
                    <AddIcon alt="" src="/add.svg" />
                    <Author>Subscribe</Author>
                    <AddIcon alt="" src="/add.svg" />
                  </AButton1>
                </Form>
              </MNewsletter>
            </Row>
            <Copyright>
              <CopyrightInfo>
                <LogoIcon1 alt="" src="/logo.svg" />
                <Text2>
                  <Metablog>
                    <Meta>Meta</Meta>
                    <Blog>Blog</Blog>
                  </Metablog>
                  <JsTemplate2023Container>
                    <Meta>{`© `}</Meta>
                    <JsTemplate>JS Template</JsTemplate>
                    <Meta> 2023. All Rights Reserved.</Meta>
                  </JsTemplate2023Container>
                </Text2>
              </CopyrightInfo>
              <Link1>
                <Home>Terms of Use</Home>
                <Divider1 />
                <Home>Privacy Policy</Home>
                <Divider1 />
                <Home>Cookie Policy</Home>
              </Link1>
            </Copyright>
          </OFooter>
        </Content4>
      </Content5>
    </BlogListingRoot>
  );
};

export default BlogListing;
