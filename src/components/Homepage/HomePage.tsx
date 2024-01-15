import { FunctionComponent } from "react";
import styled from "styled-components";
import Home from "../shared/Home/Home";

const ImageIcon = styled.img`
  position: absolute;
  top: 0rem;
  left: 0rem;
  border-radius: 12px;
  width: 76rem;
  height: 37.5rem;
  object-fit: cover;
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
  align-self: stretch;
  position: relative;
  font-size: 2.25rem;
  line-height: 2.5rem;
  font-weight: 600;
  color: #181a2a;
`;
const Heading = styled.div`
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
const AAuthor = styled.div`
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
const Content = styled.div`
  position: absolute;
  top: 22.5rem;
  left: 4rem;
  border-radius: 12px;
  background-color: #fff;
  box-shadow: 0px 12px 24px -6px rgba(24, 26, 42, 0.12);
  border: 1px solid #e8e8ea;
  box-sizing: border-box;
  width: 37.38rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 2.5rem;
  gap: 1.5rem;
`;
const Content1 = styled.div`
  position: relative;
  width: 76rem;
  height: 41.5rem;
  text-align: left;
  color: #fff;
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
`;
const Title1 = styled.b`
  flex: 1;
  position: relative;
  line-height: 1.75rem;
`;
const Heading1 = styled.div`
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
const ABadge1 = styled.div`
  border-radius: 6px;
  background-color: rgba(75, 107, 251, 0.05);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0.25rem 0.63rem;
`;
const Title2 = styled.div`
  align-self: stretch;
  position: relative;
  font-size: 1.5rem;
  line-height: 1.75rem;
  font-weight: 600;
  color: #181a2a;
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
  font-size: 0.88rem;
  color: #4b6bfb;
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
  font-size: 1rem;
  color: #696a75;
`;
const OPostLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 2rem;
  text-align: left;
  font-size: 1.5rem;
  color: #181a2a;
`;
const Content4 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 5rem;
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
  text-align: left;
  font-size: 1.13rem;
  color: #181a2a;
  font-family: "Plus Jakarta Sans";
`;
const Content5 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 6.25rem;
  text-align: center;
  font-size: 0.88rem;
  color: #696a75;
`;
const Content6 = styled.div`
  position: absolute;
  top: 0rem;
  left: 0rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1.5rem;
`;
const HomePageRoot = styled.div`
  position: relative;
  background-color: #fff;
  width: 100%;
  height: 217rem;
  overflow: hidden;
  text-align: left;
  font-size: 1rem;
  color: #3b3c4a;
  font-family: "Work Sans";
`;

