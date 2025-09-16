import './App.css';
import { CORE_CONCEPTS } from './data.js'
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept/CoreConcept.jsx";
import TabButton from "./components/TabButton/TabButton.jsx";


function App() {
    let tabContent = 'Please click a button!';
    function handleSelect(selectedButton) {
        console.log(selectedButton)
        tabContent = selectedButton;
    }

    console.log('APP COMPONENT EXECUTING')

    return (
        <>
            <div>
                <Header />
              <main>
                  <section id="core-concepts">
                      <h2>Core Concepts</h2>
                      <ul>
                          <CoreConcept title={ CORE_CONCEPTS[0].title } description={ CORE_CONCEPTS[0].description } image={ CORE_CONCEPTS[0].image } />
                          <CoreConcept {...CORE_CONCEPTS[1]} />
                          <CoreConcept {...CORE_CONCEPTS[2]} />
                          <CoreConcept {...CORE_CONCEPTS[3]} />
                      </ul>
                  </section>
                  <section id="examples">
                      <h2>Examples</h2>
                      <menu>
                          <TabButton onSelect={() => handleSelect('components')}>Components</TabButton>
                          <TabButton onSelect={() => handleSelect('jsx')}>JSX</TabButton>
                          <TabButton onSelect={() => handleSelect('props')}>PROPS</TabButton>
                          <TabButton onSelect={() => handleSelect('state')}>State</TabButton>
                      </menu>
                      {  tabContent }
                  </section>
              </main>
          </div>
      </>
  )
}

export default App
