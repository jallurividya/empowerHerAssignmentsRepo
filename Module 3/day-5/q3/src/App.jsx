import './App.css'
import MessageCard from './MessageCard'

function App() {
  return (
    <>
      <MessageCard title='Greetings' msg='Hi,Good Morning' />
      <MessageCard title="Wishes" msg='Happy Birthday' />
      <MessageCard title="Success" msg="Your task is completed successfully" />
      <MessageCard title="alert" msg="Enter all the fields" />
    </>
  )
}

export default App
