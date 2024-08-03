import { useLoaderData } from "react-router-dom";

export default function About() {
  const data = useLoaderData();
  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      Github followers: {data.followers}
      <div className="img flex justify-center p-5 rounded-[50%]">
        <img
          className="rounded-[50%]"
          src={data.avatar_url}
          alt="Git picture"
          width={100}
        />
      </div>
    </div>
  );
}

export const githubInfoLoader = async () => {
  const data = await fetch("https://api.github.com/users/jay31kr");
  return data.json();
};
