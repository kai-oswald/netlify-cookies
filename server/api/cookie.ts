export default defineEventHandler(async (event) => {
    setCookie(event, "netlify-cookie", "testvalue")
    return "cookie set"
})