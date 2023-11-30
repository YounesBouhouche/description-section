import classes from './illustrations.module.css'
import Image from 'next/image'

export default function Illustration(props) {
    return (
        <div className={classes.container} step={props.step}>
            <Image
              src="/first.svg"
              alt="First illustration"
              width={300}
              height={300}
              priority
            />
            <Image
              src="/second.svg"
              alt="Second illustration"
              width={300}
              height={300}
              priority
            />
            <Image
              src="/Third.svg"
              alt="First illustration"
              width={300}
              height={300}
              priority
            />
            <Image
              src="/forth.svg"
              alt="Forth illustration"
              width={300}
              height={300}
              priority
            />
        </div>
    )
}