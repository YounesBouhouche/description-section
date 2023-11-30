import Image from "next/image";
import classes from "./carousel.module.css";

export default function Carousel(props) {
    return (
        <div className={classes.container} step={props.step}>
            <Image
                src="/carousel.svg"
                alt=""
                width={600}
                height={600}
            />
            <div>
                {
                [1, 2, 3, 4].map(e => <span key={e} onClick={() => { props.setStep(e) }}></span>)
                }
            </div>
        </div>
    )
}