'use client';

import Image from 'next/image';
import BookTour from './BookTour';

const MeetShane: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto my-16 p-8 bg-white rounded-2xl shadow-xl">
      {/* Heading */}
      <h2 className="text-4xl font-bold text-center mb-8"
      style={{ fontFamily: "Poppins, sans-serif" }}>
        Meet Shane, Your Tour Guide
      </h2>

      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Image Section */}
        <div className="flex-shrink-0 w-48 h-48 relative mx-auto md:mx-0">
          <Image
            src="/shane.webp" // Replace with a valid image path.
            alt="Shane, your tour guide"
            fill
            className="rounded-full object-cover border-4 border-indigo-500 shadow-lg"
          />
        </div>

        {/* Text Content */}
        <div className="flex-1">
          <p className="text-lg text-gray-800 leading-relaxed mb-4">
            Hello! I'm Shane, a Japanese-speaking Australian guide with over
            <span className="font-bold text-indigo-600"> 17 years of experience</span>. My mission is to provide you with an authentic Australian experience here in Cairns, surrounded by World Heritage-listed seas, mountains, and vibrant local culture.
          </p>
          <p className="text-lg text-gray-800 leading-relaxed mb-4">
            On our tours, you'll explore the breathtaking Atherton Tablelands,
            enjoy local delicacies like cheese, chocolate, and wine, and
            discover the unique beauty of Australia's landscapes—from serene
            rainforests to rugged outback terrain.
          </p>
          <p className="text-lg text-gray-800 leading-relaxed">
            Join me for an unforgettable journey through Cairns' nature, people,
            and wildlife. I look forward to welcoming you and sharing the magic
            of Australia!
          </p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-8">
        <BookTour buttonText="Book a Tour with Shane" />
      </div>
    </div>
  );
};

export default MeetShane;