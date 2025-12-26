import { CHECKOUT_URL } from '../constants';

export default function Index() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-4xl font-bold mb-4">
        Desperte Seu Prime
      </h1>

      <p className="max-w-xl mb-6 text-lg text-gray-300">
        Um método simples e direto para desbloquear sua melhor versão.
      </p>

      <a
        href={CHECKOUT_URL}
        className="bg-green-500 hover:bg-green-600 text-black font-bold py-3 px-6 rounded-xl transition"
      >
        Acessar agora
      </a>
    </div>
  );
}
