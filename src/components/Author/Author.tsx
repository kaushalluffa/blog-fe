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
const ImageIcon = styled.img`
  position: relative;
  border-radius: 80px;
  width: 4rem;
  height: 4rem;
  object-fit: cover;
`;
const JonathanDoe = styled.div`
  position: relative;
  line-height: 1.75rem;
  font-weight: 500;
`;
const CollaboratorEditor = styled.div`
  position: relative;
  font-size: 0.88rem;
  line-height: 1.25rem;
  color: #696a75;
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;
const AAuthor = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
`;
const Para = styled.div`
  align-self: stretch;
  position: relative;
  font-size: 1.13rem;
  line-height: 1.63rem;
  color: #3b3c4a;
  text-align: center;
`;
const AButton = styled.div`
  border-radius: 6px;
  background-color: #696a75;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
`;
const SocialMedia = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.5rem;
`;
const Content = styled.div`
  width: 41.75rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 1.5rem;
`;
const OAuthorInfo = styled.div`
  border-radius: 12px;
  background-color: #f6f6f7;
  width: 76rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem;
  box-sizing: border-box;
  font-size: 1.25rem;
  color: #181a2a;
`;
const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 1.5rem;
`;
const Title = styled.b`
  flex: 1;
  position: relative;
  line-height: 1.75rem;
`;
const Heading = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;
const MPostCardGridChild = styled.img`
  position: relative;
  border-radius: 6px;
  width: 22.5rem;
  height: 15rem;
  object-fit: cover;
`;
const Text1 = styled.div`
  position: relative;
  line-height: 1.25rem;
  font-weight: 500;
`;
const ABadge = styled.div`
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
const Heading1 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1rem;
`;
const ImageIcon1 = styled.img`
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
const AAuthor1 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 0.75rem;
`;
const ShortInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 1.25rem;
  font-size: 1rem;
  color: #97989f;
`;
const Content1 = styled.div`
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
const Content2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1.25rem;
  font-size: 0.88rem;
  color: #4b6bfb;
`;
const OPostLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 2rem;
  font-size: 1.5rem;
  color: #181a2a;
`;
const Content3 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 3rem;
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
const Heading2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5rem;
`;
const Label = styled.div`
  position: relative;
  line-height: 1.25rem;
  font-weight: 500;
  display: none;
`;
const MailIcon = styled.img`
  position: relative;
  width: 1.25rem;
  height: 1.25rem;
  overflow: hidden;
  flex-shrink: 0;
  display: none;
`;
const Placeholder1 = styled.div`
  flex: 1;
  position: relative;
  line-height: 1.5rem;
`;
const MailIcon1 = styled.img`
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
const Divider = styled.div`
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
  position: absolute;
  top: 0rem;
  left: 0rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 6.25rem;
`;
const AuthorPageRoot = styled.div`
  position: relative;
  background-color: #fff;
  width: 100%;
  height: 167.5rem;
  overflow: hidden;
  text-align: left;
  font-size: 1rem;
  color: #3b3c4a;
  font-family: "Work Sans";
`;

