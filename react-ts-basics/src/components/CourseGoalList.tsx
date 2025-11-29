import type {CourseGoal as CG} from "../App.tsx";
import CourseGoal from "./CourseGoal.tsx";
import InfoBox from "./InfoBox.tsx";
import type {ReactNode} from "react";

type CourseGoalListProps = {
    goals: CG[],
    onDeleteGoal: (id: number) => void;
};

export default function CourseGoalList({goals, onDeleteGoal}: CourseGoalListProps) {
    let infoBox: ReactNode;

    if (goals.length >= 4) {
        infoBox = (
            <InfoBox mode="warning" severity={'high'}>
                You're collecting a lot of goals. Don't put too much on your plate!
            </InfoBox>
        )
    }

    if (goals.length === 0) {
        infoBox = <InfoBox mode="hint">
            You have no course goals yet. Start adding some!
        </InfoBox>
    }

    return (
        <>
            {infoBox}
            <ul>
                {
                    goals.map(goal => (
                        <li>
                            <CourseGoal key={goal.id} id={goal.id} title={goal.title} onDelete={onDeleteGoal}>
                                <p>{goal.description}</p>
                            </CourseGoal>
                        </li>
                    ))
                }
            </ul>
        </>)
        ;
}