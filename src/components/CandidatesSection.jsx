import React from 'react';

const CANDIDATES = [
  {
    img: './assets/blurred_vision.png',
    alt: 'Cloudy or blurred vision',
    label: 'Have cloudy or blurred vision',
  },
  {
    img: './assets/trouble_reading.png',
    alt: 'Difficulty reading or recognizing faces',
    label: 'Find it difficult to read or recognize faces clearly',
  },
  {
    img: './assets/over_50.png',
    alt: 'Light sensitivity',
    label: 'Feel more sensitive to light than before',
  },
  {
    img: './assets/reduce_glass.png',
    alt: 'Cataract changes',
    label: 'Have been told you may have cataract changes',
  },
  {
    img: './assets/stitch_free.png',
    alt: 'Timely diagnosis',
    label: 'Want timely diagnosis before vision gets worse',
  },
  {
    img: './assets/yellowish.png',
    alt: 'Expert evaluation',
    label: 'Need expert evaluation with advanced eye scanning',
  },
];

export default function CandidatesSection() {
  return (
    <section>
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#002d5c] mb-2">
        Who Should Consider Cataract Consultation?
      </h2>
      <p className="text-gray-600 mb-6 md:mb-8 text-sm md:text-base">
        You should book a cataract evaluation if you:
      </p>

      {/* Changed to exactly match the framed look from the screenshot, but using brand Teal */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
        {CANDIDATES.map((item, idx) => (
          <div
            key={idx}
            className="bg-[#00829b] rounded-xl md:rounded-[1.25rem] p-3 sm:p-4 md:p-5 shadow-md hover:-translate-y-1 hover:shadow-xl transition-all duration-300 flex flex-col group cursor-pointer h-full"
          >
            {/* Image takes top area inside the card padding wrapper */}
            <div className="h-32 sm:h-48 md:h-[200px] rounded-lg md:rounded-xl overflow-hidden mb-3 md:mb-5 border border-white/10">
              <img
                src={item.img}
                alt={item.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>

            {/* Label inside the card background context */}
            <div className="flex-1 flex items-start justify-center text-center px-1 md:px-2 pb-2 md:pb-4 pt-1">
              <p className="text-white font-bold text-xs md:text-[15px] leading-snug">
                {item.label}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
