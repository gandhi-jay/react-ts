import {type FC, type PropsWithChildren} from "react";

type CourseGoal = {
    title: string,
    id: number,
    onDelete: (id: number) => void
};
type CourseGoalProps = PropsWithChildren<CourseGoal>;

const CourseGoal: FC<CourseGoalProps> = ({title, id, children, onDelete}) => {
    return (
        <article>
            <div>
                <h2>{title}</h2>
                {children}
            </div>
            <button onClick={() => onDelete(id)}>Delete</button>
        </article>
    )
}

export default CourseGoal;