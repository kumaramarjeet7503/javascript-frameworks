import {TabButton} from '../components/TabButton.jsx'
import { EXAMPLES } from '../data.js';
import {useState} from 'react';
import {Section} from '../components/Section.jsx';
import Tabs from '../components/Tabs.jsx'

export function Examples(){
    const [selectedText , setSelectedText] = useState("");

    function handleSelect(selectedButton){
        setSelectedText(selectedButton)
  }

  let tabContent = !selectedText ? <p>Please select a topic!</p> : selectedText && <div id='tab-content'>
  <h3>{EXAMPLES[selectedText].title}</h3>
  <p>{EXAMPLES[selectedText].description}</p>
  <pre>
    <code>
        {EXAMPLES[selectedText].code}
    </code>
  </pre>
</div>

return  <Section id='examples'>
        <Tabs ButtonsContainer="menu" buttons={<><TabButton isSelected={selectedText === "components"} onClick={()=>handleSelect('components')}>Components</TabButton>
            <TabButton  isSelected={selectedText === "jsx"}  onClick={()=>handleSelect('jsx')}>JSX</TabButton>
            <TabButton isSelected={selectedText === "props"}  onClick={()=>handleSelect('props')}>Props</TabButton>
            <TabButton  isSelected={selectedText === "state"} onClick={()=>handleSelect('state')}>State</TabButton></>} >  
            {tabContent}
            </Tabs>
        </Section>
}