import React from 'react';

const Imprint = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">Impressum</h1>
      <div className="prose prose-lg">
        <p className="font-semibold">Scintilla Media UG (haftungsbeschränkt)</p>
        <p className="mb-6">Vertreten durch:</p>
        
        <p>Mario Hau (Geschäftsführer)</p>
        
        <p className="mt-6">Pappelallee 78-79</p>
        <p>10437 Berlin</p>
        <p>Deutschland</p>
        
        <p className="mt-6">Tel: +49 30 22465092</p>
        <p>E-Mail: info@scintilla-media.de</p>
        
        <div className="mt-6">
          <p className="font-semibold">Registereintrag:</p>
          <p>Eingetragen im Handelsregister.</p>
          <p>Registergericht: Amtsgericht Berlin</p>
          <p>Handelsregisternummer: HRB 261684 B</p>
        </div>
        
        <p className="mt-6">
          Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz: DE367559181
        </p>
      </div>
    </div>
  );
};

export default Imprint;