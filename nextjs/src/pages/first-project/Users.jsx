import UserCard from "@/components/first-project/UserCard";
import { getAllUsers } from "@/services/users"


async function Users() {
  const users = await getAllUsers();

  return (
    <ul className="mt-[10px]">
      {
        users.map((user) => (
          <UserCard
            key={user.id}
            id={user.id}
            firstName={user.firstName}
            lastName={user.lastName}
            email={user.email}
            avatar={user.avatar}
          />
        ))
      }
    </ul>
  )
}

export default Users