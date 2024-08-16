import React from "react";
import { TouchableOpacity } from "react-native";
import { COLORS } from "../constants";

const HeaderButton = ({ onPress, icon }) => {
  return (
    <TouchableOpacity
      style={{
        alignItems: "center",
        justifyContent: "center",
        width: 50,
        height: 50,
        borderRadius: 20,
        backgroundColor: COLORS.transparentBlack,
      }}
      onPress={onPress}
    >
      {icon}
    </TouchableOpacity>
  );
};

export default HeaderButton;
