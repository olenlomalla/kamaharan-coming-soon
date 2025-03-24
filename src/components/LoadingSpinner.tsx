const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
      <div className="h-12 w-12 animate-spin rounded-full border-b-2 border-white"></div>
    </div>
  );
};

export default LoadingSpinner;
