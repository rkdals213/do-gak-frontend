export const generateQuery = (queryObj) => {
    const queryKeys = Object.keys(queryObj)

    return `?${queryKeys.map((key) => `${key}=${queryObj[key]}`).join("&")}`
}