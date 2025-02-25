import Navigation from "./components/Navigation";
import Cards from "./components/Card";

export default function Home() {
  return (
    <>

      <Navigation />
      
      <div className="flex flex-col ">
        <div className="relative lg:mt-0 md:mt-28 sm:mt-32 mt-36">
          <div className="row" >
          <Cards />            
          </div>
        </div>
      </div>
    </>
  );
}
