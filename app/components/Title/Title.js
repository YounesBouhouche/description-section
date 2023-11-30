import classes from "./title.module.css";

export default function Title(props) {
    const elements = [
        'We make learning fun',
        'Create with us',
        'Expand your network',
        'Lead',
    ]
    return (
        <div className={classes.container} step={props.step}>
            {elements.map((element, index) => 
                <h1 key={index}>
                    {element}
                </h1>
                )}
        </div>
    )
}