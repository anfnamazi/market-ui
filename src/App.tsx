import { Stack } from '@mantine/core';
import './App.css';
import { Form } from './components/Form/Form.tsx';
import { Hero } from './components/Hero/Hero.tsx';
import Navbar from './components/Navbar/Navbar.tsx';
import { Question } from './components/Question/Question.tsx';
import { Services } from './components/Services/Services.tsx';

function App() {
  return (
    <Stack gap={40}>
      <Navbar />
      <Stack gap={80}>
        <Hero />
        <Services />
        <Form />
        <Question />
      </Stack>
    </Stack>
  );
}

export default App;
