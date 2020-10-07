
import { createAction } from '.'
import { userService } from '../../Service/index'
import { FETCH_CREDENTIALS } from './type'
import swal from 'sweetalert';

export const login = (user) => {
    return dispatch => {
        userService.signIn(user)
            .then(res => {
                dispatch(createAction(FETCH_CREDENTIALS, res.data));

                swal({
                    title: "Good job!",
                    text: "You clicked the button!",
                    icon: "success",
                    button: "Aww yiss!",
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

