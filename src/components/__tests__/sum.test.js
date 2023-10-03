import { sum } from "../sum";

test("Check sum of 2 positive nos description of testing", () => {
  const result = sum(2, 5);
  expect(result).toBe(7);
});
