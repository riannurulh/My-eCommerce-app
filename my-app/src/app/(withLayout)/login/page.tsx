// import SweetAlert from "@/app/components/Sweetalert";
// // import { log } from "console";
// import { cookies } from "next/headers";
// import Link from "next/link";
// import { redirect } from "next/navigation";
// // import SweetAlert from "../../components/Sweetalert";

// // export default function Login() {

// //     return <>;
// // }

// export default function Login() {
//   const cookieChecker = cookies().has('id')
//   console.log(cookieChecker);

//   if (cookieChecker) {
//     return redirect('/')
//   }
//   const handleLogin = async (formData: FormData) => {
//     "use server";

//     const form = {
//       email: formData.get("email"),
//       password: formData.get("password"),
//     };

//     const response = await fetch(`${process.env.BASE_URL}api/users/login`, {
//       method: "POST",
//       body: JSON.stringify(form),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//     console.log(response);

//     if (!response.ok) {
//       const errorBody = (await response.json()) as { error: string };
//       console.log(errorBody);
//       return redirect("/login?error=" + errorBody.error);
//     }

//     const responseBody = (await response.json()) as {
//       accessToken: string;
//       id: string;
//     };
//     console.log(responseBody, "rbodyyyy");

//     cookies().set("Authorization", "Bearer " + responseBody.accessToken);
//     cookies().set("id", `${responseBody.id}`);

//     return redirect("/");
//   };
//   return (
//     <div className="bg-gray-50 font-[sans-serif]">
//       <div className="min-h-screen flex flex-col items-center justify-center py-6 px-4">
//         <div className="max-w-md w-full">
//           <a href="javascript:void(0)">
//             <img
//               src="https://readymadeui.com/readymadeui.svg"
//               alt="logo"
//               className="w-40 mb-8 mx-auto block"
//             />
//           </a>
//           <SweetAlert />
//           <div className="p-8 rounded-2xl bg-white shadow">
//             <h2 className="text-gray-800 text-center text-2xl font-bold">
//               Sign in
//             </h2>
//             <form action={handleLogin} className="mt-8 space-y-4">
//               <div>
//                 <label className="text-gray-800 text-sm mb-2 block">
//                   Email
//                 </label>
//                 <div className="relative flex items-center">
//                   <input
//                     name="email"
//                     type="mail"
//                     required
//                     className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600"
//                     placeholder="Enter email"
//                   />
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="#bbb"
//                     stroke="#bbb"
//                     className="w-4 h-4 absolute right-4"
//                     viewBox="0 0 24 24"
//                   >
//                     <circle
//                       cx="10"
//                       cy="7"
//                       r="6"
//                       data-original="#000000"
//                     ></circle>
//                     <path
//                       d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"
//                       data-original="#000000"
//                     ></path>
//                   </svg>
//                 </div>
//               </div>

//               <div>
//                 <label className="text-gray-800 text-sm mb-2 block">
//                   Password
//                 </label>
//                 <div className="relative flex items-center">
//                   <input
//                     name="password"
//                     type="password"
//                     required
//                     className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600"
//                     placeholder="Enter password"
//                   />
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="#bbb"
//                     stroke="#bbb"
//                     className="w-4 h-4 absolute right-4 cursor-pointer"
//                     viewBox="0 0 128 128"
//                   >
//                     <path
//                       d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z"
//                       data-original="#000000"
//                     ></path>
//                   </svg>
//                 </div>
//               </div>

//               <div className="flex flex-wrap items-center justify-between gap-4">
//                 <div className="flex items-center">
//                   <input
//                     id="remember-me"
//                     name="remember-me"
//                     type="checkbox"
//                     className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
//                   />
//                   <label
//                     htmlFor="remember-me"
//                     className="ml-3 block text-sm text-gray-800"
//                   >
//                     Remember me
//                   </label>
//                 </div>
//                 <div className="text-sm">
//                   <a
//                     href="jajvascript:void(0);"
//                     className="text-blue-600 hover:underline font-semibold"
//                   >
//                     Forgot your password?
//                   </a>
//                 </div>
//               </div>

