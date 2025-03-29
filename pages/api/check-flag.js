export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { flag } = req.body;
  const correctFlag = process.env.FLAG;

  if (flag === correctFlag) {
    res.json({
      success: true,
      message: " Chúc mừng",
      imageUrl: "/correct.png",
    });
  } else {
    res.json({
      success: false,
      message: "Sai rồi!",
      imageUrl: "/false.jpeg",
    });
  }
}
