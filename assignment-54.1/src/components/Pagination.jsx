export default function Pagination() {
  return (
    <div className="mt-8 flex justify-center gap-2 px-4">
      <button className="w-8 h-8 border border-red-500 text-sm text-red-500 bg-white hover:bg-red-400 hover:text-white">
        1
      </button>
           <button className="w-8 h-8 border border-red-500 text-sm text-red-500 bg-white hover:bg-red-400 hover:text-white">
        2
      </button>
          <button className="w-8 h-8 border border-red-500 text-sm text-red-500 bg-white hover:bg-red-400 hover:text-white">
        →
      </button>
    </div>
  );
}
