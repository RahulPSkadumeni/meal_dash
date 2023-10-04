// import linkedin from "../images/linkedin.png";
// import git from "../images/git.png";
const Contact = () => {
  return (
    <>
      <div className="contact">
        <h1 className="developer"> Contact Details</h1>
        <span>rahulps995@gmail.com</span>
        <span>+919744187790</span>
        <a href="https://www.linkedin.com/in/rahul-p-s/" target="_blank">
          Connect With Me On
          {/* <img className="linkedIn" src={linkedin} /> */}
        </a>
        <a href="https://github.com/RahulPSkadumeni" target="_blank">
          Github profile
          {/* <img className="linkedIn" src={git} /> */}
        </a>
      </div>
      <input type="text" name="" id="" placeholder="Name" />{" "}
      <input type="text" name="" id="" placeholder="email" />
      <button>Submit</button>
    </>
  );
};

export default Contact;
