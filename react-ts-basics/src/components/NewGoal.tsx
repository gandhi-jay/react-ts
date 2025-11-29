import {type FormEvent, useRef} from "react";

type NewGoalProps = {
    onAddGoal: (goal: string, description: string) => void;
}

export default function NewGoal({onAddGoal}: NewGoalProps) {
    const goal = useRef<HTMLInputElement>(null);
    const desc = useRef<HTMLInputElement>(null);

    function handlerSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        // const formData = new FormData(event.currentTarget);
        // const goal = formData.get("name");
        // const description = formData.get("description");

        const givenGoal = goal.current!.value;
        const givenDesc= desc.current!.value;

        event.currentTarget.reset();

        if (givenGoal.length && givenDesc.length)
            onAddGoal(givenGoal, givenDesc);
    }

    return <form onSubmit={handlerSubmit}>
        <p>
            <label>Your Goal</label>
            <input id="goal" type="text" name="goal" ref={goal}/>
        </p>
        <p>
            <label>Description</label>
            <input id="description" type="text" name="description" ref={desc}/>
        </p>
        <p>
            <button>Add Goal</button>
        </p>
    </form>
}