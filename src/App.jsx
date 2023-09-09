
import './App.css'
import Counter from './Counter';
import Team from './Team';
import Friends from './Friends';
function App() {

  function handelClick() {
    alert('button clicked')
  }

  const addToClick = (num) => {
    alert(num + 5)
  }
  return (
    <div>
      <h3>React Core Consept Part 2</h3>
      <Friends></Friends>
      <Counter></Counter>
      <Team></Team>
      <button onClick={handelClick}>Click Me</button>
      <button onClick={() => addToClick(8)}>addToClick</button>
    </div>
  )
}

export default App
