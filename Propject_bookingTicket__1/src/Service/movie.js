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

    fetchCinema() {
        return Axios({
            method: "GET",
            url: 'http://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinHeThongRap'
        })
    }

    fetchCinemaGroup(id) {
        return Axios({
            method: "GET",
            url: `http://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${id}`
        })
    }
    fetchShowtimeToCinemaGroup(id) {
        return Axios({
            method: "GET",
            url: `http://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${id}&maNhom=GP03`
        })
    }

    fetchBookingTicket(id) {
        return Axios({
            method: "GET",
            url: `http://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${id}`
        })
    }


}

export default MovieService;