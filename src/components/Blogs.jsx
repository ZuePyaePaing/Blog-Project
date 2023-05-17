import React from "react";
import { useGetBlogQuery } from "../feature/services/blogApi";
import BlogCard from "./BlogCard";
import { Link } from "react-router-dom";

const Blogs = () => {
  const { data: blogs } = useGetBlogQuery();

  return (
    <div>
      <Link to={'/create'}>
        <button className=" px-4 py-1 ms-20 mt-10 bg-violet-600 text-white">Create</button>
      </Link>
      <div className=" flex flex-wrap gap-6 justify-center mt-4">
        {blogs?.map((item) => {
          return <BlogCard key={item.id} {...item} />;
        })}
      </div>
    </div>
  );
};

export default Blogs;
