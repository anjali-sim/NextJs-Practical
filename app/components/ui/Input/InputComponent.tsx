interface Props {
  type: string;
  name: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function InputComponent({ type, name, onChange }: Props) {
  return (
    <input
      type={type}
      name={name}
      className="block w-full border-0 bg-transparent p-0 text-md focus:outline-none"
      onChange={onChange}
    />
  );
}
