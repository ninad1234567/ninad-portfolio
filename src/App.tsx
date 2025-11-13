import { lazy, Suspense } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';

// Lazy load components below the fold
const About = lazy(() => import('./components/About'));
const Skills = lazy(() => import('./components/Skills'));
const Projects = lazy(() => import('./components/Projects'));
const Achievements = lazy(() => import('./components/Achievements'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

// Simple loading fallback
const LoadingFallback = () => (
  <div className="flex items-center justify-center py-20">
    <div className="w-12 h-12 border-4 border-accent-blue/30 border-t-accent-blue rounded-full animate-spin"></div>
  </div>
);

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text transition-colors duration-300">
        <Header />
        <main>
          <Hero />
          <Suspense fallback={<LoadingFallback />}>
            <About />
          </Suspense>
          <Suspense fallback={<LoadingFallback />}>
            <Skills />
          </Suspense>
          <Suspense fallback={<LoadingFallback />}>
            <Projects />
          </Suspense>
          <Suspense fallback={<LoadingFallback />}>
            <Achievements />
          </Suspense>
          <Suspense fallback={<LoadingFallback />}>
            <Contact />
          </Suspense>
        </main>
        <Suspense fallback={<LoadingFallback />}>
          <Footer />
        </Suspense>
      </div>
    </ThemeProvider>
  );
}

export default App;
