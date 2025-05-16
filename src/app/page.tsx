import Latest from "@/Components/latest";
import About from "../Components/about";
import Hero from "../Components/hero";
import Projects from "@/Components/project";
import Contact from "@/Components/contact";



export default function Home() {
  return (
  <div  style={{ backgroundImage: 'url("/herobg.webp")' }}
  className="  text-white relative z-0  bg-fixed" >
   <Hero/>
   <About/>
   <Latest/>
   <Projects/>
   <Contact/>
  </div>
  );
}
