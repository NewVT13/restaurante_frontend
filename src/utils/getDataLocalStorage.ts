export function getDataLocalStorage() {
  const dados = localStorage.getItem("@dadosLogin");

  if (!dados) {
    return "";
  }

  try {
    return JSON.parse(dados);
  } catch {
    return "";
  }
}
