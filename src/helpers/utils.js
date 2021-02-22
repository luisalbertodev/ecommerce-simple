export const formatterPrice = new Intl.NumberFormat("en-MX", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
});
