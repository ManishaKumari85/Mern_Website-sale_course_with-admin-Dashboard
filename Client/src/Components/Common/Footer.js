import React from "react";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <footer className="bg-[#091b24] text-white">
    <div className="max-w-[1368px] mx-auto">
      <div className="w-[95%] mx-auto py-[60px]">
        <div className=" w-full rounded grid grid-cols-1 gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <div className="company-logo">
            <div>
              <a href="/">
                <img
                  src="image/logo.png"
                  alt="Logo"
                  className="w-[60px] h-[60px]"
                />
              </a>
            </div>
            <div className="pt-4">
              <p className="text-[#ababab] text-justify">
                Wbcoding is one of the Top Mobile App and Web
                Development Companies in India. Offering Mobile App
                development Services and Website development with 6+ Yrs
                of Experience &amp; 1500+ Clients.
              </p>
            </div>
            <div className="mt-5">
              <ul className="flex">
                <li>
                  <a href="#">
                    <img
                      src="image/facebook.png"
                      alt="facebook"
                      className="w-[25px]"
                    />
                  </a>
                </li>
                <li className="pl-3">
                  <a href="#">
                    <img
                      src="image/twitter.png"
                      alt="twitter"
                      className="w-[25px]"
                    />
                  </a>
                </li>
                <li className="pl-3">
                  <a href="#">
                    <img
                      src="image/linkedin.png"
                      alt="linkedin"
                      className="w-[25px]"
                    />
                  </a>
                </li>
                <li className="pl-3">
                  <a href="#">
                    <img
                      src="image/youtube.png"
                      alt="youtube"
                      className="w-[25px]"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="policy">
            <p className="text-[18px] font-semibold mb-12">POLICY</p>
            <ul>
              <li>
                <a
                  href="/term-condition"
                  className="text-[#ababab] text-[13px]"
                >
                  Term of Use
                </a>
              </li>
              <li>
                <a
                  href="/policy"
                  className="text-[#ababab] text-[13px]"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          <div className="policy">
            <p className="text-[18px] font-semibold mb-12">
              OFFICE ADDRESS
            </p>
            <p className="text-[#ababab] text-[13px]">
              Sreenagar West, Srinagar, Panchpota Kolkata, West Bengal
              700094
            </p>
          </div>
          <div className="policy">
            <p className="text-[18px] font-semibold mb-12">
              FIND US ON MAP
            </p>
            <div className="map  w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14747.614091682099!2d88.4008992!3d22.4702595!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x77c101cbc19f4aab!2sHOOGLOO%20OFFICE!5e0!3m2!1sen!2sin!4v1640013645216!5m2!1sen!2sin"
                style={{ border: 0, width: "100%", height: 200 }}
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
        </div>
        <div className="text-center text-[#ababab] mt-16 text-[14px] border-t-[1px] border-[#3b3b3b] pt-4">
          © 2023 wbcoding.com | All Rights Reserved
        </div>
      </div>
    </div>
  </footer>
  );
};

export default Footer;