const AuthorPage: FunctionComponent = () => {
  return (
    <AuthorPageRoot>
      <Content4>
        <Content3>
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
            <OAuthorInfo>
              <Content>
                <AAuthor>
                  <ImageIcon alt="" src="/image@2x.png" />
                  <Info>
                    <JonathanDoe>Jonathan Doe</JonathanDoe>
                    <CollaboratorEditor>{`Collaborator & Editor`}</CollaboratorEditor>
                  </Info>
                </AAuthor>
                <Para>
                  Meet Jonathan Doe, a passionate writer and blogger with a love
                  for technology and travel. Jonathan holds a degree in Computer
                  Science and has spent years working in the tech industry,
                  gaining a deep understanding of the impact technology has on
                  our lives.
                </Para>
                <SocialMedia>
                  <AButton>
                    <SearchOutlineIcon alt="" src="/logofacebook.svg" />
                  </AButton>
                  <AButton>
                    <SearchOutlineIcon alt="" src="/logotwitter.svg" />
                  </AButton>
                  <AButton>
                    <SearchOutlineIcon alt="" src="/logoinstagram.svg" />
                  </AButton>
                  <AButton>
                    <SearchOutlineIcon alt="" src="/logoyoutube.svg" />
                  </AButton>
                </SocialMedia>
              </Content>
            </OAuthorInfo>
          </Header>
          <OPostLayout>
            <Heading>
              <Title>Latest Post</Title>
            </Heading>
            <Content2>
              <Row>
                <MPostCardGrid>
                  <MPostCardGridChild alt="" src="/rectangle-38@2x.png" />
                  <Content1>
                    <Heading1>
                      <ABadge>
                        <Text1>Technology</Text1>
                      </ABadge>
                      <Title1>
                        The Impact of Technology on the Workplace: How
                        Technology is Changing
                      </Title1>
                    </Heading1>
                    <ShortInfo>
                      <AAuthor1>
                        <ImageIcon1 alt="" src="/image@2x.png" />
                        <Author>Tracey Wilson</Author>
                      </AAuthor1>
                      <Home>August 20, 2022</Home>
                    </ShortInfo>
                  </Content1>
                </MPostCardGrid>
                <MPostCardGrid>
                  <MPostCardGridChild alt="" src="/rectangle-38@2x.png" />
                  <Content1>
                    <Heading1>
                      <ABadge>
                        <Text1>Technology</Text1>
                      </ABadge>
                      <Title1>
                        The Impact of Technology on the Workplace: How
                        Technology is Changing
                      </Title1>
                    </Heading1>
                    <ShortInfo>
                      <AAuthor1>
                        <ImageIcon1 alt="" src="/image@2x.png" />
                        <Author>Jason Francisco</Author>
                      </AAuthor1>
                      <Home>August 20, 2022</Home>
                    </ShortInfo>
                  </Content1>
                </MPostCardGrid>
                <MPostCardGrid>
                  <MPostCardGridChild alt="" src="/rectangle-38@2x.png" />
                  <Content1>
                    <Heading1>
                      <ABadge>
                        <Text1>Technology</Text1>
                      </ABadge>
                      <Title1>
                        The Impact of Technology on the Workplace: How
                        Technology is Changing
                      </Title1>
                    </Heading1>
                    <ShortInfo>
                      <AAuthor1>
                        <ImageIcon1 alt="" src="/image@2x.png" />
                        <Author>Elizabeth Slavin</Author>
                      </AAuthor1>
                      <Home>August 20, 2022</Home>
                    </ShortInfo>
                  </Content1>
                </MPostCardGrid>
              </Row>
              <Row>
                <MPostCardGrid>
                  <MPostCardGridChild alt="" src="/rectangle-38@2x.png" />
                  <Content1>
                    <Heading1>
                      <ABadge>
                        <Text1>Technology</Text1>
                      </ABadge>
                      <Title1>
                        The Impact of Technology on the Workplace: How
                        Technology is Changing
                      </Title1>
                    </Heading1>
                    <ShortInfo>
                      <AAuthor1>
                        <ImageIcon1 alt="" src="/image@2x.png" />
                        <Author>Ernie Smith</Author>
                      </AAuthor1>
                      <Home>August 20, 2022</Home>
                    </ShortInfo>
                  </Content1>
                </MPostCardGrid>
                <MPostCardGrid>
                  <MPostCardGridChild alt="" src="/rectangle-38@2x.png" />
                  <Content1>
                    <Heading1>
                      <ABadge>
                        <Text1>Technology</Text1>
                      </ABadge>
                      <Title1>
                        The Impact of Technology on the Workplace: How
                        Technology is Changing
                      </Title1>
                    </Heading1>
                    <ShortInfo>
                      <AAuthor1>
                        <ImageIcon1 alt="" src="/image@2x.png" />
                        <Author>Eric Smith</Author>
                      </AAuthor1>
                      <Home>August 20, 2022</Home>
                    </ShortInfo>
                  </Content1>
                </MPostCardGrid>
                <MPostCardGrid>
                  <MPostCardGridChild alt="" src="/rectangle-38@2x.png" />
                  <Content1>
                    <Heading1>
                      <ABadge>
                        <Text1>Technology</Text1>
                      </ABadge>
                      <Title1>
                        The Impact of Technology on the Workplace: How
                        Technology is Changing
                      </Title1>
                    </Heading1>
                    <ShortInfo>
                      <AAuthor1>
                        <ImageIcon1 alt="" src="/image@2x.png" />
                        <Author>Tracey Wilson</Author>
                      </AAuthor1>
                      <Home>August 20, 2022</Home>
                    </ShortInfo>
                  </Content1>
                </MPostCardGrid>
              </Row>
              <Row>
                <MPostCardGrid>
                  <MPostCardGridChild alt="" src="/rectangle-38@2x.png" />
                  <Content1>
                    <Heading1>
                      <ABadge>
                        <Text1>Technology</Text1>
                      </ABadge>
                      <Title1>
                        The Impact of Technology on the Workplace: How
                        Technology is Changing
                      </Title1>
                    </Heading1>
                    <ShortInfo>
                      <AAuthor1>
                        <ImageIcon1 alt="" src="/image@2x.png" />
                        <Author>Jason Francisco</Author>
                      </AAuthor1>
                      <Home>August 20, 2022</Home>
                    </ShortInfo>
                  </Content1>
                </MPostCardGrid>
                <MPostCardGrid>
                  <MPostCardGridChild alt="" src="/rectangle-38@2x.png" />
                  <Content1>
                    <Heading1>
                      <ABadge>
                        <Text1>Technology</Text1>
                      </ABadge>
                      <Title1>
                        The Impact of Technology on the Workplace: How
                        Technology is Changing
                      </Title1>
                    </Heading1>
                    <ShortInfo>
                      <AAuthor1>
                        <ImageIcon1 alt="" src="/image@2x.png" />
                        <Author>Elizabeth Slavin</Author>
                      </AAuthor1>
                      <Home>August 20, 2022</Home>
                    </ShortInfo>
                  </Content1>
                </MPostCardGrid>
                <MPostCardGrid>
                  <MPostCardGridChild alt="" src="/rectangle-38@2x.png" />
                  <Content1>
                    <Heading1>
                      <ABadge>
                        <Text1>Technology</Text1>
                      </ABadge>
                      <Title1>
                        The Impact of Technology on the Workplace: How
                        Technology is Changing
                      </Title1>
                    </Heading1>
                    <ShortInfo>
                      <AAuthor1>
                        <ImageIcon1 alt="" src="/image@2x.png" />
                        <Author>Ernie Smith</Author>
                      </AAuthor1>
                      <Home>August 20, 2022</Home>
                    </ShortInfo>
                  </Content1>
                </MPostCardGrid>
              </Row>
            </Content2>
          </OPostLayout>
        </Content3>
        <OFooter>
          <Row>
            <Info1>
              <About1>
                <About>About</About>
                <Desciption>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam
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
              <Heading2>
                <WeeklyNewsletter>Weekly Newsletter</WeeklyNewsletter>
                <GetBlogArticles>
                  Get blog articles and offers via email
                </GetBlogArticles>
              </Heading2>
              <Form>
                <AInput>
                  <Label>Label</Label>
                  <Input>
                    <MailIcon alt="" src="/mail.svg" />
                    <Placeholder1>Your Email</Placeholder1>
                    <MailIcon1 alt="" src="/mail.svg" />
                  </Input>
                  <Caption>This is a caption text for hint.</Caption>
                </AInput>
                <AButton1>
                  <MailIcon alt="" src="/add.svg" />
                  <Author>Subscribe</Author>
                  <MailIcon alt="" src="/add.svg" />
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
              <Divider />
              <Home>Privacy Policy</Home>
              <Divider />
              <Home>Cookie Policy</Home>
            </Link1>
          </Copyright>
        </OFooter>
      </Content4>
    </AuthorPageRoot>
  );
};

export default AuthorPage;
