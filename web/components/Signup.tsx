"use client"

import { signup } from "@/app/actions/user";
import { useState } from "react"

export function Signup() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    return (
        <div className="min-h-screen flex items-center justify-center bg-transparent py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
            <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-white">Create an account</h2>
            </div>
            <form className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
                <div>
                <label htmlFor="email-address" className="sr-only">Email address</label>
                <input onChange={(e) => { setUsername(e.target.value); }} id="email-address" name="email" type="email" autoComplete="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address" />
                </div>
                <div>
                <label htmlFor="password" className="sr-only">Password</label>
                <input onChange={(e) => { setPassword(e.target.value); }} id="password" name="password" type="password" autoComplete="new-password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password" />
                </div>
            </div>

            <div>
                <button onClick={async () => { await signup(username, password);}}  type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Sign up
                </button>
            </div>
            </form>
            <p className="text-white text-sm mt-2">
                Already have an account? 
                <a href="/signin" className="text-indigo-600 hover:underline ml-1">Sign in</a>
            </p>
        </div>
        </div>

    )
}


