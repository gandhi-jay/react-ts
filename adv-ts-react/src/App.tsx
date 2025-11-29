import Input from './components/Input'
import Button from './components/Button'
import Container from './components/Container'
import { useRef } from 'react'
import Form, { type FormHandle } from './components/Form';

function App() {
  const input = useRef<HTMLInputElement>(null);

  // <p><Button>A Button</Button></p>
  //       <p><Button href="https://gandhijay.com">A Link</Button></p>
  //       {/* Can't pass ref directly custom component, use forwardRef */}
  //       {/* <Input id="name" label="Your name" ref={}/> */}
  //       <Input id="name" label="Your name" ref={input}/>
  //       <Input id="age" label="Your age" type="number" />

  //       <p>Container</p>
  //       <Container as={Button}>Click Me!</Container>

  const customForm = useRef<FormHandle>(null);
  function handleSave(data: unknown) {
    // const extractedData = data as {name: string, age: number};

    if (!data || typeof data !== 'object' || !('name' in data) || !('age' in data))
      return;

    // Type Narrowing.

    console.log({...data});
    customForm.current?.clear();
  }

  return (
    <>
      <main>
        <Form onSave={handleSave} ref={customForm}>
          <Input id="name" label="Name" ref={input}/>
          <Input id="age" label="Age" type="number" />
          <p>
            <Button>Submit</Button>
          </p>
        </Form>
      </main>
    </>
  )
}

export default App
