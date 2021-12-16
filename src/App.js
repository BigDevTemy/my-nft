import logo from './logo.svg';
import './assets/css/Home/loader.css';
// import Routes from './route'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import Home from './container/Home'
function App() {

  const [isLoading, setLoading] = useState(true);

  function fakeRequest() {
    return new Promise(resolve => setTimeout(() => resolve(), 2500));
  }

  useEffect(() => {
    fakeRequest().then(() => {
      const el = document.querySelector(".loader-container");
      if (el) {
        el.remove();
        setLoading(!isLoading);
      }
    });
  }, []);

  if (isLoading) {
    return null;
  }


const RenderRouter = (route)=>{
  
  document.title = route.title || 'NFT';
  console.log(route.title)
  return <Route 
          path={route.path}
          exact
          render={(props)=><route.component {...props}/>}
        />
}

  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" exact element={<Home />} />
           
          </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
