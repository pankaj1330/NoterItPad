export interface loginApiResponse {
    message: string,
    username: string,
    access_token: string,
    statusCode: number,
}

export interface signupApiResponse {
    message: string,
    statusCode: number,
}