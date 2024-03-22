import { InputProps } from "@/app/types/types";

export default function InputComponent({ type, name, onChange }: InputProps) {
  return (
    <input
      type={type}
      name={name}
      className="block w-full border-0 bg-transparent p-0 text-md focus:outline-none"
      onChange={onChange}
    />
  );
}
