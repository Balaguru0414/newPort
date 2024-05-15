import { useObserver } from "./Observer";
import { TiTick } from "react-icons/ti";

const Experience = () => {
  const { isExperienceInView } = useObserver();
  return (
    <section id="experience" className="w-full py-20 lg:px-20 px-10 bg-primary">
      <h1
        className="text-4xl border-b-4 border-secondary mb-10 w-52 font-bold
      text-white"
      >
        Experience
      </h1>
      <ul
        className={`timeline timeline-snap-icon max-md:timeline-compact 
      timeline-vertical ${
        isExperienceInView ? "animate-left opacity-100" : "opacity-0"
      }`}
      >
        <li>
          <div
            className="timeline-middle flex items-center justify-center
          bg-secondary p-1 rounded-full"
          >
            <TiTick className="text-white" />
          </div>
          <div className="timeline-start mt-2 space-y-2 md:text-end mb-10">
            <time className="font-mono italic text-white">
              jul - 2023 to present
            </time>
            <p className="text-2xl font-black text-secondary">Marcello Tech</p>
            <p className="text-lg  text-[#eee]">
              Front-end developer cum Trainer
            </p>
            <ul className="text-black space-y-2">
              <li>
                Developed dynamic web applications using{" "}
                <span className="font-bold">
                  React, HTML, CSS, and JavaScript,
                </span>{" "}
                focusing on performance and user experience.
              </li>
              <li>
                Trained college students in front-end development, covering
                React fundamentals, HTML, CSS, and JavaScript best practices.
              </li>
              <li>
                Created engaging learning materials and workshops to enhance
                students' understanding and skills in web development.
              </li>
            </ul>
          </div>
          <hr />
        </li>
      </ul>
    </section>
  );
};

export default Experience;
