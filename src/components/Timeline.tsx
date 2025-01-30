'use client'

import React from 'react';
import {
  AiOutlineHome,
  AiOutlineEnvironment,
  AiOutlineCoffee,
  AiOutlineCar
} from 'react-icons/ai';
import { GiPeanut } from "react-icons/gi";
import { BsPersonWalking } from "react-icons/bs";
import { PiFarmFill, PiWineFill } from "react-icons/pi";

interface ScheduleItem {
  time: string;
  title: string;
  description: string;
  icon: React.ReactElement;
}

const schedule: ScheduleItem[] = [
  {
    time: '8:15',
    title: 'ホテルピックアップ＆出発',
    description: '見渡す限りの広大なサトウキビ畑や、熱帯雨林の道、ユーカリ林を抜けてアサートン高原へ向かいます。',
    icon: <AiOutlineHome />, 
  },
  {
    time: '9:30',
    title: 'レイクバリン＆カーテンフィグツリー見学',
    description: '美しい湖レイクバリンを訪れ、湖畔のカフェでカフェ＆スコーンタイム。宮崎駿の映画のモチーフとなったカーテンフィグツリーも見学します。',
    icon: <AiOutlineEnvironment />, 
  },
  {
    time: '11:15',
    title: '牧場でチーズ＆特産品試食',
    description: '広大な高原の牧場で新鮮なチーズを試食。他にもチョコレートやヨーグルトなど、ここでしか買えない特産品が並びます。',
    icon: <PiFarmFill />, 
  },
  {
    time: '13:00',
    title: 'トルガでナッツ＆フルーツマーケット巡り',
    description: 'ピーナッツの名産地トルガで、特産のピーナッツやマカデミアナッツのテイスティング。ローカルマーケットで新鮮なフルーツもチェック！',
    icon: <GiPeanut />, 
  },
  {
    time: '13:30',
    title: 'グラネットゴージでロックワラビーと触れ合い',
    description: '国立公園に生息するロックワラビーに餌やり。赤ちゃんワラビーに出会えることも！',
    icon: <BsPersonWalking />, 
  },
  {
    time: '14:20',
    title: 'コーヒー工場で休憩＆カフェタイム',
    description: '地元のハイクオリティなコーヒーが集まる工場で試飲＆休憩。おしゃれなカフェでのんびり午後のひとときを。',
    icon: <AiOutlineCoffee />, 
  },
  {
    time: '15:10',
    title: 'ワイナリーでフルーツワイン試飲',
    description: 'ユーカリ林に囲まれたワイナリーで、ケアンズならではのトロピカルフルーツワインをテイスティング。',
    icon: <PiWineFill />, 
  },
  {
    time: '17:15',
    title: 'ケアンズ帰着＆ホテル送迎',
    description: '高原の美しい景色や熱帯雨林を抜け、ケアンズのホテルまでお送りします。',
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