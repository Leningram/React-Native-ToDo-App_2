import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal } from "react-native";

const GoalInput = (props) => {
    const [enteredGoal, setEnteredGoal] = useState("");

    const goalInputHandler = (text) => {
        setEnteredGoal(text);
    };
    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Введите задачу"
                    style={styles.input}
                    onChangeText={goalInputHandler}
                    value={enteredGoal}
                />
                <Button title="ADD" onPress={() => props.onAddGoal(enteredGoal)} />
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    input: { borderColor: "black", borderWidth: 1, width: "80%" }
});

export default GoalInput;