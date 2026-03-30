"use client";

import { useState } from "react";
import NavNew from "@/components/NavNew";
import TopBarNew from "@/components/TopBarNew";
import HeroNew from "@/components/HeroNew";
import HowItWorksNew from "@/components/HowItWorksNew";
import ModulesNew from "@/components/ModulesNew";
import WhyOrbitleNew from "@/components/WhyOrbitleNew";
import TestimonialsNew from "@/components/TestimonialsNew";
import PricingNew from "@/components/PricingNew";
import ContactNew from "@/components/ContactNew";
import FooterNew from "@/components/FooterNew";
import AgentBanner from "@/components/AgentBanner";
import MidPageCTA from "@/components/MidPageCTA";

export default function OperatorsPage() {
  const [pricingUnlocked, setPricingUnlocked] = useState(false);

  return (
    <main>
      <TopBarNew />
      <NavNew />
      <HeroNew />

      <ContactNew
        id="contact-hero"
        heading="See Orbitle in Action"
        subheading="Book a 20-minute demo and we'll walk you through the full operator platform — marketplace, agent portal, and lead management."
        onFormSubmit={() => setPricingUnlocked(true)}
      />

      <AgentBanner />

      <HowItWorksNew />
      <ModulesNew />
      <WhyOrbitleNew />

      <MidPageCTA />

      <TestimonialsNew />
      <PricingNew unlocked={pricingUnlocked} />

      <ContactNew
        id="contact"
        heading="Ready to launch your travel platform?"
        subheading="Tell us about your business and we'll get back within 24 hours with a tailored demo and plan options."
        onFormSubmit={() => setPricingUnlocked(true)}
      />

      <FooterNew />
    </main>
  );
}
