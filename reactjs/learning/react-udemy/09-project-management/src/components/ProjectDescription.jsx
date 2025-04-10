export default function ProjectDescription({projectObj}) {
    console.log(projectObj.title)

  return (
    <div>
      <div className="flex justify-between">
        <h2>{projectObj.title}</h2>
        <button>Delete</button>
      </div>
      <p>{projectObj.dueDate}</p>
      <p>{projectObj.description}</p>
      <hr></hr>

      <h2>Tasks</h2>
      <form>
        <div className="flex">
          <input></input>
          <button type="submit">Add Task</button>
        </div>
        <textarea></textarea>
        <button type="reset">Clear</button>
      </form>
    </div>
  );
}
