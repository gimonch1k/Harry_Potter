import ErrorMessage from "../errorMessage/ErrorMessage";
import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <div>
      <ErrorMessage />
      <p style={{ color: "orange", textAlign: "center", marginTop: "30px" }}>
        Page is not found!
      </p>
      <Link
        to="/"
        style={{
          width: "fit-content",
          display: "block",
          textAlign: "center",
          fontWeight: "bold",
          fontSize: "24px",
          margin: "30px auto 0 auto",
          transition: "0.5s all",
        }}
      >
        Back to main page
      </Link>
    </div>
  );
};

export default Page404;
