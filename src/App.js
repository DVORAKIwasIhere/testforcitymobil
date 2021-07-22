import { useEffect, useState } from "react";
import { Table }  from "./components/table/index";
import { visibleTariffs } from "./utils/constants/tariffs.constants";

function App() {
  const [cars, setCars] = useState([]);

  const sortData = (field) => {
    console.log(field)
    const dataDuplicate = cars.concat();

    console.log(dataDuplicatefield)
    const sortData = dataDuplicate.sort(
      (a, b) => 
      {return a[field] > b[field] ? 1 : -1}
    )
    setCars(sortData)
    }

  useEffect(() => {
    fetch("/cars")
    .then((response) => response.json())
    .then((data) => {
      const updatedData = data.cars.map(car => {
        const newTariffs = {}
        for (const key in car.tariffs) {
          if(visibleTariffs.includes(key))
          // newTariffs.push({name: key, year: car.tariffs[key].year})
          newTariffs[key] = car.tariffs[key].year
        }
        return {...car, tariffs: newTariffs}
      })
      setCars(updatedData)
      console.log(updatedData)
    });
  }, []);

  



  return (
    <div className="App">
      <Table cars={cars} sortData={sortData}/>
    </div>
  );
}

export default App;