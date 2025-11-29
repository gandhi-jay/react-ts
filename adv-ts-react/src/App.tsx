import Input from './components/Input'
import Button from './components/Button'
import Container from './components/Container'

function App() {

  return (
    <>
      <main>
        <p><Button>A Button</Button></p>
        <p><Button href="https://gandhijay.com">A Link</Button></p>
        <Input id="name" label="Your name" />
        <Input id="age" label="Your age" type="number" />

        <p>Container</p>
        <Container as={Button}>Click Me!</Container>
      </main>
    </>
  )
}

export default App
