import { useState } from "react";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#b8926a] to-[#8a6c55] flex items-center justify-center px-4 font-serif">
      <div className="bg-[#f6f1eb] w-full max-w-4xl mx-auto rounded-3xl shadow-xl flex flex-col md:flex-row overflow-hidden">
        {/* Left Form Section */}
        <div className="w-full md:w-1/2 px-10 py-12 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#f5ece3] via-[#e3d5c5] to-[#e1cdb5]">
          <h2 className="text-2xl font-bold mb-2">Create an Account</h2>
          <p className="text-sm text-gray-500 mb-8">
            Sign up and get 30 days free trial
          </p>

          <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
            {!isLogin && (
              <>
                <input
                  type="text"
                  placeholder={`${
                    errors.firstName ? "This field is required" : "Full Name"
                  }`}
                  className={`w-full px-4 py-3 rounded-full border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#b47c4d] ${
                    errors.firstName ? "border-red-500" : ""
                  } outline-0`}
                  {...register("firstName", { required: true })}
                />

                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full px-4 py-3 rounded-full border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#b47c4d]"
                  {...register("lastName")}
                />
              </>
            )}

            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-3 rounded-full border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#b47c4d]"
              {...register("email", { required: true })}
            />

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full px-4 py-3 pr-10 rounded-full border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#b47c4d]"
                {...register("password", { required: true })}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#b47c4d]"
              >
                {showPassword ? (
                  <IoEyeOutline size={20} />
                ) : (
                  <IoEyeOffOutline size={20} />
                )}
              </button>
            </div>

            <div className="text-xs text-gray-600 space-y-1">
              <p>🔒 Must be at least 8 characters</p>
              <p>🔒 Must contain one special character</p>
            </div>

            <button
              type="submit"
              className="w-full bg-[#b47c4d] text-white py-3 rounded-full font-semibold hover:bg-[#9d6540] transition"
            >
              SUBMIT
            </button>

            <div className="flex items-center justify-center space-x-4 pt-2">
              <button className="flex items-center gap-2 px-6 py-2 rounded-full border border-gray-300 bg-white text-sm">
                <FcGoogle size={20} /> Google
              </button>
              <button className="flex items-center gap-2 px-6 py-2 rounded-full border border-gray-300 bg-white text-sm">
                <FaApple size={20} /> Apple
              </button>
            </div>
          </form>

          <div className="mt-6 flex flex-col sm:flex-row justify-between text-sm text-gray-500">
            <p>
              {isLogin ? "Don’t have an account?" : "Already have an account?"}{" "}
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="text-[#b47c4d] underline hover:text-[#9d6540]"
              >
                {isLogin ? "Sign Up" : "Sign In"}
              </button>
            </p>
            <a href="#" className="mt-2 sm:mt-0 hover:underline">
              Terms & Conditions
            </a>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="hidden md:block w-1/2 relative">
          <img
            src="https://images.pexels.com/photos/3184436/pexels-photo-3184436.jpeg"
            alt="Teamwork"
            className="h-full object-cover w-full"
          />
          <div className="absolute bottom-4 left-4 bg-white px-4 py-3 rounded-xl shadow text-sm">
            <p className="font-semibold">Daily Meeting</p>
            <p className="text-xs text-gray-500">12:00 PM - 1:00 PM</p>
            <div className="mt-2 flex space-x-2">
              {[1, 2, 3].map((i) => (
                <img
                  key={i}
                  src={`https://i.pravatar.cc/30?img=${i + 10}`}
                  alt="avatar"
                  className="w-6 h-6 rounded-full border border-white"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
