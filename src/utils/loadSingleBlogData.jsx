import React from "react";

const loadSingleBlogData = async (id) => {
  const res = await fetch(`https://dochouse.vercel.app/doctors/${id}`);
  return await res.json();
};

export default loadSingleBlogData;
