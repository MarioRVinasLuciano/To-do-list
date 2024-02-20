import React from "react";
import ToDoList from "../components/todolist";

export default function List() {
    const imageURL = "https://images.unsplash.com/photo-1518655048521-f130df041f66?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    return (
        <div className="flex justify-center items-center h-screen">
            <div
                className="flex items-center justify-center bg-cover bg-center h-screen w-screen"
                style={{
                    backgroundImage: `url(${imageURL})`,
                }}
            >
                <ToDoList/>
            </div>
        </div>
    );
}
