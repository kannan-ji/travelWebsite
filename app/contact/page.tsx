import type { Metadata } from 'next';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  MessageSquare, 
  HelpCircle,
  Sparkles 
} from 'lucide-react';
import { AGENCY_DATA } from '@/data/agency';
import EnquiryForm from '@/components/EnquiryForm';
import Breadcrumbs from '@/components/Breadcrumbs';
import { getBaseUrl, generateBreadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Contact Kerala Vistas: Fort Kochi Office, Phone & WhatsApp Travel Desk',
  description: 'Reach Kerala Vistas Journeys in Fort Kochi, Kerala. Direct WhatsApp assistance (+91 98470 12345), telephone, office address, and custom tour enquiry form.',
  alternates: {
    canonical: `${getBaseUrl()}/contact`,
  },
  openGraph: {
    title: 'Contact Kerala Vistas: Fort Kochi Office, Phone & WhatsApp Travel Desk',
    description: 'Reach Kerala Vistas Journeys in Fort Kochi, Kerala. Direct WhatsApp assistance (+91 98470 12345), telephone, office address, and custom tour enquiry form.',
    url: `${getBaseUrl()}/contact`,
  },
};

export default function ContactPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Contact & Enquiry', url: '/contact' },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Header Banner */}
      <div className="bg-emerald-950 text-white py-16 sm:py-20 border-b border-emerald-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <Breadcrumbs items={[{ name: 'Contact & Enquiry', url: '/contact' }]} />
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-300">
              <Phone className="w-4 h-4" />
              Direct Tour Coordinator Access
            </div>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white">
              Get in Touch With Our Kerala Team
            </h1>
            <p className="text-base sm:text-lg text-emerald-100 font-light leading-relaxed">
              Have questions about flight arrivals into Kochi, houseboat cabin sizes, or best seasons for Munnar? We are physically based in Fort Kochi and ready to assist you.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content: Info & Form */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Office Details & Direct Channels */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-6">
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-stone-900">
                Registered Travel Office
              </h2>

              <div className="space-y-4 text-sm text-stone-700">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-stone-900 block font-serif">Head Office Address</strong>
                    <p className="text-stone-600 text-xs sm:text-sm mt-0.5">
                      {AGENCY_DATA.address.street}, {AGENCY_DATA.address.locality}, {AGENCY_DATA.address.city}, {AGENCY_DATA.address.state} {AGENCY_DATA.address.postalCode}, {AGENCY_DATA.address.country}
                    </p>
                    <span className="text-[11px] text-stone-500 block mt-1">
                      (Near historic St. Francis Church & Chinese Fishing Nets)
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-stone-900 block font-serif">Direct Telephones</strong>
                    <p className="text-stone-600 text-xs sm:text-sm mt-0.5">
                      <a href={`tel:${AGENCY_DATA.phone.replace(/\s+/g, '')}`} className="hover:text-emerald-800 transition-colors">
                        {AGENCY_DATA.displayPhone}
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-stone-900 block font-serif">Email Enquiries</strong>
                    <p className="text-stone-600 text-xs sm:text-sm mt-0.5">
                      <a href={`mailto:${AGENCY_DATA.email}`} className="hover:text-emerald-800 transition-colors">
                        {AGENCY_DATA.email}
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-stone-900 block font-serif">Consultation Hours</strong>
                    <p className="text-stone-600 text-xs sm:text-sm mt-0.5">
                      {AGENCY_DATA.officeHours}
                    </p>
                  </div>
                </div>
              </div>

              {/* Instant WhatsApp Card */}
              <div className="bg-emerald-50 rounded-xl p-5 border border-emerald-200 space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-900 flex items-center gap-1.5">
                  <MessageSquare className="w-4 h-4 text-emerald-700" />
                  Fastest Way to Connect
                </span>
                <p className="text-xs text-stone-700 leading-relaxed">
                  Send us your travel dates and group details directly on WhatsApp for an immediate response.
                </p>
                <div className="pt-2">
                  <a
                    href={AGENCY_DATA.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg font-semibold text-white bg-emerald-600 hover:bg-emerald-500 text-xs transition-colors"
                  >
                    Open WhatsApp Chat (+91 98470 12345)
                  </a>
                </div>
              </div>

              {/* 24/7 Helpline Notice */}
              <div className="text-xs text-stone-500 flex items-start gap-2 pt-2 border-t border-stone-100">
                <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                <span>All active travelers receive the direct personal mobile number of their tour coordinator for 24/7 on-trip assistance.</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Enquiry Form */}
          <div className="lg:col-span-7">
            <EnquiryForm />
          </div>
        </div>
      </div>
    </>
  );
}
