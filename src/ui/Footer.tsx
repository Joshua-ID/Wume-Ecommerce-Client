import Container from "./Container";
import { payment } from "../assets";
import FooterTop from "./FooterTop";

const Footer = () => {
  return (
    <div className="mt-10">
      <FooterTop />
      <Container className="flex flex-col md:flex-row items-center gap-4 justify-between">
        <div className="flex flex-col gap-2  ">
          <p className="font-bold text-skyText text-center md:text-left ">
            Hotline: <span className="text-darkText">+234 809 322 3489</span>
          </p>
          <p className="text-center md:text-left">
            {new Date().getFullYear()} Wume E-commerce Center. All rights
            reserved.
          </p>
        </div>
        <img src={payment} alt="payment-img" className="object-cover" />
      </Container>
    </div>
  );
};

export default Footer;
