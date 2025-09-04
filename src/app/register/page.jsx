"use client";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { setCredentials } from "@/features/auth/authSlice";
import { useRegisterPatientMutation, useRegisterDoctorMutation } from "../../features/auth/authApi";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Lottie from "lottie-react";
import lottieFile from "../../../public/register.json";
import Swal from "sweetalert2";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import axios from "axios";

export default function RegisterPage() {
  const [photo_url, setPhoto_url] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const dispatch = useDispatch();
  const router = useRouter();

  // কোন ফর্ম দেখানো হবে তা ঠিক করার জন্য স্টেট ('PATIENT' অথবা 'DOCTOR')
  const [userType, setUserType] = useState('PATIENT');
  const [errorMessage, setErrorMessage] = useState("");

  const [registerPatient, { isLoading: isPatientLoading }] = useRegisterPatientMutation();
  const [registerDoctor, { isLoading: isDoctorLoading }] = useRegisterDoctorMutation();

  // দুটি লোডিং স্টেট একসাথে ম্যানেজ করার জন্য
  const isLoading = isPatientLoading || isDoctorLoading;

  const handleImageUpload = async (e) => {
    console.log("Preset:", process.env.NEXT_PUBLIC_CLOUDINARY_PRESET);
    console.log("Cloud Name:", process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME);

    const image = e.target.files[0]
    // Image upload in Cloudinary
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", process.env.NEXT_PUBLIC_CLOUDINARY_PRESET);
    const res = await axios.post(`https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_KEY}/image/upload`, formData)
    const resData = res.data
    setPhoto_url(resData.secure_url)
  }

  // userType অনুযায়ী সঠিক মিউটেশন কল করার জন্য আপডেট করা onSubmit হ্যান্ডলার
  const onSubmit = async (data) => {
    setErrorMessage("");
    try {
      const userData = { ...data, role: userType,photo_url };
      let response;

      if (userType === 'PATIENT') {
        response = await registerPatient(userData).unwrap();
      } else { // userType === 'DOCTOR'
        response = await registerDoctor(userData).unwrap()
      }
      console.log(response)
      if (response?.newPatient) {
        dispatch(setCredentials({ user: response.newPatient }));
        router.push("/login");
      } else {
        // যদি সার্ভার থেকে এরর আসে কিন্তু স্ট্যাটাস 200 হয়
        setErrorMessage(response.error?.data?.message || "Registration failed. Please try again.");
      }

    } catch (err) {
      console.log("Full registration error object:", err);

      // RTK Query error থেকে message safely বের করা
      const message =
        err?.data?.message ||                  // backend message
        err?.error ||                           // fetchBaseQuery default error
        "An unexpected error occurred";         // fallback

      setErrorMessage(message);
      Swal.fire({
        icon: "error",
        title: "Registration Failed",
        text: message,
      });
    }
  };

  // ইউজার টাইপ পরিবর্তন করার ফাংশন
  const handleUserTypeChange = (type) => {
    setUserType(type);
    reset(); // ফর্ম পরিবর্তনের সময় আগের ইনপুটগুলো রিসেট করে দেওয়া
    setErrorMessage(""); // আগের এরর মেসেজ মুছে ফেলা
  }

  return (
    <div className="min-h-screen flex items-center mt-5 justify-center bg-gradient-to-br from-indigo-50/50 via-white to-indigo-100 px-4">
      <div className="w-full max-w-md bg-white/70 shadow-xl rounded-2xl p-8">
        {/* ইউজার টাইপ সিলেক্ট করার জন্য বাটন */}
        <div className="flex justify-center border-b-2 border-gray-200 mb-6">
          <button
            onClick={() => handleUserTypeChange('PATIENT')}
            className={`py-2 px-6 text-lg font-medium transition-colors duration-300 ${userType === 'PATIENT' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500'}`}
          >
            I am a Patient
          </button>
          <button
            onClick={() => handleUserTypeChange('DOCTOR')}
            className={`py-2 px-6 text-lg font-medium transition-colors duration-300 ${userType === 'DOCTOR' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500'}`}
          >
            I am a Doctor
          </button>
        </div>

        <h2 className="text-2xl font-bold text-center text-indigo-600 mb-6">
          Create a {userType === 'PATIENT' ? 'Patient' : 'Doctor'} Account
        </h2>

        {errorMessage && (
          <p className="text-red-500 text-center mb-4">{errorMessage}</p>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* সবার জন্য কমন ফিল্ড */}
          <div>
            <label className="label">Your Name</label>
            <input
              type="text"
              {...register("name", { required: "Name is required" })}
              placeholder="Your Full Name"
              className="input input-bordered w-full bg-gray-300 py-2 px-1"
            />
            {errors.name && <p className="text-sm text-red-500 mt-1">{errors.name.message}</p>}
          </div>

          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              className="input input-bordered w-full bg-gray-300 py-2 px-1"
              placeholder="example@email.com"
            />
            {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium  mb-1">Profile Picture</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="file-input border-[1px] w-full bg-gray-300 py-2 px-1"
            />
          </div>


          <div>
            <label className="label">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                {...register("password",
                  {
                    required: "Password is Required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters"
                    },
                    validate: {
                      hasUpperCase: (value) =>
                        /[A-Z]/.test(value) || "Password must contain at least one uppercase letter",
                      hasSpecialChar: (value) =>
                        /[!@#$%^&*(),.?":{}|<>]/.test(value) || "Password must contain at least one special character"
                    }
                  })}
                placeholder="Password"
                className="input input-bordered w-full bg-gray-300 py-2 px-1"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)} className="absolute cursor-pointer right-1 top-1.5">
                {
                  showPassword ? <FaEye size={24} /> : <FaEyeSlash size={24} />
                }
              </button>
            </div>
          </div>
          {
            errors.password && <p className="text-sm text-red-500 mt-1">{errors.password.message}</p>
          }

          {/* শুধুমাত্র ডাক্তারের জন্য অতিরিক্ত ফিল্ড */}
          {userType === 'DOCTOR' && (
            <>
              <div>
                <label className="block mb-1 font-medium">Specialization</label>
                <input
                  type="text"
                  {...register("specialization", { required: "Specialization is required" })}
                  className="input input-bordered w-full bg-gray-300 py-2 px-1"
                  placeholder="e.g., Cardiology, Pediatrics"
                />
                {errors.specialization && <p className="text-sm text-red-500">{errors.specialization.message}</p>}
              </div>
            </>
          )}

          {/* সাবমিট বাটন */}
          <button
            type="submit"
            className="btn btn-primary w-full bg-blue-600 py-2 rounded-2xl cursor-pointer text-white"
            disabled={isLoading}
          >
            {isLoading ? "Registering..." : "Register"}
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account?{" "}
          <a href="/login" className="text-indigo-600 hover:underline">Login</a>
        </p>
      </div>
      <div className="hidden lg:flex w-1/2 justify-center">
        <Lottie
          animationData={lottieFile}
          loop
          style={{ maxWidth: '400px', width: '100%' }}
        />
      </div>
    </div>
  );
}