import { SignupInput, SigninInput } from "@100xdevs/medium-common";
import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import { BACKEND_URL } from "../config";
import axios from "axios";

export const Auth = ({ type }: { type: "signup" | "signin" }) => {
  const navigate = useNavigate();
  const [postInputs, setPostInputs] = useState < SignupInput | SigninInput> (
   type=== "signup" ? {
      name: "",
      username: "",
      password: ""
    } :
    {
      username: "",
      password: ""
  });
  
  async function sendRequest() {
    try {
      const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type === "signup" ? "signup" : "signin"}`, postInputs)
      const jwt = response.data;
      localStorage.setItem("token", jwt);
      navigate("/blogs");
    }
    catch (e) {
      alert("Error while entering")
    }
  }
  
  return (
    <div className="flex justify-center h-screen flex-col">
      <div className="flex justify-center">
        <div>
          <div className="px-10">
<<<<<<< HEAD
            <div className="text-3xl font-extrabold">Create an account</div>
            <div className="text-slate-400">
              {type === "signup" ? "Already have an account?" : "Don't have an account"}
              <Link className="pl-2 underline" to={type==="signup"? "/signin" : "/signup"}>
=======
            <div className="text-3xl font-extrabold">{type === "signup" ? "Create an account" : "Sign In"}</div>
            <div className="text-slate-400">
              {type === "signup" ? "Already have an account?" : "Don't have an account"}
              <Link className="pl-2 underline" to={type==="signup"? "/" : "/signup"}>
>>>>>>> 93334c2f4359a2105afedc9048aa5eeb525d8be7
                {type ==="signup"?"Login": "Signup"}
              </Link>
            </div>
          </div>
          <div className="mt-4">
            {type==="signup"? <LabelledInput
              label="Name"
              placeholder="Vaibhav Agrawal..."
              onChange={(e) => {
                setPostInputs({
                  ...postInputs,
                  name: e.target.value,
                });
              }}
            />:null}
            <LabelledInput
              label="Username"
              placeholder="vaibhav@gmail.com"
              onChange={(e) => {
                setPostInputs({
                  ...postInputs,
                  username: e.target.value,
                });
              }}
            />
            <LabelledInput
              label="Password"
              type={"password"}
              placeholder="123456"
              onChange={(e) => {
                setPostInputs({
                  ...postInputs,
                  password: e.target.value,
                });
              }}
            />
            <button
              type="button"
              onClick={sendRequest}
              className="mt-8 w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            >
              {type === "signin"?"Signin":"Signup"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

interface LabelledInputType{
  label: string,
  placeholder: string,
  onChange: (e: ChangeEvent<HTMLInputElement>) => void,
  type?: string
}

function LabelledInput({ label, placeholder, onChange, type}: LabelledInputType) {
    return (
      <div className="pt-4">
        <label className="block mb-2 text-sm font-bold text-black">
          {label}
        </label>
        <input
          onChange={onChange}
          type={type || "text"}
          id="first_name"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder={placeholder}
          required
        />
      </div>
    );
}