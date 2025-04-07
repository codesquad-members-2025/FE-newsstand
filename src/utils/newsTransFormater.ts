import { suffle } from '@/utils/suffleArray'

function formatGridViewData(data: any) {
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

function formatCategories(data: any) {
  return Object.keys(data)
}

function getCategoryData(data: any, category: string) {
  return data[category]
}

function getNewsCardData(categoryData: any, index: any) {
  const newsCardData = categoryData[index]
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
    newsInfo: newsInfo,
    mainNews: mainNews,
    subNewsList: subNewsList,
  }
}

export { formatGridViewData, formatCategories, getCategoryData, getNewsCardData }
