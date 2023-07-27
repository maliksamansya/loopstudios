"use client";
import Image from "next/image";

const heroSection = () => {
  function handleHumbergerButton() {
    const heroSection = document.getElementById("hero"); // Replace 'my-element' with the actual id of the element
    const mobileSection = document.getElementById("mobile");
    heroSection.classList.add("hidden"); // Replace 'new-class' with the class you want to add
    mobileSection.classList.remove("hidden"); // Replace 'new-class' with the class you want to add
  }
  const handleCloseButton = (event) => {
    const heroSection = document.getElementById("hero"); // Replace 'my-element' with the actual id of the element
    const mobileSection = document.getElementById("mobile");
    heroSection.classList.remove("hidden"); // Replace 'new-class' with the class you want to add
    mobileSection.classList.add("hidden"); // Replace 'new-class' with the class you want to add
  };
  return (
    <>
      <section id="hero" className="">
        <div className="container mx-auto px-6 md:px-0">
          {/* Navbar */}
          <div className="flex h-9 items-center flex-row justify-between py-12 md:mx-24">
            <Image
              src="/assets/images/logo.svg"
              width={225}
              height={225}
              className="object-contain"
            />
            <div className="flex-row space-x-6 hidden md:flex">
              <div className="group">
                <div className="text-lg text-white font-alata">About</div>
                <div className="border-b border-2 border-white opacity-0 group-hover:opacity-100"></div>
              </div>
              <div className="group">
                <div className="text-lg text-white font-alata">Careers</div>
                <div className="border-b border-2 border-white opacity-0 group-hover:opacity-100"></div>
              </div>
              <div className="group">
                <div className="text-lg text-white font-alata">Events</div>
                <div className="border-b border-2 border-white opacity-0 group-hover:opacity-100"></div>
              </div>
              <div className="group">
                <div className="text-lg text-white font-alata">Products</div>
                <div className="border-b border-2 border-white opacity-0 group-hover:opacity-100"></div>
              </div>
              <div className="group">
                <div className="text-lg text-white font-alata">Support</div>
                <div className="border-b border-2 border-white opacity-0 group-hover:opacity-100"></div>
              </div>
            </div>
            <Image
              src="/assets/images/icon-hamburger.svg"
              width={20}
              height={20}
              onClick={handleHumbergerButton}
              className="object-contain md:hidden"
            />
          </div>

          {/* bawah navbar */}
          <div className="border-2 md:max-w-xl my-32 border-white md:p-12 p-3 uppercase font-sans text-white text-4xl md:text-6xl md:mx-24">
            IMMERSIVE EXPERIENCES THAT DELIVER
          </div>
        </div>

        {/* @todo mobile view */}
      </section>
      {/* mobile menu */}
      <section id="mobile" className="hidden">
        <div className="container mx-auto px-6 md:px-0">
          {/* Navbar */}
          <div className="flex h-9 items-center flex-row justify-between py-12 md:mx-24">
            <Image
              src="/assets/images/logo.svg"
              width={225}
              height={225}
              className="object-contain"
            />
            <Image
              src="/assets/images/icon-close.svg"
              width={20}
              height={20}
              onClick={handleCloseButton}
              className="object-contain md:hidden"
            />
          </div>

          <div className="flex flex-col justify-start items-start space-y-6 mt-36">
            <div className="group">
              <div className="text-lg text-white font-alata">About</div>
              <div className="border-b border-2 border-white opacity-0 group-hover:opacity-100"></div>
            </div>
            <div className="group">
              <div className="text-lg text-white font-alata">Careers</div>
              <div className="border-b border-2 border-white opacity-0 group-hover:opacity-100"></div>
            </div>
            <div className="group">
              <div className="text-lg text-white font-alata">Events</div>
              <div className="border-b border-2 border-white opacity-0 group-hover:opacity-100"></div>
            </div>
            <div className="group">
              <div className="text-lg text-white font-alata">Products</div>
              <div className="border-b border-2 border-white opacity-0 group-hover:opacity-100"></div>
            </div>
            <div className="group">
              <div className="text-lg text-white font-alata">Support</div>
              <div className="border-b border-2 border-white opacity-0 group-hover:opacity-100"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default heroSection;
