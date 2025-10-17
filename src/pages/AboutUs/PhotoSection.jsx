import React from 'react';

const PhotoSection = () => {
  // photos data (make each id unique)
  const data = [
    { id: 1, img: "https://cdn.pixabay.com/photo/2019/09/12/18/29/street-cafe-4472312_1280.jpg" },
    { id: 2, img: "https://cdn.pixabay.com/photo/2020/03/30/10/18/electric-scooter-4983759_1280.jpg" },
    { id: 3, img: "https://cdn.pixabay.com/photo/2017/05/19/12/40/beard-2326422_1280.jpg" },
    { id: 4, img: "https://cdn.pixabay.com/photo/2023/08/07/03/59/coffee-8174279_1280.jpg" },
    { id: 5, img: "https://cdn.pixabay.com/photo/2016/03/26/23/23/starbucks-1281880_1280.jpg" },
    { id: 6, img: "https://cdn.pixabay.com/photo/2024/06/20/11/45/cafe-8841955_1280.jpg" },
    { id: 7, img: "https://cdn.pixabay.com/photo/2021/07/13/18/58/coffee-6464307_1280.jpg" },
    { id: 8, img: "https://cdn.pixabay.com/photo/2017/07/15/13/45/french-restaurant-2506490_1280.jpg" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-6 py-6 mt-6">
      {data.map((item) => (
        <div
          key={item.id}
          className="overflow-hidden shadow-md cursor-pointer hover:scale-105 transition-transform duration-300"
        >
          <img
            src={item.img}
            alt={`photo-${item.id}`}
            className="w-full h-64 object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default PhotoSection;
