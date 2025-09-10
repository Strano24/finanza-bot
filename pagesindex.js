export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-gray-50">
      <h1 className="text-4xl font-bold mb-4 text-gray-900">
        Finanza Personale Chatbot
      </h1>
      <p className="text-lg text-gray-700 mb-8 max-w-2xl text-center">
        Benvenuto! 🚀 Questo è il tuo sito dedicato alla <b>finanza personale</b>.
        Qui troverai consigli, articoli e il supporto del nostro chatbot
        per capire meglio come gestire soldi, risparmio e strumenti finanziari.
      </p>

      {/* Placeholder chatbot widget */}
      <div className="w-full max-w-md p-6 bg-white rounded-2xl shadow-md">
        <h2 className="text-xl font-semibold mb-2 text-gray-800">Chatbot</h2>
        <div className="h-64 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-xl">
          <span className="text-gray-500">
            Qui verrà integrato il tuo chatbot (es. Botpress, Tidio...)
          </span>
        </div>
      </div>
    </main>
  )
}
