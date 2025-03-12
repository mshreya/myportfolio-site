import Image from "next/image";
import { testimonials } from "./testimonial-data";

export default function Testimonials() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">Testimonials</h1>
      <div className="flex flex-col gap-4">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="p-4 border rounded-lg shadow-md transition-transform hover:scale-105"
          >
            <Image
              src={testimonial.imageUrl}
              alt={testimonial.name}
              width={80}
              height={80}
              className="rounded-full mb-3"
            />
            <h2 className="text-lg font-semibold">{testimonial.name}</h2>
            <p className="text-sm text-gray-500">
              {testimonial.designation}, {testimonial.company}
            </p>
            <p className="text-neutral-600 mt-2">{testimonial.message}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
