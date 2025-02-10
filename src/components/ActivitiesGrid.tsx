import React from 'react';

export default function ActivitiesGrid() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-8">
      {/* Contenedor principal: en móviles (por defecto) 1 columna; en pantallas md: 2 columnas */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        
        {/* Bloque 1 */}
        <div className="flex flex-col items-start">
          <img
            src="/grid1.webp"
            alt="熱帯雨林で癒される"
            className="mb-4 w-[150px] h-[150px] object-cover"
          />
          <h2 className="text-xl font-semibold">
            熱帯雨林で癒される
          </h2>
          {/* Línea separadora */}
          <hr className="my-2 w-full border-t border-gray-300" />
          
          <p className="text-sm leading-relaxed">
            世界遺産の熱帯雨林（レインフォレスト）でたっぷり癒される！ここケアンズの熱帯雨林は世界最古の熱帯雨林で
            約1億2千年前にオーストラリア大陸を覆っていた森林の一部だと言われており、その時代に恐竜が食べていたと
            言われる同じ植物が未だ残っています。
          </p>
        </div>

        {/* Bloque 2 */}
        <div className="flex flex-col items-start">
          <img
            src="/grid2.webp"
            alt="野生動物と触れ合う"
            className="mb-4 w-[150px] h-[150px] object-cover"
          />
          <h2 className="text-xl font-semibold">
            野生動物と触れ合う
          </h2>
          {/* Línea separadora */}
          <hr className="my-2 w-full border-t border-gray-300" />
          
          <p className="text-sm leading-relaxed">
            オーストラリア、特にケアンズ周辺特有の熱帯性野生動物と触れ合うことが出来ます。カモノハシや木登りカンガルー
            を始め、同じオーストラリアでも、このケアンズでしかめぐり合うことの出来ない貴重な動物、それも野生動物を
            紹介してくれています。
          </p>
        </div>

        {/* Bloque 3 */}
        <div className="flex flex-col items-start">
          <img
            src="/grid3.webp"
            alt="ローカルフードを楽しむ"
            className="mb-4 w-[150px] h-[150px] object-cover"
          />
          <h2 className="text-xl font-semibold">
            ローカルフードを楽しむ
          </h2>
          {/* Línea separadora */}
          <hr className="my-2 w-full border-t border-gray-300" />
          
          <p className="text-sm leading-relaxed">
            ケアンズのローカルフード、チーズ、チョコレート、スコーン、ワイン、ナッツ、コーヒーを楽しんでいただきます。
            ケアンズを代表するデイリーファーム「Gallo&apos;s」では、北の海風とも言えるホームスタイルランチを楽しんで
            もらえます。シェーンチョイスでケアンズを味わってください。
          </p>
        </div>

        {/* Bloque 4 */}
        <div className="flex flex-col items-start">
          <img
            src="/grid4.webp"
            alt="雄大な景色を楽しむ"
            className="mb-4 w-[150px] h-[150px] object-cover"
          />
          <h2 className="text-xl font-semibold">
            雄大な景色を楽しむ
          </h2>
          {/* Línea separadora */}
          <hr className="my-2 w-full border-t border-gray-300" />
          
          <p className="text-sm leading-relaxed">
            まるで映画の世界に飛び込んだような雄大な景色、突き抜けた青空、カントリーな田舎風景、全てがリアル
            オーストラリアの世界に包まれます。自然の雄大さと壮大な景色は、このオーストラリア独特のもの。
            きっと感動してもらえると思います。
          </p>
        </div>
      </div>
    </section>
  );
}