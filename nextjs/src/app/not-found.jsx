import Link from "next/link";

export default function notFound() {
  return (
    <section className="flex justify-center items-center h-screen">
      <div className="flex flex-col justify-center items-center">
        <h1>Página no encontrada :(</h1>
        <Link href='/' className="text-blue-600"> &#171; Volver</Link>
      </div>
    </section>
  );
}