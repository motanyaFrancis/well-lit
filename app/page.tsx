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
            {/* <div className="text-holder ">
              <div className="text text-white">
                Hello world.
              </div>
            </div> */}
          </div>

        </div>

      </div>

      {/* </div> */}
    </>
  );
}
