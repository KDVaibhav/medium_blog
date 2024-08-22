
import { Appbar } from "../component/Appbar";
import { FullBlog } from "../component/FullBlog";
import { Spinner } from "../component/Spinner";
import { useBlog } from "../hooks/index";
import { useParams } from "react-router-dom";
<<<<<<< HEAD

=======
// import { Blog } from "../hooks/index";
>>>>>>> 93334c2f4359a2105afedc9048aa5eeb525d8be7
 const Blog = () => {
  const { id } = useParams();
  const { loading, blog } = useBlog({
    id: id||""
  }
  );
<<<<<<< HEAD
  if (loading) {
=======
  if (loading || !blog) {
>>>>>>> 93334c2f4359a2105afedc9048aa5eeb525d8be7
    return <div>
      <Appbar/>
      <div className="h-screen flex flex-col justify-center">
        <div className="flex justify-center">
          <Spinner/>
        </div>
      </div>
    </div>
  }

   return <div>

     <FullBlog blog={blog} />
   </div>;
};

export default Blog;