const featureSection = () => {
  return (
    <section id="feature" className="">
      <div className="mx-auto container px-6 md:px-0">
        <div className="flex flex-col items-center justify-center md:relative md:flex-row space-y-12 md:space-y-0 md:py-24 md:mx-24 md:justify-start py-24">
          <img
            src="/assets/images/desktop/image-interactive.jpg"
            alt=""
            className=""
          />
          <div className="md:absolute md:max-w-2xl md:pl-24 md:pt-24 md:pb-0 md:top-[288px] md:right-0 bg-white py-12">
            <p className="font-sans uppercase font-medium md:text-6xl text-4xl text-center text-black md:text-left mb-6">
              The leader in interactive VR
            </p>
            <p className="font-sans text-md md:text-left text-center text-slate-500">
              Founded in 2011, Loopstudios has been producing world-class
              virtual reality projects for some of the best companies around the
              globe. Our award-winning creations have transformed businesses
              through digital experiences that bind to their brand.{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default featureSection;
