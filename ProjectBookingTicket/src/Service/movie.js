import Axios from 'axios';

class MovieService {
    fetchMovie() {
        return Axios({
            method: 'GET',
            url: 'http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP03',
        })
    }

    fetchMovieDetail(id) {
        return Axios({
            method: "GET",
            url: `http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`
        })
    }

}

export default MovieService;