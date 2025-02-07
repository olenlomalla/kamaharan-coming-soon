import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  const handleReload = () => {
    navigate("/");
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="text-center">
        <h1 className="mb-4 font-bold text-2xl">Something went wrong</h1>
        <button
          onClick={handleReload}
          className="bg-blue-500 px-4 py-2 rounded text-white"
        >
          Reload page
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
