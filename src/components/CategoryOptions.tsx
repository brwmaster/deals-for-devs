import { Category } from '@/types/Types';
import Link from 'next/link';

export default function CategoryOptions() {
  return (
    <div>
      <div className="flex gap-4 mb-10 items-center flex-wrap">
        {Object.values(Category).map((category) => (
          <Link
            href={`/deals`}
            key={category}
            className="rounded-full border border-white text-white focus:bg-white focus:text-black px-4 py-2"
          >
            {category}
          </Link>
        ))}
      </div>
    </div>
  );
}
