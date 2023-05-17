import { TextInput } from "@mantine/core";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  useEditBlogMutation,
  useSingleBlogQuery,
} from "../feature/services/blogApi";

const Edit = () => {
  const { id } = useParams();
  const [editBlog] = useEditBlogMutation();
  const { data: blog } = useSingleBlogQuery(id);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [image, setImage] = useState("");
  const nav = useNavigate();
  useEffect(() => {
    setTitle(blog?.title);
    setDesc(blog?.desc);
    setImage(blog?.image);
  }, [blog]);
  const editHandlar = (e) => {
    e.preventDefault();
    const newData = { id, title, image, desc };
    editBlog(newData);
    nav("/");
  };
  return (
    <div className=" flex justify-center items-center h-screen">
      <div className="flex flex-col w-96 p-4 rounded-lg shadow-xl">
        <h2 className=" text-violet-700 text-2xl font-semibold mb-2">
          Create Blog
        </h2>
        <form onSubmit={editHandlar}>
          <TextInput
            defaultValue={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
          />
          <TextInput
            defaultValue={desc}
            onChange={(e) => setDesc(e.target.value)}
            mt="md"
            placeholder="Description"
          />
          <TextInput
            defaultValue={image}
            onChange={(e) => setImage(e.target.value)}
            mt="md"
            placeholder="Image"
          />
          <button
            type="submit"
            className=" px-4 py-1 bg-violet-600 text-white mt-2"
          >
            Done
          </button>
        </form>
      </div>
    </div>
  );
};

export default Edit;
