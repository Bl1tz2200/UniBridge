export const IP_BACKEND = "http://localhost:8080"

export interface changingStyleParameter { // Creating interface, that will be used to set CSS params dinamically 
    switch: boolean,
    param: {[key: string]: string}
}

export type userData = {
    username: string,
    email: string
}