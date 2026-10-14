'use client';

import { useState } from 'react';
import { Send, CheckCircle2, MessageSquare, ShieldCheck, Sparkles } from 'lucide-react';
import { AGENCY_DATA } from '@/data/agency';
import { DESTINATIONS } from '@/data/destinations';

interface EnquiryFormProps {
  initialDestination?: string;
  initialPackage?: string;
}

export default function EnquiryForm({ initialDestination, initialPackage }: EnquiryFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    travelDate: '',
    durationDays: '5 to 7 Days',
    adults: '2',
    children: '0',
    selectedDestination: initialDestination || 'Munnar & Alleppey Combo',
    packageInterest: initialPackage || '',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    // Simulate brief network dispatch / ready for Supabase or CMS backend
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const generateWhatsAppUrl = () => {
    const text = `*New Trip Enquiry from Website*%0A*Name:* ${encodeURIComponent(formData.name)}%0A*Phone:* ${encodeURIComponent(formData.phone)}%0A*Travel Date:* ${encodeURIComponent(formData.travelDate || 'Flexible')}%0A*Duration:* ${encodeURIComponent(formData.durationDays)}%0A*Guests:* ${encodeURIComponent(formData.adults)} Adults, ${encodeURIComponent(formData.children)} Children%0A*Destination/Package:* ${encodeURIComponent(formData.selectedDestination || formData.packageInterest || 'Custom Tour')}%0A*Notes:* ${encodeURIComponent(formData.notes || 'Please provide itinerary & quote.')}`;
    return `https://wa.me/919847012345?text=${text}`;
  };

  if (submitted) {
    return (
      <div className="bg-emerald-900/10 border border-emerald-300 rounded-2xl p-8 text-center space-y-4">
        <div className="w-14 h-14 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="font-serif text-2xl font-bold text-stone-900">
          Enquiry Received Successfully!
        </h3>
        <p className="text-sm text-stone-600 max-w-md mx-auto">
          Thank you, <span className="font-semibold text-stone-900">{formData.name}</span>. One of our senior Kerala tour specialists in Fort Kochi is reviewing your travel preferences and will get back to you within 2 business hours with a customized itinerary and exact quote.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={generateWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-emerald-600 hover:bg-emerald-500 shadow-md transition-all"
          >
            <MessageSquare className="w-4 h-4" />
            Send directly to WhatsApp (+91 98470 12345)
          </a>
          <button
            type="button"
            onClick={() => setSubmitted(false)}
            className="w-full sm:w-auto px-5 py-3 rounded-xl text-xs font-semibold text-stone-600 hover:text-stone-900 hover:bg-stone-100 transition-colors"
          >
            Submit Another Request
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-md space-y-5">
      <div className="flex items-center justify-between pb-3 border-b border-stone-100">
        <div>
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-900">
            Request a Free Custom Itinerary & Quote
          </h3>
          <p className="text-xs text-stone-500 mt-0.5">
            100% tailor-made with verified resorts, private AC cab & dedicated Kerala chauffeur.
          </p>
        </div>
        <span className="hidden sm:flex items-center gap-1 text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
          <Sparkles className="w-3.5 h-3.5" />
          No Booking Fee
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-stone-700 mb-1" htmlFor="enquiry-name">
            Full Name *
          </label>
          <input
            id="enquiry-name"
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="e.g. Rahul Sharma"
            className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 text-stone-900 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:border-transparent transition"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-stone-700 mb-1" htmlFor="enquiry-phone">
            Phone / WhatsApp Number *
          </label>
          <input
            id="enquiry-phone"
            type="tel"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="e.g. +91 98765 43210"
            className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 text-stone-900 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:border-transparent transition"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-stone-700 mb-1" htmlFor="enquiry-email">
            Email Address *
          </label>
          <input
            id="enquiry-email"
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="e.g. rahul@example.com"
            className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 text-stone-900 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:border-transparent transition"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-stone-700 mb-1" htmlFor="enquiry-travel-date">
            Approximate Travel Date / Month
          </label>
          <input
            id="enquiry-travel-date"
            type="text"
            value={formData.travelDate}
            onChange={(e) => setFormData({ ...formData, travelDate: e.target.value })}
            placeholder="e.g. November 2025 / Diwali / New Year"
            className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 text-stone-900 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:border-transparent transition"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-stone-700 mb-1" htmlFor="enquiry-duration">
            Trip Duration
          </label>
          <select
            id="enquiry-duration"
            value={formData.durationDays}
            onChange={(e) => setFormData({ ...formData, durationDays: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 text-stone-900 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:border-transparent transition bg-white"
          >
            <option value="3 to 4 Days (Quick Getaway)">3 to 4 Days (Quick Getaway)</option>
            <option value="5 to 7 Days (Standard Kerala Circuit)">5 to 7 Days (Standard Kerala Circuit)</option>
            <option value="8 to 10 Days (Comprehensive Tour)">8 to 10 Days (Comprehensive Tour)</option>
            <option value="10+ Days (Grand Leisure & Ayurveda)">10+ Days (Grand Leisure & Ayurveda)</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold text-stone-700 mb-1" htmlFor="enquiry-destinations">
            Destinations of Interest
          </label>
          <select
            id="enquiry-destinations"
            value={formData.selectedDestination}
            onChange={(e) => setFormData({ ...formData, selectedDestination: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 text-stone-900 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:border-transparent transition bg-white"
          >
            <option value="Munnar & Alleppey Combo">Munnar & Alleppey Combo (Most Popular)</option>
            {DESTINATIONS.map((d) => (
              <option key={d.slug} value={d.name}>
                {d.name} focused
              </option>
            ))}
            <option value="Complete Kerala Circuit (Munnar, Thekkady, Alleppey, Kochi)">
              Complete Kerala Circuit (Munnar, Thekkady, Alleppey, Kochi)
            </option>
            <option value="North Kerala (Wayanad, Bekal, Calicut)">
              North Kerala (Wayanad, Bekal, Calicut)
            </option>
          </select>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <div>
            <label className="block text-xs font-semibold text-stone-700 mb-1" htmlFor="enquiry-adults">
              Adults (12+ yrs)
            </label>
            <select
              id="enquiry-adults"
              value={formData.adults}
              onChange={(e) => setFormData({ ...formData, adults: e.target.value })}
              className="w-full px-3 py-2.5 rounded-lg border border-stone-300 text-stone-900 text-sm bg-white"
            >
              <option value="1">1 Adult</option>
              <option value="2">2 Adults (Couple)</option>
              <option value="3">3 Adults</option>
              <option value="4">4 Adults</option>
              <option value="5+">5+ Adults (Family/Group)</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-semibold text-stone-700 mb-1" htmlFor="enquiry-children">
              Children
            </label>
            <select
              id="enquiry-children"
              value={formData.children}
              onChange={(e) => setFormData({ ...formData, children: e.target.value })}
              className="w-full px-3 py-2.5 rounded-lg border border-stone-300 text-stone-900 text-sm bg-white"
            >
              <option value="0">0 Children</option>
              <option value="1">1 Child</option>
              <option value="2">2 Children</option>
              <option value="3+">3+ Children</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-stone-700 mb-1" htmlFor="enquiry-special-requests">
            Special Requests / Notes
          </label>
          <input
            id="enquiry-special-requests"
            type="text"
            value={formData.notes}
            onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
            placeholder="e.g. Honeymoon cake, pure vegetarian food, treehouse stay"
            className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 text-stone-900 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:border-transparent transition"
          />
        </div>
      </div>

      <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-xs text-stone-500">
          <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>Your information is 100% private. Zero spam guaranteed.</span>
        </div>

        <button
          type="submit"
          disabled={submitting}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl font-semibold text-white bg-emerald-800 hover:bg-emerald-900 shadow-md transition-all disabled:opacity-50"
        >
          {submitting ? (
            <span>Sending Enquiry...</span>
          ) : (
            <>
              <Send className="w-4 h-4" />
              <span>Get Free Custom Plan</span>
            </>
          )}
        </button>
      </div>
    </form>
  );
}
