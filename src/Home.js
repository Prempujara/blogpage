import { useEffect, useState } from "react";
import BlogList from "./BlogList";
import backgroundImg from "./assets/backgroundImg.jpg";

const Home = () => {
  
  const [blogs, setBlogs] = useState([
    { title: "My New Website", body: "lorem ipsum....", author: "Prem", id: 1 },
    {
      title: "Welcome party",
      body: "lorem ipsum....",
      author: "Akshar",
      id: 2,
    },
    {
      title: "Web Dev tops tips",
      body: "lorem ipsum....",
      author: "Prem",
      id: 3,
    },
  ]);
  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };
  useEffect(() => {
    console.log("use effect ran or called");
    console.log(blogs);
  });
  return (
    <div className="home">
      <BlogList blogs={blogs} title="All blogs!" handleDelete={handleDelete} />
      {/* <BlogList
        blogs={blogs.filter((blog) => blog.author === "Prem")}
        title="Prem's blogs!"
      />
      <BlogList
        blogs={blogs.filter((blog) => blog.author === "Akshar")}
        title="Akshar's blogs!"
      /> */}
    </div>
  );
};

export default Home;
