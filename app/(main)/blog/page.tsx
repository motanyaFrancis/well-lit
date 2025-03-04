import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Stories',
};

const Blog: React.FC = () => {
  const posts = [
    {
      title: "Dr. Abdullah Abdullah's Presidential Election Campaign",
      author: "Ahmad Sultani",
      date: { day: "25", month: "May" },
      category: "Film",
      readTime: "5 mins read",
      imageUrl: "https://media.gettyimages.com/photos/at-the-the-network-tolo-televised-debate-dr-abdullah-abdullah-with-picture-id1179614034?k=6&m=1179614034&s=612x612&w=0&h=WwIX3RMsOQEn5DovD9J3e859CZTdxbHHD3HRyrgU3A8=",
    },
    {
      title: "Afghanistan's President Ashraf Ghani Speaks At The Council",
      date: { day: "10", month: "Mar" },
      category: "Photography",
      imageUrl: "https://media.gettyimages.com/photos/ashraf-ghani-afghanistans-president-speaks-at-the-council-on-foreign-picture-id850794338?k=6&m=850794338&s=612x612&w=0&h=b_XBw5S38Cioslqr6VL3e36cWQU205IsInqDXZpDOD4=",
    },
    {
      title: "Middle East Participants Gather In Warsaw",
      date: { day: "20", month: "Jan" },
      category: "Film",
      imageUrl: "https://media.gettyimages.com/photos/afghan-president-ashraf-ghani-arrives-to-the-welcoming-ceremony-the-picture-id694155252?k=6&m=694155252&s=612x612&w=0&h=IIJPetzJL-hAgPkE4hm2wUKvO4YOav8jJp484CgLEUs=",
    },
    {
      title: "Afghan President Ashraf Ghani Visits Jalalabad",
      date: { day: "25", month: "May" },
      category: "Music",
      imageUrl: "https://media.gettyimages.com/photos/afghan-president-ashraf-ghani-speaks-during-a-gathering-in-jalalabad-picture-id1205021905?k=6&m=1205021905&s=612x612&w=0&h=nwAH1XuZxF_H4f6LfHv-lgqtZe0h1tVFXfzhpMwFqao=",
    },
    {
      title: "Coffin Of Slain Japanese Doctor Nakamura Transported To Japan",
      date: { day: "25", month: "May" },
      category: "Music",
      imageUrl: "https://media.gettyimages.com/photos/afghanistan-president-ashraf-ghani-carries-the-coffin-of-slain-picture-id1192749054?k=6&m=1192749054&s=612x612&w=0&h=CV-WfSEmfPOf3FdU934-JcUPkeCXOv7se-InwdewvPo=",
    },
  ];

  const categoryColors: Record<string, string> = {
    Film: 'bg-blue-600',
    Photography: 'bg-orange-600',
    Music: 'bg-yellow-500',
  };

  return (
    <section className="py-24 relative xl:mr-0 lg:mr-5 mr-0 top-16">
      <div className="max-w-screen mx-auto sm:p-10">
        <div className="lg:flex">
          <div className="lg:w-6/12">
            <div
              className="relative h-[100%] bg-cover bg-center flex items-end text-left"
              style={{ backgroundImage: `url(${posts[0].imageUrl})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900"></div>
              <div className="absolute top-4 left-6 right-6 flex justify-between items-center">
                <a href="#" className={`text-xs text-white px-5 py-2 uppercase hover:bg-white hover:text-indigo-600 transition ${categoryColors[posts[0].category]}`}>
                  {posts[0].category}
                </a>
                <div className="text-white text-center">
                  <span className="text-3xl font-semibold">{posts[0].date.day}</span>
                  <span className="block -mt-1">{posts[0].date.month}</span>
                </div>
              </div>
              <main className="p-8 z-10">
                <a href="#" className="text-xl font-semibold text-white hover:underline">{posts[0].title}</a>
                <p className="text-gray-200 text-xs mt-1">By <a href="#" className="text-white font-semibold hover:underline">{posts[0].author}</a> | {posts[0].readTime}</p>
              </main>
            </div>
          </div>
          <div className="lg:w-6/12 grid grid-cols-2 grid-rows-2 gap-0">
            {posts.slice(1).map((post, index) => (
              <div key={index} className="relative h-[300px] bg-cover bg-center flex items-end text-left" style={{ backgroundImage: `url(${post.imageUrl})` }}>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900"></div>
                <div className="absolute top-2 left-5 right-5 flex justify-between items-center">
                  <a href="#" className={`text-xs text-white px-5 py-2 uppercase hover:bg-white hover:text-indigo-600 transition ${categoryColors[post.category]}`}>
                    {post.category}
                  </a>
                  <div className="text-white text-center">
                    <span className="text-3xl font-semibold">{post.date.day}</span>
                    <span className="block -mt-1">{post.date.month}</span>
                  </div>
                </div>
                <main className="p-5 z-10">
                  <a href="#" className="text-md font-medium text-white hover:underline">{post.title}</a>
                </main>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
