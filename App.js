import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button, Text, ScrollView } from "react-native";

export default function App() {
    const [enteredGoal, setEnteredGoal] = useState("");
    const [goals, setGoals] = useState([]);

    const goalInputHandler = (text) => {
        setEnteredGoal(text);
    };

    const addGoalHandler = () => {
        setGoals((currentState) => [...currentState, enteredGoal]);
        setEnteredGoal("");
    };

    return (
        <View style={styles.screen}>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Введите задачу"
                    style={styles.input}
                    onChangeText={goalInputHandler}
                    value={enteredGoal}
                />
                <Button title="ADD" onPress={addGoalHandler} />
            </View>
            <ScrollView>
                {goals.map((goal) => (
                    <View key={goal} style={styles.listItem}>
                        <Text>{goal}</Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 50
    },
    inputContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    input: { borderColor: "black", borderWidth: 1, width: "80%" },
    listItem: {
        padding: 10,
        marginVertical: 10,
        backgroundColor: "#ccc",
        borderColor: "black",
        borderWidth: 1
    }
});
