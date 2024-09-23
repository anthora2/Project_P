// import React from 'react';
// // import NavBar from '../../components/navbar';
// // import NavBar from '../components/navbar';
// import Navbar from '../app/components/navbar';
// import StockImage from '../app/images/car_people_stock.jpg';

// const Home: React.FC = () => {
//   return (
//     <div className="min-h-screen w-full bg-[#f36259]">
//       <Navbar />
//       <h1 className="text-white text-4xl text-center pt-20">Home</h1>
//       <div>

//       </div>
//     </div>
//   );
// }

import React from 'react';
import Image from 'next/image';
import Navbar from '../app/components/navbar';
import StockImage from '../app/images/car_people_stock.jpg';  // Adjust path if needed

const Home: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-white">
      <Navbar />
      {/* <h1 className="text-white text-4xl text-center pt-20">Home</h1> */}
      <div className="w-full bg-[#f36259] py-8 px-4 flex justify-center items-center">
        {/* Image and Text Container */}
        <div className="flex items-center space-x-4 max-w-screen-lg w-full">
          {/* Stock Image */}
          <Image
            src={StockImage}
            alt="Stock Image"
            className="h-24 w-24 rounded-lg"
            width={96}  // Width in pixels
            height={96}  // Height in pixels
          />
          {/* Text */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Find, Rent, Park</h2>
            <p className="text-lg text-gray-700">Discover your ideal car rental with ease.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;


