"use client"

import React from 'react';

const InputField = ({ name, label, register, errors, type = 'text', placeholder, validationRules }) => (
  <div>
    <label htmlFor={name} className="block mb-1 font-medium text-gray-700">
      {label}
    </label>
    <input
      id={name}
      type={type}
      {...register(name, validationRules)}
      className="input input-bordered w-full focus:ring-indigo-500 focus:border-indigo-500"
      placeholder={placeholder}
    />
    {errors[name] && (
      <p className="mt-1 text-sm text-red-600">{errors[name].message}</p>
    )}
  </div>
);

export default InputField;