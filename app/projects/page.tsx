import Link from "next/link";
import type { Metadata } from "next";
import { projects } from "./project-data";

export const metadata: Metadata = {
  title: "Projects",
  description: "Projects",
};

export default function Projects() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">Projects</h1>
      <div className="grid grid-cols-1 gap-6">
        {projects.map((project, index) => (
          <Link
            key={index}
            href={project.url}
            className="block p-4 border border-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800 transition-all"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex flex-col space-y-2">
              <h2 className="text-lg font-semibold text-left text-black dark:text-white">
                {project.title}
              </h2>
              <p className="text-neutral-600 dark:text-neutral-400 text-justify">
                {project.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
