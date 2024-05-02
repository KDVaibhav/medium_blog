import { Blog } from "../hooks"
import { Appbar } from "./Appbar"
import { Avatar } from "./BlogCard"

export const FullBlog = ({ blog }: { blog: Blog }) => {
  return (
    <div>
      <Appbar />
      <div className="flex justify-center">
        <div className="grid grid-cols-12 px-10 w-full pt-200 max-w-screen-2xl">
          <div className="col-span-8">
            <div className="text-5xl font-extrabold">
              {blog.title}
            </div>
            <div className="text-slate-500 pt-4">
              Posted on 2nd December 2023
            </div>
            <div className="">{blog.content}</div>
          </div>
          <div className="col-span-4">
            <div className="text-grey-500">
              Author
            </div>
            <div className="flex">
              <div className="pr-4 flex flex-col justify-center">
                <Avatar size="small" name={blog.author.name ||" Anonymous"}/>
              </div>
              <div>
                <div className="text-xl font-bold">
                  {blog.author.name || "Anonymous"}
                </div>
                <div className="pt-2 text-slate-600 ">
                  Random catch phrase about the author's ability ot grab the user's atttention
                </div>
              </div>  
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}