import { Hero } from '../components/Hero';
import { WhatIsFoodSaver } from '../components/WhatIsFoodSaver';
import { HowItWorks } from '../components/HowItWorks';
import { UserBenefits } from '../components/UserBenefits';
import { Testimonials } from '../components/Testimonials';
import { FinalCTA } from '../components/FinalCTA';

interface InicioProps {
  onNavigate?: (page: string) => void;
}

export function Inicio({ onNavigate }: InicioProps) {
  return (
    <>
      <Hero onNavigate={onNavigate} />
      <WhatIsFoodSaver />
      <HowItWorks />
      <UserBenefits />
      <Testimonials />
      <FinalCTA onNavigate={onNavigate} />
    </>
  );
}