const Enemy = require("../lib/Enemy");
const Potion = require("../lib/Potion");

jest.mock("../lib/Potion");

test("creates an enemy object", () => {
  const enemy = new Enemy("Chupacabra", "claws");

  expect(enemy.name).toBe("Chupacabra");
  expect(enemy.weapon).toBe("claws");
  expect(enemy.health).toEqual(expect.any(Number));
  expect(enemy.strength).toEqual(expect.any(Number));
  expect(enemy.agility).toEqual(expect.any(Number));
  expect(enemy.potion).toEqual(expect.any(Object));
});

test("gets enemy's health value", () => {
  const enemy = new Enemy("Chupacabra");

  expect(enemy.getHealth()).toEqual(expect.stringContaining(enemy.health.toString()));
});

test("checks if enemy is alive", () => {
  const enemy = new Enemy("Chupacabra");

  expect(enemy.isAlive()).toBeTruthy();

  enemy.health = 0;
  expect(enemy.isAlive()).toBeFalsy();
});

test("gets an enemy's attack value", () => {
  const enemy = new Enemy("Chupacabra");

  enemy.strength = 10;
  expect(enemy.getAttackValue()).toBeGreaterThanOrEqual(5);
  expect(enemy.getAttackValue()).toBeLessThanOrEqual(15);
});

test("subtracts from enemy's health value", () => {
  const enemy = new Enemy("Chupacabra");

  const oldHealth = enemy.health;

  enemy.reduceHealth(5);
  expect(enemy.health).toBe(oldHealth - 5);

  enemy.reduceHealth(99999);
  expect(enemy.health).toBe(0);
});

test("gets description of enemy", () => {
  const enemy = new Enemy("Chupacabra", "claws");

  expect(enemy.getDescription()).toEqual(expect.stringContaining("Chupacabra"));
  expect(enemy.getDescription()).toEqual(expect.stringContaining("claws"));
});
