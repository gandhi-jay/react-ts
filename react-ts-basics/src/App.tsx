import {useState} from "react";
import Header from './components/Header.tsx';
import goalsImg from '/img.png';
import CourseGoalList from "./components/CourseGoalList.tsx";
import NewGoal from "./components/NewGoal.tsx";

export type CourseGoal = {
    title: string,
    description: string,
    id: number;
}

function App() {
    const [goals, setGoals] = useState<CourseGoal[]>([]);

    function handleAddGoal(goal: string, description: string) {
        setGoals(prevGoals => {
            const newGoal: CourseGoal = {
                title: goal,
                description: description,
                id: Math.random()
            }
            return [
                ...prevGoals,
                newGoal
            ]
        });
    }

    // Prop Drilling....
    function handleDeleteGoal(id: number) {
        setGoals(prevGoals => prevGoals.filter(item => item.id !== id))
    }

    // const renderCount = useRef(0);

    return (
        <main>
            <Header image={{src: goalsImg, alt: 'A list of goals'}}>
                <h1>Your Course Goals</h1>
            </Header>

            <NewGoal onAddGoal={handleAddGoal} />
            <CourseGoalList goals={goals} onDeleteGoal={handleDeleteGoal}></CourseGoalList>
        </main>
    )
}

export default App
