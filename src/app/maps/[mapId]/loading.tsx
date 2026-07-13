export default function Loading() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-200 border-t-purple-400"></div>
      <span className="sr-only">Loading...</span>
    </div>
  );
}
