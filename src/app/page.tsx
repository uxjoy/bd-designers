import UserCard from "../../components/users/userCard";
import { linkedinUsers } from "./user";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="user-list grid grid-cols-4 gap-4">
          {linkedinUsers.map((user, i) => (
            <UserCard key={i} user={user} />
          ))}
        </div>
      </main>
    </div>
  );
}
