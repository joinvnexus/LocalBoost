// src/components/ui/Button.tsx
export function Button({ 
  children, 
  className = "", 
  type = "button",
  disabled = false 
}: { 
  children: React.ReactNode; 
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}) {
  return (
    <button 
      type={type}
      className={`px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
}