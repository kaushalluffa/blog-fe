import Logo from "../../../assets/svg/logo.svg";
import Mail from "../../../assets/svg/mail.svg";
const Footer = () => {
  return (
    <div className="o-footer">
      <div className="row">
        <div className="info1">
          <div className="about">
            <div className="about1">About</div>
            <div className="desciption">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </div>
          </div>
          <div className="contact1">
            <div className="home">
              <span className="email1">{`Email : `}</span>
              <span className="infojstemplatenet">info@jstemplate.net</span>
            </div>
            <div className="home">
              <span className="email1">{`Phone : `}</span>
              <span className="infojstemplatenet">880 123 456 789</span>
            </div>
          </div>
        </div>
        <div className="link">
          <div className="quick-link">
            <div className="about1">Quick Link</div>
            <div className="link-list">
              <div className="home">Home</div>
              <div className="home">About</div>
              <div className="home">Blog</div>
              <div className="home">Archived</div>
              <div className="home">Author</div>
              <div className="home">Contact</div>
            </div>
          </div>
          <div className="quick-link">
            <div className="about1">Category</div>
            <div className="link-list">
              <div className="home">Lifestyle</div>
              <div className="home">Technology</div>
              <div className="home">Travel</div>
              <div className="home">Business</div>
              <div className="home">Economy</div>
              <div className="home">Sports</div>
            </div>
          </div>
        </div>
        <div className="m-newsletter">
          <div className="content1">
            <div className="weekly-newsletter">Weekly Newsletter</div>
            <div className="get-blog-articles">
              Get blog articles and offers via email
            </div>
          </div>
          <div className="form">
            <div className="a-input">
              <div className="label">Label</div>
              <div className="input">
                <img className="add-icon" alt="" src={Mail} />
                <div className="placeholder1">Your Email</div>
                <img className="mail-icon1" alt="" src={Mail} />
              </div>
              <div className="caption">This is a caption text for hint.</div>
            </div>
            <div className="a-button1">
              <img className="add-icon" alt="" src="/add.svg" />
              <div className="author">Subscribe</div>
              <img className="add-icon" alt="" src="/add.svg" />
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <div className="copyright-info">
          <img className="logo-icon1" alt="" src={Logo} />
          <div className="text10">
            <div className="metablog">
              <span>Meta</span>
              <span className="blog2">Blog</span>
            </div>
            <div className="js-template-2023-container">
              <span>{`© `}</span>
              <span className="js-template">JS Template</span>
              <span> 2023. All Rights Reserved.</span>
            </div>
          </div>
        </div>
        <div className="link1">
          <div className="home">Terms of Use</div>
          <div className="divider3" />
          <div className="home">Privacy Policy</div>
          <div className="divider3" />
          <div className="home">Cookie Policy</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
