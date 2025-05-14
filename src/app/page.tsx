import Latest from "@/Components/latest";
import About from "../Components/about";
import Hero from "../Components/hero";



export default function Home() {
  return (
  <div  style={{ backgroundImage: 'url("/herobg.webp")' }}
  className="  text-white relative z-0  bg-fixed" >
   <Hero/>
   <About/>
   <Latest/>
  </div>
  );
}
