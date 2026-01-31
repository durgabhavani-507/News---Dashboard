export default function handler(req, res) {
    res.status(200).json([
        { id: 1, title: "News One" },
        { id: 2, title: "News Two" }
    ]);
}