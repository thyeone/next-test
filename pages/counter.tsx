import { decrement, increment } from '@/store/slice/counterSlice';
import { RootState } from '@/store/store';
import { useSelector, useDispatch } from 'react-redux';

export default function Counter() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <p className='text-lg'>점수 : {count}</p>
      <div>
        <button
          className='px-4 py-2 mr-3 text-sm font-semibold text-white bg-black rounded-full shadow-sm'
          onClick={() => dispatch(increment())}
        >
          증가
        </button>
        <button
          className='px-4 py-2 text-sm font-semibold text-white bg-black rounded-full shadow-sm'
          onClick={() => dispatch(decrement())}
        >
          감소
        </button>
      </div>
    </div>
  );
}
