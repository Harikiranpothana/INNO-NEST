import Hero from '../sections/Hero.jsx';
import Problem from '../sections/Problem.jsx';
import Existing from '../sections/Existing.jsx';
import Solution from '../sections/Solution.jsx';
import Features from '../sections/Features.jsx';
import Comparison from '../sections/Comparison.jsx';
import Value from '../sections/Value.jsx';
import Reliability from '../sections/Reliability.jsx';
import CallToAction from '../sections/CallToAction.jsx';

export default function Home() {
  return (
    <>
      <Hero />
      <Problem />
      <Existing />
      <Solution />
      <Features />
      <Comparison />
      <Value />
      <Reliability />
      <CallToAction />
    </>
  );
}
