import { ChangeEvent, useState } from "react";
import { Appbar } from "../component/Appbar"
import { BACKEND_URL } from "../config";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Publish = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();
  return (
    <div>
      <Appbar />
      <div className="flex justify-center mt-4">
        <div className="max-w-2xl w-full">
          <input
            onChange={(e) => {
              setTitle(e.target.value)
            }}
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            placeholder="Title"
          ></input>
          <div className="pt-4">
            <TextEditor onChange={(e) => {
              setDescription(e.target.value)
            }} />
            <button
              onClick={async() => {
                const response= await axios.post(`${BACKEND_URL}/api/v1/blog`, {
                  title,
                  content: description
                }, {
                  headers: {
                    Authorization: localStorage.getItem("token")
                  }
                });
                navigate(`/blog/${response.data.id}`)
              }}
              type="submit"
              className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800"
            >
              Publish post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function TextEditor({onChange}:{onChange: (e:ChangeEvent<HTMLTextAreaElement> )=>void}) {
  return (
    <form>
      <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50">
        
        <div className="px-4 py-2 bg-white rounded-b-lg">
          <textarea
            onChange={onChange}
            id="editor"
            rows={8}
            className="block w-full px-0 text-sm text-gray-800 bg-white border-0  focus:ring-0 "
            placeholder="Write an article..."
            required
          ></textarea>
        </div>
      </div>
      
    </form>
  );
}