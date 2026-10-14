import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="py-3 text-xs text-stone-600">
      <ol className="flex flex-wrap items-center gap-1.5 sm:gap-2">
        <li className="flex items-center gap-1.5">
          <Link href="/" className="flex items-center gap-1 text-stone-600 hover:text-emerald-800 transition-colors">
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.url} className="flex items-center gap-1.5 sm:gap-2">
              <ChevronRight className="w-3.5 h-3.5 text-stone-600 shrink-0" />
              {isLast ? (
                <span className="font-semibold text-stone-900" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <Link href={item.url} className="text-stone-600 hover:text-emerald-800 transition-colors">
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
