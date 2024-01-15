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
  padding: 0.38rem 0.75rem;
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
  width: 50rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1rem;
`;
const ImageIcon = styled.img`
  position: relative;
  border-radius: 28px;
  width: 1.75rem;
  height: 1.75rem;
  object-fit: cover;
`;
const AAuthor = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5rem;
`;
const Date1 = styled.div`
  position: relative;
  line-height: 1.25rem;
`;
const ShortInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 1.5rem;
  color: #696a75;
`;
const BlogInfo = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1.25rem;
  font-size: 0.88rem;
  color: #fff;
`;
const ImageIcon1 = styled.img`
  align-self: stretch;
  position: relative;
  border-radius: 12px;
  max-width: 100%;
  overflow: hidden;
  height: 28.88rem;
  flex-shrink: 0;
  object-fit: cover;
`;
const TravelingIsAn = styled.p`
  margin: 0;
`;
const Article = styled.div`
  position: relative;
  line-height: 2rem;
  display: inline-block;
  width: 50.25rem;
  flex-shrink: 0;
`;
const Para = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  font-size: 1.25rem;
  color: #3b3c4a;
  font-family: "Source Serif Pro";
`;
const Title1 = styled.div`
  align-self: stretch;
  position: relative;
  line-height: 1.75rem;
  font-weight: 600;
`;
const Article1 = styled.div`
  align-self: stretch;
  position: relative;
  font-size: 1.25rem;
  line-height: 2rem;
  font-family: "Source Serif Pro";
  color: #3b3c4a;
`;
const Para1 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1rem;
`;
const Text2 = styled.i`
  flex: 1;
  position: relative;
  line-height: 2rem;
`;
const Quote = styled.div`
  align-self: stretch;
  border-radius: 12px;
  background-color: #f6f6f7;
  border-left: 4px solid #e8e8ea;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 2rem;
  font-family: "Source Serif Pro";
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
  font-size: 0.88rem;
  color: #696a75;
`;
const OArticle = styled.div`
  width: 50rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 2rem;
`;
const OConclusion = styled.div`
  width: 50rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 2rem;
`;
const MainContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
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
const Heading1 = styled.div`
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
const Button = styled.div`
  position: relative;
  line-height: 1.5rem;
  font-weight: 500;
`;
const AButton = styled.div`
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
const Content1 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1.25rem;
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
const Text3 = styled.div`
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
  font-family: "Plus Jakarta Sans";
`;
const Content2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 5rem;
  font-size: 1.5rem;
  color: #181a2a;
`;
const Content3 = styled.div`
  position: absolute;
  top: 0rem;
  left: 0rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 2rem;
`;
const SinglePostRoot = styled.div`
  position: relative;
  background-color: #fff;
  width: 100%;
  height: 272.75rem;
  overflow: hidden;
  text-align: left;
  font-size: 1rem;
  color: #3b3c4a;
  font-family: "Work Sans";
