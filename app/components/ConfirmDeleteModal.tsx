"use client";

interface Props {
  isOpen: boolean;
  fieldLabel: string;
  onConfirm: () => void;
  onCancel: () => void;
}

const ConfirmDeleteModal = ({
  isOpen,
  fieldLabel,
  onConfirm,
  onCancel,
}: Props) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75"
      onClick={onCancel}
    >
      <div
        className="w-full max-w-md rounded-lg bg-white p-6 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="mb-2 text-lg font-semibold text-gray-900">
          Remove Element
        </h3>
        <p className="mb-6 text-gray-600">
          Are you sure you want to remove &quot;{fieldLabel}&quot;? This action
          cannot be undone.
        </p>
        <div className="flex justify-end gap-2">
          <button
            onClick={onCancel}
            className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:cursor-pointer"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700 hover:cursor-pointer"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDeleteModal;
