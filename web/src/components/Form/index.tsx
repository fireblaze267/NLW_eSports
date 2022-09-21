import { InputHTMLAttributes } from "react";

interface InpuProps extends InputHTMLAttributes<HTMLInputElement> {}

export function Input(props: InpuProps) {
  return (
    <input
      {...props}
      id="game"
      className="bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-500"
    />
  );
}
