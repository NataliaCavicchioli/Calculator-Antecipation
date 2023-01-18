import "./App.css";
import Box from "./components/Box";
import AntecipationProvider from "./contexts/AntecipationContext";
import GlobalStyle from "./styles/global";

function App() {
  return (
    <AntecipationProvider>
      <div className="App">
        <GlobalStyle />
        <Box />
      </div>
    </AntecipationProvider>
  );
}

export default App;

// I -

// function removeDuplicates(array) {

// let newArray = []

// for (let i = 0; i < array.length; i++) {

// if (array.indexOf(array[i]) === i) {

// newArray.push(array[i])

// }

// }

// return newArray

// }

// II -

// function removeDuplicates(array) {

// return array.filter((value, index) => {

// return array.indexOf(value) === index

// })

// }

// III -

// function removeDuplicates(array) {

// return [...new Set(array)]

// }
