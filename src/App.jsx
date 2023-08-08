import "./styles.css";

function App() {
  return (
    <>
      <form className="new-item-form">
        <div className="form-row"></div>
        <label htmlFor="item">New Item</label>
        <input type="text" id="item" />
        <button className="btn">Add</button>
      </form>
      <h1 className="header">ToDo List</h1>
      <ul className="list">
        <li>
          <label>
            <input type="checkbox" name="" id="" />
            Item 1
          </label>
          <button className="btn btn-danger">Delete</button>
        </li>
        <li>
          <label>
            <input type="checkbox" name="" id="" />
            Item 2
          </label>
          <button className="btn btn-danger">Delete</button>
        </li>
      </ul>
    </>
  );
}

export default App;
