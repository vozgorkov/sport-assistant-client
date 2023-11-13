import React, { useState } from 'react';
import { Container } from './app.styles';
import Categories from '../categories';

interface Exercise {
  id: string,
  title: string,
}

const App = () => {

  const [exercises, setExercises] = useState<Exercise[]>([]);
  const fetchExercises = () => {
    fetch('http://localhost:4000/categories')
      .then((response) => response.json()).then((data) => setExercises(data))
  };

  const fetchExercise = () => {
    fetch('http://localhost:4000/exercises/1')
      .then((response) => response.json()).then((data) => console.log(data))
  };

  const addExercise = () => {
    fetch('http://localhost:4000/categories', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: 'Ноги' })
    })
  }

  const updateExercise = () => {
    fetch('http://localhost:4000/exercises', {
      method: 'PUT',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: 'Жим лёжа' })
    })
  }

  return (
    <Container>
      <Categories />
      <button type="button" onClick={fetchExercises}>Fetch categories</button>
      <button type="button" onClick={addExercise}>Add category</button>
      <button type="button" onClick={fetchExercise}>Get exercise</button>
      <div>Люблю мою Юльку</div>
      {exercises.map(({ id, title }) => <button key={id} type="button" onClick={() => updateExercise()}>{title}</button>)}
    </Container>
  );
};

export default App;
