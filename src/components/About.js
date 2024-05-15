import AboutImg from "../assets/about.png";
import { useObserver } from "./Observer";

export default function About() {
  // const [isSectionInView, setIsSectionInView] = useState(false);

  // useEffect(() => {
  //   const options = {
  //     root: null,
  //     rootMargin: "0px",
  //     threshold: 0.5,
  //   };

  //   const observer = new IntersectionObserver((entries) => {
  //     entries.forEach((entry) => {
  // if (entry.isIntersecting) {
  //   setIsSectionInView(true);
  //   observer.disconnect();
  // }
  //     });
  //   }, options);

  //   observer.observe(document.getElementById("about"));

  //   return () => {
  //     observer.disconnect();
  //   };
  // }, []);

  const { isAboutInView } = useObserver();

  const config = {
    line1:
      "Hi, My name is L Balaguru. I am a Full stack web developer. I built beautiful Websites with React.js , Tailwind CSS + Bootstrap",
    line2:
      "I am proficient in Frontend skills like React.js, Redux Tool Kit, Axios, Tailwind CSS, Css3 and many more.",
    line3:
      "I am intermediate in backend I know Node.js, Express.js, MongoDB, and Mongoose.",
  };

  return (
    <section
      className="flex justify-around flex-wrap bg-secondary px-5 lg:py-32 py-20"
      id="about"
    >
      <div className="py-5">
        <div
          className={isAboutInView ? "animate-left opacity-100" : "opacity-0"}
        >
          <img
            src="https://avatars.githubusercontent.com/u/117264451?v=4"
            className="lg:animate-wiggle lg:w-72 w-56 rounded-full"
          />
        </div>
      </div>
      <div
        className={`md:w-1/2 flex justify-center max-sm:px-10 ${
          isAboutInView ? "animate-right opacity-100" : "opacity-0"
        }`}
      >
        <div className="flex flex-col justify-center text-white">
          <h1 className="text-4xl border-b-4 border-primary mb-5 font-bold">
            About Me
          </h1>
          <p className="pb-5 text-justify">{config.line1}</p>
          <p className="pb-5 text-justify">{config.line2}</p>
          <p className="pb-5 text-justify">{config.line3}</p>
        </div>
      </div>
    </section>
  );
}
