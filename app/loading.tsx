export default function Loading() {
  return (
    <div className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
      {/* Header shimmer */}
      <div className="space-y-4">
        <div className="h-4 w-32 rounded-full shimmer" />
        <div className="h-10 w-3/4 max-w-xl rounded-xl shimmer" />
        <div className="h-4 w-2/3 max-w-lg rounded-full shimmer" />
      </div>

      {/* Cards grid shimmer */}
      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="rounded-2xl border border-white/5 bg-white/[0.02] p-6">
            <div className="h-3 w-20 rounded-full shimmer" />
            <div className="mt-4 h-6 w-3/4 rounded-lg shimmer" />
            <div className="mt-4 space-y-2">
              <div className="h-3 w-full rounded-full shimmer" />
              <div className="h-3 w-5/6 rounded-full shimmer" />
            </div>
            <div className="mt-5 flex gap-2">
              <div className="h-6 w-16 rounded-full shimmer" />
              <div className="h-6 w-16 rounded-full shimmer" />
              <div className="h-6 w-16 rounded-full shimmer" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
