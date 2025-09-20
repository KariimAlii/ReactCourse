export default function TabButton({ children, onSelect, isSelected }) {
    console.log('TABBUTTON COMPONENT EXECUTING')
    return (
        <li>
             {/*isSelected ? 'active' : ''    or   isSelected ? 'active' : undefined*/}
            <button className={isSelected ? 'active' : ''} onClick={onSelect}>{children}</button>
        </li>
    )
}