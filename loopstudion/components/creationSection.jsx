const creationSection = () => {
  return (
    <section id="creation">
      <div className="container mx-auto px-6 md:px-0">
        <div className="flex flex-col md:flex-row md:justify-between justify-center items-center mb-6 md:mx-24">
          <p className="font-sans uppercase font-light md:text-4xl text-4xl text-center text-black md:text-left">
            Our Creations
          </p>
          <button className="px-16 py-3 w-full hidden md:block md:w-auto border-2 border-black bg-white text-black uppercase font-alata font-bold text-xl tracking-widest hover:bg-black hover:text-white">
            See All
          </button>
        </div>
        {/* row 1 */}
        <div className="flex flex-col md:flex-row md:justify-between gap-4 md:mx-24">
          {/* image 1 */}
          <div className="group relative overflow-hidden">
            {/* Desktop Image */}
            <img
              src="/assets/images/desktop/image-deep-earth.jpg"
              alt=""
              className="transform transition hidden md:block group-hover:opacity-40 group-hover:scale-110 duration-300"
            />
            {/* Mobile Image */}
            <img
              src="/assets/images/mobile/image-deep-earth.jpg"
              alt=""
              className="transform transition group-hover:opacity-40 group-hover:scale-110 md:hidden duration-300"
            />
            {/* gradient */}
            <div className="item-gradient"></div>
            <p className="md:px-12 md:py-12 pl-6 py-6 max-w-[2%] text-white font-sans md:max-w-xs text-3xl absolute left-0 bottom-0 uppercase transform transition group-hover:scale-110 group-hover:text-black duration-300">
              Deep Earth
            </p>
          </div>
          {/* image 2 */}
          <div className="group relative overflow-hidden">
            {/* Desktop Image */}
            <img
              src="/assets/images/desktop/image-night-arcade.jpg"
              alt=""
              className="transform transition hidden md:block group-hover:opacity-40 group-hover:scale-110 duration-300"
            />
            {/* Mobile Image */}
            <img
              src="/assets/images/mobile/image-night-arcade.jpg"
              alt=""
              className="transform transition group-hover:opacity-40 group-hover:scale-110 md:hidden duration-300"
            />
            {/* gradient */}
            <div className="item-gradient"></div>
            <p className="md:px-12 md:py-12 pl-6 py-6 max-w-[2%] text-white font-sans md:max-w-xs text-3xl absolute left-0 bottom-0 uppercase transform transition group-hover:scale-110 group-hover:text-black duration-300">
              Night Arcade
            </p>
          </div>
          {/* image 3 */}
          <div className="group relative overflow-hidden">
            {/* Desktop Image */}
            <img
              src="/assets/images/desktop/image-soccer-team.jpg"
              alt=""
              className="transform transition hidden md:block group-hover:opacity-40 group-hover:scale-110 duration-300"
            />
            {/* Mobile Image */}
            <img
              src="/assets/images/mobile/image-soccer-team.jpg"
              alt=""
              className="transform transition group-hover:opacity-40 group-hover:scale-110 md:hidden duration-300"
            />
            {/* gradient */}
            <div className="item-gradient"></div>
            <p className="md:px-12 md:py-12 pl-6 py-6 max-w-[50%] text-white font-sans md:max-w-xs text-3xl absolute left-0 bottom-0 uppercase transform transition group-hover:scale-110 group-hover:text-black duration-300">
              Soccer Team VR
            </p>
          </div>
          {/* image 4 */}
          <div className="group relative overflow-hidden">
            {/* Desktop Image */}
            <img
              src="/assets/images/desktop/image-grid.jpg"
              alt=""
              className="transform transition hidden md:block group-hover:opacity-40 group-hover:scale-110 duration-300"
            />
            {/* Mobile Image */}
            <img
              src="/assets/images/mobile/image-grid.jpg"
              alt=""
              className="transform transition group-hover:opacity-40 group-hover:scale-110 md:hidden duration-300"
            />
            {/* gradient */}
            <div className="item-gradient"></div>
            <p className="md:px-12 md:py-12 pl-6 py-6 max-w-[2%] text-white font-sans md:max-w-xs text-3xl absolute left-0 bottom-0 uppercase transform transition group-hover:scale-110 group-hover:text-black duration-300">
              The Grid
            </p>
          </div>
        </div>
        {/* row 2 */}
        <div className="flex flex-col md:flex-row md:justify-between gap-4 md:mx-24 mt-10">
          {/* image 1 */}
          <div className="group relative overflow-hidden">
            {/* Desktop Image */}
            <img
              src="/assets/images/desktop/image-from-above.jpg"
              alt=""
              className="transform transition hidden md:block group-hover:opacity-40 group-hover:scale-110 duration-300"
            />
            {/* Mobile Image */}
            <img
              src="/assets/images/mobile/image-from-above.jpg"
              alt=""
              className="transform transition group-hover:opacity-40 group-hover:scale-110 md:hidden duration-300"
            />
            {/* gradient */}
            <div className="item-gradient"></div>
            <p className="md:px-12 md:py-12 pl-6 py-6 max-w-[70%] text-white font-sans md:max-w-xs text-3xl absolute left-0 bottom-0 uppercase transform transition group-hover:scale-110 group-hover:text-black duration-300">
              From up above VR
            </p>
          </div>
          {/* image 2 */}
          <div className="group relative overflow-hidden">
            {/* Desktop Image */}
            <img
              src="/assets/images/desktop/image-pocket-borealis.jpg"
              alt=""
              className="transform transition hidden md:block group-hover:opacity-40 group-hover:scale-110 duration-300"
            />
            {/* Mobile Image */}
            <img
              src="/assets/images/mobile/image-pocket-borealis.jpg"
              alt=""
              className="transform transition group-hover:opacity-40 group-hover:scale-110 md:hidden duration-300"
            />
            {/* gradient */}
            <div className="item-gradient"></div>
            <p className="md:px-12 md:py-12 pl-6 py-6 max-w-[2%] text-white font-sans md:max-w-xs text-3xl absolute left-0 bottom-0 uppercase transform transition group-hover:scale-110 group-hover:text-black duration-300">
              Pocket Borealis
            </p>
          </div>
          {/* image 3 */}
          <div className="group relative overflow-hidden">
            {/* Desktop Image */}
            <img
              src="/assets/images/desktop/image-curiosity.jpg"
              alt=""
              className="transform transition hidden md:block group-hover:opacity-40 group-hover:scale-110 duration-300"
            />
            {/* Mobile Image */}
            <img
              src="/assets/images/mobile/image-curiosity.jpg"
              alt=""
              className="transform transition group-hover:opacity-40 group-hover:scale-110 md:hidden duration-300"
            />
            {/* gradient */}
            <div className="item-gradient"></div>
            <p className="md:px-12 md:py-12 pl-6 py-6 max-w-[2%] text-white font-sans md:max-w-xs text-3xl absolute left-0 bottom-0 uppercase transform transition group-hover:scale-110 group-hover:text-black duration-300">
              The Curiosity
            </p>
          </div>
          {/* image 4 */}
          <div className="group relative overflow-hidden">
            {/* Desktop Image */}
            <img
              src="/assets/images/desktop/image-fisheye.jpg"
              alt=""
              className="transform transition hidden md:block group-hover:opacity-40 group-hover:scale-110 duration-300"
            />
            {/* Mobile Image */}
            <img
              src="/assets/images/mobile/image-fisheye.jpg"
              alt=""
              className="transform transition group-hover:opacity-40 group-hover:scale-110 md:hidden duration-300"
            />
            {/* gradient */}
            <div className="item-gradient"></div>
            <p className="md:px-12 md:py-12 pl-6 py-6 max-w-[50%] text-white font-sans md:max-w-xs text-3xl absolute left-0 bottom-0 uppercase transform transition group-hover:scale-110 group-hover:text-black duration-300">
              Make it Fisheye
            </p>
          </div>
        </div>
        <button className="px-16 py-3 w-full md:hidden md:w-auto border-2 border-black bg-white text-black uppercase font-alata font-bold text-xl tracking-widest hover:bg-black hover:text-white mt-6">
          See All
        </button>
      </div>
    </section>
  );
};

export default creationSection;
