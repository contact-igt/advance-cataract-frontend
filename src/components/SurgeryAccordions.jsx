import React, { useState } from 'react';
import { ChevronDown, Plus, Minus } from 'lucide-react';

const SURGERY_ITEMS = [
  {
    title: 'Customized Cataract Evaluation & Planning',
    content: 'Every cataract case is different. At Advanced Focus Eye Hospital, your eyes are carefully assessed using advanced diagnostic systems so the treatment can be tailored to factors such as vision needs, eye structure, pressure, and dryness. This detailed planning helps improve safety, accuracy, and visual outcomes.',
  },
  {
    title: 'Minimally Invasive Cataract Treatment',
    content: 'Our approach emphasizes minimally invasive techniques and modern ophthalmic technology to make cataract treatment safer, more precise, and more comfortable. The goal is faster recovery, better clarity, and confident care at every step.',
  },
];

export default function SurgeryAccordions() {
  const [openIndex, setOpenIndex] = useState(1);

  return (
    <section className="bg-[#fdf6e3] Advanced Cataract Surgery at Advanced Focus section bg apply this color] p-6 sm:p-8 md:p-10 rounded-2xl md:rounded-[2rem] border border-gray-100 shadow-sm">
      <h2 className="text-2xl md:text-3xl font-bold text-[#002d5c] mb-4 md:mb-6">
        Advanced Cataract Treatment at Advanced Focus
      </h2>
      <p className="text-sm md:text-base text-gray-600 mb-6 md:mb-8 leading-relaxed">
        At Advanced Focus Eye Hospital, cataract care is not just about removing a cloudy lens — it is about restoring vision with precision, safety, and confidence. Guided by expert evaluation, advanced technology, and a minimally invasive approach, we aim to deliver the right treatment for each patient's unique eye condition.
      </p>

      <div className="space-y-3 md:space-y-4">
        {SURGERY_ITEMS.map((item, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className={`rounded-xl overflow-hidden transition-all duration-300 ${
                isOpen
                  ? 'bg-white shadow-md border border-[#00829b]/20'
                  : 'bg-white border border-gray-100 hover:shadow-sm'
              }`}
            >
              <button
                onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                className="w-full text-left px-5 md:px-6 py-4 md:py-5 flex items-center justify-between gap-4 focus:outline-none"
              >
                <span className={`text-[15px] md:text-base font-bold transition-colors duration-300 ${isOpen ? 'text-[#00829b]' : 'text-[#002d5c]'}`}>
                  {item.title}
                </span>
                <div className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-[#00829b] text-white' : 'bg-gray-100 text-[#002d5c]'}`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </div>
              </button>
              
              <div 
                className={`transition-all duration-500 ease-in-out ${
                  isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                }`}
              >
                <div className="px-4 md:px-6 pb-6 md:pb-8 text-sm md:text-base text-gray-600 leading-relaxed pt-2 border-t border-gray-100/50">
                  {item.content}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
