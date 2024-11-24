import dynamic from 'next/dynamic';
// Dynamically import the HeroSection component, but with { ssr: false } to disable SSR
const HeroSection = dynamic(() => import('../components/HeroSection/HeroSection'), { 
  ssr: false 
});
import Header from '@/components/common/Header';

const LanguageSection = dynamic(() => import('../components/LanguageSection/LanguageSection'), { 
    ssr: false 
  });

export default function Home() {
  return (
    <>
        <Header></Header>
        <HeroSection/>
        <LanguageSection/>
    </>
  );
}
