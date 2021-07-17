import jwt from "jsonwebtoken";

export default async function githubAuth(request, response) {
  const { authorization } = request.headers;

  const tokenDecoded = jwt.decode(authorization);

  if (!tokenDecoded) {
    return response.send({
      isAuthenticated: false,
    })
  }

  const responseGithub = await fetch(
    `https://api.github.com/users/${tokenDecoded.githubUser}`
  );
  const data = await responseGithub.json();

  if (data.message === "Not Found" || !data) {
    response.send({
      isAuthenticated: false,
    });
  } else {
    response.send({
      isAuthenticated: true,
    });
  }
}