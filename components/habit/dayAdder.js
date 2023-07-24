import React, { useState } from "react";
import { StyleSheet, Button, View, TextInput } from "react-native";
import { Formik } from "formik";
import FlatButton from "../../shared/button.js";

//initial values MUST be empty

export default function DayAdder({ addDay }) {
  // define the regex for DD-MM-YYYY format
  const regex = /^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/;

  return (
    <View>
      <Formik
        initialValues={{
          date: "",
          habit1: "",
          habit2: "",
          habit3: "",
          habit4: "",
          habit5: "",
        }}
        onSubmit={(values) => {
          // check if the date input is valid
          if (regex.test(values.date)) {
            // call the addDay function
            addDay(values);
          } else {
            // show an alert
            alert("Invalid date format. Please enter DD-MM-YYYY.");
          }
        }}
      >
        {(props) => (
          <View style={styles.container}>
            <TextInput
              style={styles.textInput}
              placeholderTextColor={"#fff"}
              placeholder="  date"
              onChangeText={props.handleChange("date")}
              value={props.values.date}
              // use onBlur event to validate the input
              onBlur={() => {
                // if the input does not match the regex, show an alert
                if (!regex.test(props.values.date)) {
                  alert("Invalid date format. Please enter DD-MM-YYYY.");
                }
              }}
            />
            <TextInput
              style={styles.textInput}
              placeholderTextColor={"#fff"}
              placeholder="  add habit"
              onChangeText={props.handleChange("habit1")}
              value={props.values.habit1}
            />
            <TextInput
              style={styles.textInput}
              placeholderTextColor={"#fff"}
              placeholder="  add habit"
              onChangeText={props.handleChange("habit2")}
              value={props.values.habit2}
            />
            <TextInput
              style={styles.textInput}
              placeholderTextColor={"#fff"}
              placeholder="  add habit"
              onChangeText={props.handleChange("habit3")}
              value={props.values.habit3}
            />
            <TextInput
              style={styles.textInput}
              placeholder="  add habit"
              placeholderTextColor={"#fff"}
              onChangeText={props.handleChange("habit4")}
              value={props.values.habit4}
            />
            <TextInput
              style={styles.textInput}
              placeholderTextColor={"#fff"}
              placeholder="  add habit"
              onChangeText={props.handleChange("habit5")}
              value={props.values.habit5}
            />
            <FlatButton text="submit" onPress={props.handleSubmit} />
          </View>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#443d4d",
    borderColor: "#e3d3f8",
    borderWidth: 1,
  },
  textInput: {
    marginHorizontal: 4,
    color: "#fff",
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 5,
    marginTop: 5,
    marginBottom: 2,
    fontSize: 18,
    borderRadius: 18,
  },
});
