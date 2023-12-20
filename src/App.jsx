import InputBox from "./components/InputBox"

function App() {

  return (
    <div className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat" style={{backgroundImage: 'URL("https://images.pexels.com/photos/932263/pexels-photo-932263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")'}}>
      <InputBox />
    </div>
  )
}

export default App
