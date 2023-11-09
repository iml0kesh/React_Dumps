export function TodoListComponent({childern, isComplete}) {
    return (
        <label>
            <input type="checkbox" defaultChecked={isComplete} />
            {childern}
        </label>
    )
}