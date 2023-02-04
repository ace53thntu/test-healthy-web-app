import { ImgColumn1, Meal01, MyRecord01 } from '@/assets/images';
import Logo from '@/assets/logo.svg';

import { Button } from './components/base';
import {
  MealButton,
  MealStory,
  MenuItem,
  Post,
  PostTags,
  RecordCategory,
  Time,
} from './components/common';
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

      <div className="mx-auto grid w-[60rem] grid-cols-4 gap-4">
        <MealButton icon={<KnifeIcon />}>Morning</MealButton>
        <MealButton icon={<KnifeIcon />}>Lunch</MealButton>
        <MealButton icon={<KnifeIcon />}>Dinner</MealButton>
        <MealButton icon={<CupIcon />}>Snack</MealButton>
      </div>

      <div className="mx-auto w-[60rem] flex">
        <MenuItem to="abc" label="自分の記録" />
      </div>
      <div className="mx-auto w-[60rem] flex">
        <MemoIcon />
        <ChallengeIcon />
        <InfoIcon />
        <MenuIcon />
        <CloseIcon />
        <ScrollIcon />
      </div>

      <div className="flex flex-col items-center">
        <div className="mx-auto grid w-[60rem] grid-cols-4 gap-1">
          <MealStory
            image={{
              src: Meal01,
              alt: 'Meal 01',
            }}
            date={<Time date="05.21.Morning" />}
          />
        </div>

        <Button className="mt-[28px]">記録をもっと見る</Button>
      </div>

      <div className="mx-auto grid w-[60rem] grid-cols-3 gap-1">
        <RecordCategory
          image={{
            src: MyRecord01,
            alt: 'Body Record',
          }}
          name="Body Record"
          caption="自分のカラダの記録"
        />
      </div>

      <div className="mx-auto grid w-[60rem] grid-cols-4 gap-1">
        <Post
          title="魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…"
          image={{
            src: ImgColumn1,
            alt: 'Post 1',
          }}
          time={<Time date="2021.05.17" time="23:25" />}
          tags={<PostTags tags={['#魚料理', '#和食', '#DHA']} />}
        />
      </div>
    </div>
  );
}

export default App;
