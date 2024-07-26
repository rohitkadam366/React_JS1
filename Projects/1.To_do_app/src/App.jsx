import AppName from "./components/AppName"
import ToDo from "./components/ToDo"

function App() {
  return <center class="todo-container">
    <AppName />
    <ToDo />
    <div class="container text-center">
      <div class="row">
        <div class="col-6">
          Buy Milk
        </div>
        <div class="col-4">
          26/07/2024
        </div>
        <div class="col-2">
          <button type="button" class="btn btn-danger">Delete</button>
        </div>
      </div>

      <div class="row">
        <div class="col-6">
          Buy Milk
        </div>
        <div class="col-4">
          26/07/2024
        </div>
        <div class="col-2">
          <button type="button" class="btn btn-danger">Delete</button>
        </div>
      </div>
    </div>
</center>
}

export default App
