import Link from "next/link";

const Project = ({ img, projectTitle, projectDescription, id }) => {
  return (
    <>
      <Link href={`${id}`}>
        <div className="p-4  bg-white rounded-md shadow-2xl">
          <img src={img} alt="" className="h-60  " />
          <h3 className="font-medium py-2">{projectTitle}</h3>
          <p className="font-serif truncate">{projectDescription}</p>

          <div className="flex justify-center items-center">
            <h2 className="bg-[#000080] text-white px-4 py-3 rounded-sm mt-4 font-medium">
              Watch Project
            </h2>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Project;
