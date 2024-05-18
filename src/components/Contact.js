import Terminal from "./Terminal";

export default function Contact() {
  const config = {
    email: "balag0414@gmail.com",
    phone: "+91 9360172760, +91 9092928712",
  };

  return (
    <section
      id="contact"
      className="flex flex-col bg-secondary px-5 py-32 text-white"
    >
      <div className="flex flex-col items-center px-10">
        <h1 className="text-4xl border-b-4  border-primary mb-5 w-[150px] font-bold">
          Contact
        </h1>
        <p className="pb-5">
          If you want to discuss more in detail, please contact me
        </p>

        <Terminal />
      </div>
    </section>
  );
}
