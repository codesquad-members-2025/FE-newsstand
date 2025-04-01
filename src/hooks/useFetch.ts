import { useState, useEffect } from 'react'

function useFetch(url: string) {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error(`데이터 로드 오류: ${error})`))
      .finally(() => {
        setLoading(false)
      })
  }, [url])

  return { data, loading }
}

export default useFetch
