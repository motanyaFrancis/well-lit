// app/discover/components/ImageGrid.tsx
import React from 'react';

const ImageGrid: React.FC = () => {
    return (
        <div className="container_gallery pt-3"> {/* Use global class name */}
            <div className="horizontal">
                <img src="https://images.unsplash.com/photo-1506252374453-ef5237291d83?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=968&q=80" alt="1" />
            </div>
            <div className="vertical">
                <img src="https://images.unsplash.com/photo-1536273176101-b3810e5cb3c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000&q=80" alt="2" />
            </div>
            <div className="horizontal">
                <img src="https://images.unsplash.com/photo-1524546101258-e99b0826ea9c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1936&q=80" alt="3" />
            </div>
            <div className="big">
                <img src="https://images.unsplash.com/photo-1486239154832-a989a601c41d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt="4" />
            </div>
            <div className="vertical">
                <img src="https://images.unsplash.com/photo-1519458524098-335b2a5747b2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt="5" />
            </div>
            <div>
                <img src="https://images.unsplash.com/photo-1548737787-a776beb45cfd?ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80" alt="6" />
            </div>
            <div className="vertical">
                <img src="https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="7" />
            </div>
            <div>
                <img src="https://images.unsplash.com/photo-1474218861938-d6b14818c8e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80" alt="8" />
            </div>
            <div>
                <img src="https://images.unsplash.com/photo-1502842113467-03fdcac39fe5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt="8.1" />
            </div>
            <div>
                <img src="https://images.unsplash.com/photo-1548599042-0df640181771?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="9" />
            </div>
            <div className="big">
                <img src="https://images.unsplash.com/photo-1515405969538-5642ed9d0cc4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80" alt="10" />
            </div>
            <div>
                <img src="https://images.unsplash.com/photo-1519999482648-25049ddd37b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=926&q=80" alt="11" />
            </div>
            <div className="horizontal">
                <img src="https://images.unsplash.com/photo-1460627390041-532a28402358?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" alt="12" />
            </div>
            <div>
                <img src="https://images.unsplash.com/photo-1514673309919-5998bbbadf7f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=688&q=80" alt="12.1" />
            </div>
            <div className="horizontal">
                <img src="https://images.unsplash.com/photo-1543335785-8aadf6d8183c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80" alt="13" />
            </div>
        </div>
    );
};

export default ImageGrid;