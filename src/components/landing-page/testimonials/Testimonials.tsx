import React from 'react';
import Image from 'next/image';
import TestimonialCard from './components/TestimonialCard';

const testimonials = [
  {
    name: "John Smith",
    position: "CEO, Tech Solutions",
    avatarUrl: "https://i.pravatar.cc/150?img=1",
    content: "Working with this team has been a game-changer for our business. Their expertise and dedication are unmatched."
  },
  {
    name: "Sarah Johnson",
    position: "Marketing Director",
    avatarUrl: "https://i.pravatar.cc/150?img=2",
    content: "The level of professionalism and attention to detail is outstanding. They consistently deliver beyond our expectations."
  },
  {
    name: "Michael Brown",
    position: "Project Manager",
    avatarUrl: "https://i.pravatar.cc/150?img=3",
    content: "Their innovative solutions have helped us streamline our operations and achieve better results."
  }
];

const Testimonials = () => {
  return (
    <section className="testimonials-section bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="space-y-8 col-span-2">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                name={testimonial.name}
                position={testimonial.position}
                avatarUrl={testimonial.avatarUrl}
                content={testimonial.content}
              />
            ))}
          </div>
          <div className="col-span-1">
            <Image 
              src="/images/landing-page/testimonials/mobile-app@1x-min.png" 
              alt="Mobile app testimonial" 
              className="w-full h-auto object-cover rounded-lg"
              width={500}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 