// components/Cards.tsx

import Link from 'next/link';
import { BsCamera2, BsFilm } from "react-icons/bs";
import { GiSaxophone } from "react-icons/gi";

// Data dictionary (array of card data)
const cardData = [
  {
    id: 1,
    icon: <BsCamera2 size={100} className="text-white" />,  
    title: 'Photography',
    description:
      'Capture moments with your camera. Photography is an art that immortalizes memories and tells stories.',
    contactLink: '#', 
  },
  {
    id: 2,
    icon: <BsFilm size={100} className="text-white" />,  
    title: 'Film Making',
    description:
      'Create cinematic masterpieces. Filmmaking combines storytelling with visuals to entertain and educate.',
    contactLink: '#', 
  },
  {
    id: 3,
    icon: <GiSaxophone size={100} className="text-white" />,  
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
              className="p-8 py-24 w-72 bg-gray-950/50 border-2 border-gray-100/50 rounded-xl shadow-lg relative space-y-7"
            >
              {/* <div className="bg-orange-600 h-3 w-16 ml-auto"></div> */}
              
              <div className="text-center mb-4 justify-items-center py-12 pb-8">{card.icon}</div>
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
