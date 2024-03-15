"use client";

import loginAction from "../../actions/loginAction";
import { useFormState } from "react-dom";

interface Props {
  children: React.ReactNode;
}

const initialState = {
  message: "",
};

export default function LoginInput({ children }: Props) {
  const [state, formAction] = useFormState(loginAction, initialState);
  // console.log(state.message)
  return (
    <div className="mt-6 p-6 pt-0">
      <form action={formAction}>
        <div className="group relative rounded-lg border focus-within:border-sky-200 px-3 pb-1.5 pt-2.5 duration-200 focus-within:ring focus-within:ring-sky-300/30">
          <div className="flex justify-between">
            <label className="text-md font-medium text-muted-foreground group-focus-within:text-white text-gray-400">
              Username
            </label>
          </div>
          <input
            type="text"
            name="username"
            className="block w-full border-0 bg-transparent p-0 text-md focus:outline-none"
          />
        </div>
        {state?.username && <p className="text-red-400">{state.username}</p>}

        <div className="mt-4">
          <div className="group relative rounded-lg border focus-within:border-sky-200 px-3 pb-1.5 pt-2.5 duration-200 focus-within:ring focus-within:ring-sky-300/30">
            <div className="flex justify-between">
              <label className="text-md font-medium text-muted-foreground group-focus-within:text-white text-gray-400">
                Password
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="password"
                name="password"
                className="block w-full border-0 bg-transparent p-0 text-md focus:outline-none"
              />
            </div>
          </div>
          {state?.password && <p className="text-red-400">{state.password}</p>}
        </div>
        {children}
      </form>
    </div>
  );
}

// // "client" code - LoginInput.js
// "use client";
// import loginAction from "../../actions/loginAction";
// import { useFormState } from "react-dom";
// import { useState } from "react";

// interface Props {
//   children: React.ReactNode;
// }

// const initialState = {
//   username: '',
//   password: '',
//   message: '',
// }

// export default function LoginInput({ children }: Props) {
//   const [formData, setFormData] = useState(initialState);
//   const [state, setState] = useFormState(initialState);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const result = await loginAction(formData);
//     if (result.errors) {
//       setState({ message: 'Invalid credentials' });
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   return (
//     <div className="mt-6 p-6 pt-0">
//       <form onSubmit={handleSubmit}>
//         <div className="group relative rounded-lg border focus-within:border-sky-200 px-3 pb-1.5 pt-2.5 duration-200 focus-within:ring focus-within:ring-sky-300/30">
//           <div className="flex justify-between">
//             <label className="text-md font-medium text-muted-foreground group-focus-within:text-white text-gray-400">
//               Username
//             </label>
//           </div>
//           <input
//             type="text"
//             name="username"
//             value={formData.username}
//             onChange={handleChange}
//             className="block w-full border-0 bg-transparent p-0 text-md focus:outline-none"
//           />
//           {state?.message && <p>{state.message}</p>}
//         </div>

//         <div className="mt-4">
//           <div className="group relative rounded-lg border focus-within:border-sky-200 px-3 pb-1.5 pt-2.5 duration-200 focus-within:ring focus-within:ring-sky-300/30">
//             <div className="flex justify-between">
//               <label className="text-md font-medium text-muted-foreground group-focus-within:text-white text-gray-400">
//                 Password
//               </label>
//             </div>
//             <div className="flex items-center">
//               <input
//                 type="password"
//                 name="password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 className="block w-full border-0 bg-transparent p-0 text-md focus:outline-none"
//               />
//             </div>
//           </div>
//         </div>
//         {children}
//         <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// }