//               <div className="!mt-8">
//                 <button
//                   type="submit"
//                   className="w-full py-3 px-4 text-sm tracking-wide rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
//                 >
//                   Sign in
//                 </button>
//               </div>
//               <p className="text-gray-800 text-sm !mt-8 text-center">
//                 Don't have an account?
//                 <Link
//                   href={'/register'}
//                   className="text-blue-600 hover:underline ml-1 whitespace-nowrap font-semibold"
//                 >
//                   Register here
//                 </Link>
//               </p>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
import SweetAlert from "@/app/components/Sweetalert";
import { cookies } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";
import Image from 'next/image';

export default function Login() {
  // Perform cookie check on server-side only
  const cookieChecker = cookies().has("id");

  if (cookieChecker) {
    // Redirect if the cookie exists
    return redirect("/");
  }

  const handleLogin = async (formData: FormData) => {
    "use server";

    const form = {
      email: formData.get("email"),
      password: formData.get("password"),
    };

    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api/users/login`, {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      const errorBody = await response.json();
      console.error("Login error:", errorBody.error);
      return redirect(`/login?error=${encodeURIComponent(errorBody.error)}`);
    }
    const responseBody = await response.json();
    cookies().set("Authorization", `Bearer ${responseBody.accessToken}`);
    cookies().set("id", responseBody.id);

    return redirect("/");
    // try {

    // } catch (error) {
    //   console.error("Login error:", error);
    //   return redirect(`/login?error=${error.message}`);
    // }
  };

  return (
    <div className="bg-gray-50 font-[sans-serif]">
      <div className="min-h-screen flex flex-col items-center justify-center py-6 px-4">
        <div className="max-w-md w-full">
          <SweetAlert />
          <div className="p-8 rounded-2xl bg-white shadow">
            <h2 className="text-gray-800 text-center text-2xl font-bold">
              Sign in
            </h2>
            <form action={handleLogin} className="mt-8 space-y-4">
              <div>
                <label className="text-gray-800 text-sm mb-2 block">
                  Email
                </label>
                <div className="relative flex items-center">
                  <input
                    name="email"
                    type="email" // Changed from type="mail" to type="email"
                    required
                    className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600"
                    placeholder="Enter email"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#bbb"
                    stroke="#bbb"
                    className="w-4 h-4 absolute right-4"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      cx="10"
                      cy="7"
                      r="6"
                      data-original="#000000"
                    ></circle>
                    <path
                      d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"
                      data-original="#000000"
                    ></path>
                  </svg>
                </div>
              </div>

              <div>
                <label className="text-gray-800 text-sm mb-2 block">
                  Password
                </label>
                <div className="relative flex items-center">
                  <input
                    name="password"
                    type="password"
                    required
                    className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600"
                    placeholder="Enter password"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#bbb"
                    stroke="#bbb"
                    className="w-4 h-4 absolute right-4 cursor-pointer"
                    viewBox="0 0 128 128"
                  >
                    <path
                      d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z"
                      data-original="#000000"
                    ></path>
                  </svg>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-3 block text-sm text-gray-800"
                  >
                    Remember me
                  </label>
                </div>
                <div className="text-sm">
                  <a
                    href="javascript:void(0);"
                    className="text-blue-600 hover:underline font-semibold"
                  >
                    Forgot your password?
                  </a>
                </div>
              </div>

              <div className="!mt-8">
                <button
                  type="submit"
                  className="w-full py-3 px-4 text-sm tracking-wide rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
                >
                  Sign in
                </button>
              </div>
              <p className="text-gray-800 text-sm !mt-8 text-center">
                Do not have an account?
                <Link
                  href={"/register"}
                  className="text-blue-600 hover:underline ml-1 whitespace-nowrap font-semibold"
                >
                  Register here
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
