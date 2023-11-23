import { myAxios } from "@/lib/helpers"

export const myAccountInfoApi = async () => {
    const { data } = await myAxios.get(`/user-info`)
    if (data) {
        delete data["profile_pic"]
    }
    return data
}

//update userinfo
export const updateUserInfoApi = async (value) => {
    const { data } = await myAxios.post(`/update-account-info`, value)
    return data
}