import classes from './DescriptionText1.module.css'

export default function DescriptionText1(props) {
    const elements = [
        'Get hands-on with the latest tech skills. Pick up coding, design thinking, AI - whatever sparks your interest.',
        'Make your ideas happen. We\'ll give you the support to bring your projects to life. Coding, hacking, building.',
        'Join the community. Meet fellow students who share with your interests and find opportunities.',
        'Take charge and grow your skills. Guide projects, share your knowledge, run events.',
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