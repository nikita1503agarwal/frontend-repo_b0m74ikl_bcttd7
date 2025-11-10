import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="relative w-full bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="col-span-2">
            <h4 className="text-xl font-semibold">CitySense</h4>
            <p className="mt-2 max-w-md text-sm text-emerald-100/80">
              A concept dashboard for smart and sustainable cities — blending technology and nature in perfect harmony.
            </p>
          </div>
          <div>
            <p className="text-sm font-medium text-white/90">Contact</p>
            <ul className="mt-3 space-y-2 text-sm text-emerald-100/80">
              <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-emerald-300"/> hello@citysense.io</li>
              <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-emerald-300"/> +1 (555) 123-4567</li>
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-emerald-300"/> 101 Greenway, Future City</li>
            </ul>
          </div>
          <div className="md:text-right">
            <p className="text-sm text-emerald-100/80">© {new Date().getFullYear()} CitySense — Smart City, Greener Future.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
