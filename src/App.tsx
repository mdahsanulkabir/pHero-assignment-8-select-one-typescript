import { Container } from "react-bootstrap"
import Heading from "./components/Heading"
import Main from "./components/Main"
import { SelectedBooksProvider } from "./context/SelectedBooksContext"



function App() {
  

  return (
    <SelectedBooksProvider>
      <Container>
        <Heading />
        <Main />
      </Container>
    </SelectedBooksProvider>
  )
}

export default App
