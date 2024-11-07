import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <>
      <h1>Oops, that page doesn't exist!</h1>
      <Link className to="home">
        Safety or home
      </Link>
    </>
  );
}

export default ErrorPage;
