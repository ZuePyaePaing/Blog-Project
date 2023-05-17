import React from "react";
import { Link } from "react-router-dom";
import { useDeleteBlogMutation } from "../feature/services/blogApi";

const BlogCard = (props) => {
  const { id, title, image, desc } = props;
  const [deleteBlog] = useDeleteBlogMutation();
  return (
    <div>
      <div className=" flex flex-col gap-3 justify-center shadow-lg w-86">
        <img
          className=" w-[250px] h-[250px] object-cover"
          src={image}
          alt={title}
        />
        <div className=" flex flex-col ps-3">
          <h1 className=" text-2xl font-semibold text-violet-700">{title}</h1>
          <p className=" text-violet-500">{desc}</p>
          <div className=" flex gap-3 pb-2">
            <Link to={`/detail/${id}`}>
              <button className=" px-4 py-1 bg-violet-800 text-white hover:bg-violet-600">
                Detail
              </button>
            </Link>
            <button
              onClick={() => deleteBlog(id)}
              className=" bg-red-700 px-4 py-1 text-white hover:bg-red-500"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
