import { Button, Icon } from "@rneui/themed";
import { StyleProp, ViewStyle } from "react-native";

interface IconButtonProps {
  iconName: string;
  onPress: () => void;
  title?: string;
  color?: string;
  textColor?: string;
  borderColor?: string;
  type?: "solid" | "outline" | "clear";
  size?: number;
  width?: number | string;
  height?: number;
  disabled?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
}

export default function IconButton({
  iconName,
  onPress,
  title,
  color = "#70CDDE",
  textColor = "#fff",
  borderColor = color,
  type = "solid",
  size = 60,
  width,
  height,
  disabled = false,
  containerStyle,
}: IconButtonProps) {
  const isRound = !title;

  const buttonStyle: ViewStyle = {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width:
      typeof width === "string" || typeof width === "number"
        ? (width as any)
        : size,
    height: height ?? (isRound ? size : 50),
    borderRadius: isRound ? size / 2 : 12,
    borderWidth: type === "outline" ? 2 : 0,
    borderColor,
    backgroundColor: type === "outline" ? "transparent" : color,
  };

  return (
    <Button
      onPress={onPress}
      title={title}
      icon={
        <Icon
          name={iconName}
          color={textColor}
          size={isRound ? size * 0.45 : 24}
          style={title ? { marginRight: 8 } : undefined}
        />
      }
      color={color}
      type={type}
      disabled={disabled}
      titleStyle={{
        color: textColor,
        fontSize: 16,
        fontWeight: "600",
        flex: 1,
      }}
      buttonStyle={buttonStyle as StyleProp<ViewStyle>}
      containerStyle={containerStyle}
    />
  );
}
