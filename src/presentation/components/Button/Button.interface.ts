import { TouchableOpacityProps } from "react-native";
type ButtonVariant = "primary" | "yellow" | "red" | "white";

export interface IButton extends TouchableOpacityProps {
  icon?: string;
  title?: string;
  variant: ButtonVariant;
}