import { useAppDispatch, useAppSelector } from '@/hooks/hooks';
import { incrementByAmount } from '@/store/slice/counterSlice';
import { RootState } from '@/store/store';
import { useState } from 'react';

export default function Counter() {
  const [number, setNumber] = useState<number>(0);
  const count = useAppSelector((state: RootState) => state.counterSlice.value);
  const dispatch = useAppDispatch();

  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <p className='text-lg'>점수 : {count}</p>
      <p>설정된 값: {number}</p>
      <div className='flex gap-x-2'>
        <>
          <button
            className='px-4 py-2 text-sm font-semibold text-white bg-black rounded-full shadow-sm'
            onClick={() => setNumber(number + 1)}
          >
            증가
          </button>
          <button
            className='px-4 py-2 text-sm font-semibold text-white bg-black rounded-full shadow-sm'
            onClick={() => setNumber(number - 1)}
          >
            감소
          </button>
          <button
            className='px-4 py-2 text-sm font-semibold text-white bg-black rounded-full shadow-sm'
            onClick={() => dispatch(incrementByAmount(number))}
          >
            지정한 값만큼 증가 또는 감소
          </button>
        </>
      </div>
    </div>
  );
}
