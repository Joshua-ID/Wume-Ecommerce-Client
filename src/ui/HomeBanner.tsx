import { homeBanner } from "../assets";
import Container from "./Container";
import LinkButton from "./LinkButton";

const HomeBanner = () => {
  return (
    <Container className="relative py-5 overflow-hidden">
      <div className="relative">
        <img
          src={homeBanner}
          alt="homeBanner"
          className="w-full h-[650px] object-contain rounded-md"
        />
        <div className="w-full h-full absolute top-0 left-0 bg-black/10" />
      </div>
      <div className="absolute inset-0 flex flex-col justify-center px-10">
        <h2 className="text-xl md:text-4xl lg:text-6xl text-darkText   font-extrabold">
          Skin Care
        </h2>
        <p className="text-base md:text-lg  leading-6 w-full font-bold text-textDark max-w-[290px] mt-4">
          The secret to beauty is in the details
        </p>
        <LinkButton className="w-44 mt-12 flex items-center justify-center bg-skyText text-darkText hover:bg-darkText hover:text-whiteText duration-200 " />
      </div>
    </Container>
  );
};

export default HomeBanner;
