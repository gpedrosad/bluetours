"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { AiOutlineClose, AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

interface ImageProps {
  src: string;
  alt: string;
}

interface GalleryProps {
  images: ImageProps[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
  };

  const showPrev = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const showNext = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // アクセシビリティのためのキー操作ハンドリング
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === "Escape") {
        closeLightbox();
      } else if (e.key === "ArrowLeft") {
        setCurrentIndex((prevIndex) =>
          prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
      } else if (e.key === "ArrowRight") {
        setCurrentIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, images.length]);

  return (
    <>
      {/* ギャラリーコンテナ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2
          className="text-3xl font-extrabold bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 bg-clip-text text-transparent mb-8 text-center drop-shadow-lg"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          ギャラリー
        </h2>

        {/*
          マソニーレイアウト:
          - columns-2: モバイル（基本）で2列
          - sm:columns-3: 画面幅 >= 640pxで3列
          - md:columns-4: 画面幅 >= 768pxで4列
          - gap-4: 列間の水平スペース
        */}
        <div className="columns-2 sm:columns-3 md:columns-4 gap-4">
          {images.map((img, index) => (
            <div
              key={index}
              className="relative mb-4 break-inside-avoid cursor-pointer group"
              onClick={() => openLightbox(index)}
            >
              <div className="overflow-hidden rounded-lg">
                <Image
                  src={img.src}
                  alt={img.alt}
                  className="transform transition-transform duration-300 group-hover:scale-105 w-full h-auto"
                  width={800}
                  height={600}
                  sizes="(max-width: 640px) 100vw,
                         (max-width: 768px) 50vw,
                         (max-width: 1024px) 33vw,
                         25vw"
                  loading="lazy"
                />
              </div>
              {/* ホバー時のオーバーレイを削除 */}
              {/* <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-25 transition duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <span className="text-white text-lg">画像を見る</span>
              </div> */}
            </div>
          ))}
        </div>
      </div>

      {/* ライトボックス（モーダル） */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 transition-opacity duration-300"
          onClick={closeLightbox}
        >
          <div
            // 上部にスペースを確保するためにpadding top (pt-16)を追加
            // 画面の高さを超えないように高さを制限 (max-h-screen) + overflow-hidden
            className="relative max-w-3xl w-full mx-4 pt-16 max-h-screen overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* 閉じるボタン */}
            <button
              className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition"
              onClick={closeLightbox}
              aria-label="閉じる"
            >
              <AiOutlineClose size={24} />
            </button>

            {/* 前へボタン */}
            <button
              className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition"
              onClick={showPrev}
              aria-label="前へ"
            >
              <AiOutlineLeft size={24} />
            </button>

            {/* 次へボタン */}
            <button
              className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition"
              onClick={showNext}
              aria-label="次へ"
            >
              <AiOutlineRight size={24} />
            </button>

            {/*
              画像コンテナ:
              - "flex items-center justify-center" で中央に配置
              - "max-h-[calc(100vh-6rem)]" で画面全体の高さを超えないように制限
            */}
            <div className="flex items-center justify-center max-h-[calc(100vh-6rem)]">
              <Image
                src={images[currentIndex].src}
                alt={images[currentIndex].alt}
                width={1200}
                height={800}
                className="object-contain rounded-lg"
                priority
              />
            </div>

            {/* 画像の下にaltテキストを表示しない場合は以下を削除 */}
            {/*
              {images[currentIndex].alt && (
                <p className="text-center text-white mt-2">
                  {images[currentIndex].alt}
                </p>
              )}
            */}
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;