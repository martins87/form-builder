"use client";

import { useState, FormEvent } from "react";

export default function App() {
  const [formData, setFormData] = useState({
    text_eca0d83b_c6cb_4d93_9119_b1bdfd7cb77d: "",
    text_3a1ab1d3_4b8b_4374_b0d7_4c9f2f485f99: "",
  });

  const handleChange = (name: string, value: string | boolean | string[]) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md space-y-6 p-4">
      <div>
        <label className="mb-1 block font-medium">email</label>
        <input
          type="text"
          name="text_eca0d83b_c6cb_4d93_9119_b1bdfd7cb77d"
          placeholder=""
          value={formData.text_eca0d83b_c6cb_4d93_9119_b1bdfd7cb77d}
          onChange={(e) =>
            handleChange(
              "text_eca0d83b_c6cb_4d93_9119_b1bdfd7cb77d",
              e.target.value,
            )
          }
          className="w-full rounded border border-gray-300 p-2 focus:border-blue-500 focus:outline-none"
          required
        />
      </div>

      <div>
        <label className="mb-1 block font-medium">passwd</label>
        <input
          type="text"
          name="text_3a1ab1d3_4b8b_4374_b0d7_4c9f2f485f99"
          placeholder=""
          value={formData.text_3a1ab1d3_4b8b_4374_b0d7_4c9f2f485f99}
          onChange={(e) =>
            handleChange(
              "text_3a1ab1d3_4b8b_4374_b0d7_4c9f2f485f99",
              e.target.value,
            )
          }
          className="w-full rounded border border-gray-300 p-2 focus:border-blue-500 focus:outline-none"
        />
      </div>

      <button
        type="submit"
        className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        letssss go
      </button>
    </form>
  );
}
