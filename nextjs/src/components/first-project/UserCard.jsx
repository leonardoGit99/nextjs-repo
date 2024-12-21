"use client"
import { useRouter } from "next/navigation"

function UserCard({ id, firstName, lastName, email, avatar }) {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/first-project/users/${id}`);
  }
  return (
    <li
      className="flex justify-between bg-slate-400 mb-2 p-4 rounded-md text-black hover:bg-slate-300 cursor-pointer"
      onClick={() => { handleClick() }}
    >
      <div>
        <h5 className="font-bold">{id} {firstName} {lastName}</h5>
        <p className="text-slate-500">email: {email}</p>
      </div>
      <img src={avatar} alt="avatar" className="rounded-full w-20" />
    </li>
  )
}

export default UserCard