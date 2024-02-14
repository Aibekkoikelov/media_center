import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";
import SectionTitle from "@/components/Common/SectionTitle";

export const metadata: Metadata = {
  title: "Контакты",
  description: "Контакты компании",
  // other metadata
};

const ContactPage = () => {
  return (
    <div className={"w-full"}>
      <Breadcrumb
          crumbName={"Контакты"}
          // pageName="Контакты"
          description=""

      />
        <SectionTitle
            title="Контакты"
            paragraph=""
            mb="44px"
           center
        />
        <div className={"w-full mb-2 text-center "}>
            <a href="tel:+996755204080">
               <span className={"text-4xl font-bold"}>0 755 20 40 80</span>
            </a>
        </div>
        <div className={"w-full text-center  "}>
            <a href="tel:+996703997260">
                <span className={"text-4xl font-bold"}>0 703 99 72 60</span>
            </a>
        </div>
      <Contact />
    </div>
  );
};

export default ContactPage;
