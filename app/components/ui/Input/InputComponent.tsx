interface Props {
  type: string;
  name: string;
}

export default function InputComponent({ type, name }: Props) {
  return (
    <input
      type={type}
      name={name}
      className="block w-full border-0 bg-transparent p-0 text-md focus:outline-none"
    />
  );
}
