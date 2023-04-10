import React from "react";
import logo from "../../assets/images/logo.png";
import "./footer.css";
export default function Footer() {
  return (
    <div className="bg-darkblue text-white border-t border-gray font-light">
      <div className=" container flex justify-between">
        <img src={logo} className="w-36"></img>
        <div className="icons self-center flex gap-3">
          <i class="ri-facebook-circle-fill"></i>
          <i class="ri-instagram-fill"></i>
          <i class="ri-pinterest-fill"></i>
        </div>
      </div>
      <div className="flex flex-row flex-wrap justify-between mt-4  container">
      <div>
      <h6 className="border-y border-softorange w-max">contact</h6>
        <p>5 Rue Dalou, 75015 Paris</p>
        <p>
          <span className="accent-text">Call</span> - +33 156 78 89 56
        </p>
        <p>
          <a href="mailto:benoit@mail.com" className="accent-text">
            benoit@mail.com
          </a>
        </p>
      </div>
      <div className='sm:mb-4 lg:mb-0 md:mb-4 xs:mb-4'>
        <p className="lg:text-center md:text-left sm:text-left xs:text-left">Join our mailing list for updates,</p>
        <p className="lg:text-center md:text-left">Get news & offers events.</p>
        <div className="w-100 flex">
          <input type="email" required placeholder="Email" className=""/>

          <button className="btn-primary">Subscribe</button>
        </div>
      </div>
      <div>
        <h6 className="border-y border-softorange w-max">working hours</h6>
        <p>
          <span className="accent-text">Mon-Fri</span>: 7.00am – 6.00pm
        </p>
        <p>
          <span className="accent-text">Sat</span>: 7.00am – 6.00pm
        </p>
        <p>
          <span className="accent-text">Sun</span>: 8.00am – 6.00pm
        </p>
      </div>
      </div>      
    </div>
  );
}
