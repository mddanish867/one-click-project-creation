import { useRef } from "react";
import { ArrowRight } from "lucide-react";

const Login = () => {
  const formRef = useRef(null);

  return (
    <section className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="w-full max-w-md p-8 bg-gray-800 rounded-lg shadow-lg">
        <h2 className="text-3xl font-light tracking-wider text-center mb-6">Login</h2>
        <form ref={formRef} className="space-y-6">
          <div>
            <label className="block text-gray-400 mb-2">Email</label>
            <input type="email" name="email" className="w-full px-4 py-3 rounded-md bg-gray-700 text-white focus:ring-2 focus:ring-purple-500 outline-none" />
          </div>
          <div>
            <label className="block text-gray-400 mb-2">Password</label>
            <input type="password" name="password" className="w-full px-4 py-3 rounded-md bg-gray-700 text-white focus:ring-2 focus:ring-purple-500 outline-none" />
          </div>
          <button className="w-full px-6 py-3 rounded-md bg-gradient-to-r from-rose-400 to-purple-500 transition-all duration-500 hover:bg-gradient-to-r hover:from-purple-500 hover:to-rose-400 flex items-center justify-center">
            Login
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </form>
      </div>
    </section>
  );
};

export default Login;
