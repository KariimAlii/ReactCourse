import './App.css';
import {CORE_CONCEPTS} from './data.js'
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept/CoreConcept.jsx";
import TabButton from "./components/TabButton/TabButton.jsx";
import {Fragment, useState} from "react";
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
        <Fragment>
            <div>
                <Header/>
                <main>
                    <section id="core-concepts">
                        <h2>Core Concepts</h2>
                        <ul>
                            {
                                CORE_CONCEPTS.map((coreConcept, index) => (
                                    <CoreConcept {...coreConcept} key={index}/>
                                    // NOTE: Key prop is used by react to render and update the dynamic list
                                    // and it should be a unique identifier for every element in a list
                                // <CoreConcept
                                //     key={index}
                                //     title={coreConcept.title}
                                //     description={coreConcept.description}
                                //     image={coreConcept.image}/>
                                ))
                            }
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
        </Fragment>
    )
}

export default App
