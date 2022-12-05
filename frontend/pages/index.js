import MianView from '../components/MainView'

let connected = true;

export default function Home() {
  return (
    <div className= "app">
    {connected ?(
    <MainView/>
    ):(
      <div classNmae="loginContainer">
        <div className="loginTitle">Login to ticktock </div>
        <div className="loginSubTitle">manage your account , check notifications , comment on videos , more ..</div>
        </div>
    )}

    </div>
  )
  
  
}
