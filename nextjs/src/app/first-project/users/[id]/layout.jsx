export default function layout({children}) {
  return (
    <section className="flex justify-center items-center h-[calc(100vh-40px)]">
      {children}
    </section>
  );
}