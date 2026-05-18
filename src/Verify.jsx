import { useParams } from "react-router-dom";

export default function Verify() {

  const { id } = useParams();

  const certificates = {
    "ABC123": "/certificates/udaiyaa.pdf",
    "XYZ789": "/certificates/friend.pdf"
  };

  const pdf = certificates[id];

  if (!pdf) {
    return (
      <h1 style={{
        textAlign: "center",
        marginTop: "100px",
        fontFamily: "Arial"
      }}>
        Certificate Not Found
      </h1>
    );
  }

  return (
    <div style={{
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "#f5f5f5"
    }}>

      <a
        href={pdf}
        target="_blank"
        rel="noreferrer"
      >
        <button style={{
          padding: "14px 30px",
          fontSize: "18px",
          border: "none",
          borderRadius: "8px",
          background: "#2563eb",
          color: "white",
          cursor: "pointer"
        }}>
          Course Certificate
        </button>
      </a>

    </div>
  );
}