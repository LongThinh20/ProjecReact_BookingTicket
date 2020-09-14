import Axios from 'axios';

class MovieService {

    fetchMovie() {
        return Axios({
            method: 'GET',
            url: 'http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP03',
        })
    }

    fetchMovieDetail() {
        return Axios({
            method: 'GET',
            url: 'http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=1361',
        })
    }
}

export default MovieService;