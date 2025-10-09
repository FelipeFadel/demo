import React from "react";
import {
  StyleSheet,
  TextInput,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";

type InputTextProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  style?: ViewStyle;
  inputStyle?: TextStyle;
};

export function InputText({
  value,
  onChange,
  placeholder = "",
  style = {},
  inputStyle = {},
}: InputTextProps) {
  return (
    <View style={[{ ...style }, styles.container]}>
      <TextInput
        value={value}
        onChangeText={onChange}
        placeholder={placeholder}
        style={[
          {
            ...inputStyle,
          },
          styles.textInput,
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginBottom: 10 },
  textInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 8,
    borderRadius: 5,
  },
});

export default InputText;
