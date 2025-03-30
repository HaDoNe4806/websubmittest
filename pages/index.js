import { useState } from "react";

export default function Home() {
  const [flag, setFlag] = useState("");
  const [message, setMessage] = useState("");
  const [imageUrl, setImageUrl] = useState(null);

  const checkFlag = async () => {
    const res = await fetch("/api/check-flag", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ flag }),
    });
    const data = await res.json();
    setMessage(data.message);
    setImageUrl(data.imageUrl);
  };

  return (
    <div
      style={{
        backgroundColor: "black",
        color: "white",
        minHeight: "100vh",
        padding: "100px",
      }}
    >
      <div style={{ textAlign: "center", marginTop: "0" }}>
        <div style={{ position: "absolute", top: 0, left: 0 }}>
          <img src="/FCCS.jpg" alt="FCCS Logo" width="100" />
        </div>

        <h1 style={{ animation: "fadeIn 1.5s ease-in-out" }}>SUBMIT FLAG</h1>
        <div
          style={{
            border: "2px solid white",
            padding: "10px",
            display: "inline-block",
            marginBottom: "10px",
            boxShadow: "0 0 10px white",
            animation: "pulse 2s infinite",
          }}
        >
          <p>
            "Ừ thì đã có, nhưng có như không mà thôi" Hiền Hồ đang nhắc đến kĩ
            thuật giấu tin Ste** phải không ??? 🔐 .-.
          </p>
          <p
            style={{
              color: "red",
              fontWeight: "bold",
              animation: "blink 1s infinite",
            }}
          >
            FirstBlood Bounty: Cốc trà đá + hàn huyên tâm sự
          </p>
          <input
            type="text"
            placeholder="format flag FCCS{...}"
            value={flag}
            onChange={(e) => setFlag(e.target.value)}
            style={{
              padding: "5px",
              borderRadius: "5px",
              border: "1px solid white",
            }}
          />
          <button
            onClick={checkFlag}
            style={{
              marginLeft: "0",
              background: "blue",
              color: "white",
              padding: "5px 10px",
              borderRadius: "5px",
              transition: "0.3s",
              cursor: "pointer",
            }}
            onMouseOver={(e) => (e.target.style.background = "darkblue")}
            onMouseOut={(e) => (e.target.style.background = "blue")}
          >
            Submit
          </button>
        </div>

        <p style={{ marginTop: "10px", fontSize: "20px" }}>{message}</p>

        {imageUrl && (
          <img
            src={imageUrl}
            alt="Result"
            width="200"
            style={{ borderRadius: "10px", boxShadow: "0 0 10px white" }}
          />
        )}

        <div style={{ marginTop: "0" }}>
          <a
            href="/FCCS_MISC.png"
            download
            style={{
              color: "cyan",
              textDecoration: "none",
              transition: "0.3s",
            }}
            onMouseOver={(e) => (e.target.style.color = "lightblue")}
            onMouseOut={(e) => (e.target.style.color = "cyan")}
          >
            Download
          </a>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes pulse {
          0% { box-shadow: 0 0 10px white; }
          50% { box-shadow: 0 0 20px white; }
          100% { box-shadow: 0 0 10px white; }
        }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </div>
  );
}
