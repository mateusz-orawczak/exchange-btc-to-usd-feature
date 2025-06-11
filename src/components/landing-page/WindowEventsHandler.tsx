"use client";

import { useEffect } from "react";

export default function WindowEventsHandler({ children }: { children: React.ReactNode }) {

  const handleScroll = () => {
    const htmlElement = document.documentElement;
    const screenScrolled = htmlElement.scrollTop / htmlElement.clientHeight * 100
    htmlElement.style.setProperty("--scrollPercentage", (Math.round(Math.min(screenScrolled, 100) * 1000) / 1000).toString());
    htmlElement.style.setProperty("--scrollOffset", htmlElement.scrollTop.toString());
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const testimonialsObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('card-visible');
        } else {
          entry.target.classList.remove('card-visible');
        }
      });
    }, {
      threshold: 1,
      rootMargin: "-20px",
    });

    const testimonials = document.querySelectorAll(".testimonial-card");  
    testimonials.forEach((testimonial) => {
      testimonialsObserver.observe(testimonial);
    });

    return () => {
      testimonials.forEach((testimonial) => {
        testimonialsObserver.unobserve(testimonial);
      });
    };
  }, []);

  return <div>{children}</div>;
}