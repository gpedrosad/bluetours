// components/BookTour.tsx
'use client';

import { useState, useEffect } from 'react';

// プロパティの定義
interface BookTourProps {
  buttonText: string;
}

const BookTour: React.FC<BookTourProps> = ({ buttonText }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    date1: '',
    date2: '',
    adults: 1,
    children: 0,
    infants: 0,
    email: '',
    hotel: '',
  });
  const [totalPrice, setTotalPrice] = useState<number>(185); // 初期値：大人1人

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // 大人と子供の数が変わるたびに合計金額を計算
  useEffect(() => {
    const adults = parseInt(formData.adults as unknown as string, 10);
    const children = parseInt(formData.children as unknown as string, 10);

    // 通常価格
    const standardPrice = adults * 185 + children * 115;

    if (adults === 2 && children === 2) {
      setTotalPrice(585);
    } else {
      setTotalPrice(standardPrice);
    }
  }, [formData.adults, formData.children]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData, `合計金額: ${totalPrice} AUD`);
    setIsOpen(false);
    setFormData({
      name: '',
      date1: '',
      date2: '',
      adults: 1,
      children: 0,
      infants: 0,
      email: '',
      hotel: '',
    });
    setTotalPrice(185);
  };

  return (
    <div className="flex flex-col items-center justify-center p-6">
      {/* 予約ボタン */}
      <button
        onClick={() => setIsOpen(true)}
        className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300 shadow-lg"
      >
        {buttonText}
      </button>

      {/* モーダル */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-lg p-8 relative">
            {/* 閉じるボタン */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-3xl"
              aria-label="モーダルを閉じる"
            >
              &times;
            </button>

            <h2 className="text-2xl font-bold mb-6 text-center">ツアーを予約</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* 名前 */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  名前
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="フルネームを入力してください"
                />
              </div>

              {/* 希望日 */}
              <div>
                <label className="block text-sm font-medium text-gray-700">希望日</label>
                <div className="flex space-x-4 mt-2">
                  <div className="flex-1">
                    <label htmlFor="date1" className="sr-only">
                      第一希望
                    </label>
                    <input
                      type="date"
                      id="date1"
                      name="date1"
                      required
                      value={formData.date1}
                      onChange={handleChange}
                      className="block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500"
                    />
                    <span className="text-xs text-gray-500">第一希望</span>
                  </div>
                  <div className="flex-1">
                    <label htmlFor="date2" className="sr-only">
                      第二希望
                    </label>
                    <input
                      type="date"
                      id="date2"
                      name="date2"
                      value={formData.date2}
                      onChange={handleChange}
                      className="block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500"
                    />
                    <span className="text-xs text-gray-500">第二希望</span>
                  </div>
                </div>
              </div>

              {/* 人数 */}
              <div>
                <label className="block text-sm font-medium text-gray-700">人数</label>
                <div className="grid grid-cols-3 gap-6 mt-2">
                  <div>
                    <input
                      type="number"
                      id="adults"
                      name="adults"
                      min={1}
                      required
                      value={formData.adults}
                      onChange={handleChange}
                      className="block w-full border border-gray-300 rounded-md shadow-sm p-3"
                      placeholder="大人"
                    />
                    <span className="text-xs text-gray-500">大人</span>
                  </div>
                  <div>
                    <input
                      type="number"
                      id="children"
                      name="children"
                      min={0}
                      value={formData.children}
                      onChange={handleChange}
                      className="block w-full border border-gray-300 rounded-md shadow-sm p-3"
                      placeholder="子供 (3-14)"
                    />
                    <span className="text-xs text-gray-500">子供 (3-14)</span>
                  </div>
                  <div>
                    <input
                      type="number"
                      id="infants"
                      name="infants"
                      min={0}
                      value={formData.infants}
                      onChange={handleChange}
                      className="block w-full border border-gray-300 rounded-md shadow-sm p-3"
                      placeholder="幼児"
                    />
                    <span className="text-xs text-gray-500">幼児</span>
                  </div>
                </div>
              </div>

              {/* メール */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  メールアドレス
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3"
                  placeholder="メールを入力してください"
                />
              </div>

              {/* ホテル */}
              <div>
                <label htmlFor="hotel" className="block text-sm font-medium text-gray-700">
                  ホテル
                </label>
                <input
                  type="text"
                  id="hotel"
                  name="hotel"
                  required
                  value={formData.hotel}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3"
                  placeholder="ホテル名を入力してください"
                />
              </div>

              {/* 送信ボタン */}
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="w-full md:w-1/2 px-6 py-3 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 transition duration-300 shadow-md"
                >
                  予約を送信
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookTour;