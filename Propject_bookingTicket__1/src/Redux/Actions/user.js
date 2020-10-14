
import { createAction } from '.'
import { userService } from '../../Service/index'
import { FETCH_CREDENTIALS } from './type'
import swal from 'sweetalert';
import Swal from 'sweetalert2';

export const login = (user) => {
    return dispatch => {
        userService.signIn(user)
            .then(res => {
                dispatch(createAction(FETCH_CREDENTIALS, res.data));

                swal({
                    title: "Đăng nhập thành công !",
                    icon: "success",
                    button: "OK",
                })
                    .then((value) => {
                        window.location.replace("/");
                    })

                localStorage.setItem('credentials', JSON.stringify(res.data))

                // localStorage.setItem('token', res.data.accessToken);

                // localStorage.setItem('userLogin', res.data)

            }).catch(err => {
                console.log(err.response.data);
                swal({
                    title: "THÔNG TIN CHƯA CHÍNH XÁC",
                    text: "Tài khoản hoặc mật khẩu chưa đúng !!!",
                    icon: "warning",
                    buttons: true,
                    dangerMode: true,
                })
                    .then((value) => {
                        if (value) {

                        } else {
                            window.location.replace("/");
                        }
                    });

            })
    }
}

export const update = (user, credentials) => {
    return dispatch => {
        userService.upDateInfo(user, credentials)
            .then(res => {
                dispatch(createAction(FETCH_CREDENTIALS, res.data));
                Swal.fire({
                    title: 'Cập nhật thành công !!',
                    icon: 'success',
                    confirmButtonText: 'OK',
                    showCancelButton: false,
                    showCloseButton: true
                }).then((result) => {
                    if (result) {

                    } else {

                    }
                })
                console.log(res.data);
            }).catch(err => {
                Swal.fire({
                    title: 'Cập nhật thất bại  thành công !!',
                    text: `${err.response.data}`,
                    icon: 'error',
                    confirmButtonText: 'OK',
                    showCancelButton: false,
                    showCloseButton: true
                })
            })
    }
}

