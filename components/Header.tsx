'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Phone, MessageSquare, Menu, X, ShieldCheck, MapPin } from 'lucide-react';
import { AGENCY_DATA } from '@/data/agency';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-stone-200">
      {/* Top Announcement Bar */}
      <div className="bg-emerald-950 text-emerald-100 text-xs py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 font-medium text-emerald-300">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              Approved by Kerala Tourism Dept.
            </span>
            <span className="hidden md:inline text-emerald-600">|</span>
            <span className="hidden md:flex items-center gap-1 text-emerald-200/90">
              <MapPin className="w-3 h-3 text-emerald-400" />
              Fort Kochi, Kerala
            </span>
          </div>

          <div className="flex items-center gap-4 ml-auto text-xs">
            <a
              href={`tel:${AGENCY_DATA.phone.replace(/\s+/g, '')}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3 h-3 text-emerald-400" />
              <span>{AGENCY_DATA.displayPhone}</span>
            </a>
            <a
              href={AGENCY_DATA.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-500 text-white px-2.5 py-0.5 rounded-full font-medium transition-colors"
              aria-label="Direct WhatsApp assistance"
            >
              <MessageSquare className="w-3 h-3" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Brand */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-800 to-teal-900 flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform">
              <span className="font-serif font-black text-xl tracking-tight text-amber-300">KV</span>
            </div>
            <div>
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-stone-900 block leading-tight">
                Kerala Vistas
              </span>
              <span className="text-[11px] font-medium uppercase tracking-widest text-emerald-800 block">
                Journeys & Tour Specialist
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-1" aria-label="Main Navigation">
            <Link
              href="/"
              className="px-3.5 py-2 text-sm font-medium text-stone-700 hover:text-emerald-800 hover:bg-emerald-50 rounded-lg transition-colors"
            >
              Home
            </Link>
            <Link
              href="/packages"
              className="px-3.5 py-2 text-sm font-medium text-stone-700 hover:text-emerald-800 hover:bg-emerald-50 rounded-lg transition-colors"
            >
              Tour Packages
            </Link>
            <Link
              href="/destinations"
              className="px-3.5 py-2 text-sm font-medium text-stone-700 hover:text-emerald-800 hover:bg-emerald-50 rounded-lg transition-colors"
            >
              Destinations
            </Link>
            <Link
              href="/destinations/munnar"
              className="px-3.5 py-2 text-sm font-medium text-stone-700 hover:text-emerald-800 hover:bg-emerald-50 rounded-lg transition-colors"
            >
              Munnar Guide
            </Link>
            <Link
              href="/travel-guides"
              className="px-3.5 py-2 text-sm font-medium text-stone-700 hover:text-emerald-800 hover:bg-emerald-50 rounded-lg transition-colors"
            >
              Travel Guides
            </Link>
            <Link
              href="/about"
              className="px-3.5 py-2 text-sm font-medium text-stone-700 hover:text-emerald-800 hover:bg-emerald-50 rounded-lg transition-colors"
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="px-3.5 py-2 text-sm font-medium text-stone-700 hover:text-emerald-800 hover:bg-emerald-50 rounded-lg transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-emerald-800 hover:bg-emerald-900 shadow-sm transition-all hover:shadow"
            >
              Plan Your Trip
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-stone-700 hover:text-stone-900 hover:bg-stone-100"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-stone-200 bg-white px-4 pt-3 pb-6 space-y-2 shadow-xl">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-stone-800 hover:bg-emerald-50 hover:text-emerald-900"
          >
            Home
          </Link>
          <Link
            href="/packages"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-stone-800 hover:bg-emerald-50 hover:text-emerald-900"
          >
            Kerala Tour Packages
          </Link>
          <Link
            href="/destinations"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-stone-800 hover:bg-emerald-50 hover:text-emerald-900"
          >
            All Destinations
          </Link>
          <Link
            href="/destinations/munnar"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-emerald-800 bg-emerald-50 font-semibold"
          >
            Munnar Destination Guide
          </Link>
          <Link
            href="/travel-guides"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-stone-800 hover:bg-emerald-50 hover:text-emerald-900"
          >
            Travel Guides & Blog
          </Link>
          <Link
            href="/about"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-stone-800 hover:bg-emerald-50 hover:text-emerald-900"
          >
            About Kerala Vistas
          </Link>
          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-stone-800 hover:bg-emerald-50 hover:text-emerald-900"
          >
            Contact & Enquiry Form
          </Link>

          <div className="pt-4 border-t border-stone-200 space-y-2">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center block px-4 py-2.5 rounded-lg font-semibold text-white bg-emerald-800 hover:bg-emerald-900"
            >
              Get Custom Itinerary
            </Link>
            <a
              href={AGENCY_DATA.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg font-semibold text-white bg-emerald-600 hover:bg-emerald-700"
            >
              <MessageSquare className="w-4 h-4" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
