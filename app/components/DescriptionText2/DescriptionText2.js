import classes from './DescriptionText2.module.css'

export default function DescriptionText2(props) {
    const elements = [
        'Learning is a thrilling journey, enriching our lives through discovery, knowledge, and skill refinement. We provide you with several productive workshops and events',
        'We help you combine creativity and technical skills to create practical solutions. These endeavors involve developing apps, designing websites, and building software systems. Collaboration improve user experiences and drive innovation in our digital world.',
        'Expanding your network is a crucial strategic move in today\'s interconnected world. We open doors to new opportunities and possibilities, a robust network can foster collaboration, knowledge sharing, and innovation, all of which are essential for growth and success.',
        'Effective leaders lead by example, foster collaboration, and adapt their approach to the needs of their team and the situation. They empower others, demonstrate integrity, and make decisions that benefit the collective, ultimately achieving success through their ability to inspire and influence.',
    ]
    return (
        <div className={classes.container} step={props.step}>
            {elements.map((element, index) => 
                <p key={index}>
                    {element}
                </p>
                )}
        </div>
    )
}
