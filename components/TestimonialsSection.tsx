import { Star, Quote } from "lucide-react";

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Rahul Yadav ",
      role: "IPL player",
      company: "Chief Guest",
      rating: 5,
      text: "Their great organizing, clear on-ground management, and strong commitment to fair, high-quality events make them stand out. Every tournament they run is professional and full of passion, creating a place where players feel supported and motivated. "
    },
    {
      name: "Shyam Sharma",
      role: "DDCA director",
      company: "Chief Guest",
      rating: 5,
      text: "Shyam Sharma praises their commitment to nurturing young talent and building structured, transparent cricket pathways across India, noting the clarity, professionalism, and long-term vision driving grassroots growth and future excellence."
    },
    {
      name: "Shailesh Sinha",
      role: "CCL Player",
      company: "Bhojpuri Actor",
      rating: 5,
      text: "I’ve known JK Sports Co. for years. Neeraj Ji’s sincerity, hard work, and deep sports knowledge stand out. His strong network and client-first approach make his services truly dependable. Keep progressing!"
    },
    {
      name: "Anil Chaudhary",
      role: "Indian Cricket Umpire ",
      company: "Chief Guest",
      rating: 5,
      text: "JK Sports has grown into a trusted pillar for aspiring players. Their disciplined approach, genuine guidance, and commitment to nurturing talent create an environment where athletes feel supported, inspired, and ready to rise."
    }
  ];

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4">What Teams & Partners Say</h2>
          <p className="text-xl text-gray-600">Trusted by corporates, academies, and families across India</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-[#a7fa25]/10 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow relative"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-[#a7fa25]/30" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed relative z-10">
                "{testimonial.text}"
              </p>

              <div className="border-t border-gray-200 pt-4">
                <p className="text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
                <p className="text-sm text-[#545454]">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
