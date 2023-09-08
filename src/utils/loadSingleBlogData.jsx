import React from "react";

const loadSingleBlogData = async (id) => {
  const res = await fetch(`http://localhost:5000/doctors/${id}`);
  return await res.json();
};

export default loadSingleBlogData;
