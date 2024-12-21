import Link from "next/link"

function Home() {
  return (
    <>
      <ul className="flex justify-around bg-slate-800 text-gray-200">
        <li>
          <Link href='/first-project/users'>First Project</Link>
        </li>
        <li>
          <Link href='/second-project'>Second Project</Link>
        </li>
        <li>
          <Link href='/third-project'>Third Project</Link>
        </li>
      </ul>
    </>
  )
}

export default Home