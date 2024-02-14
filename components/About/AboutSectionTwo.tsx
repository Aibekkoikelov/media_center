import Image from "next/image";
import SectionTitle from "@/components/Common/SectionTitle";

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex justify-center flex-wrap items-center">
          {/*<div className="w-full px-4 lg:w-1/2">*/}
          {/*  <div*/}
          {/*    className="wow fadeInUp relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"*/}
          {/*    data-wow-delay=".15s"*/}
          {/*  >*/}
          {/*    <Image*/}
          {/*      src="/images/about/logo.png"*/}
          {/*      alt="about image"*/}
          {/*      fill*/}

          {/*      className="drop-shadow-three dark:hidden dark:drop-shadow-none"*/}
          {/*    />*/}
          {/*    <Image*/}
          {/*      src="/images/about/logo.png"*/}
          {/*      alt="about image"*/}
          {/*      fill*/}
          {/*      className="drop-shadow-three hidden dark:block dark:drop-shadow-none"*/}
          {/*    />*/}
          {/*  </div>*/}
          {/*</div>*/}
          <div className="w-full lg:flex px-4 lg:w-full">
            <SectionTitle
                title="Наши Уникальные Преимущества:"
                paragraph=""
                mb="44px"
            />
            <div className="wow fadeInUp flex flex-wrap justify-around w-full" data-wow-delay=".2s">

              <div className="mb-9 max-w-[470px]">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Творческий Подход:
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  В Media Center мы не просто создаем рекламные конструкции, мы вдыхаем в них жизнь. Каждый проект – это искусство, воплощенное в реальность.
                </p>
              </div>
              <div className="mb-9 max-w-[470px]">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Индивидуальный Дизайн:
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Мы понимаем, что каждый бренд уникален. Наши дизайнеры работают индивидуально, чтобы подчеркнуть вашу уникальность и выделить вас из толпы.
                </p>
              </div>
              <div className="mb-1 max-w-[470px]">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Технологическое Совершенство:
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Мы следим за последними тенденциями и используем передовые технологии в производстве рекламной продукции. Качество и инновации - наши ключевые принципы.
                </p>
              </div>
              <div className="mb-1 max-w-[470px]">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Экологическая Ответственность:
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Мы стремимся к устойчивости. Материалы, которые мы используем, безопасны для окружающей среды, подчеркивая наше обязательство заботы о планете.
                </p>
              </div>
              <div className="mb-1 max-w-[470px]">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Широкий Спектр Услуг:
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  От лайтбоксов до билбордов, мы предоставляем полный спектр услуг по изготовлению наружной рекламы. Ваша реклама у нас в надежных руках.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
