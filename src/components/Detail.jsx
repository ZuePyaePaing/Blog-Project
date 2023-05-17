import React from "react";
import { useSingleBlogQuery } from "../feature/services/blogApi";
import { useParams ,Link} from "react-router-dom";

const Detail = () => {
  const { id } = useParams();

  const { data: blog } = useSingleBlogQuery(id);

  return (
    <div className=" flex justify-center items-center h-screen">
      <div className=" p-3 flex flex-col w-86 justify-center gap-3 shadow-lg ">
        <img
          className=" w-[250px] h-[250px] object-cover "
          src={blog?.image}
          alt=""
        />
        <div className=" flex flex-col gap-2">
          <h1 className=" text-violet-600 font-semibold text-2xl">{blog?.title}</h1>
          <p className=" text-violet-500 tracking-wide">{blog?.desc}</p>
          <div className=" flex gap-5">
            <Link to={"/"}>
            <button className=" px-5 py-1 bg-gray-700 text-white shadow active:bg-violet-600">Back</button>
            </Link>
            <Link to={`/edit/${id}`}>
            <button className=" px-5 py-1 bg-violet-700 text-white shadow active:bg-violet-600">Edit</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
