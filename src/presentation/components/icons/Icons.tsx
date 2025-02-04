import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Fontisto from "@expo/vector-icons/Fontisto";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Octicons from "@expo/vector-icons/Octicons";
import React from "react";
import { Pressable } from "react-native";


type IconType = {
  name: string,
  size: number,
  color: string,
  onPress: () => void
}


const Icon = ({ name, size = 24, color = "black", onPress }: IconType) => {
  const iconMap = {
    checkcircleo: AntDesign,
    closecircleo: AntDesign,
    search1: AntDesign,

    "envelope-o": FontAwesome,
    "files-o": FontAwesome,

    "sack-dollar": FontAwesome6,

    locked: Fontisto,

    "logo-facebook": Ionicons,
    "logo-google": Ionicons,
    "logo-apple": Ionicons,
    "game-controller": Ionicons,

    discord: MaterialIcons,
    home: MaterialIcons,

    "star-circle": MaterialCommunityIcons,

    eye: Octicons,
    "eye-closed": Octicons,
    "chevron-left": Octicons,
    "chevron-right": Octicons,
  };
  type IconName = keyof typeof iconMap;

  const IconComponent = iconMap[name as IconName];


  if (!IconComponent) {
    console.error(`Ícone não encontrado: ${name}`);
    return null;
  }

  return (
    <Pressable onPress={onPress}>
      <IconComponent name={name} size={size} color={color} />
    </Pressable>
  );
};

export default Icon;
