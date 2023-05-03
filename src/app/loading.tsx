export default function Loading() {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-opacity-50 bg-blue-500">
      <div className="flex flex-col items-center">
        <h1 className="mb-4 text-white text-6xl font-semibold">
          Carregando sua página
        </h1>
        <div className="animate-spin rounded-full h-20 w-20 border-t-8 border-b-8 border-blue-200"></div>
      </div>
    </div>
  );
}
