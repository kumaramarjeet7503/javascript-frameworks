import { CoreConcept } from "./CoreConcept.jsx"
import { CORE_CONCEPTS } from "../data.js"
import {Section} from '../components/Section.jsx'

export function CoreConcepts(){
    return (<Section id='core-concepts'>
              <h2>Core Concepts</h2>
              <ul>
                {CORE_CONCEPTS.map((conceptItem)=> <CoreConcept key={conceptItem.title} {...conceptItem}  />
                )}
              </ul>
            </Section>)
}