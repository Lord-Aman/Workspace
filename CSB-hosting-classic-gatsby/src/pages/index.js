import "assets/css/react-slick.css";
import Carousel from "components/carousel/corousel";
import Layout from "components/layout";
import { StickyProvider } from "contexts/app/app.provider";
import "rc-drawer/assets/index.css";
import React from "react";
import Blogs from "sections/blog";
import Features from "sections/Features/features";
import Services from "sections/OurServices/services";
import "typeface-bree-serif";
import "typeface-dm-sans";
import Clients from "../sections/OurClients/Clients";
import TypingText from "../sections/TypingText/TypingText";
import Testimonials from "../sections/Testimonials/testimonials";
import BackgroundAnimation from "components/Animations/backgroundAnimation";
import Counter from "sections/Counter/Counter";
import FlyingText from "components/FlyingText/FlyingText";

export default function IndexPage() {
  return (
    <StickyProvider>
      <BackgroundAnimation />
      <Layout>
        <FlyingText />
        <Carousel />
        {/* How We Work */}
        <Features />
        {/* How We Work Ends Here  */}
        <TypingText />
        <Services />
        <Testimonials />
        <Clients />
        <Counter />
        <Blogs />
      </Layout>
    </StickyProvider>
  );
}
