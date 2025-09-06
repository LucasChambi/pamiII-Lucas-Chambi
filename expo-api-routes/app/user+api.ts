// Removed invalid import of Response from "expo-router/server"

export async function POST(request: Request):Promise<Response> {

    const { email, password } = await request.json();
    if (email === "admin@email.com" && password === "admin1234") {
        return Response.json({
            email,
            password,
            name: "admin",
        })
    }

    return new Response("Usuario e/ou senha incorretos", {
        status: 404,
        headers: {
            'Content-Type': 'text/plain'
        }
    })
}
