import reactImg from './assets/react-core-concepts.png';

import './App.css';

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function getRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
}
function Header() {
    const description = reactDescriptions [getRandomInt(reactDescriptions.length - 1)];
    return (
        <header>
            <img src={ reactImg } alt="Stylized atom"/>
            <h1>React Essentials</h1>
            <p>
                { description } React concepts you will need for almost any app you are
                going to build!
            </p>
        </header>
    )
}

function App() {
    return (
        <>
            <div>
                <Header />
              <main>
                  <h2>Time to get started!</h2>
              </main>
          </div>
      </>
  )
}

export default App
