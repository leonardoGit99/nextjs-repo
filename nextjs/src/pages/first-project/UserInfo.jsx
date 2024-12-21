import { getOneUser } from "@/services/users"


async function UserInfo({ paramsId }) {

  const user = await getOneUser(paramsId);
  return (
    <div className="bg-slate-400 p-10 rounded-md">
      <img src={user.avatar} alt="avatar"  className="m-auto my-4 rounded-lg"/>
      <h3 className="text-3xl font-bold">{user.id}. {user.first_name} {user.last_name}</h3>
      <p>email: {user.email}</p>
    </div>
  )
}

export default UserInfo