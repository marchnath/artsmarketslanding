import Image from "next/image";

const AuthorSection = ({ ref }) => {
  return (
    <section
      className="bg-customGreyFour max-sm:bg-white"
      ref={ref}
      id="authors"
    >
      <div className="max-w-screen-xl mx-auto pt-20 pb-[100px] flex flex-col gap-20 max-sm:pt-4 max-sm:px-4 max-sm:pb-6 max-sm:gap-2.5">
        <Image
          src="/commas.png"
          alt="commas"
          height={54}
          width={70}
          className="object-contain pb-[60px] max-sm:pb-0 hidden max-sm:pt-3 max-sm:inline-block"
        />
        <p className="text-[32px] leading-[38.4px] font-medium text-customGreyEleven max-w-[1153px] w-full max-sm:text-[14px] max-sm:leading-[16.8px] max-sm:font-normal">
          <span className="text-customOrangeTwo max-sm:hidden">//</span>We’ve
          uncovered the strategies employed by institutional funds, bank
          traders, and their brokers. Our goal is to empower clients with the
          knowledge they need to confidently manage and grow their capital
        </p>
        <div className="flex flex-row gap-7 max-sm:flex-col max-sm:font-semibold">
          <div className="flex flex-row gap-9 max-sm:gap-4  max-sm:mx-auto">
            <Image
              src="/commas.png"
              alt="commas"
              height={158}
              width={223}
              className="object-contain pb-[60px] max-sm:hidden"
            />
            <div className="flex flex-col max-sm:flex-1">
              <Image
                src="/man1.png"
                alt="man"
                height={160}
                width={161}
                className="object-contain mb-4 rounded-lg"
              />
              <p className="mb-2 text-[14px] leading-[16.8px] font-semibold text-customGreyEleven">
                Michael Kunze
              </p>
              <p className="mb-2 text-[12px] leading-[14.4px] text-customGreyEleven">
                Trading Expert
              </p>
            </div>
            <div className="flex flex-col  max-sm:flex-1">
              <Image
                src="/man2.png"
                alt="man"
                height={160}
                width={161}
                className="object-contain mb-4 rounded-lg"
              />
              <p className="mb-2 text-[14px] leading-[16.8px] font-semibold text-customGreyEleven">
                Jack Khalib
              </p>
              <p className="mb-2 text-[12px] leading-[14.4px] text-customGreyEleven max-w-[161px]">
                Capital Manager Svenska Handelsbanken
              </p>
            </div>
          </div>
          <p className="text-customOrangeThree text-[20px] leading-[24px] font-semibold max-sm:order-[-1] max-sm:text-[14px] max-sm:leading-[16.8px]">
            Co-authors of the book (c)
          </p>
        </div>
      </div>
    </section>
  );
};

export default AuthorSection;
