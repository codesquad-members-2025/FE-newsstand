interface Press {
  pid: string
  name: string
  regDate: string
  logoDark: string
  logoLight: string
  materials: any[]
}

function getGridViewData(data: any) {
  const combinedData = Object.values(data).flat()

  const processedData = combinedData.map((item: any) => ({
    pid: item.pid,
    name: item.name,
    regDate: item.regDate,
    logoDark: item.logoDark,
    logoLight: item.logoLight,
    isSubscribed: false,
  }))

  return processedData.slice(0, 96)
}

function getCategories(data: any) {
  return Object.keys(data)
}

function getNewsCardData(data: any, pid: string) {
  const allPress = Object.values(data).flat() as Press[]
  const newsCardData = allPress.find(press => press.pid === pid)

  if (!newsCardData) {
    throw new Error(`Cannot find press with pid: ${pid}`)
  }

  const newsInfo = {
    pid: newsCardData.pid,
    name: newsCardData.name,
    regDate: newsCardData.regDate,
    logoDark: newsCardData.logoDark,
    logoLight: newsCardData.logoLight,
  }

  const mainNewsData = newsCardData.materials[0]
  const mainNews = {
    title: mainNewsData.title,
    url: mainNewsData.url,
    imageUrl: mainNewsData.image.url,
  }

  const subNewsList = newsCardData.materials.reduce(
    (materials: any, material: any, index: number) => {
      if (index === 0) return materials

      return [
        ...materials,
        {
          title: material.title,
          url: material.url,
        },
      ]
    },
    []
  )

  return {
    newsInfo,
    mainNews,
    subNewsList,
  }
}

function getSubscribedPressNames(data: any, subscribedPressMap: any) {
  const allPress = Object.values(data).flat()
  const subscribedPids = Array.from(subscribedPressMap.keys())
  // console.log(allPress, subscribedPids)
  return subscribedPids
    .map(pid => {
      const press: any = allPress.find((press: any) => press.pid === pid)
      return press?.name
    })
    .filter(name => name !== undefined)
}

function getPidByIndex(data: any, categoryIndex: number, pageIndex: number): string {
  const categories = Object.keys(data)
  const currentCategory = categories[categoryIndex]
  const categoryData = data[currentCategory]

  return categoryData[pageIndex].pid
}

function getCategoryPressLength(data: any, categoryIndex: number): number {
  const categories = Object.keys(data)
  const currentCategory = categories[categoryIndex]
  return data[currentCategory].length
}

export {
  getGridViewData,
  getCategories,
  getNewsCardData,
  getSubscribedPressNames,
  getPidByIndex,
  getCategoryPressLength,
}
