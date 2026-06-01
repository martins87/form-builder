"use client";

interface Option {
  label: string;
  value: string;
}

interface OptionsEditorProps {
  options: Option[];
  onChange: (options: Option[]) => void;
}

const OptionsEditor = ({ options, onChange }: OptionsEditorProps) => {
  const handleLabelChange = (index: number, newLabel: string) => {
    const newOptions = [...options];
    newOptions[index] = {
      label: newLabel,
      value: newLabel.toLowerCase().replace(/\s+/g, "-"),
    };
    onChange(newOptions);
  };

  const handleAddOption = () => {
    const newIndex = options.length + 1;
    onChange([
      ...options,
      { label: `Option ${newIndex}`, value: `option-${newIndex}` },
    ]);
  };

  const handleRemoveOption = (index: number) => {
    if (options.length <= 1) return; // Keep at least one option
    const newOptions = options.filter((_, i) => i !== index);
    onChange(newOptions);
  };

  return (
    <div className="space-y-2">
      {options.map((option, index) => (
        <div key={index} className="flex items-center gap-2">
          <input
            className="flex-1 rounded-lg border border-[#1D9E99]/50 p-2"
            value={option.label}
            onChange={(e) => handleLabelChange(index, e.target.value)}
          />
          <button
            type="button"
            onClick={() => handleRemoveOption(index)}
            className="flex h-8 w-8 items-center justify-center rounded-lg text-gray-400 hover:bg-red-50 hover:text-red-500"
            disabled={options.length <= 1}
          >
            ×
          </button>
        </div>
      ))}
      <button
        type="button"
        onClick={handleAddOption}
        className="flex w-full items-center justify-center gap-1 rounded-lg border border-dashed border-[#1D9E99]/50 p-2 text-sm text-[#1D9E99] hover:bg-[#1D9E99]/5 hover:cursor-pointer"
      >
        <span>+</span> Add Option
      </button>
    </div>
  );
};

export default OptionsEditor;
