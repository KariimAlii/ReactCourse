import './App.css';
import {CORE_CONCEPTS} from './data.js'
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept/CoreConcept.jsx";
import TabButton from "./components/TabButton/TabButton.jsx";
import {useState} from "react";
import {EXAMPLES} from "./data.js";

function App() {
    // useState is a react Hook function
    // it must be used at the top level of the component function
    // Everytime setSelectedTopic is invoked
    // -------- (1) it re-invokes the component function
    // -------- (2) it updated the (selectedTopic) value

    const [selectedTopic, setSelectedTopic] = useState(null)

    function handleSelect(selectedButton) {
        setSelectedTopic(selectedButton);
        console.log(selectedTopic)
    }

    console.log('APP COMPONENT EXECUTING')

    return (
        <>
            <div>
                <Header/>
                <main>
                    <section id="core-concepts">
                        <h2>Core Concepts</h2>
                        {
                            [
                                <p>Hello</p>,
                                <p>World</p>
                            ]
                        }
                        <ul>
                            <CoreConcept title={CORE_CONCEPTS[0].title} description={CORE_CONCEPTS[0].description}
                                         image={CORE_CONCEPTS[0].image}/>
                            <CoreConcept {...CORE_CONCEPTS[1]} />
                            <CoreConcept {...CORE_CONCEPTS[2]} />
                            <CoreConcept {...CORE_CONCEPTS[3]} />
                        </ul>
                    </section>
                    <section id="examples">
                        <h2>Examples</h2>
                        <menu>
                            <TabButton isSelected={selectedTopic === 'components'} onSelect={() => handleSelect('components')}>Components</TabButton>
                            <TabButton isSelected={selectedTopic === 'jsx'} onSelect={() => handleSelect('jsx')}>JSX</TabButton>
                            <TabButton isSelected={selectedTopic === 'props'} onSelect={() => handleSelect('props')}>PROPS</TabButton>
                            <TabButton isSelected={selectedTopic === 'state'} onSelect={() => handleSelect('state')}>State</TabButton>
                        </menu>

                        {!selectedTopic ? (
                            <p>Please select a topic!</p>
                        ) : (
                            <div id="tab-content">
                                <h3>{EXAMPLES[selectedTopic].title}</h3>
                                <p>{EXAMPLES[selectedTopic].description}</p>
                                <pre>
                                <code>{EXAMPLES[selectedTopic].code}</code>
                              </pre>
                            </div>
                        )}


                    </section>
                </main>
            </div>
        </>
    )
}

export default App