`;

const SinglePost: FunctionComponent = () => {
  return (
    <SinglePostRoot>
      <Content3>
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
        <Content2>
          <MainContent>
            <Content>
              <OArticle>
                <BlogInfo>
                  <Heading>
                    <ABadge>
                      <Text1>Technology</Text1>
                    </ABadge>
                    <Title>
                      The Impact of Technology on the Workplace: How Technology
                      is Changing
                    </Title>
                  </Heading>
                  <ShortInfo>
                    <AAuthor>
                      <ImageIcon alt="" src="/image@2x.png" />
                      <Text1>Tracey Wilson</Text1>
                    </AAuthor>
                    <Date1>August 20, 2022</Date1>
                  </ShortInfo>
                </BlogInfo>
                <ImageIcon1 alt="" src="/image@2x.png" />
                <Para>
                  <Article>
                    <TravelingIsAn>
                      Traveling is an enriching experience that opens up new
                      horizons, exposes us to different cultures, and creates
                      memories that last a lifetime. However, traveling can also
                      be stressful and overwhelming, especially if you don't
                      plan and prepare adequately. In this blog article, we'll
                      explore tips and tricks for a memorable journey and how to
                      make the most of your travels.
                    </TravelingIsAn>
                    <TravelingIsAn>&nbsp;</TravelingIsAn>
                    <TravelingIsAn>
                      One of the most rewarding aspects of traveling is
                      immersing yourself in the local culture and customs. This
                      includes trying local cuisine, attending cultural events
                      and festivals, and interacting with locals. Learning a few
                      phrases in the local language can also go a long way in
                      making connections and showing respect.
                    </TravelingIsAn>
                  </Article>
                </Para>
                <Para1>
                  <Title1>Research Your Destination</Title1>
                  <Article1>
                    <TravelingIsAn>
                      Before embarking on your journey, take the time to
                      research your destination. This includes understanding the
                      local culture, customs, and laws, as well as identifying
                      top attractions, restaurants, and accommodations. Doing so
                      will help you navigate your destination with confidence
                      and avoid any cultural faux pas.
                    </TravelingIsAn>
                    <TravelingIsAn>&nbsp;</TravelingIsAn>
                    <TravelingIsAn>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. In hendrerit gravida rutrum quisque non tellus
                      orci ac auctor. Mi ipsum faucibus vitae aliquet nec
                      ullamcorper sit amet. Aenean euismod elementum nisi quis
                      eleifend quam adipiscing vitae. Viverra adipiscing at in
                      tellus.
                    </TravelingIsAn>
                  </Article1>
                </Para1>
                <Para1>
                  <Title1>Plan Your Itinerary</Title1>
                  <Article1>
                    <TravelingIsAn>
                      While it's essential to leave room for spontaneity and
                      unexpected adventures, having a rough itinerary can help
                      you make the most of your time and budget. Identify the
                      must-see sights and experiences and prioritize them
                      according to your interests and preferences. This will
                      help you avoid overscheduling and ensure that you have
                      time to relax and enjoy your journey.
                    </TravelingIsAn>
                    <TravelingIsAn>&nbsp;</TravelingIsAn>
                    <TravelingIsAn>
                      Vitae sapien pellentesque habitant morbi tristique. Luctus
                      venenatis lectus magna fringilla. Nec ullamcorper sit amet
                      risus nullam eget felis. Tincidunt arcu non sodales neque
                      sodales ut etiam sit amet.
                    </TravelingIsAn>
                  </Article1>
                </Para1>
                <Quote>
                  <Text2>
                    “ Traveling can expose you to new environments and potential
                    health risks, so it's crucial to take precautions to stay
                    safe and healthy. ”
                  </Text2>
                </Quote>
                <ImageIcon1 alt="" src="/image@2x.png" />
                <OAdsSpace>
                  <Info>
                    <Date1>Advertisement</Date1>
                    <YouCanPlace>You can place ads</YouCanPlace>
                    <X>750x100</X>
                  </Info>
                </OAdsSpace>
                <Para1>
                  <Title1>Pack Lightly and Smartly</Title1>
                  <Article1>
                    Packing can be a daunting task, but with some careful
                    planning and smart choices, you can pack light and
                    efficiently. Start by making a packing list and sticking to
                    it, focusing on versatile and comfortable clothing that can
                    be mixed and matched. Invest in quality luggage and packing
                    organizers to maximize space and minimize wrinkles.
                  </Article1>
                </Para1>
                <Para1>
                  <Title1>Stay Safe and Healthy</Title1>
                  <Article1>
                    Traveling can expose you to new environments and potential
                    health risks, so it's crucial to take precautions to stay
                    safe and healthy. This includes researching any required
                    vaccinations or medications, staying hydrated, washing your
                    hands frequently, and using sunscreen and insect repellent.
                    It's also essential to keep your valuables safe and secure
                    and to be aware of your surroundings at all times.
                  </Article1>
                </Para1>
                <Para1>
                  <Title1>Immerse Yourself in the Local Culture</Title1>
                  <Article1>
                    One of the most rewarding aspects of traveling is immersing
                    yourself in the local culture and customs. This includes
                    trying local cuisine, attending cultural events and
                    festivals, and interacting with locals. Learning a few
                    phrases in the local language can also go a long way in
                    making connections and showing respect.
                  </Article1>
                </Para1>
                <Para1>
                  <Title1>Capture Memories</Title1>
                  <Article1>
                    Finally, don't forget to capture memories of your journey.
                    Whether it's through photographs, journaling, or souvenirs,
                    preserving the moments and experiences of your travels can
                    bring joy and nostalgia for years to come. However, it's
                    also essential to be present in the moment and not let
                    technology distract you from the beauty of your
                    surroundings.
                  </Article1>
                </Para1>
              </OArticle>
              <OConclusion>
                <Para1>
                  <Title1>Conclusion:</Title1>
                  <Article1>
                    Traveling is an art form that requires a blend of planning,
                    preparation, and spontaneity. By following these tips and
                    tricks, you can make the most of your journey and create
                    memories that last a lifetime. So pack your bags, embrace
                    the adventure, and enjoy the ride.
                  </Article1>
                </Para1>
              </OConclusion>
            </Content>
          </MainContent>
          <OFooter>
            <Content1>
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
                <Heading1>
                  <WeeklyNewsletter>Weekly Newsletter</WeeklyNewsletter>
                  <GetBlogArticles>
                    Get blog articles and offers via email
                  </GetBlogArticles>
                </Heading1>
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
                  <AButton>
                    <MailIcon alt="" src="/add.svg" />
                    <Button>Subscribe</Button>
                    <MailIcon alt="" src="/add.svg" />
                  </AButton>
                </Form>
              </MNewsletter>
            </Content1>
            <Copyright>
              <CopyrightInfo>
                <LogoIcon1 alt="" src="/logo.svg" />
                <Text3>
                  <Metablog>
                    <Meta>Meta</Meta>
                    <Blog>Blog</Blog>
                  </Metablog>
                  <JsTemplate2023Container>
                    <Meta>{`© `}</Meta>
                    <JsTemplate>JS Template</JsTemplate>
                    <Meta> 2023. All Rights Reserved.</Meta>
                  </JsTemplate2023Container>
                </Text3>
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
        </Content2>
      </Content3>
    </SinglePostRoot>
  );
};

export default SinglePost;
