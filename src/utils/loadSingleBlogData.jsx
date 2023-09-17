const loadSingleBlogData = async (id) => {
  const res = await fetch(`https://dochouse.vercel.app/doctors/${id}`, {
    cache: "no-cache",
  });
  return await res.json();
};

export default loadSingleBlogData;