const HomePage: FunctionComponent = () => {
  return (
    <HomePageRoot>
      <Content6>
        <Content5>
          <Content4>
            <Content1>
              <ImageIcon alt="" src="/image@2x.png" />
              <Content>
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
                  <AAuthor>
                    <ImageIcon1 alt="" src="/image@2x.png" />
                    <Author>Jason Francisco</Author>
                  </AAuthor>
                  <Home>August 20, 2022</Home>
                </ShortInfo>
              </Content>
            </Content1>
            <Content4>
              <OAdsSpace>
                <Info>
                  <Advertisement>Advertisement</Advertisement>
                  <YouCanPlace>You can place ads</YouCanPlace>
                  <X>750x100</X>
                </Info>
              </OAdsSpace>
              <OPostLayout>
                <Heading1>
                  <Title1>Latest Post</Title1>
                </Heading1>
                <Content3>
                  <Row>
                    <MPostCardGrid>
                      <MPostCardGridChild alt="" src="/rectangle-38@2x.png" />
                      <Content2>
                        <Heading>
                          <ABadge1>
                            <Text1>Technology</Text1>
                          </ABadge1>
                          <Title2>
                            The Impact of Technology on the Workplace: How
                            Technology is Changing
                          </Title2>
                        </Heading>
                        <ShortInfo>
                          <AAuthor>
                            <ImageIcon1 alt="" src="/image@2x.png" />
                            <Author>Tracey Wilson</Author>
                          </AAuthor>
                          <Home>August 20, 2022</Home>
                        </ShortInfo>
                      </Content2>
                    </MPostCardGrid>
                    <MPostCardGrid>
                      <MPostCardGridChild alt="" src="/rectangle-38@2x.png" />
                      <Content2>
                        <Heading>
                          <ABadge1>
                            <Text1>Technology</Text1>
                          </ABadge1>
                          <Title2>
                            The Impact of Technology on the Workplace: How
                            Technology is Changing
                          </Title2>
                        </Heading>
                        <ShortInfo>
                          <AAuthor>
                            <ImageIcon1 alt="" src="/image@2x.png" />
                            <Author>Jason Francisco</Author>
                          </AAuthor>
                          <Home>August 20, 2022</Home>
                        </ShortInfo>
                      </Content2>
                    </MPostCardGrid>
                    <MPostCardGrid>
                      <MPostCardGridChild alt="" src="/rectangle-38@2x.png" />
                      <Content2>
                        <Heading>
                          <ABadge1>
                            <Text1>Technology</Text1>
                          </ABadge1>
                          <Title2>
                            The Impact of Technology on the Workplace: How
                            Technology is Changing
                          </Title2>
                        </Heading>
                        <ShortInfo>
                          <AAuthor>
                            <ImageIcon1 alt="" src="/image@2x.png" />
                            <Author>Elizabeth Slavin</Author>
                          </AAuthor>
                          <Home>August 20, 2022</Home>
                        </ShortInfo>
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
                          <Title2>
                            The Impact of Technology on the Workplace: How
                            Technology is Changing
                          </Title2>
                        </Heading>
                        <ShortInfo>
                          <AAuthor>
                            <ImageIcon1 alt="" src="/image@2x.png" />
                            <Author>Ernie Smith</Author>
                          </AAuthor>
                          <Home>August 20, 2022</Home>
                        </ShortInfo>
                      </Content2>
                    </MPostCardGrid>
                    <MPostCardGrid>
                      <MPostCardGridChild alt="" src="/rectangle-38@2x.png" />
                      <Content2>
                        <Heading>
                          <ABadge1>
                            <Text1>Technology</Text1>
                          </ABadge1>
                          <Title2>
                            The Impact of Technology on the Workplace: How
                            Technology is Changing
                          </Title2>
                        </Heading>
                        <ShortInfo>
                          <AAuthor>
                            <ImageIcon1 alt="" src="/image@2x.png" />
                            <Author>Eric Smith</Author>
                          </AAuthor>
                          <Home>August 20, 2022</Home>
                        </ShortInfo>
                      </Content2>
                    </MPostCardGrid>
                    <MPostCardGrid>
                      <MPostCardGridChild alt="" src="/rectangle-38@2x.png" />
                      <Content2>
                        <Heading>
                          <ABadge1>
                            <Text1>Technology</Text1>
                          </ABadge1>
                          <Title2>
                            The Impact of Technology on the Workplace: How
                            Technology is Changing
                          </Title2>
                        </Heading>
                        <ShortInfo>
                          <AAuthor>
                            <ImageIcon1 alt="" src="/image@2x.png" />
                            <Author>Tracey Wilson</Author>
                          </AAuthor>
                          <Home>August 20, 2022</Home>
                        </ShortInfo>
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
                          <Title2>
                            The Impact of Technology on the Workplace: How
                            Technology is Changing
                          </Title2>
                        </Heading>
                        <ShortInfo>
                          <AAuthor>
                            <ImageIcon1 alt="" src="/image@2x.png" />
                            <Author>Jason Francisco</Author>
                          </AAuthor>
                          <Home>August 20, 2022</Home>
                        </ShortInfo>
                      </Content2>
                    </MPostCardGrid>
                    <MPostCardGrid>
                      <MPostCardGridChild alt="" src="/rectangle-38@2x.png" />
                      <Content2>
                        <Heading>
                          <ABadge1>
                            <Text1>Technology</Text1>
                          </ABadge1>
                          <Title2>
                            The Impact of Technology on the Workplace: How
                            Technology is Changing
                          </Title2>
                        </Heading>
                        <ShortInfo>
                          <AAuthor>
                            <ImageIcon1 alt="" src="/image@2x.png" />
                            <Author>Elizabeth Slavin</Author>
                          </AAuthor>
                          <Home>August 20, 2022</Home>
                        </ShortInfo>
                      </Content2>
                    </MPostCardGrid>
                    <MPostCardGrid>
                      <MPostCardGridChild alt="" src="/rectangle-38@2x.png" />
                      <Content2>
                        <Heading>
                          <ABadge1>
                            <Text1>Technology</Text1>
                          </ABadge1>
                          <Title2>
                            The Impact of Technology on the Workplace: How
                            Technology is Changing
                          </Title2>
                        </Heading>
                        <ShortInfo>
                          <AAuthor>
                            <ImageIcon1 alt="" src="/image@2x.png" />
                            <Author>Ernie Smith</Author>
                          </AAuthor>
                          <Home>August 20, 2022</Home>
                        </ShortInfo>
                      </Content2>
                    </MPostCardGrid>
                  </Row>
                </Content3>
                <AButton>
                  <Author>View All Post</Author>
                </AButton>
              </OPostLayout>
            </Content4>
            <OAdsSpace>
              <Info>
                <Advertisement>Advertisement</Advertisement>
                <YouCanPlace>You can place ads</YouCanPlace>
                <X>750x100</X>
              </Info>
            </OAdsSpace>
          </Content4>
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
        </Content5>
      </Content6>
    </HomePageRoot>
  );
};

export default HomePage;
