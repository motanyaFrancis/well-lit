import Image from 'next/image';
import React from 'react';

const ImageGrid: React.FC = () => {
  return (
    <div className="container_gallery pt-3">
      <div className="horizontal">
        <Image
        className='img_grid'
          src="https://images.unsplash.com/photo-1506252374453-ef5237291d83?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=968&q=80"
          alt="1"
          width={968}
          height={645}
        />
      </div>
      <div className="vertical">
        <Image
        className='img_grid'
          src="https://images.unsplash.com/photo-1536273176101-b3810e5cb3c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000&q=80"
          alt="2"
          width={2000}
          height={1333}
        />
      </div>
      <div className="horizontal">
        <Image
        className='img_grid'
          src="https://images.unsplash.com/photo-1524546101258-e99b0826ea9c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1936&q=80"
          alt="3"
          width={1936}
          height={1296}
        />
      </div>
      <div className="big">
        <Image
        className='img_grid'
          src="https://images.unsplash.com/photo-1486239154832-a989a601c41d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
          alt="4"
          width={634}
          height={951}
        />
      </div>
      {/* ... and so on for the rest of your images */}
      <div className="vertical">
        <Image
        className='img_grid'
          src="https://images.unsplash.com/photo-1519458524098-335b2a5747b2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
          alt="5"
          width={634}
          height={951}
        />
      </div>
      <div>
        <Image
        className='img_grid'
          src="https://images.unsplash.com/photo-1548737787-a776beb45cfd?ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80"
          alt="6"
          width={701}
          height={934}
        />
      </div>
      <div className="vertical">
        <Image
        className='img_grid'
          src="https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
          alt="7"
          width={634}
          height={951}
        />
      </div>
      <div>
        <Image
        className='img_grid'
          src="https://images.unsplash.com/photo-1474218861938-d6b14818c8e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80"
          alt="8"
          width={1489}
          height={993}
        />
      </div>
      <div>
        <Image
        className='img_grid'
          src="https://images.unsplash.com/photo-1502842113467-03fdcac39fe5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
          alt="8.1"
          width={634}
          height={423}
        />
      </div>
      <div>
        <Image
        className='img_grid'
          src="https://images.unsplash.com/photo-1548599042-0df640181771?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
          alt="9"
          width={1350}
          height={900}
        />
      </div>
      <div className="big">
        <Image
        className='img_grid'
          src="https://images.unsplash.com/photo-1515405969538-5642ed9d0cc4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80"
          alt="10"
          width={675}
          height={1012}
        />
      </div>
      <div>
        <Image
        className='img_grid'
          src="https://images.unsplash.com/photo-1519999482648-25049ddd37b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=926&q=80"
          alt="11"
          width={926}
          height={617}
        />
      </div>
      <div className="horizontal">
        <Image
        className='img_grid'
          src="https://images.unsplash.com/photo-1460627390041-532a28402358?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          alt="12"
          width={1950}
          height={1300}
        />
      </div>
      <div>
        <Image
        className='img_grid'
          src="https://images.unsplash.com/photo-1514673309919-5998bbbadf7f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=688&q=80"
          alt="12.1"
          width={688}
          height={1032}
        />
      </div>
      <div className="horizontal">
        <Image
        className='img_grid'
          src="https://images.unsplash.com/photo-1543335785-8aadf6d8183c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80"
          alt="13"
          width={1489}
          height={993}
        />
      </div>
    </div>
  );
};

export default ImageGrid;