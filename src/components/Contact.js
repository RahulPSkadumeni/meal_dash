import linkedin from "../images/linkedin.png";
import git from "../images/git.png";
const Contact = () => {
  return (
    <>
      <div className="contact">
        <span className="developer"> Contact Details</span>
        <span>rahulps995@gmail.com</span>
        <span>+919744187790</span>
        <a href="https://www.linkedin.com/in/rahul-p-s/" target="_blank">
          Connect With Me On <img className="linkedIn" src={linkedin} />
        </a>
        <a href="https://github.com/RahulPSkadumeni" target="_blank">
          Github profile
          <img className="linkedIn" src={git} />
        </a>
      </div>
    </>
  );
};

export default Contact;
