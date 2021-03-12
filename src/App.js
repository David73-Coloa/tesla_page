import Home from './pages/Home'
import GlobalStyled from './styles/GlobalStyles'
import { Element,Container } from './styled'
function App() {
let rows = []
    for(let i=1; i<8; i++){
      rows.push(i)
    }
  return (
      <Container> 
          <GlobalStyled/> 

          {rows.map(number => (
              <Element>
                  <Home numTitule={number}/> 
              </Element> 
        ))}
      </Container>
  );
}

export default App;
