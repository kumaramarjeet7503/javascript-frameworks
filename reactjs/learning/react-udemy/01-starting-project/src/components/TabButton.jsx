
export function TabButton({children,isSelected,...attr}){

    return <li><button className={isSelected ? 'active' : undefined} {...attr}>{children}</button></li>
}