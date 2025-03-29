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
    setImageUrl(data.imageUrl); // Luôn cập nhật ảnh
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

        <h1>SUBMIT FLAG</h1>
        <input
          type="text"
          placeholder="format flag FCCS{...}"
          value={flag}
          onChange={(e) => setFlag(e.target.value)}
        />
        <button
          onClick={checkFlag}
          style={{ marginLeft: "0", background: "blue", color: "white" }}
        >
          Submit
        </button>
        <p style={{ marginTop: "10px", fontSize: "20px" }}>{message}</p>

        {/* Hiển thị ảnh kết quả */}
        {imageUrl && <img src={imageUrl} alt="Result" width="200" />}

        <div style={{ marginTop: "0" }}>
          <a href="/FCCS_MISC.png" download>
            Download
          </a>
        </div>
      </div>
    </div>
  );
}
