import { Star, Quote } from "lucide-react";

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "HR Manager, Tech Corp India",
      company: "Corporate Partner",
      rating: 5,
      text: "JK Sports organized our first corporate cricket league and it exceeded all expectations. The professionalism, ground management, and live broadcast capabilities made our team building event truly memorable. Highly recommended!"
    },
    {
      name: "Priya Sharma",
      role: "Parent",
      company: "NYCL Participant",
      rating: 5,
      text: "My son participated in the Noida Youth Cricket League and it was an incredible experience. The tournament was well-organized, the coaching staff was supportive, and the exposure he received was invaluable for his development."
    },
    {
      name: "Vikram Singh",
      role: "Director",
      company: "Cricket Academy Owner",
      rating: 5,
      text: "We've partnered with JK Sports for multiple tournaments. Their commitment to youth development and structured league formats has helped our academy students gain competitive experience. Neeraj and his team are true professionals."
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
