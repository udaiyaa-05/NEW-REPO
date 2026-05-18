import { useParams } from "react-router-dom";

export default function Verify() {

  const { id } = useParams();

  return (
    <div style={{
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      fontFamily: "Arial",
      background: "#f5f5f5"
    }}>

      <div style={{
        background: "white",
        padding: "40px",
        borderRadius: "10px",
        boxShadow: "0 0 10px rgba(0,0,0,0.1)"
      }}>

        <h1>Certificate Verification</h1>

        <h2>ID: {id}</h2>

        <p>Status: Verified Successfully</p>

      </div>

    </div>
  );
}