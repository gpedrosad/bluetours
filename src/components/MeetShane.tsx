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
          こんにちは！私はオーストラリア出身のシェーンです。 19年以上の経験 を持つ日本語対応のツアーガイドです。

世界遺産に登録された海や山に囲まれたケアンズで、お客様に地元のオーストラリア人がするような、

観光客向けのツアーではない本当の陽気で楽しいオーストラリアの体験をして頂こうという事をモットーとしております。

私たちのツアーでは、 スコーンやチーズ、ワインなどの地元の美味しい食べ物を楽しみながら 手つかずの熱帯雨林から雄大なアウトバックまで、１日を通してオーストラリアのさまざまな景色をご覧頂けます。

ケアンズの自然、人々、野生動物たちと触れ合う、忘れられない旅に出かけましょう。

皆さんにお会いし、オーストラリアの魅力を分かち合えるのを楽しみにしています。


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