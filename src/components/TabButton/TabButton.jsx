export default function TabButton({children}) {
    // document.querySelector('button').addEventListener('click', () => {
    //
    // })

    // the advantage to declare this function inside the TabButton Function is that
    // this way it has access to the components Props and State
    function handleClick() {
        console.log("Helooooooooooooooooooo")
    }
    return (
        <li>
            <button onClick={handleClick}>{children}</button>
        </li>
    )
}