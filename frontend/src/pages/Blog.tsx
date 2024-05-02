
import { Appbar } from "../component/Appbar";
import { FullBlog } from "../component/FullBlog";
import { Spinner } from "../component/Spinner";
import { useBlog } from "../hooks/index";
import { useParams } from "react-router-dom";
// import { Blog } from "../hooks/index";
 const Blog = () => {
  const { id } = useParams();
  const { loading, blog } = useBlog({
    id: id||""
  }
  );
  if (loading || !blog) {
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