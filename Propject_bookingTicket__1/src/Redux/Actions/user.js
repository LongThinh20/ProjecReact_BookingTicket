
import { createAction } from '.'
import { userService } from '../../Service/index'
import { FETCH_CREDENTIALS } from './type'

export const login = (user) => {
    return dispatch => {
        userService.signIn(user)
            .then(res => {
                dispatch(createAction(FETCH_CREDENTIALS, res.data));
                
                localStorage.setItem('credentials', JSON.stringify(res.data))

                localStorage.setItem('token', res.data.accessToken);

                localStorage.setItem('userLogin', res.data)

            }).catch(err => {
                alert(err.response.data);
            })
    }
}
