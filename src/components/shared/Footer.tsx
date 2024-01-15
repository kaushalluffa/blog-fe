import { styled } from "styled-components";
import Logo from "../../assets/svg/logo.svg";
import Mail from "../../assets/svg/mail.svg";
import Home from "./Home";
import Row from "./Row";
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
const AddIcon = styled.img`
  position: relative;
  width: 1.25rem;
  height: 1.25rem;
  overflow: hidden;
  flex-shrink: 0;
  display: none;
`;
const Divider1 = styled.div`
  position: relative;
  border-right: 1px solid #e8e8ea;
  box-sizing: border-box;
  width: 0.06rem;
  height: 1.56rem;
`;
const Author = styled.div`
  position: relative;
  line-height: 1.5rem;
  font-weight: 500;
`;
const Footer = () => {
  return (
    <OFooter>
      <Row>
        <Info1>
          <About1>
            <About>About</About>
            <Desciption>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
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
                <AddIcon alt="" src={Mail} />
                <Placeholder1>Your Email</Placeholder1>
                <MailIcon alt="" src={Mail} />
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
          <LogoIcon1 alt="" src={Logo} />
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
  );
};

export default Footer;
