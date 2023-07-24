import { StyleSheet, View, FlatList } from "react-native";
import { useState } from "react";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [goals, setGoals] = useState<{ text: string; id: string }[]>([]);

  function addGoalHandler(goal: string) {
    setGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: goal, id: Math.random().toString() },
    ]);
  }

  function deleteGoalHandler(id: string) {
    setGoals(currentCourseGoals => {
      return currentCourseGoals.filter((goal) => goal.id !== id );
    })
  }

  return (
    <View style={styles.container}>
      <GoalInput addGoalFunc={addGoalHandler} />
      <View style={styles.goalsWrapper}>
        {/*  ---> FlatList optimizes scrolling by only
        rendering whats required <---
        
        <ScrollView alwaysBounceVertical={false}>
        {goals.map((goal) => (
          <View style={styles.goalsItem} key={goal}>
            <Text style={styles.text}>{goal}</Text>
          </View>
        ))}
      </ScrollView> 
      
      */}

        <FlatList
          data={goals}
          renderItem={(itemData) => {
            return (
              <GoalItem
                text={itemData.item.text}
                id={itemData.item.id}
                onDeleteItem={deleteGoalHandler}
              />
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          alwaysBounceVertical={false}
        />
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
  goalsWrapper: {
    flex: 5,
    flexDirection: "column",
  },
});
