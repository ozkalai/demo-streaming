import { ITextButtonProps } from "@/interfaces/TextButton";

export const TextButton: React.FC<ITextButtonProps> = ({ text, className }) => {
  return <button className={className}>{text}</button>;
};
