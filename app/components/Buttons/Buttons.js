import Link from 'next/link'
import classes from './buttons.module.css'
import Image from 'next/image'

export default function Buttons(props) {
    return (
        <div className={classes.container} step={props.step}>
            <div>
                <Link href="#">
                    <Image
                        src="/first_button.svg"
                        alt=""
                        width={328}
                        height={74}
                        />
                </Link>
            </div>
            <div>
                <Image
                    src="/arrow.svg"
                    alt=""
                    width={90}
                    height={75}
                    />
                <Link href="#">
                    <Image
                        src="/second_button.svg"
                        alt=""
                        width={246}
                        height={56}
                        />
                </Link>
            </div>
        </div>
    )
}