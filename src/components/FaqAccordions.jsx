import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQS = [
  { q: 'What is a cataract?', a: 'A cataract is a condition that clouds the eye\'s natural lens, reducing vision and making everyday activities like reading and recognizing faces more difficult. It can also increase sensitivity to light.' },
  { q: 'Why is early cataract detection important?', a: 'Early detection helps identify vision problems and eye conditions at the right stage so the correct treatment can be planned in time. Advanced Focus emphasizes detailed eye examinations and advanced diagnostic technology for accurate evaluation.' },
  { q: 'Who will examine and treat me at Advanced Focus?', a: 'Dr. Anuja Pasham, founder of Advanced Focus Eye Hospital, is an ophthalmologist with over 14 years of experience and a strong focus on cataract, LASIK, glaucoma, and overall eye safety.' },
  { q: 'What makes Advanced Focus different for cataract care?', a: 'The hospital combines eye-safety-focused care, advanced diagnostic and surgical equipment, minimally invasive techniques, and a patient-first experience with hospitality-trained staff.' },
  { q: 'How can I book a consultation?', a: 'You can book a consultation by filling out the enquiry form or calling Advanced Focus Eye Hospital directly at +91 95051 16789.' },
];

export default function FaqAccordions() {
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <section className="scroll-mt-24 pb-16 relative z-10 pt-4 mt-8 md:mt-0">
      <h2 className="text-2xl md:text-3xl font-bold text-[#002d5c] mb-8 md:mb-10 text-center md:text-left">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4 max-w-4xl mx-auto md:mx-0">
        {FAQS.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div 
              key={idx} 
              className={`border rounded-xl transition-all duration-300 ${
                isOpen 
                  ? 'border-[#00829b] bg-[#f9fdfd] shadow-md ring-1 ring-[#00829b]/10' 
                  : 'border-gray-100 bg-white hover:border-gray-200 hover:shadow-sm'
              }`}
            >
              <button
                onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                className="w-full text-left px-5 md:px-7 py-5 md:py-6 flex items-center justify-between gap-4 focus:outline-none group"
              >
                <span className={`text-[15px] md:text-lg font-bold transition-colors duration-200 ${isOpen ? 'text-[#00829b]' : 'text-[#002d5c]'}`}>
                  {faq.q}
                </span>
                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-[#00829b] text-white rotate-180' : 'bg-gray-100 text-[#002d5c]'}`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </div>
              </button>
              
              <div 
                className={`transition-all duration-500 ease-in-out ${
                    isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                }`}
              >
                <div className="px-5 md:px-7 pb-6 md:pb-8 text-sm md:text-[15px] text-gray-600 leading-relaxed border-t border-gray-100/50 pt-2">
                  <p>{faq.a}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
