import Background from "@/components/sections/Background";
import Header from "@/components/sections/Header";
import LangToggle from "@/components/ui/LangToggle";
import NavBar from "@/components/ui/NavBar";

export default function Home() {
  return (
    <>
      <Background />
      <NavBar />
      <LangToggle />
      <Header />
    </>
  );
}
