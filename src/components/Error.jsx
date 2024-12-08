import Button from "react-bootstrap/Button";
import {
  useNavigate,
  useRouteError,
  isRouteErrorResponse,
} from "react-router-dom";
function Error() {
  const navigate = useNavigate();
  //دى بتعرفنى اى الايرور ال جاى useRouteError
  const error = useRouteError();
  let errorStatus;
  let errorStatusText;
  //react router dom هنا انت بتتشك على الخطا هل جاى من isRouteErrorResponse
  if (isRouteErrorResponse(error)) {
    errorStatus = error.status;
    errorStatusText = error.statusText;
  } else {
    errorStatus = 404;
    errorStatusText = "Page Not Found";
  }
  function handelClick() {
    navigate("/", { replace: true });
  }
  return (
    <div style={styles.container}>
      <h1
        style={{
          color: "red",
          fontWeight: "bold",
          fontSize: "4rem",
        }}
      >
        Oop!
      </h1>
      <h1 style={styles.statusCode}>{errorStatus}</h1>
      <p style={styles.message}>{errorStatusText}</p>
      <Button variant="primary" onClick={handelClick}>
        Return to Home
      </Button>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    textAlign: "center",
    color: "#333",
  },
  statusCode: {
    fontSize: "3rem",
    margin: 0,
  },
  message: {
    fontSize: "1.5rem",
    margin: "20px 0",
  },
};

export default Error;
