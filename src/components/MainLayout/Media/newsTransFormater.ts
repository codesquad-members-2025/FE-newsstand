import { suffle } from '@/utils/suffleArray'

function randomizePressData(data: any) {
  const combinedData = Object.values(data).flat()

  const processedData = combinedData.map((item: any) => ({
    pid: item.pid,
    name: item.name,
    regDate: item.regDate,
    logoDark: item.logoDark,
    logoLight: item.logoLight,
    isSubscribed: false,
  }))

  return suffle(processedData).slice(0, 96)
}

export { randomizePressData }
