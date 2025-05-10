import Hero from "../Components/hero";



export default function Home() {
  return (
  <div  style={{ backgroundImage: 'url("/herobg.webp")' }}
  className="bg-cover bg-center text-white" >
   <Hero/>
  </div>
  );
}
