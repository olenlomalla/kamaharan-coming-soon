import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  const handleReload = () => {
    navigate("/");
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <h1 className="mb-4 text-2xl font-bold">Something went wrong</h1>
        <button
          onClick={handleReload}
          className="rounded bg-blue-500 px-4 py-2 text-white"
        >
          Reload page
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
