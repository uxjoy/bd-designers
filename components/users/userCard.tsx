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
    <div className="user-card relative bg-slate-900 px-5 py-10 flex flex-col items-center rounded-lg text-center">
      <div className="user-avatar h-16 w-16 flex items-center justify-center bg-slate-800 rounded-full text-xl font-bold mb-4">
        {user.name.charAt(0)}
      </div>

      <h2 className="text-lg font-bold">{user.name}</h2>

      {user.designation && (
        <p className="text-sm">
          {user.designation} @ {user.company}
        </p>
      )}

      <span className="pill h-6 px-2 text-center absolute top-2 right-2 text-xs uppercase bg-slate-800 rounded flex items-center justify-center text-white/70 font-medium">
        {user.followers}
      </span>

      {/* <p className="text-sm">{user.company} @</p> */}

      <Link
        href={user.linkedin}
        target="_blank"
        className="text-blue-500 mt-4 text-sm uppercase"
      >
        View Profile
      </Link>
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
