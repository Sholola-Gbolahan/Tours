import { useEffect, useState } from "react";

const url = 'https://www.course-api.com/react-tours-project';

const App = () => {
 const [isLoading, setIsLoading]= useState(false);

 const [Tours,setTours ] =useState([])

 const fetchData = async () => {
  try {
    const resp = await fetch(url);
    const data = await resp.json()
    setTours(data)
    console.log(data);

  } catch (error) {
    console.log(error);
  }
 

}
 useEffect(()=>{

  fetchData ()

 },[])

  return <>
    <h1></h1>
  </>
};
export default App;
