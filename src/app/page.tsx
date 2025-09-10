import {
  RiBuildingFill,
  RiGroupFill,
  RiUserLocationFill,
} from "@remixicon/react";
import BackToTop from "../../components/BackToTop";
import UserCard from "../../components/users/userCard";
import { linkedinUsers } from "./user";

export default function Home() {
  return (
    <div className="font-sans">
      <BackToTop />
      <section className="header-section p-2">
        <div className="bg-zinc-900 text-white p-3 md:p-4 min-h-[400px] md:min-h-[550px] flex flex-col justify-center items-center text-center gap-3 md:gap-5 rounded-3xl md:rounded-4xl">
          <div className="bg-white/10 font-medium text-sm py-1 px-3 rounded-full border border-white/10 flex items-center gap-1">
            {" "}
            <RiUserLocationFill size={16} />
            Bangladesh{" "}
          </div>

          <h1 className="text-4xl md:text-7xl font-bold md:font-semibold md:max-w-4xl">
            {" "}
            Bangladeshi <br />{" "}
            <span className="text-white/70">Design Community</span>
          </h1>

          <p className="md:text-xl sm:max-w-xl text-white/80">
            Discover and connect with talented UX/UI designers from Bangladesh.
            Building the future of digital experiences.
          </p>

          <div className="flex items-center gap-4 font-semibold mt-4">
            <p className="flex gap-2 items-center">
              <RiGroupFill size={18} className="text-orange-400" />
              <span> {linkedinUsers.length} Designers </span>
            </p>

            <div className="w-1 h-1 rounded-full bg-white/15"></div>

            <p className="flex gap-2 items-center">
              <RiBuildingFill size={18} className="text-orange-400" />

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
          <div className="user-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4">
            {linkedinUsers.map((user, i) => (
              <UserCard key={i} user={user} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
