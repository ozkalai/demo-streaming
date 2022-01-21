import { IButtonProps } from "@/interfaces/Button";

export const Button: React.FC<IButtonProps> = ({
  className,
  text,
}): JSX.Element => {
  return <button className={className}>{text}</button>;
};
