import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";

import { IFormValues } from "features/login/views/types";
import Input from "app/components/input";

interface RegisterFormProps {
    onLogin: (values: IFormValues) => void
}

function RegisterForm ( {onLogin} : RegisterFormProps ) {
    const {register, handleSubmit, formState : {errors}} = useForm<IFormValues>();

    const onSubmit: SubmitHandler<IFormValues> = data => {
        onLogin(data)
    }

    return(
        <form onSubmit={handleSubmit(onSubmit)} className="w-2/2 max-w-[420px]  h-3/4 min-h-[490px] shadow-xl border rounded-md p-5 flex flex-col justify-around gap-1 bg-white">
        <h3 className="text-center text-3xl text-green-500">Register</h3>
        <div>
          <label>First Name</label>
          <Input
            type="text"
            placeholder="Valeri"
            register={register('firstname', {
              required: true,
              maxLength: {
                value: 10,
                message: "max length is 20",
              },
              minLength: {
                value: 6,
                message: "min length is 5",
              },
            })}
          />
          {errors.firstname && <span role="alert">{errors.firstname.message}</span>}
        </div>
        <div>
          <label>Last Name</label>
          <Input
            type="text"
            placeholder="Smith"
            register={register("lastname", {
              required: true,
              maxLength: {
                value: 20,
                message: "max length is 20",
              },
              minLength: {
                value: 6,
                message: "min length is 5",
              },
            })}
          />
          {errors.lastname && <span role="alert">{errors.lastname.message}</span>}
        </div>
        <div>
          <label>Email</label>
          <Input
            type="email"
            placeholder="valerie19@gmail.es"
            register={register("email", {
              required: true,
              maxLength: {
                value: 20,
                message: "max length is 20",
              },
              minLength: {
                value: 6,
                message: "min length is 5",
              },
            })}
          />
          {errors.email && <span role="alert">{errors.email.message}</span>}
        </div>
        <div>
        <label>Password</label>
          <Input
            type="password"
            placeholder="password"
            register={register("password", {
              required: true,
              minLength: {
                value: 8,
                message: "min length is 8",
              },
            })}
          />
          {errors.password && <span role="alert">{errors.password.message}</span>}
        </div>
        <div className="flex justify-around">
        <NavLink to='/login' className="text-gray-500">already have an account?<br/> <span className="hover:text-green-500">Sign in</span></NavLink>
        <input type="submit" className="bg-green-600 text-white rounded-lg p-2 font-semibold cursor-pointer hover:ease-in-outase-out hover:bg-green-700 " value="Sign Up"/>
        </div>
        
      </form>
    )
}

export default RegisterForm;