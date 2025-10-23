'use client';

import dynamic from 'next/dynamic';

const FaultyTerminal = dynamic(() => import('@/components/effects/FaultyTerminal'), {
  ssr: false
});
const SplitText = dynamic(() => import('@/components/effects/SplitText'), {
  ssr: false
});
const StarBorder = dynamic(() => import('@/components/ui/StarBorder'), {
  ssr: false
});
const Magnet = dynamic(() => import('@/components/interactive/Magnet'), {
  ssr: false
});
const CardSwap = dynamic(() => import('@/components/ui/CardSwap').then(mod => ({ default: mod.default })), {
  ssr: false
});
const TextType = dynamic(() => import('@/components/effects/TextType'), {
  ssr: false
});
const InfiniteScroll = dynamic(() => import('@/components/interactive/InfiniteScroll'), {
  ssr: false
});
const TextPressure = dynamic(() => import('@/components/effects/TextPressure'), {
  ssr: false
});
const Stepper = dynamic(() => import('@/components/ui/Stepper').then(mod => ({ default: mod.default })), {
  ssr: false
});
const Step = dynamic(() => import('@/components/ui/Stepper').then(mod => ({ default: mod.Step })), {
  ssr: false
});
import Image from 'next/image';
import { useRef } from 'react';

export default function Home() {
  const heroRef = useRef<HTMLElement | null>(null);
  const problemRef = useRef<HTMLElement | null>(null);
  const solutionRef = useRef<HTMLElement | null>(null);
  const benefitsRef = useRef<HTMLElement | null>(null);
  const faqRef = useRef<HTMLElement | null>(null);
  const finalCtaRef = useRef<HTMLElement | null>(null);

  return (
    <div className="min-h-screen bg-black">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
        <Image
                src="/logo/owl logo.png"
                alt="OWL Logo"
                width={40}
                height={40}
                className="mr-3"
              />
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#what-is-owl" className="text-gray-300 hover:text-blue-400 transition-colors">What Is OWL</a>
              <a href="#how-it-works" className="text-gray-300 hover:text-blue-400 transition-colors">How It Works</a>
              <a href="#pricing" className="text-gray-300 hover:text-blue-400 transition-colors">Pricing</a>
              <a href="#help" className="text-gray-300 hover:text-blue-400 transition-colors">Help</a>
            </div>

            {/* CTA Button */}
            <Magnet padding={30} disabled={false} magnetStrength={30}>
              <StarBorder
                as="button"
                className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition-colors"
                color="#006680"
                speed="4s"
              >
                Connect Now
              </StarBorder>
            </Magnet>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center bg-black">
        {/* FaultyTerminal Background */}
        <div className="absolute inset-0 z-0">
          <FaultyTerminal
            scale={1.2}
            gridMul={[2, 1]}
            digitSize={1.0}
            timeScale={0.8}
            pause={false}
            scanlineIntensity={0.8}
            glitchAmount={0.8}
            flickerAmount={0.8}
            noiseAmp={0.8}
            chromaticAberration={0}
            dither={0}
            curvature={0}
            tint="#ffffff"
            mouseReact={true}
            mouseStrength={1.0}
            pageLoadAnimation={false}
            brightness={1.0}
            className="opacity-20"
            style={{}}
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto text-center px-4 sm:px-6 lg:px-8 py-20">
          <div className="mb-6 md:mb-8">
            <TextType
              text={[
                "Your Digital Identity.",
                "Simple-Safe-Yours.",
                "Stop filling out forms everywhere."
              ] as any}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="█"
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight block"
              textColors={['#ffffff', '#60a5fa', '#ffffff'] as any}
              variableSpeed={undefined}
              onSentenceComplete={undefined}
            />
          </div>
          

          <div className="flex justify-center">
            <Magnet padding={50} disabled={false} magnetStrength={50}>
              <StarBorder
                as="button"
                className="bg-blue-600 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
                color="#006680"
                speed="5s"
              >
                Connect Now
              </StarBorder>
            </Magnet>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section ref={problemRef} className="py-20 bg-black text-white relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6">Sound Familiar?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We've all been there. The endless cycle of filling out the same information, 
              worrying about data security, and abandoning forms when it gets too complicated.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-6 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-red-500/50 transition-colors">
                <div className="w-3 h-3 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Repetitive Forms</h3>
                  <p className="text-gray-300">Fill out same details on every website</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-6 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-red-500/50 transition-colors">
                <div className="w-3 h-3 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Data Scattered</h3>
                  <p className="text-gray-300">Your data stored in dozens of databases</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-6 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-red-500/50 transition-colors">
                <div className="w-3 h-3 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Security Worries</h3>
                  <p className="text-gray-300">Worry every time there's a data breach</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-6 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-red-500/50 transition-colors">
                <div className="w-3 h-3 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Abandoned Checkouts</h3>
                  <p className="text-gray-300">Give up and abandon checkout forms</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <div style={{ position: 'relative', height: '200px' }}>
              <TextPressure
                text="There's a better way."
                flex={true}
                alpha={false}
                stroke={false}
                width={true}
                weight={true}
                italic={true}
                textColor="#ffffff"
                strokeColor="#ff0000"
                minFontSize={36}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section ref={solutionRef} className="py-16 bg-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">Verify Once. Use Everywhere.</h2>
          
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            {/* Cards di sebelah kiri */}
            <div className="relative flex justify-center items-center w-full lg:w-1/2 lg:pl-0" style={{ height: '500px' }}>
              <div className="relative" style={{ transform: 'translateY(100px) translateX(50px)' }}>
                <CardSwap
                  cardDistance={80}
                  verticalDistance={60}
                  delay={4000}
                  pauseOnHover={true}
                  width={420}
                  height={300}
                  onCardClick={() => {}}
                  skewAmount={5}
                  easing="power1"
                >
              <div className="absolute top-1/2 left-1/2 rounded-2xl border-4 border-white bg-black [transform-style:preserve-3d] [will-change:transform] [backface-visibility:hidden] p-12 w-full h-full flex flex-col justify-center">
                <div className="w-24 h-24 bg-blue-600 text-white rounded-full flex items-center justify-center text-3xl font-bold mb-8 mx-auto">1</div>
                <h3 className="text-3xl font-bold text-white mb-6 text-center">Sign Up</h3>
                <p className="text-gray-300 text-xl text-center">Create your OWL ID</p>
              </div>
              
              <div className="absolute top-1/2 left-1/2 rounded-2xl border-4 border-white bg-black [transform-style:preserve-3d] [will-change:transform] [backface-visibility:hidden] p-12 w-full h-full flex flex-col justify-center">
                <div className="w-24 h-24 bg-blue-600 text-white rounded-full flex items-center justify-center text-3xl font-bold mb-8 mx-auto">2</div>
                <h3 className="text-3xl font-bold text-white mb-6 text-center">Verify</h3>
                <p className="text-gray-300 text-xl text-center">Upload your ID once, you're done</p>
              </div>
              
              <div className="absolute top-1/2 left-1/2 rounded-2xl border-4 border-white bg-black [transform-style:preserve-3d] [will-change:transform] [backface-visibility:hidden] p-12 w-full h-full flex flex-col justify-center">
                <div className="w-24 h-24 bg-blue-600 text-white rounded-full flex items-center justify-center text-3xl font-bold mb-8 mx-auto">3</div>
                <h3 className="text-3xl font-bold text-white mb-6 text-center">Prove Without Sharing</h3>
                <p className="text-gray-300 text-xl text-center">Answer questions without revealing full details</p>
              </div>
              
              <div className="absolute top-1/2 left-1/2 rounded-2xl border-4 border-white bg-black [transform-style:preserve-3d] [will-change:transform] [backface-visibility:hidden] p-12 w-full h-full flex flex-col justify-center">
                <div className="w-24 h-24 bg-blue-600 text-white rounded-full flex items-center justify-center text-3xl font-bold mb-8 mx-auto">4</div>
                <h3 className="text-3xl font-bold text-white mb-6 text-center">Use Anywhere</h3>
                <p className="text-gray-300 text-xl text-center">Shopping, banking, government with one tap</p>
              </div>
            </CardSwap>
              </div>
            </div>
            
            {/* Konten di sebelah kanan */}
            <div className="w-full lg:w-1/2 space-y-8 lg:pt-4">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white">Simple & Secure</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  OWL makes digital identity verification effortless. No more filling out the same forms repeatedly across different platforms.
                </p>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white">One Identity, Everywhere</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Verify once with OWL and use your digital identity across e-commerce, banking, fintech, and government services with just one tap.
                </p>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white">Privacy First</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Your data stays with you. Answer verification questions without revealing your full personal details.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* InfiniteScroll Section */}
      <section ref={benefitsRef} className="bg-black relative">
        <div className="w-full h-screen flex items-center justify-center">
          <InfiniteScroll
            items={[
              { content: "You're In Control" },
              { content: "Your data belongs to you always" },
              { content: "Lightning Fast" },
              { content: "Verification happens in under one second" },
              { content: "Built to Last" },
              { content: "Protected with advanced security that works" },
              { content: "Works Everywhere" },
              { content: "E-commerce, banks, fintech, government services connected" },
              { content: "Privacy First" },
              { content: "Zero-knowledge proofs protect your identity" },
              { content: "Blockchain Security" },
              { content: "Decentralized and tamper-proof verification" },
              { content: "Revolutionary Digital Identity" },
              { content: "OWL transforms how you interact with digital services" },
              { content: "One Identity, Infinite Possibilities" },
              { content: "No more repetitive forms, scattered data, or security worries" },
              { content: "Quantum-Resistant Encryption" },
              { content: "Advanced security that works" },
              { content: "Under 1 Second Verification" },
              { content: "Lightning fast authentication" },
              { content: "Universal Compatibility" },
              { content: "Works with all platforms and services" },
              { content: "Complete Privacy Control" },
              { content: "You own and control your data" },
              { content: "Zero-Knowledge Technology" },
              { content: "Prove without revealing" },
              { content: "Decentralized Architecture" },
              { content: "No single point of failure" },
              { content: "Tamper-Proof Verification" },
              { content: "Immutable blockchain records" },
              { content: "Future-Proof Technology" },
              { content: "Built for tomorrow's challenges" }
            ] as any}
            isTilted={true}
            tiltDirection='left'
            autoplay={true}
            autoplaySpeed={0.1}
            autoplayDirection="down"
            pauseOnHover={true}
            width="100%"
            maxHeight="80vh"
            itemMinHeight={80}
          />
        </div>
      </section>

      {/* FAQ Section - Stepper */}
      <section ref={faqRef} className="py-20 bg-black text-white relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Quick Questions?</h2>
          
          <div className="flex justify-center">
            <Stepper
              initialStep={1}
              onStepChange={(step: any) => {
                console.log('Current step:', step);
              }}
              onFinalStepCompleted={() => console.log("All questions answered!")}
              backButtonText="Previous"
              nextButtonText="Next"
              stepCircleContainerClassName="bg-gray-800 border-gray-600"
              contentClassName="text-white"
              renderStepIndicator={undefined}
            >
              <Step>
                <h3 className="text-2xl font-bold mb-4 text-white">Is OWL safe?</h3>
                <p className="text-gray-300 text-lg">Absolutely. We use quantum-resistant blockchain security to protect your digital identity.</p>
                <div className="mt-6 p-4 bg-gray-800 rounded-lg">
                  <p className="text-sm text-gray-400">Advanced encryption ensures your data stays private and secure.</p>
                </div>
              </Step>
              
              <Step>
                <h3 className="text-2xl font-bold mb-4 text-white">How much does it cost?</h3>
                <p className="text-gray-300 text-lg">Free for individuals. Always.</p>
                <div className="mt-6 p-4 bg-gray-800 rounded-lg">
                  <p className="text-sm text-gray-400">No hidden fees, no subscriptions, no premium tiers.</p>
                </div>
              </Step>
              
              <Step>
                <h3 className="text-2xl font-bold mb-4 text-white">Does it work with apps?</h3>
                <p className="text-gray-300 text-lg">OWL works with many platforms and services.</p>
                <div className="mt-6 p-4 bg-gray-800 rounded-lg">
                  <p className="text-sm text-gray-400">Compatible with e-commerce, banking, government services, and more.</p>
                </div>
              </Step>
              
              <Step>
                <h3 className="text-2xl font-bold mb-4 text-white">What if I lose my phone?</h3>
                <p className="text-gray-300 text-lg">Your identity is backed up securely in the blockchain.</p>
                <div className="mt-6 p-4 bg-gray-800 rounded-lg">
                  <p className="text-sm text-gray-400">Access your OWL ID from any device with your recovery phrase.</p>
                </div>
              </Step>
            </Stepper>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section ref={finalCtaRef} className="py-20 bg-gray-900 relative">
        {/* FaultyTerminal Background */}
        <div className="absolute inset-0 z-0">
          <FaultyTerminal
            scale={1.2}
            gridMul={[2, 1]}
            digitSize={1.0}
            timeScale={0.8}
            pause={false}
            scanlineIntensity={0.8}
            glitchAmount={0.8}
            flickerAmount={0.8}
            noiseAmp={0.8}
            chromaticAberration={0}
            dither={0}
            curvature={0}
            tint="#ffffff"
            mouseReact={true}
            mouseStrength={0.4}
            pageLoadAnimation={false}
            brightness={1.0}
            className="opacity-25"
            style={{}}
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">Privacy Should Be Simple.</h2>
          <p className="text-xl text-gray-300 mb-12">Try OWL the only digital identity needed</p>
          <Magnet padding={60} disabled={false} magnetStrength={60}>
            <StarBorder
              as="button"
              className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
              color="#006680"
              speed="6s"
            >
              Connect Now
            </StarBorder>
          </Magnet>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
            <Image
                src="/logo/owl logo.png"
                alt="OWL Logo"
                width={40}
                height={40}
                className="mr-3"
              />
              <span className="text-2xl font-bold">OWL</span>
            </div>
            <p className="text-gray-400">Onchain Witness Layer</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="text-center md:text-left">
              <div className="space-x-6">
                <a href="#product" className="text-gray-400 hover:text-white transition-colors">Product</a>
                <a href="#how-it-works" className="text-gray-400 hover:text-white transition-colors">How It Works</a>
                <a href="#pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</a>
                <a href="#help" className="text-gray-400 hover:text-white transition-colors">Help</a>
              </div>
            </div>
            
            <div className="text-center md:text-right">
              <div className="space-x-6">
                <a href="#developers" className="text-gray-400 hover:text-white transition-colors">Developers</a>
                <a href="#documentation" className="text-gray-400 hover:text-white transition-colors">Documentation</a>
                <a href="#api" className="text-gray-400 hover:text-white transition-colors">API</a>
                <a href="#github" className="text-gray-400 hover:text-white transition-colors">GitHub</a>
              </div>
            </div>
          </div>
          
          <div className="text-center text-gray-400 mb-8">
            <p>support@daemonprotocol.com | @DaemonProtocol</p>
          </div>
          
          <div className="text-center text-gray-500 text-sm">
            <p>&copy; 2025 Daemon Protocol</p>
          </div>
        </div>
      </footer>
    </div>
  );
}