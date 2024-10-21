import { FaArrowRight } from "react-icons/fa"; // Corrected import

// Define the Button type
type ButtonProps = {
  text: string;
  onClick: () => void;
  className?: string;
};

export default function ButtonMain({
  text,
  onClick,
  className = "",
}: ButtonProps) {
  return (
    <div>
      <button
        className={`bg-softCoral ${className} text-white rounded-xl p-2  transition-all`}
        onClick={onClick}
      >
        <div className="flex items-center gap-2">
          {" "}
          {text}
          <FaArrowRight />
        </div>
      </button>
    </div>
  );
}
