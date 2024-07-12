// 封装所有和用户相关的参数
import request from '@/utils/http'

 export const loginAPI = ({account,password})=>{
    return request({
        url: '/login',
        method: 'POST',
        data: {
            account,
            password
        }

    })
}