import { useEffect, useState } from 'react';
import './App.css';
import Watch from './Components/Watch/Watch';

function App() {
  const [watches, setWatches] = useState([]);
  useEffect(() => {
    fetch(
      'https://raw.githubusercontent.com/mahfuj80/watches-data/main/watches.json'
    )
      .then((res) => res.json())
      .then((data) => setWatches(data));
  });
  // const watches = [
  //   { id: 1, name: 'Apple watch', price: 200 },
  //   { id: 2, name: 'Samsu watch', price: 200 },
  //   { id: 3, name: 'Casio watch', price: 200 },
  //   { id: 4, name: 'MI watch', price: 200 },
  // ];

  // const watches = [
  //   {
  //     id: 1,
  //     name: 'Rolex Submariner',
  //     price: 10000,
  //   },
  //   {
  //     id: 2,
  //     name: 'Omega Speedmaster',
  //     price: 8000,
  //   },
  //   {
  //     id: 3,
  //     name: 'Tag Heuer Carrera',
  //     price: 6000,
  //   },
  //   {
  //     id: 4,
  //     name: 'Seiko Prospex',
  //     price: 500,
  //   },
  //   {
  //     id: 5,
  //     name: 'Citizen Eco-Drive',
  //     price: 300,
  //   },
  // ];

  return (
    <>
      <h1>React </h1>
      {watches.map((watch) => (
        <Watch key={watch.id} watch={watch}></Watch>
      ))}
    </>
  );
}

export default App;
