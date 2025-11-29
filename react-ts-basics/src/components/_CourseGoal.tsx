
// export default function CourseGoal(
//     props: {
//         title: string,
//         description: string
//     }
// ) {
//     return <article>
//         <div>
//             <h2>{props.title}</h2>
//             <p>{props.description}</p>
//         </div>
//         <button>Delete</button>
//     </article>;
// }

// export default function CourseGoal(
//     {title, description} : {
//         title: string,
//         description: string
//     }
// ) {
//     return <article>
//         <div>
//             <h2>{title}</h2>
//             <p>{description}</p>
//         </div>
//         <button>Delete</button>
//     </article>;
// }

// The significance of using import type is that it allows you to
// import a type without including it in the JavaScript output.
// Zero runtime Impact.
// import type {ReactNode} from "react";
import type {PropsWithChildren} from "react";

// interface CourseGoalProps {
//     title: string,
//     description: string,
//     children: ReactNode
// }
// We don't have childern property.
type CourseGoalProps = {
    title: string,
    description: string
}

type CourseGoalPropsW = PropsWithChildren<CourseGoalProps>

export default function CourseGoal(
    {title, description} : CourseGoalPropsW
) {
    return <article>
        <div>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
        <button>Delete</button>
    </article>;
}

