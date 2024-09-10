import { ChangeEvent } from "react"
import { Link, useNavigate } from "react-router-dom"
import { SignupType } from "@suchitms19/common-app"
import { useState } from "react"
import axios from "axios"
import { BACKEND_URL } from "../config"

export function Auth({ type }: { type: "signup" | "signin" }) {
    const [postInputs, setpostInputs] = useState<SignupType>({
        name: "",
        email: "",
        password: ""
    })
     
    const navigate = useNavigate();

    async function sendRequest() {
        try {
            const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type === "signup" ? "signup" : "signin"}`, postInputs)
            const jwt = response.data.jwt;
            localStorage.setItem("token", jwt);
            navigate('/blogs');
        } catch (e) {
            console.error("Failed to send request:", e);
            alert("Something went wrong. Please try again.");
        }
    }

    return <div className="h-screen flex flex-col justify-center">
        <div className="flex justify-center">
            <div className="w-96">
                <div className="text-4xl font-bold text-center">{type === "signup" ? "Create an account" : "Login to your account"}</div>
                <div className="text-center text-slate-600 py-3">{type === "signup" ? "Already have an account?" : "Don't have an account?"}
                    <Link className="pl-2 underline" to={type === "signup" ? "/signin" : "/signup"}>{type === "signup" ? "Login" : "Signup"}</Link>
                </div>
                <div className="space-y-2">
                    {type === "signup" ? <LabelledInput label="Username" placeholder="Suchith  M S" onChange={(e) => {
                        setpostInputs({
                            ...postInputs,
                            name: e.target.value
                        })
                    }}></LabelledInput> : null}
                    <LabelledInput label="Email" placeholder="m@example.com" type="email" onChange={(e) => {
                        setpostInputs({
                            ...postInputs,
                            email: e.target.value
                        })
                    }}></LabelledInput>
                    <LabelledInput label="Password" placeholder="shhh" type="password" onChange={(e) => {
                        setpostInputs({
                            ...postInputs,
                            password: e.target.value
                        })
                    }}></LabelledInput>
                </div>
                
                <button onClick={sendRequest} className="bg-black w-full text-white text-base rounded-lg p-2 mt-4">{type === "signup" ? "Signup" : "Signin"}</button>
            </div>
        </div>
    </div>
}

interface LabelledInputType {
    label: string,
    placeholder: string,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    type?: string,
}

export function LabelledInput({ label, placeholder, onChange, type }: LabelledInputType) {
    return <div>
        <label className="block mb-2 text-sm font-medium text-gray-900 text-base">{label}</label>
        <input onChange={onChange} type={type} id="first_name" className="border border-gray-300 text-black text-base rounded-lg focus:ring-blue-500 block w-full p-2.5" placeholder={placeholder} required />
    </div>
}
