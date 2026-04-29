import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const Kontaktformular: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSending(true);

    const formData = new FormData(event.currentTarget);
    const submissionData = {
      format: String(formData.get('format') ?? ''),
      name: String(formData.get('name') ?? ''),
      unternehmen: String(formData.get('unternehmen') ?? ''),
      email: String(formData.get('email') ?? ''),
      telefon: String(formData.get('telefon') ?? ''),
      nachricht: String(formData.get('nachricht') ?? ''),
      datenschutzAkzeptiert: formData.get('datenschutz') === 'on',
    };

    try {
      await emailjs.send(
        'service_padjnga',
        'template_9wajf3t',
        submissionData,
        'ySzwppkLjL6vqRPPm'
      );

      setIsSubmitted(true);
    } catch (error) {
      console.error('Fehler beim Versenden des Kontaktformulars:', error);
    } finally {
      setIsSending(false);
    }
  };

  if (isSubmitted) {
    return (
      <section className="px-6 md:px-12 lg:px-24 py-24 bg-gray-50/50">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2d2d2d] mb-6">
            Vielen Dank für Ihr Vertrauen.
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Ich sende Ihnen zeitnah 3 Terminvorschläge für unser Gespräch zu.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mt-6">
            Ihre Ellen Häfele
            <br />
            Beraterin für Unternehmensnachfolge
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="px-6 md:px-12 lg:px-24 py-24 bg-gray-50/50">
      <div className="max-w-4xl">
        <div className="mb-4">
          <span className="block h-[2px] w-12 bg-[#31e9e9]"></span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-[#2d2d2d] mb-4">
          Der erste Schritt zur sicheren Nachfolge.
        </h2>
        <p className="text-lg text-gray-500 leading-relaxed mb-4 max-w-3xl">
          In einem 15-minütigen Orientierungsgespräch klären wir Ihre Fragen – absolut diskret und für Sie kostenfrei.
        </p>
        <p className="text-sm text-gray-500 mb-10 max-w-3xl">
          So geht es weiter: Ich melde mich innerhalb von 24h über Ihren gewünschten Kontaktweg mit 3 konkreten Terminvorschlägen bei Ihnen.
        </p>

        <form onSubmit={handleSubmit} className="bg-white border border-gray-100 p-6 md:p-8 space-y-6">
          <div>
            <label className="block text-sm font-semibold text-[#2d2d2d] mb-3">
              Wie wollen wir uns unterhalten?
            </label>
            <div className="flex flex-col sm:flex-row gap-4">
              <label className="inline-flex items-center gap-2 text-gray-700">
                <input
                  type="radio"
                  name="format"
                  value="Telefonat"
                  required
                  className="accent-[#31e9e9]"
                />
                Telefonat
              </label>
              <label className="inline-flex items-center gap-2 text-gray-700">
                <input
                  type="radio"
                  name="format"
                  value="Videokonferenz (Teams/Zoom)"
                  required
                  className="accent-[#31e9e9]"
                />
                Videokonferenz (Teams/Zoom)
              </label>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-[#2d2d2d] mb-2">
                Ihr Name *
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full border border-gray-200 px-4 py-3 text-[#2d2d2d] focus:outline-none focus:ring-2 focus:ring-[#52e3fe]/40"
              />
            </div>

            <div>
              <label htmlFor="unternehmen" className="block text-sm font-semibold text-[#2d2d2d] mb-2">
                Unternehmen
              </label>
              <input
                id="unternehmen"
                name="unternehmen"
                type="text"
                className="w-full border border-gray-200 px-4 py-3 text-[#2d2d2d] focus:outline-none focus:ring-2 focus:ring-[#52e3fe]/40"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-[#2d2d2d] mb-2">
                E-Mail-Adresse *
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full border border-gray-200 px-4 py-3 text-[#2d2d2d] focus:outline-none focus:ring-2 focus:ring-[#52e3fe]/40"
              />
            </div>

            <div>
              <label htmlFor="telefon" className="block text-sm font-semibold text-[#2d2d2d] mb-2">
                Telefonnummer *
              </label>
              <input
                id="telefon"
                name="telefon"
                type="tel"
                required
                className="w-full border border-gray-200 px-4 py-3 text-[#2d2d2d] focus:outline-none focus:ring-2 focus:ring-[#52e3fe]/40"
              />
            </div>
          </div>

          <div>
            <label htmlFor="nachricht" className="block text-sm font-semibold text-[#2d2d2d] mb-2">
              Nachricht
            </label>
            <textarea
              id="nachricht"
              name="nachricht"
              rows={5}
              placeholder="Gibt es etwas, das Sie mir vorab mitteilen wollen?"
              className="w-full border border-gray-200 px-4 py-3 text-[#2d2d2d] focus:outline-none focus:ring-2 focus:ring-[#52e3fe]/40"
            />
          </div>

          <div className="space-y-4">
            <label className="inline-flex items-start gap-3 text-sm text-gray-600">
              <input
                type="checkbox"
                name="datenschutz"
                required
                className="mt-1 accent-[#31e9e9]"
              />
              <span>
                Ich habe die Datenschutzerklärung gelesen und stimme der Verarbeitung meiner Daten zu.
              </span>
            </label>

            <button
              type="submit"
              disabled={isSending}
              className="w-full sm:w-auto bg-gradient-to-r from-[#52e3fe] to-[#31e9e9] text-[#2d2d2d] font-semibold py-4 px-8 hover:shadow-lg hover:shadow-[#52e3fe]/20 transition-all active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed disabled:active:scale-100"
            >
              {isSending ? 'Wird gesendet...' : 'Jetzt Termin-Vorschlag anfordern'}
            </button>

            <p className="text-sm text-gray-500">🔒 100% diskret & unverbindlich.</p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Kontaktformular;
