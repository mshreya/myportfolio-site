import React from "react";
import type { Metadata } from "next";
import { ImageGrid } from "app/components/image-grid";

export const metadata: Metadata = {
  title: "Outside Work",
  description: "Hobbies",
};

export default function Photos() {
  return (
    <section>
      {/* Section for Volunteer, Hackathon, Leadership */}
      <h2 className="mt-8 mb-4 text-xl font-semibold">
        Hackathon, Leadership, Volunteer
      </h2>
      <div className="grid grid-cols-3 gap-4">
        <div className="flex flex-col items-center">
          <img
            src="/photos/photo2.jpg"
            alt="Hackathon"
            className="w-full h-64 object-cover"
          />

          <div className="mt-2 text-center">
            Organizing Committee Member of "Hack the North", Hackathon
          </div>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="/photos/photo1.jpg"
            alt="Leadership"
            className="w-full h-64 object-cover"
          />

          <div className="mt-2 text-center">
            Social Events Member at "ThatExtraStep"
          </div>
        </div>

        <div className="flex flex-col items-center">
          <img
            src="/photos/photo3.jpg"
            alt="Volunteer"
            className="w-full h-64 object-cover"
          />

          <div className="mt-2 text-center">Volunteer at "LaughOKPlease"</div>
        </div>
      </div>

      {/* Section for Art, Photography */}
      <h2 className="mt-8 mb-4 text-xl font-semibold">Photography & Art</h2>
      <ImageGrid
        columns={3}
        images={[
          {
            src: "/photos/photo4.jpg",
            alt: "Photography",
          },
          {
            src: "/photos/photo5.jpg",
            alt: "Creative Photography",
          },
          {
            src: "/photos/photo6.jpg",
            alt: "Art",
          },
        ]}
      />
    </section>
  );
}
