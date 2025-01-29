'use client';

import Image from 'next/image';
import BookTour from './BookTour';

const MeetShane: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto my-16 p-8 bg-white rounded-2xl shadow-xl">
      {/* 見出し */}
      <h2
        className="text-3xl font-extrabold bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 bg-clip-text text-transparent mb-8 text-center drop-shadow-lg"
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        ツアーガイドのシェーンに会いましょう
      </h2>

      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* 画像セクション */}
        <div className="flex-shrink-0 w-48 h-48 relative mx-auto md:mx-0">
          <Image
            src="/shane.webp" // 有効な画像パスに置き換えてください。
            alt="ツアーガイドのシェーン"
            fill
            className="rounded-full object-cover border-4 border-indigo-500 shadow-lg"
          />
        </div>

        {/* テキストコンテンツ */}
        <div className="flex-1">
          <p className="text-lg text-gray-800 leading-relaxed mb-4">
            こんにちは！私はオーストラリア出身のシェーンです。
            <span className="font-bold text-indigo-600"> 17年以上の経験</span> を持つ日本語対応のツアーガイドです。
            世界遺産に登録された海や山、そして活気あるローカル文化に囲まれたケアンズで、本物のオーストラリア体験を提供することが私の使命です。
          </p>
          <p className="text-lg text-gray-800 leading-relaxed mb-4">
            私たちのツアーでは、息をのむようなアサートン・テーブルランドを探索し、
            チーズやチョコレート、ワインなどの地元の美味しい食べ物を楽しみ、
            静かな熱帯雨林から雄大なアウトバックまで、オーストラリアの多様な景色を満喫できます。
          </p>
          <p className="text-lg text-gray-800 leading-relaxed">
            ケアンズの自然、人々、野生動物と共に、忘れられない旅に出かけましょう。
            皆さんとお会いし、オーストラリアの魅力を共有できることを楽しみにしています！
          </p>
        </div>
      </div>

      {/* コールトゥアクション */}
      <div className="text-center mt-8">
        <BookTour buttonText="シェーンとツアーを予約する" />
      </div>
    </div>
  );
};

export default MeetShane;