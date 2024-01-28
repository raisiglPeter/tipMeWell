import React from "react";
import RNPickerSelect from "react-native-picker-select";

const PercentagePicker = (props) => {
  return (
    <RNPickerSelect
      placeholder={{
        label: "Select Percentage",
        value: null,
      }}
      onValueChange={(value) => {
        setPercentage(value);
        setSelectedValue(value);
      }}
      items={[
        { label: "10", value: "10" },
        { label: "15", value: "15" },
        { label: "18", value: "18" },
        { label: "20", value: "20" },
      ]}
    ></RNPickerSelect>
  );
};

export default PercentagePicker;
