import axios from "axios";
export const baseURL = "http://localhost:4000"

export const myAxios = axios.create({
    baseURL: `${baseURL}/api/v1`,
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: true,

    credentials: 'include'
})

myAxios.interceptors.response.use(undefined, function (error) {
    if (error.response?.data?.error === "Unauthorized Access") {
        window.location.href = "/unauthorized"
    }
    return Promise.reject(error.response?.data?.error || error.response?.data?.message || error.message, { type: "error" });
})


export function getSimpleErrorMessage(validationResult) {
    return validationResult ? { message: validationResult.details.map((error) => error.message).join(', ') } : '';
}


export function setValues(setValue, values) {
    for (const key in values) {
        // console.log(values[key]);
        setValue(key, values[key]);
    }
}


//remove blank values
export function removeEmptyValues(values) {
    if (Array.isArray(values)) {
        try {
            values?.map((ele) => {
                for (const key in ele) {
                    if (ele[key] === "" || ele[key] === null || ele[key] === undefined) {
                        delete ele[key];
                    }
                }
            });
        } catch (error) {
            console.log(error)
        }
    } else {
        for (const key in values) {
            if (values[key] === "" || values[key] === null) {
                delete values[key];
            }
        }
    }
}