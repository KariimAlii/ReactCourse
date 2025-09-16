import './App.css';
import { CORE_CONCEPTS } from './data.js'
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept/CoreConcept.jsx";


function App() {
    return (
        <>
            <div>
                {/*It will also affected by header styles*/}
                {/*<header>*/}
                {/*    <h1>Hiiiiiiiiii</h1>*/}
                {/*</header>*/}
                <Header />
              <main>
                  <section id="core-concepts">
                      <h2>Core Concepts</h2>
                      <ul>
                          <CoreConcept {...CORE_CONCEPTS[0]} />
                          <CoreConcept {...CORE_CONCEPTS[1]} />
                          <CoreConcept {...CORE_CONCEPTS[2]} />
                          <CoreConcept {...CORE_CONCEPTS[3]} />
                      </ul>
                  </section>
                  <h2>Time to get started!</h2>
              </main>
          </div>
      </>
  )
}

export default App
