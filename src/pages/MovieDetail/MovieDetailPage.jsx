import React from "react";
import { useMovieDetailQuery } from "../../hooks/useMovieDetail";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";

const MovieDetailPage = (movie) => {
  const { isLoading, isError, error } = useMovieDetailQuery();

  if (isLoading) {
    //로딩ㅅ피너
    <Spinner animation="border" variant="danger">
      loading...
    </Spinner>;
  }
  if (isError) {
    <Alert variant="danger">{error.message}</Alert>;
  }
  return (
    <div>
      <div>
        <h1>제목이 나와라</h1>

        <p>영화 인기도</p>
        <p>영화 줄거리</p>
        <p>
          예산 (숫자 단위가 크기때문에 ,를 붙여주는 형식으로 바꿔서 숫자를
          보여주자)
        </p>
        <p>개봉일</p>
      </div>
      <div>
        리뷰 - 리뷰가 생각보다 길다. 이 모든 리뷰를 다 펼쳐서 보여주기 보다는
        너무 긴 리뷰는 중간에 자르고 더보기 버튼을 누르면 추가로 더 보여주는
        형태로 만들어보자! 물론 접기를 누르면 리뷰를 다시 접을 수 있다!
      </div>
      <div>
        추천 영화 보여주기 - 유저를 서비스에 오래 머물게 하는 방법 중 하나는
        비슷한 영화, 추천영화를 노출시켜 유저가 계속 다른 영화에도 관심을 가지게
        하는 것이다.
      </div>
    </div>
  );
};

export default MovieDetailPage;
