
export default function useLogin(userType: "instructor" | "student") {
    function loginStudent({regNo, password}: {regNo: string, password: string}) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({regNo, password})
            })
        })
    }

    function loginInstructor({email, password}: {email: string, password: string}) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({email, password})
            })
        })
    }
    switch(userType) {
        case "instructor":
            return loginInstructor;
        case "student":
            return loginStudent;
        default:
            throw new Error(`Unknown user type: ${userType}`)
    }
}