import Image from 'next/image';
import { redirect } from 'next/navigation';


import Link from "next/link";
import SweetAlert from '@/app/components/Sweetalert';
// import SweetAlert from '../components/Sweetalert';

export default function Register() {
  const handleRegister = async (formData: FormData) => {
    'use server'

    const form = {

      name: formData.get("name"),
      username: formData.get("username"),
      email: formData.get("email"),
      password: formData.get("password")
    }
    // console.log(form);
    
    const response = await fetch(`${process.env.BASE_URL}api/users/register`, {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "Content-Type": "application/json"
      }
    })
console.log(response);

    if (!response.ok) {
      const errorBody = await response.json() as { error: string}
      console.log(errorBody);
      
      return redirect("/register?error=" + errorBody.error)
    }

    return redirect("/login")
  }
    return (
      <div className="flex flex-col justify-center font-[sans-serif] sm:h-screen p-4">
      <div className="max-w-md w-full mx-auto border border-gray-300 rounded-2xl p-8">
        <div className="text-center mb-12">
          <a href="javascript:void(0)"><img
            src="https://readymadeui.com/readymadeui.svg" alt="logo" className='w-40 inline-block' />
          </a>
        </div>
      <SweetAlert/>
        <form action={handleRegister}>
          <div className="space-y-6">
            <div>
              <label className="text-gray-800 text-sm mb-2 block">Name</label>
              <input name="name" type="text" className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500" placeholder="Enter name" />
            </div>
            <div>
              <label className="text-gray-800 text-sm mb-2 block">Username</label>
              <input name="username" type="text" className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500" placeholder="Enter username" />
            </div>
            <div>
              <label className="text-gray-800 text-sm mb-2 block">Email Id</label>
              <input name="email" type="text" className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500" placeholder="Enter email" />
            </div>
            <div>
              <label className="text-gray-800 text-sm mb-2 block">Password</label>
              <input name="password" type="password" className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500" placeholder="Enter password" />
            </div>


            {/* <div className="flex items-center">
              <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
              <label htmlFor="remember-me" className="text-gray-800 ml-3 block text-sm">
                I accept the <a href="javascript:void(0);" className="text-blue-600 font-semibold hover:underline ml-1">Terms and Conditions</a>
              </label>
            </div> */}
          </div>

          <div className="!mt-12">
            <button type="submit" className="w-full py-3 px-4 text-sm tracking-wider font-semibold rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none">
              Create an account
            </button>
          </div>
          <p className="text-gray-800 text-sm mt-6 text-center">Already have an account? <Link href="/login" className="text-blue-600 font-semibold hover:underline ml-1">Login here</Link></p>
        </form>
      </div>
    </div>
    );
  }
  