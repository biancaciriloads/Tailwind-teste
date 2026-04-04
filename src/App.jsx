import { Button } from './Components/bottom'

function App() {
  return (
    <div className='bg-dark-background'>
      <h1 className='text-dark-background'>Hello World</h1>
      <Button>Primary Background</Button>
      <Button variant='secondary'>Secondary Background</Button>
      <Button isBold>Bold Text with Primary Background</Button>
      <Button isBold variant='secondary'>
        Bold Text with Secondary Background
      </Button>
    </div>
  )
}

export default App