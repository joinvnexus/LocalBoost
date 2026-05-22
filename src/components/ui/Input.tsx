// src/components/ui/Input.tsx
export function Input({ 
  className = "",
  type = "text",
  placeholder = "",
  value = "",
  onChange,
  disabled = false,
  required = false,
  id = ""
}: { 
  className?: string;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  required?: boolean;
  id?: string;
}) {
  return (
    <input
      id={id}
      type={type}
      className={`w-full px-3 py-2 border border-neutral-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-neutral-800 text-white placeholder-neutral-400 ${className}`}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
      required={required}
    />
  );
}