"use client";

interface InputProps {
  type: string;
  label: string;
  id: string;
  inline?: boolean;
  placeholder?: string;
  defaultValue?: string;
  handleInput?: Function;
  handleChange?: Function;
}

export default function Input({
  type,
  label,
  id,
  inline,
  handleInput,
  handleChange,
  placeholder,
  defaultValue,
}: InputProps) {
  return (
    <>
      {inline ? (
        <div className="w-full flex">
          <label
            htmlFor={id}
            className="font-extrabold ml-4 text-lg overflow-hidden"
          >
            {label}
          </label>
          <input
            type={type}
            id={id}
            onInput={(e) => handleInput?.(e.currentTarget.value)}
            onChange={(e) => handleChange?.(e)}
            className="bg-purple-input border-none outline-0 p-2 rounded-xl text-lg mb-5 text-white"
            placeholder={placeholder}
            defaultValue={defaultValue}
          />
        </div>
      ) : (
        <div className="w-full flex flex-col">
          <label
            htmlFor={id}
            className="font-extrabold ml-4 text-lg overflow-hidden"
          >
            {label}
          </label>
          <input
            type={type}
            id={id}
            onInput={(e) => handleInput?.(e.currentTarget.value)}
            onChange={(e) => handleChange?.(e)}
            className="bg-purple-input border-none outline-0 p-2 rounded-xl text-lg mb-5 text-white placeholder-gray-300"
            placeholder={placeholder}
            defaultValue={defaultValue}
          />
        </div>
      )}
    </>
  );
}
