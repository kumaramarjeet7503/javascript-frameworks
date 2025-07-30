export function Section({title,children,...attr}){
        return <section {...attr}>
                <h2>{title}</h2>
                {children}
        </section>
}