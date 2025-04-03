export default function paginateData(viewType, newsData, currentPage) {
  //maxPage는 그리드 뷰일때만 사용.
  //viewTyped은 리스트 뷰-> true,,그리드 뷰 -> false
  const itemsPerPage = viewType ? 1 : 24;

  //두개의 뷰에서 공용으로 사용 가능
  const pagedData = newsData.slice(
    currentPage * itemsPerPage,
    itemsPerPage * (1 + currentPage)
  );

  // 그리드 뷰일경우 maxPage도달시 스와이프 버튼 숨김
  //리스트 뷰일 경우 다음 카테고리로 이동 로직 호출
  const maxPage = Math.ceil(newsData.length / itemsPerPage);

  return [pagedData, maxPage];
}
