'use client';

import { MessageSquare } from 'lucide-react';
import { AGENCY_DATA } from '@/data/agency';

export default function WhatsAppButton() {
  return (
    <aside aria-label="Quick contact" className="fixed bottom-6 right-6 z-40 group">
      <a
        href={AGENCY_DATA.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat directly on WhatsApp with Kerala Vistas travel team"
        className="flex items-center gap-2.5 bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-3 rounded-full shadow-lg shadow-emerald-950/20 hover:shadow-xl transition-all duration-300 hover:scale-105"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-200 opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white" />
        </span>
        <MessageSquare className="w-5 h-5 fill-current" />
        <span className="text-sm font-semibold tracking-wide">
          Quick Kerala Chat
        </span>
      </a>
    </aside>
  );
}
