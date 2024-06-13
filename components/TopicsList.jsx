"use client";
import React, { useEffect, useState } from "react";
import { HiPencilAlt } from "react-icons/hi";
import Link from "next/link";
import RemoveBtn from "./RemoveBtn";

const getTopics = async () => {
  try {
    const res = await fetch("https://my-notes12.vercel.app/api/topics", {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Error in fetching data");
    }
    return res.json();
  } catch (err) {
    console.log(err);
    return []; // Return an empty array to avoid potential errors during rendering
  }
};

export default function TopicsList() {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    const fetchTopics = async () => {
      const topicsData = await getTopics();
      setTopics(topicsData);
    };

    fetchTopics();
  }, []);

  // Handle topic removal
  const handleRemove = (id) => {
    setTopics((prevTopics) => prevTopics.filter((topic) => topic._id !== id));
  };

  // Check if topics is not ready yet
  if (!topics || topics.length === 0) {
    return <div>Loading...</div>; // You can show a loading message here
  }

  return (
    <>
      {topics.map((t) => (
        <div
          key={t._id}
          className="p-4 border rounded-lg border-slate-400 my-3 flex justify-between gap-5 items-start shadow-md"
        >
          <div>
            <h2 className="font-bold text-2xl">{t.title}</h2>
            <div>{t.description}</div>
          </div>

          <div className="flex gap-2">
            <RemoveBtn id={t._id} onRemove={handleRemove} />
            <Link href={`/editTopic/${t._id}`}>
              <HiPencilAlt size={24} className="text-green-500" />
            </Link>
          </div>
        </div>
      ))}
      <h2 className="mt-16 text-green-500 flex justify-center">
        Designed by M.Abdullah
      </h2>
    </>
  );
}
