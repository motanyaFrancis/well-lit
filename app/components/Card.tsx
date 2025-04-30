import Link from 'next/link';
import { BsCamera2, BsFilm } from "react-icons/bs";
import { GiSaxophone } from "react-icons/gi";

// Data dictionary (array of card data)
const cardData = [
  {
    id: 1,
    icon: <BsCamera2 size={80} className="text-white" />,  
    title: 'Photo',
    description:
      'Capture moments with your camera. Photography is an art that immortalizes memories and tells stories.',
    contactLink: '/discover', 
  },
  {
    id: 2,
    icon: <BsFilm size={80} className="text-white" />,  
    title: 'Film',
    description:
      'Create cinematic masterpieces. Filmmaking combines storytelling with visuals to entertain and educate.',
    contactLink: '#', 
  },
  {
    id: 3,
    icon: <GiSaxophone size={80} className="text-white" />,  
    title: 'Music',
    description:
      'Let the sound of the music fill the air. Music is the language of the soul, and jazz is its freestyle expression.',
    contactLink: '#', 
  },
];

const Cards: React.FC = () => {
  return (
    <div className="min-h-screen  flex items-center justify-center flex-wrap ">
      
      {cardData.map((card) => (
        <Link key={card.id} href={card.contactLink}>
          
          <div id="card" className="relative m-4 cursor-pointer text-center">
            
            <div
              id="outline"
              className="bg-orange-600/25 blur-lg opacity-25 absolute rounded-xl h-full w-full -left-2 -top-2"
            ></div>
            
            <div
              id="content"
              className="h-72 w-72  max-md:h-56 max-md:w-56 bg-gray-950/50 border-t-8 border-r-8 border-gray-100/50 rounded-full shadow-lg relative space-y-4 flex flex-col justify-center"
            >
              {/* <div className="bg-orange-600 h-3 w-16 ml-auto"></div> */}
              
              <div className="text-center mb-4 justify-items-center ">{card.icon}</div>
              <h2 className="text-2xl font-bold text-gray-100 uppercase">{card.title}</h2>
              {/* <p className="text-gray-100">{card.description}</p> */}
              {/* <span className="flex items-center mt-4 text-gray-100">
                <span>Explore</span>
                <svg
                  className="w-4 h-4 ml-3 text-gray-100"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span> */}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Cards;
