import { StyleSheet, View, FlatList, Button } from "react-native";
import { useState } from "react";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [isModalVisible, setModalVisible] = useState(false);
  const [goals, setGoals] = useState<{ text: string; id: string }[]>([]);

  function modalCloserHandler() {
    setModalVisible(false);
  }

  function modalVisibilityHandler() {
    setModalVisible(true);
  }

  function addGoalHandler(goal: string) {
    setGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: goal, id: Math.random().toString() },
    ]);
    modalCloserHandler();
  }

  function deleteGoalHandler(id: string) {
    setGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  }

  return (
    <>
    <StatusBar style="light"/>
      <View style={styles.container}>
        <Button
          title="Add New Goal"
          color="pink"
          onPress={modalVisibilityHandler}
        />
        <GoalInput
          onCancel={modalCloserHandler}
          isVisible={isModalVisible}
          addGoalFunc={addGoalHandler}
        />
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
    </>
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
