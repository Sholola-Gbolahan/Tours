import { useEffect, useState } from "react";
import Loading from "./Loading";
import Tours from "./Tours";

const url = "https://www.course-api.com/react-tours-project";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  const [tours, setTours] = useState([]);

  const [isError, setIsError] = useState(false);

  const fetchData = async () => {
    try {
      const resp = await fetch(url);
      const data = await resp.json();
      setTours(data);
    } catch (error) {
      console.log(error);
      setIsError(true);
    }
    setIsLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);



  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }


  if (isError) {
    return <h4> An Error Occured</h4>;
  }


  return (
   <main>
    <Tours tours={tours}/>
   </main>
  );
};
export default App;
