import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  let title = "An error occurred!";
  let message = " Something went wrong!";

  if (error?.data.status === 404) {
    message = error.data.message;
  }

  return (
    <div>
      <h3>{title}</h3>
      <p>{message}</p>
    </div>
  );
};

export default ErrorPage;
