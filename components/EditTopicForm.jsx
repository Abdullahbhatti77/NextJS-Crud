"use client";
import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function EditTopicForm({ id, title, description }) {
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);
  const router = useRouter();

  const updateTopic = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        `https://next-js-crud-kappa.vercel.app/api/topics/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ newTitle, newDescription }),
        }
      );
      if (!res.ok) {
        throw new Error("Error in fetching data");
      }

      router.refresh();
      router.push("/");
      // const {data} = await res.json();
      // return data;
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <form onSubmit={updateTopic} className="flex flex-col gap-3">
        <input
          onChange={(e) => setNewTitle(e.target.value)}
          value={newTitle}
          type="text"
          placeholder="Topic Title"
          className="border border-slate-500 px-8 py-2"
        />

        <input
          onChange={(e) => setNewDescription(e.target.value)}
          value={newDescription}
          type="text"
          placeholder="Topic Description"
          className="border border-slate-500 px-8 py-2"
        />

        <button
          type="submit"
          className="bg-green-300 text-white px-6 py-3 w-fit rounded-lg"
        >
          Update Topic
        </button>
      </form>
    </>
  );
}
