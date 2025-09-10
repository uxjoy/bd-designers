import {
  RiBuildingFill,
  RiGroupFill,
  RiUserLocationFill,
  RiUserLocationLine,
} from "@remixicon/react";
import UserCard from "../../components/users/userCard";
import { linkedinUsers } from "./user";
import BackToTop from "../../components/BackToTop";

export default function Home() {
  return (
    <div className="font-sans">
      <BackToTop />
      <section className="header-section p-2">
        <div className="bg-zinc-900 text-white p-4 min-h-[550px] flex flex-col justify-center items-center text-center gap-5 rounded-4xl">
          <div className="bg-white/10 font-medium py-1 px-3 rounded-full border border-white/10 flex items-center gap-1">
            {" "}
            <RiUserLocationFill size={18} />
            Bangladesh{" "}
          </div>

          <h1 className="text-7xl font-semibold max-w-4xl">
            {" "}
            Bangladeshi <br />{" "}
            <span className="text-white/70">Design Community</span>
          </h1>
          <p className="text-xl max-w-xl text-white/80">
            Discover and connect with talented UX/UI designers from Bangladesh.
            Building the future of digital experiences.
          </p>

          <div className="flex gap-8 font-semibold mt-4">
            <p className="flex gap-1.5 items-center">
              <RiGroupFill size={18} />
              <span> {linkedinUsers.length} Designers </span>
            </p>

            <p className="flex gap-1.5 items-center">
              <RiBuildingFill size={18} />

              <span>
                {
                  linkedinUsers
                    .map((user) => user.company)
                    .filter(
                      (value, index, self) => self.indexOf(value) === index
                    ).length
                }{" "}
                Companies
              </span>
            </p>
          </div>
        </div>
      </section>

      <section className="users">
        <div className="container mx-auto px-4 py-10">
          <div className="user-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {linkedinUsers.map((user, i) => (
              <UserCard key={i} user={user} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
