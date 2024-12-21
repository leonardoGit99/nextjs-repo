import Link from "next/link"

function Navbar() {
  return (
    <nav className="bg-slate-400 flex justify-between items-center px-20 h-[40px] font-bold text-black">
      <Link href='/' className="hover:text-gray-700">
        Home
      </Link>
      <ul>
        <li>
          <Link href='/first-project/users' className="hover:text-gray-700">
            Users
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar