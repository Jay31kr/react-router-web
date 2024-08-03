import { useParams } from "react-router-dom";

export default function About() {
  const { id } = useParams();
  return (
    <>
      <div className="bg-gray-600 text-white text-3xl p-4 flex justify-center items-center">
        <p>User : {id}</p>
      </div>
    </>
  );
}
