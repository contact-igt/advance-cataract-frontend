import React, { useRef } from 'react';
import { Play, ChevronLeft, ChevronRight } from 'lucide-react';

const TESTIMONIALS = [
  {
    img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400',
    name: 'Chaturvedi', procedure: 'Cataract Surgery',
    quote: 'I had vision problems in my left eye for over two months, and glasses didn\'t help. I was scared of the injections before surgery, but the doctors guided me through it...',
  },
  {
    img: 'https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?auto=format&fit=crop&q=80&w=400',
    name: 'Karnal Charanjit Nagarath', procedure: 'Cataract Surgery',
    quote: 'I had trouble seeing colors and was diagnosed with cataracts in both eyes. I chose Advanced Focus and Dr. Prateek Tiwari for surgery. Both surgeries were smooth...',
  },
  {
    img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400',
    name: 'Kamlesh Agrawal', procedure: 'Cataract Surgery',
    quote: 'I struggled with vision problems for about a year before consulting Dr. Prateek. The cataract surgery was painless and successful. Seven days later, my distance vision is perfect.',
  },
  {
    img: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=400',
    name: 'Snehal Rao', procedure: 'Laser Eye Surgery',
    quote: 'The staff was extremely professional and the procedure was quicker than I thought. Highly recommend Dr. Tiwari to anyone dealing with blurry vision issues!',
  }
];

export default function VideoTestimonials() {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      // Scroll by card width roughly (approx 350px)
      scrollRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  return (
    <section>
      <h2 className="text-[28px] md:text-3xl font-bold text-[#002d5c] mb-8">
        Insightful Words from Healthcare Heroes :
      </h2>

      {/* Carousel Container */}
      <div 
        ref={scrollRef} 
        className="flex overflow-x-auto gap-6 pb-6 snap-x snap-mandatory scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <style>{`
          /* Hide scrollbar for Chrome, Safari and Opera */
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
        `}</style>
        
        {TESTIMONIALS.map((t, idx) => (
          <div 
            key={idx} 
            className="snap-center sm:snap-start shrink-0 w-[85%] sm:w-[calc(50%-12px)] bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.05)] flex flex-col group"
          >
            {/* Image & Play Button wrapper */}
            <div className="relative h-72 sm:h-80 md:h-96 bg-gray-900 cursor-pointer overflow-hidden p-[10px] sm:p-3 pb-0 rounded-t-2xl">
              <img 
                src={t.img} 
                alt={`${t.name} Video`} 
                className="w-full h-full object-cover rounded-xl" 
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-14 h-14 bg-[#ee2020] rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                  <Play className="w-6 h-6 text-white ml-1 fill-current" />
                </div>
              </div>

              {/* Patient Name Badge positioned exactly as per screenshot */}
              <div className="absolute bottom-4 left-0 right-0 flex justify-center">
                <div className="bg-gray-800/90 backdrop-blur-sm text-white font-bold py-2 px-6 rounded-md shadow-md text-sm md:text-base tracking-wide z-10 w-[85%] text-center">
                  {t.name}
                </div>
              </div>
            </div>

            {/* Surgery Type Badge */}
            <div className="bg-[#00829b] py-3 text-center transition-colors group-hover:bg-[#002d5c]">
              <span className="font-bold text-white text-[15px]">{t.procedure}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Carousel Navigation Buttons */}
      <div className="flex justify-end items-center gap-3 mt-4 mr-1">
        <button 
          onClick={scrollLeft}
          className="w-10 h-10 rounded-full bg-[#002d5c] hover:bg-[#00829b] text-white flex items-center justify-center shadow-md transition-all hover:scale-110"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button 
          onClick={scrollRight}
          className="w-10 h-10 rounded-full bg-[#002d5c] hover:bg-[#00829b] text-white flex items-center justify-center shadow-md transition-all hover:scale-110"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}
