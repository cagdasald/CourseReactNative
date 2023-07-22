  import { Button, StyleSheet, Text, TextInput, View } from "react-native";
  import { useState } from "react";

  export default function App() {
    const [goal, setGoal] = useState('');
    const [goals, setGoals] = useState<string[]>([]);

    function goalInputHandler(entredText: string) {
      setGoal(entredText);
    }

    function addGoalHandler() {
      setGoals(currentCourseGoals => [...currentCourseGoals, goal]);
    }

    return (
      <View style={styles.container}>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.textInput}
            placeholder="Type your goal here"
            onChangeText={goalInputHandler}
          />
          <Button onPress={addGoalHandler} title="Add Goal" />
        </View>
        <View style={styles.goalsWrapper}>
            {
              goals.map((goal) => <Text key={goal}>{goal}</Text>)
            }
        </View>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 50,
      paddingHorizontal: 16,
    },
    inputWrapper: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 24,
      borderBottomWidth: 1,
      borderBottomColor: "#000",
    },
    textInput: {
      borderWidth: 1,
      borderColor: "#cccccc",
      width: "70%",
      marginRight: 8,
      padding: 8,
    },
    goalsWrapper: {
      flex: 5,
      flexDirection: "column"
    },
  });
