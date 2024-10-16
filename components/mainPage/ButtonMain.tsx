import { FaArrowRight } from "react-icons/fa"; // Corrected import

// Define the Button type
type ButtonProps = {
  text: string;
  onClick: () => void;
};

export default function ButtonMain({ text, onClick }: ButtonProps) {
  return (
    <div>
      <button
        className="bg-softCoral text-white rounded-xl p-2  transition-all"
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
