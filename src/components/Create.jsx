import { TextInput } from "@mantine/core";
import React, { useState } from "react";
import { useCreateBlogMutation } from "../feature/services/blogApi";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [createBlog] = useCreateBlogMutation();
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [image, setImage] = useState("");
  const nav = useNavigate();

  const createHandler = (e) => {
    e.preventDefault();
    const newData = { id: Date.now(), title, image, desc };
    createBlog(newData);
    nav("/");
  };

  return (
    <div className=" flex justify-center items-center h-screen">
      <div className="flex flex-col w-96 p-4 rounded-lg shadow-xl">
        <h2 className=" text-violet-700 text-2xl font-semibold mb-2">
          Create Blog
        </h2>
        <form onSubmit={createHandler}>
          <TextInput
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
          />
          <TextInput
           required
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            mt="md"
            placeholder="Description"
          />
          <TextInput
           required
            value={image}
            onChange={(e) => setImage(e.target.value)}
            mt="md"
            placeholder="Image"
          />
          <button
            type="submit"
            className=" px-4 py-1 bg-violet-600 text-white mt-2"
          >
            Create
          </button>
        </form>
      </div>
    </div>
  );
};

export default Create;
