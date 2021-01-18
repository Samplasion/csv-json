export default function FilePicker(props: { onClick: () => void, name: string }) {
    return (
        <div className="block">
            <button className="btn btn-light" onClick={props.onClick}>Select a file</button>
            &nbsp;{props.name}
        </div>
            
    )
}