import { TextInputProps } from "react-native";

export interface IInputProps extends TextInputProps {
  hasIcon?: boolean; 
  icon?: string; 
  onPress?: () => void;
}
