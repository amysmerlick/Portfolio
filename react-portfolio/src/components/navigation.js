const Navigation = (props) => {

    return (
        <nav>
                <ul>
                    <li>
                        <a onClick={() => props.linkClickedCallback(0) } className={props.visSection === 0 ? "nav-link font-effect-shadow-multiple active" : "nav-link font-effect-shadow-multiple"}>All About Me</a>
                    </li>
                    <li>
                        <a onClick={() => props.linkClickedCallback(1) } className={props.visSection === 1 ? "nav-link font-effect-shadow-multiple active" : "nav-link font-effect-shadow-multiple"}>Portfolio</a>
                    </li>
                    <li>
                        <a onClick={() => props.linkClickedCallback(2) } className={props.visSection === 2 ? "nav-link font-effect-shadow-multiple active" : "nav-link font-effect-shadow-multiple"}>Contact Me</a>
                    </li>
                    <li>
                    <a onClick={() => props.linkClickedCallback(3) } className={props.visSection === 3 ? "nav-link font-effect-shadow-multiple active" : "nav-link font-effect-shadow-multiple"}>Resume</a>
                    </li>
                </ul>
            </nav>
    )
}

export default Navigation