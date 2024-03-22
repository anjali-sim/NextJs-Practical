import { Props } from "@/app/types/types";

export default function Label({ title }: Props) {
  return (
    <label className="text-md font-medium text-muted-foreground group-focus-within:text-white text-gray-400">
      {title}
    </label>
  );
}
