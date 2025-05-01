import Link from 'next/link';
import { BsCamera2, BsFilm } from "react-icons/bs";
import { GiSaxophone } from "react-icons/gi";

const cardData = [
  {
    id: 1,
    icon: BsCamera2,
    title: 'Photo',
    description:
      'Capture moments with your camera. Photography is an art that immortalizes memories and tells stories.',
    contactLink: '/discover',
  },
  {
    id: 2,
    icon: BsFilm,
    title: 'Film',
    description:
      'Create cinematic masterpieces. Filmmaking combines storytelling with visuals to entertain and educate.',
    contactLink: '#',
  },
  {
    id: 3,
    icon: GiSaxophone,
    title: 'Music',
    description:
      'Let the sound of the music fill the air. Music is the language of the soul, and jazz is its freestyle expression.',
    contactLink: '#',
  },
];

const Cards: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center gap-6 flex-col sm:flex-row px-4 py-8">
      {cardData.map((card) => (
        <Link key={card.id} href={card.contactLink}>
          <div className="relative cursor-pointer text-center">
            <div
              className="bg-orange-600/25 blur-lg opacity-25 absolute rounded-xl h-full w-full -left-2 -top-2"
            ></div>

            <div
              className="h-48 w-48 sm:h-56 sm:w-56 md:h-64 md:w-64 lg:h-72 lg:w-72 bg-gray-950/50 border-t-8 border-r-8 border-gray-100/50 rounded-full shadow-lg relative space-y-4 flex flex-col justify-center items-center"
            >
              <div className="mb-2">
                <card.icon className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white" />
              </div>
              <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-100 uppercase">
                {card.title}
              </h2>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Cards;
