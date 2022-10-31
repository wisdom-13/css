import './app.css';
import Button1 from './Button1';
import Button2 from './Button2';
import StyledComponent from './StyledComponent';
import TailwindComponent from './TailwindComponent';

function App() {
  return (
    <>
      <h1>[PostCSS]</h1>
      <Button1></Button1>
      <Button2></Button2>
      <br /><br />
      <h1>[Styled Components]</h1>
      <StyledComponent></StyledComponent>
      <br />
      <h1>[Tailwind Component]</h1>
      <TailwindComponent></TailwindComponent>
    </>
  );
}

export default App;
