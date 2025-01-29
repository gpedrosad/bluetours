import React from 'react';
import {
  AiOutlineHome,
  AiOutlineEnvironment,
  AiOutlineCoffee,
  AiOutlineCar
} from 'react-icons/ai';
import { GiPeanut } from "react-icons/gi";
import { BsPersonWalking } from "react-icons/bs";
import { PiFarmFill } from "react-icons/pi";
import { PiWineFill } from "react-icons/pi";

interface ScheduleItem {
  time: string;
  title: string;
  description: string;
  icon: React.ReactElement;
}

const schedule: ScheduleItem[] = [
  {
    time: '8:15',
    title: '各ホテルにてお客様をピックアップ',
    description: '見渡す限りの広大なサトウキビ畑や、熱帯雨林の道、ユーカリ林を抜けてアサートン高原へ向かいます。',
    icon: <AiOutlineHome />, 
  },
  {
    time: '9:30',
    title: 'トゥルーブルーツアー',
    description: '珍しい地形にできた美しい湖レイクバリンを訪れます。カワイイ野生動物も時々現れる、熱帯雨林の散策やレイクバリンを眺める湖畔のカフェにて休憩をとり、静かな時間の流れる中でのカフェ＆スコーンタイム。また、宮崎駿の映画のモチーフとなったといわれる、樹齢500年の精霊が宿る木、カーテンフィグツリーを見学します。',
    icon: <AiOutlineEnvironment />, 
  },
  {
    time: '11:15',
    title: 'トゥルーブルーツアー',
    description: '高原にある牧場を訪れます。キレイな空気と広大な高原で飼育された乳牛たちのミルクを使用して作った「できたてチーズ」を試食します。他にもチョコレートやヨーグルトなど、ケアンズの人も買い付けにくる、ここでしか買えないものがずらり！ お土産にも最適です。',
    icon: <PiFarmFill />, 
  },
  {
    time: '13:00',
    title: 'トゥルーブルーツアー',
    description: 'ピーナッツの名産地トルガにて、特産のピーナッツやマカデミアナッツのテイスティング。地元の人ご用達の新鮮なフルーツなどもずらりと並んだマーケットだから、ローカル気分が味わえます！',
    icon: <GiPeanut />, 
  },
  {
    time: '13:30',
    title: 'トゥルーブルーツアー',
    description: '高原地帯を抜けてケアンズのアウトバックが見られるグラネットゴージへ。この国立公園に生息する小さなロックワラビーに餌付けすることができます。 時にはお母さんのおなかの袋の中に入った赤ちゃんワラビーに出会えることも！',
    icon: <BsPersonWalking />, 
  },
  {
    time: '14:20',
    title: 'トゥルーブルーツアー',
    description: '午後の休憩は、ゆったりした時間の流れるコーヒー工場で。地元のハイクオリティなコーヒーが集まるので、お土産としてもGOOD！おしゃれでカワイイカフェで、のんびり午後のひとときをすごします。',
    icon: <AiOutlineCoffee />, 
  },
  {
    time: '15:10',
    title: 'トゥルーブルーツアー',
    description: 'ユーカリ林に囲まれたワイナリーにてケアンズならではのトロピカルフルーツを使って作られるフルーツワインをテイスティング。9種類の手作りワインやリキュールを飲み比べて頂けます。',
    icon: <PiWineFill />, 
  },
  {
    time: '17:15',
    title: 'ケアンズへ戻ります',
    description: '高原の美しい景色や熱帯雨林を抜けて、一路ケアンズへ。お客様のホテルまでお送りいたします。',
    icon: <AiOutlineCar />, 
  },
];

const Timeline: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-8">
        アサートン高原ツアーのスケジュール
      </h2>
      <div className="relative">
        <div className="absolute left-6 top-0 bottom-0 w-1 bg-gray-300"></div>
        {schedule.map((item, index) => (
          <div key={index} className="mb-10 flex items-start">
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full shadow-lg transition-transform transform hover:scale-110">
                {item.icon}
              </div>
              {index !== schedule.length - 1 && (
                <div className="w-px bg-gray-300 flex-1 mt-2"></div>
              )}
            </div>
            <div className="ml-6">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-2xl transition-shadow duration-300">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-2xl font-semibold text-gray-800">
                    {item.title}
                  </h3>
                  <span className="text-sm text-blue-500 font-medium">
                    {item.time}
                  </span>
                </div>
                <p className="text-gray-700">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
