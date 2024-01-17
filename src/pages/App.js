import "../App.css";
import { Route, Routes } from "react-router";
import AppLayout from "../layout/AppLayout";
import Homepage from "./Homepage/Homepage";
import MoviePage from "./Movies/MoviePage";
import MovieDetailPage from "./MovieDetail/MovieDetailPage";
import NotFoundPage from "./NotFoundPage/NotFoundPage";
import "bootstrap/dist/css/bootstrap.min.css";

// 홈 화면 : 영화 정보
// 영화 전체 list 페이지 (검색)
// 영화 디테일 페이지

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Homepage />} />
        <Route path="movies">
          <Route index element={<MoviePage />} />
          <Route path=":id" element={<MovieDetailPage />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
