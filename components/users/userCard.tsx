import Link from "next/link";

interface User {
  name: string;
  title: string;
  exp: string;
  designation: string;
  url: string;
}

const UserCard = ({ user }: any) => {
  return (
    <div className="user-card relative bg-white p-4 py-6 sm:px-5 sm:py-10 flex flex-row sm:flex-col gap-3 sm:items-center rounded-2xl sm:rounded-3xl sm:text-center card-shadow">
      <div className="user-avatar h-12 w-12 inline-flex items-center justify-center bg-slate-100 rounded-full text-xl font-bold mb-4">
        {user.name.charAt(0)}
      </div>

      <div className="flex flex-col mt-0.5 flex-1">
        <h2 className="text-lg font-medium">{user.name}</h2>

        {user.designation && (
          <p className="text-sm">
            {user.designation} @ {user.company}
          </p>
        )}

        {/* <span className="pill h-6 px-2 text-center absolute top-2 right-2 text-xs uppercase bg-slate-950 rounded flex items-center justify-center text-white/70 font-medium">
        {user.followers}
      </span> */}

        {/* <p className="text-sm">{user.company} @</p> */}

        <Link
          href={user.linkedin}
          target="_blank"
          className="text-blue-500 mt-4 text-xs sm:text-sm uppercase"
        >
          View Profile
        </Link>
      </div>
    </div>
  );
};

export default UserCard;

// {
//   name: "Nafisa Tarannum Disha",
//   title: "Nafisa Tarannum Disha - | Sr. Product UX UI Designer ...",
//   linkedin: "https://bd.linkedin.com/in/nafisatdisha",
//   followers: "310+",
//   designation: "Sr. UI UX Designer",
//   company: "Creative IT Institute",
//   bio: "Sr. Product UX · Hello, This is Nafisa Tarannum Disha. A professional with 3 . My passion lies in crafting ...",
// },
