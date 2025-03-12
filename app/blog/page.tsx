import Link from "next/link";

export const metadata = {
  title: "Resume",
  description: "Resume",
};

export default function Resume() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">Download Resume</h1>
      <div>
        <Link
          href="/path/to/resume.pdf" // Replace with the actual path to your resume
          download
        >
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-400 transition-all">
            Download Resume
          </button>
        </Link>
      </div>
    </section>
  );
}
