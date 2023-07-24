import { StyleSheet, Button, TextInput, Text, View } from "react-native";
import { Formik } from "formik";
import FlatButton from "../../shared/button.js";

//it always says date 69 at the start because props.values.entry and props.values.date was props.value.title/body

export default function AddEntry({ addEntry }) {
  // define the regex for DD-MM-YYYY format
  const regex = /^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/;

  return (
    <View>
      <Formik
        initialValues={{ date: "", entry: "" }}
        onSubmit={(values) => {
          // check if the date input is valid
          if (regex.test(values.date)) {
            // call the addEntry function
            addEntry(values);
          } else {
            // show an alert
            alert("Invalid date format. Please enter DD-MM-YYYY.");
          }
        }}
      >
        {(props) => (
          <View style={styles.container}>
            <TextInput
              placeholder="  Date here"
              placeholderTextColor={"#fff"}
              onChangeText={props.handleChange("date")}
              value={props.values.date}
              style={styles.textInput}
              // use onBlur event to validate the input
              onBlur={() => {
                // if the input does not match the regex, show an alert
                if (!regex.test(props.values.date)) {
                  alert("Invalid date format. Please enter DD-MM-YYYY.");
                }
              }}
            />

            <TextInput
              multiline
              placeholder="  Entry here"
              placeholderTextColor={"#fff"}
              onChangeText={props.handleChange("entry")}
              value={props.values.entry}
              style={styles.textInput}
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
