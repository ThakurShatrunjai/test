import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import SectionBadge from "@/components/ui/SectionBadge";

import {
  Send,
  Loader2,
  Sparkles,
  Phone,
  Mail,
  User
} from 'lucide-react';

export default function QueryFormSection() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      toast.success('Your query has been submitted successfully!');
    }, 1000);
  };

  return (
    
    <section
      id="query"
      className="py-28 bg-gradient-to-b from-background to-accent/10"
    >

      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto bg-card border border-border rounded-3xl shadow-xl p-8 md:p-10">
          
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary">
                Quick Contact
              </span>
            </div>
            <h2 className="text-3xl font-bold text-foreground">
              Submit Your Query
            </h2>
            <p className="text-muted-foreground mt-2">
              Our team will respond shortly
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Name */}
            <div className="relative">
              <User className="absolute left-3 top-3.5 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Your Name"
                required
                className="w-full pl-11 pr-4 py-3 rounded-xl border border-input bg-background focus:ring-2 focus:ring-primary outline-none"
              />
            </div>

            {/* Email */}
            <div className="relative">
              <Mail className="absolute left-3 top-3.5 w-5 h-5 text-muted-foreground" />
              <input
                type="email"
                placeholder="Your Email"
                required
                className="w-full pl-11 pr-4 py-3 rounded-xl border border-input bg-background focus:ring-2 focus:ring-primary outline-none"
              />
            </div>

            {/* Phone */}
            <div className="relative">
              <Phone className="absolute left-3 top-3.5 w-5 h-5 text-muted-foreground" />
              <input
                type="tel"
                placeholder="Contact Number"
                required
                className="w-full pl-11 pr-4 py-3 rounded-xl border border-input bg-background focus:ring-2 focus:ring-primary outline-none"
              />
            </div>

            {/* Message */}
            <textarea
              placeholder="Your Message"
              required
              className="w-full px-4 py-3 rounded-xl border border-input bg-background min-h-[140px] resize-none focus:ring-2 focus:ring-primary outline-none"
            />

            {/* Submit */}
           <button
  type="submit"
  disabled={loading}
  className="w-full mt-4 h-12 rounded-md bg-blue-600 text-white font-semibold hover:bg-blue-700 transition disabled:opacity-60"
>
  {loading ? 'Sending...' : 'Submit'}
</button>

          </form>
        </div>
      </div>
    </section>
  );
}
