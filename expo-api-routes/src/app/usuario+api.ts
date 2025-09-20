export async function POST(request: Request): Promise<Response> {
    const { email, password } = await request.json();

    if (email === "admin@email.com" && password === "1234") {
        return new Response(
            JSON.stringify({
                email,
                name: "Admin User",
            }),
            {
                status: 200,
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
    }

    return new Response("Credenciais inválidos", {
        status: 404,
        headers: {
            "Content-Type": "text/plain",
        },
    });
}
