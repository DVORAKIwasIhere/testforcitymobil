import { visibleTariffs } from '../constants/tariffs.constants'

export const getTariffs = (tariffs) => {
  const values = []
  const tariffsKeys = Object.keys(tariffs)  
  const tariffsValues = Object.values(tariffs)
  const tariffsYear = tariffsValues.map(value => value.year)

  visibleTariffs.forEach((item, idx) => {
    tariffsKeys.includes(item) ? values.push(tariffsYear[idx]) : values.push('-')
  })

  console.log([...tariffsYear])

  return [...values]
}
