import Image from "next/image";
import FooterLogo from "@/public/assets/logos/logo.png";
import { CiFacebook, CiInstagram, CiTwitter, CiYoutube } from "react-icons/ci";
import { PiPinterestLogoLight } from "react-icons/pi";
import { FaPaypal, FaStripe } from "react-icons/fa";
import { SiVisa } from "react-icons/si";
import { RiMastercardLine } from "react-icons/ri";
const Footer = () => {
  return (
    <footer className=" py-10 bg-[#f6f7ed] text-sm text-black/70 font-montserrat ">
      <div className="  md:max-w-screen-xl grid lg:gap-10 grid-cols-12 w-11/12  mx-auto">
        <div className="col-span-12 md:col-span-6  lg:col-span-3 flex flex-col  gap-2 lg:gap-5">
          <div>
            <Image src={FooterLogo} alt="Logo" height={100} width={100} />
          </div>
          <div>
            <p> 1234 Elm Street,Apt 56B, Springfield, IL 62701 USA</p>
          </div>
          <div className="flex flex-col gap-3">
            <p>demo@gmail.com</p>
            <p>+1 1434394905</p>
          </div>
          <div>
            <ul className="flex text-lg items-center gap-5">
              <li>
                <CiFacebook />
              </li>
              <li>
                <CiTwitter />
              </li>
              <li>
                <CiInstagram />
              </li>
              <li>
                <CiYoutube />
              </li>
              <li>
                <PiPinterestLogoLight />
              </li>
            </ul>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6  lg:col-span-3 mt-5 flex flex-col gap-2 lg:gap-5">
          <div>
            <h1 className=" text-3xl text-black font-semibold">COMPANY</h1>
          </div>

          <div>
            <ul className=" flex flex-col gap-3">
              <li>About Us</li>
              <li>Careers</li>
              <li>Affiliates</li>
              <li>Blogs</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6  lg:col-span-3 mt-5 flex flex-col gap-2 lg:gap-5">
          <div>
            <h1 className=" text-3xl text-black font-semibold">HELP</h1>
          </div>

          <div>
            <ul className=" flex flex-col gap-3">
              <li>Customer Service</li>
              <li>My Account</li>
              <li>Store</li>
              <li>Privacy</li>
              <li>Cuppon</li>
            </ul>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-span-3 mt-5 flex flex-col gap-2 lg:gap-5 ">
          <div>
            <h1 className=" text-3xl text-black font-semibold uppercase">
              subscribe
            </h1>
          </div>
          <div className=" flex flex-col gap-3">
            <p>For Interesting Offers And Updates Please Subscribe Us</p>
            <form>
              <fieldset className="flex justify-between bg-gray-200 px-3 w-1/2 md:w-full">
                {" "}
                <input
                  type="text"
                  placeholder="Your Email"
                  className="outline-none py-2 bg-gray-200  "
                />
                <input type="submit" value="JOIN" className=" cursor-pointer" />
              </fieldset>
            </form>
            <div>
              <p>Payment:</p>
              <div className="mt-2">
                <ul className=" flex items-center text-xl gap-5">
                  <li>
                    <FaStripe />
                  </li>
                  <li>
                    <FaPaypal />
                  </li>
                  <li>
                    <SiVisa />
                  </li>
                  <li>
                    <RiMastercardLine />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className=" mt-5 lg:mt-0 col-span-12 ">
          <div className="mb-2 w-full h-[1px] bg-black"></div>
          <div className="flex justify-between">
            <p>&copy; cloty</p>
            <p>English | USD | US</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
