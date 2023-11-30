'use client';
import Title from './components/Title/Title'
import DescriptionText1 from './components/DescriptionText1/DescriptionText1'
import DescriptionText2 from './components/DescriptionText2/DescriptionText2'
import Illustration from './components/Illustrations/Illustration'
import { useEffect, useState } from 'react'
import Buttons from './components/Buttons/Buttons';
import Carousel from './components/Carousel/Carousel';

export default function Description() {
  const [step, setStep] = useState(1)
    useEffect(() => {
      const interval = setInterval(() => {
        setStep(step == 4 ? 1 : step + 1)
      }, 2000);
      return () => clearInterval(interval);
    }, [step]);
  return (
    <main className="relative w-full h-screen overflow-hidden">
      <Title step={step}/>
      <DescriptionText1 step={step}/>
      <DescriptionText2 step={step}/>
      <Illustration step={step}/>
      <Buttons step={step}/>
      <Carousel step={step} setStep={setStep}/>
    </main>
  )
}
