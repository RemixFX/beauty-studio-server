export default function sampleMessage(data) {
  return `📢 Требуется консультация! 📢
👱‍♀️ ${data.name}
🗓️ ${data.date.toLocaleDateString()}
📞 Телефон: ${data.phone}`
}