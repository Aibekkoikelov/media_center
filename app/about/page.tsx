import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Наше Преимущества",
  description: "С нашим богатым опытом в сфере рекламы, мы являемся лидерами в предоставлении комплексных решений. За многие годы работы мы успешно реализовали проекты в различных направлениях, что подтверждает наш профессионализм и надежность. Нам доверяют клиенты, и мы гордимся нашим вкладом в их успехи. Развивайтесь вместе с нами – ваш успех наш приоритет! 🌐",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        // pageName="Наше Преимущество"
        crumbName={"Наше Преимущество"}
        // description="Добро пожаловать в Media Center,
        // вашего надежного партнера в создании эффективной и
        // креативной наружной рекламы!
        // Мы – команда профессионалов,
        // объединенных страстью к творчеству и стремлением сделать ваш бренд заметным."
      />
      {/*<AboutSectionOne />*/}
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
