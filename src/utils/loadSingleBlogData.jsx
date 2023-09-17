const loadSingleBlogData = async (id) => {
  const res = await fetch(`http://localhost:5000/doctors/${id}`, {
    cache: "no-cache",
  });
  return await res.json();
};

export default loadSingleBlogData;
