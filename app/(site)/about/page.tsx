import { AboutPage } from "@/components";
import { getAbout } from "../utils";

const About = async () => {
  const about = await getAbout();
  return <AboutPage about={about} />;
};

export default About;
