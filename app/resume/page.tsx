import Link from "next/link";
import { FaDownload } from "react-icons/fa"; 

export const metadata = {
  title: "Resume",
  description: "Resume",
};

export default function Resume() {
  return (
    <section>
      {/* Skills Section */}
      <h1 className="mt-8 mb-4 text-2xl font-medium tracking-tight">Skills</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-700">
        {[
          "Angular", "Django", "FastAPI", "Git", "HTML", "Java", "JavaScript",
          "MySQL", "Python", "REST APIs", "Springboot", "SQL"
        ].map((skill, index) => (
          <div key={index} className="bg-gray-200 px-4 py-2 rounded-md text-center">
            {skill}
          </div>
        ))}
      </div>

      {/* Resume Section */}
      <h1 className="mt-12 mb-4 text-2xl font-medium tracking-tight">Resume</h1>
      <div>
        <a
          href="/software_dev_resume.pdf"  // Replace with your actual resume path
          download="software_dev_resume.pdf"
        >
          <button className="px-4 py-2 bg-green-500 text-white rounded-md flex items-center gap-2 hover:bg-green-400 transition-all">
            <FaDownload />
            Download Resume
          </button>
        </a>
      </div>
    </section>
  );
}
