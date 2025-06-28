import AboutMe from "@/components/sections/AboutMe";
import Background from "@/components/sections/Background";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";
import MyJourney from "@/components/sections/MyJourney";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import NavBar from "@/components/ui/NavBar";


export default function Home() {
  return (
    <>
      <Background />
      <NavBar />
      
      <Header />
      
      <AboutMe />
      <Skills />
      <MyJourney />
      <Projects />
      <Contact />

      <Footer />
    </>
  );
}
