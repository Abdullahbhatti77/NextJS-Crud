"use client";
import React from "react";
import { HiOutlineTrash } from "react-icons/hi";

export default function RemoveBtn({ id, onRemove }) {
  const handleDelete = async () => {
    const confirmed = confirm("Are you sure you want to delete this topic?");
    if (confirmed) {
      const res = await fetch(
        `https://my-notes12.vercel.app/api/topics?id=${id}`,
        {
          method: "DELETE",
        }
      );
      if (res.ok) {
        onRemove(id); // Call the onRemove function passed as a prop
      }
    }
  };

  return (
    <div>
      <button className="text-red-400" onClick={handleDelete}>
        <HiOutlineTrash size={24} />
      </button>
    </div>
  );
}
