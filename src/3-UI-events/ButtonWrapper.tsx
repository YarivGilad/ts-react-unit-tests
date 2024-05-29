// import { ButtonHTMLAttributes, FC } from "react";
import { ButtonHTMLAttributes} from "react";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    title: string;
}
// export const ButtonWrapper: FC<IProps> = ({ title, ...props }) => (
export const ButtonWrapper = ({ title, ...props } : IProps) => (
    <button {...props}>{title}</button>
)

// export const ButtonWrapper: FC<
//     ButtonHTMLAttributes<HTMLButtonElement>
//     & { title: string }
// > = ({ title, ...props }) => (
//     <button {...props}>{title}</button>
// )