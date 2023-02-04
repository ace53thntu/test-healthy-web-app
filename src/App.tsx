import { Meal01 } from '@/assets/images';
import Logo from '@/assets/logo.svg';

import {
  ChallengeIcon,
  CloseIcon,
  CupIcon,
  InfoIcon,
  KnifeIcon,
  MemoIcon,
  MenuIcon,
  ScrollIcon,
} from './components/icons';

function App() {
  return (
    <div className="app">
      <h1 className="text-sm">
        魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…
      </h1>
      <h2 className="font-inter uppercase text-primary-400">Body Record</h2>

      <img alt="logo" src={Logo} />

      <div className="mx-auto w-[60rem] flex">
        <MemoIcon />
        <ChallengeIcon />
        <InfoIcon />
        <MenuIcon />
        <CloseIcon />
        <ScrollIcon />
      </div>
      <div className="mx-auto w-[60rem] flex bg-gradient-yellowred h-[6rem]">
        <KnifeIcon />
        <CupIcon />
      </div>

      <div className="mx-auto w-[60rem] flex">
        <img alt="home-1" src={Meal01} />
      </div>
    </div>
  );
}

export default App;
