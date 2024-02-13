import Image from "next/image";
import Mainbanner from "./components/Mainbanner";
import About from "./components/About";
import Service from "./components/Service";
import Assestformation from "./components/Assestformation";
import Homeimage from "./components/Homeimage";
import Sightsheeting from "./components/Sightsheeting";
import Sight2 from "./components/Sight2";
import News from "./components/News";
import Footer from "./components/Footer";
import Googlemap from "./components/Googlemap";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "YUNIGE WORLD CLASS TRAVEL",
};
export default function Home() {
  return (
    <>
      <Mainbanner />
      <About />
      <Service />
      <Assestformation />
      <Homeimage />
      <Sightsheeting />
      <Sight2 />
      <News />
    </>
  );
}
