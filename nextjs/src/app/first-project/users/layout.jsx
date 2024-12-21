import Navbar from "@/components/first-project/Navbar";

export default function layout({ children }) {
  return (
    <div className="h-[calc(100vh-40px)]">
    <Navbar />
      <section className="container mx-auto flex justify-center items-center">
        {children}
      </section>
    </div>
  );
}