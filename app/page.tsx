import Image from "next/image";

export default function Page() {
  return (
    <section>
      <Image
        src="/profile_pic.jpeg"
        alt="Profile photo"
        className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 grayscale hover:grayscale-0"
        unoptimized
        width={160}
        height={160}
        priority
      />

      <h1 className="mb-8 text-2xl font-medium tracking-tight">
        Shreya M Prasanna
      </h1>

      <div className="prose prose-neutral dark:prose-invert">
        <p>
          👋 Hi there! I'm a developer with experience building scalable web applications, combining front-end and back-end skills.  
        </p>
        <p>
          I've worked at Clarivate, Accenture, and LCN, delivering impactful solutions. With a Master's in Computer Engineering from the University of Waterloo, I focus on creating responsive UIs and optimizing server-side performance.
        </p>
      </div>
    </section>
  );
}
