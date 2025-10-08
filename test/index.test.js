import hash from "./testindex.js";

test("Verificar hash", () => {
  const mensaje = "contraseña";
  const hashTest = hash(mensaje);
  expect(hashTest).toBe("edf9cf90718610ee7de53c0dcc250739239044de9ba115bb0ca6026c3e4958a5");
});
