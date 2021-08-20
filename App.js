import React, { useState } from "react";
import { StyleSheet, View, Button, FlatList } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
    const [goals, setGoals] = useState([]);
    const [isAddMode, setIsAddMode] = useState(false);

    const addGoalHandler = (text) => {
        setGoals((currentState) => [...currentState, { key: Math.random().toString(), value: text }]);
    };

    const removeGoalHandler = (goalId) => {
        setGoals((currentGoals) => {
            return currentGoals.filter((item) => item.key !== goalId);
        });
    };

    return (
        <View style={styles.screen}>
            <Button title="Add New Goal" onPress={() => setIsAddMode(true)} />
            <GoalInput visible={isAddMode} onAddGoal={addGoalHandler} />
            <FlatList
                data={goals}
                renderItem={(itemData) => (
                    <GoalItem id={itemData.item.key} title={itemData.item.value} onDelete={removeGoalHandler} />
                )}
            ></FlatList>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 50
    }
});
