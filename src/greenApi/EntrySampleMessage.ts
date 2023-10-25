export default function sampleMessage(data) {
  let category: string;
  switch (data.category) {
    case 'brows_powder':
      category = 'Пудровое напыление'
      break
    case 'brows_shading':
      category = 'Растушевка'
      break
    case 'lips-watercolor':
      category = 'Акварельный прокрас'
      break
    case 'lips-lipstick':
      category = 'Помадный эффект'
      break
    case 'lips-threed':
      category = '3D'
      break
    case 'lips-nude':
      category = 'Натуральный макияж'
      break
    case 'eyelashes-arrow-shading':
      category = 'Стрелка с растушёвкой'
      break
    case 'eyelashes-arrow-classic':
      category = 'Стрелка классическая'
      break
    case 'eyelashes-arrow-soft':
      category = 'Стрелка мягкая(карандашная)'
      break
    case 'eyelashes-interciliary':
      category = 'Межресничный татуаж'
      break
    case 'eyelashes-lower_eyelid':
      category = 'Нижнее веко'
      break
    case 'eyelashes-color':
      category = 'Цветной макияж'
      break
  }
  let service: string;
  switch (data.service) {
    case 'brows':
      service = 'брови'
      break
    case 'lips':
      service = 'губы'
      break
    case 'eyelashes':
      service = 'веки'
      break
    case 'correction':
      service = 'Коррекцию перманентного макияжа'
      break
    case 'overlap':
      service = 'Перекрытие татуажа'
      break
  }
  return `🎉🔥 Новая запись! 🙆‍♂️📢
👱‍♀️ ${data.name} записалась на ${service} ${data.category && '- ' + category}
🗓️ ${data.date.toLocaleDateString()} в 🕒${data.time}
📞 Телефон: ${data.phone}`
}