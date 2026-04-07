import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQS = [
  { q: 'Why is early cataract detection important?', a: 'Early detection allows us to monitor cataract progression and plan the right treatment at the right time, before vision loss significantly affects your daily life. At Advanced Focus Eye Hospital, we use advanced diagnostic technology for accurate, detailed evaluation.' },
  { q: 'Who will I see when I visit Advanced Focus Eye Hospital?', a: 'Your journey at Advanced Focus Eye Hospital begins with a comprehensive eye check-up by our Optometrist and our Consultant Eye Doctor, Dr. Anusha C. If cataract surgery is required, you will be referred to Dr. Anuja Pasham, our Phaco Refractive Surgeon, who leads all surgical cases. Our team also includes a dedicated Counsellor and an Insurance Advisor — ensuring every aspect of your care, and your questions about treatment, cost, and insurance coverage, are taken care of from day one.' },
  { q: 'What makes Advanced Focus Eye Hospital different for cataract care?', a: 'Advanced Focus Eye Hospital offers 360-degree eye care — from your first check-up to post-surgical follow-up. We combine a Phaco Refractive Surgeon with 14+ years of experience, globally recognised ophthalmic equipment, NABH accreditation, minimally invasive surgical techniques, and a hospitality-trained team that prioritises your comfort at every step. Our Insurance Advisor and Counsellor ensure you have full clarity on your treatment plan and coverage before you decide.' },
  { q: 'How can I book a consultation?', a: 'You can book a consultation by calling us on +91 95051 16789 or 040 3100 4343, or by filling out the appointment form on this page. Our team will confirm your slot and guide you on what to expect at your first visit.' }
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
