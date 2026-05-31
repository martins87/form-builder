"use client";

import { useState } from "react";
import { useFormBuilderStore } from "@/store/form-builder.store";
import { generateFormCode } from "@/utils/generateFormCode";
import CodePreview from "./CodePreview";

const GetCodeButton = () => {
  const fields = useFormBuilderStore((state) => state.fields);
  const [showModal, setShowModal] = useState(false);
  const [code, setCode] = useState("");

  const handleClick = () => {
    setCode(generateFormCode(fields));
    setShowModal(true);
  };

  return (
    <>
      <button
        onClick={handleClick}
        className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-3 text-sm font-medium text-white hover:bg-blue-700 hover:cursor-pointer"
      >
        <svg
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
        Get Form Code
      </button>
      <CodePreview
        code={code}
        isOpen={showModal}
        onClose={() => setShowModal(false)}
      />
    </>
  );
};

export default GetCodeButton;
