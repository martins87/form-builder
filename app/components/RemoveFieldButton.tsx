"use client";

import { useState } from "react";
import ConfirmDeleteModal from "./ConfirmDeleteModal";

interface Props {
  fieldLabel: string;
  onRemove: () => void;
}

const RemoveFieldButton = ({ fieldLabel, onRemove }: Props) => {
  const [showModal, setShowModal] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowModal(true);
  };

  const handleConfirm = () => {
    setShowModal(false);
    onRemove();
  };

  return (
    <>
      <button
        onClick={handleClick}
        className="absolute right-2 top-2 rounded p-1 text-gray-400 opacity-0 transition-opacity hover:cursor-pointer hover:bg-red-50 hover:text-red-600 group-hover:opacity-100"
        title="Remove element"
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
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <ConfirmDeleteModal
        isOpen={showModal}
        fieldLabel={fieldLabel}
        onConfirm={handleConfirm}
        onCancel={() => setShowModal(false)}
      />
    </>
  );
};

export default RemoveFieldButton;
