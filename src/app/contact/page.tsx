import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/src/components/ui/Button";

export default function Contact() {
  return (
    <div className="py-24 px-4 container mx-auto max-w-4xl">
      <h1 className="text-4xl font-bold text-slate-900 mb-4">
        Contact Synboom
      </h1>
      <p className="text-lg text-slate-600 mb-12">
        For corporate inquiries, investment, or application support, reach out
        via our official channels.
      </p>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div className="flex gap-4 items-start">
            <Mail className="w-6 h-6 text-slate-400 mt-1" />
            <div>
              <h3 className="font-semibold text-slate-900">Email</h3>
              <p className="text-slate-600 text-sm">support@synboom.com</p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <Phone className="w-6 h-6 text-slate-400 mt-1" />
            <div>
              <h3 className="font-semibold text-slate-900">Phone</h3>
              <p className="text-slate-600 text-sm">+234 (0) 7019162233</p>
              <p className="text-xs text-slate-500 mt-1">
                Available Mon-Fri, 9am - 5pm WAT
              </p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <MapPin className="w-6 h-6 text-slate-400 mt-1" />
            <div>
              <h3 className="font-semibold text-slate-900">Headquarters</h3>
              <address className="text-slate-600 text-sm not-italic">
                20, School Road,
                <br />
                Owerri, Imo State,
                <br />
                Nigeria
              </address>
              <p className="text-xs text-slate-500 mt-2">
                Registered with the Corporate Affairs Commission (CAC).
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h3 className="font-semibold text-slate-900 mb-4">
            Send a Direct Inquiry
          </h3>
          <form
            className="space-y-4"
            action="mailto:support@synboom.com"
            method="post"
            encType="text/plain"
          >
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Name
              </label>
              <input
                type="text"
                className="w-full border border-slate-300 rounded-md p-2 text-sm focus:ring-2 focus:ring-slate-900 outline-none"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Email
              </label>
              <input
                type="email"
                className="w-full border border-slate-300 rounded-md p-2 text-sm focus:ring-2 focus:ring-slate-900 outline-none"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Message
              </label>
              <textarea
                rows={4}
                className="w-full border border-slate-300 rounded-md p-2 text-sm focus:ring-2 focus:ring-slate-900 outline-none"
                required
              ></textarea>
            </div>
            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
