import { mail } from "../assets/images"

export default function Contact() {
  return (
    <div className="FlexPage">
      <img src={mail} alt="Contact" className="mail-img" />
      <div className="pageTitle contact-title">Get in Touch</div>
      <div className="textBorder">
        <div className="center emailText">For inquiries reach out at</div>
        <br />
        <div id="email" className="center">noahskusaba@gmail.com</div>
        <br />
        <div className="center emailText">Or connect on LinkedIn!</div>
      </div>
    </div>
  )
}
