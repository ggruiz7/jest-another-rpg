const Enemy = require("../lib/Enemy");
const Potion = require("../lib/Potion");

jest.mock("../lib/Potion");

test("creates an enemy object", () => {
  const enemy = new Enemy("Chupacabra", "Claws");

  expect(enemy.name).toBe("Chupacabra");
  expect(enemy.weapon).toBe("Claws");
  expect(enemy.health).toEqual(expect.any(Number));
  expect(enemy.strength).toEqual(expect.any(Number));
  expect(enemy.agility).toEqual(expect.any(Number));
  expect(enemy.potion).toEqual(expect.any(Object));
});
