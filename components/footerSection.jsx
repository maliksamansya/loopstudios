const footerSection = () => {
  return (
    <section id="footer" className=" bg-black mt-12">
      <div className="container mx-auto px-6 md:px-0 bg-black">
        <div className="flex flex-col md:flex-row md:justify-between py-12 md:mx-24">
          <div className="flex flex-col md:justify-start justify-center items-center md:items-start">
            <img
              src="/assets/images/logo.svg"
              alt=""
              className="w-48 mb-12 md:mb-6"
            />
            <div className=" flex flex-col justify-center items-center md:flex-row space-y-6 md:space-y-0 md:space-x-6">
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
          <div className="flex flex-col md:justify-start justify-center items-center md:items-end mt-12 md:mt-0">
            <div className="flex flex-row md:justify-end space-x-3 mb-6">
              <img
                src="/assets/images/icon-facebook.svg"
                alt=""
                className="ficon"
              />
              <img
                src="/assets/images/icon-instagram.svg"
                alt=""
                className="ficon"
              />
              <img
                src="/assets/images/icon-pinterest.svg"
                alt=""
                className="ficon"
              />
              <img
                src="/assets/images/icon-twitter.svg"
                alt=""
                className="ficon"
              />
            </div>
            <p className="text-alata text-gray-500">
              © 2022 Loopstudios. All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default footerSection;
