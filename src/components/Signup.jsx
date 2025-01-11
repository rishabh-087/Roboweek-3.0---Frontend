import { useForm } from "react-hook-form";
import { useState } from "react";

const Signup = () => {
  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 5000));
    console.log("Form is being submitted");
    console.log('firstName :', data.firstName);
    console.log('middleName :', data.middleName);
    console.log('lastName :', data.lastName);
  };

  return (
    <div className="relative z-[1000] w-screen h-screen flex items-center justify-center text-gray-400">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5 p-5 border border-white">
        <div className="flex gap-2">
          <label htmlFor="firstName">First Name</label>
          <input type="text" {...register("firstName", { required: true })} />
          {errors.firstName && <span className="text-red-500">First name is required</span>}
        </div>
        <div className="flex gap-2">
          <label htmlFor="middleName">Middle Name</label>
          <input type="text" {...register("middleName", { required: false, maxLength: 20 })} />
        </div>
        <div className="flex gap-2">
          <label htmlFor="lastName">Last Name</label>
          <input type="text" {...register("lastName", { required: true })} />
          {errors.lastName && <span className="text-red-500">Last name is required</span>}
        </div>
        <input type="submit" disabled={isSubmitting} value={isSubmitting ? 'Submitting' : 'Submit' } className="border border-white cursor-pointer" />
      </form>         
    </div>
  );
};

export default Signup;