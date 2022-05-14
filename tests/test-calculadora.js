const chai = require("chai");
const expect = chai.expect;


const soma = require("../soma");
const subtrai = require("../subtrai");
const multiplica = require("../multiplica");
const divide = require("../divide");

describe("Calculadora", () => {
  describe("Adicao", () => {
    it("1 + 1 deve ser igual a 2", () => {
      expect(soma(1, 1)).to.equal(2);
    });
    it("Deve somar dois numero", () => {
      expect(soma(2, 2)).to.equal(4);
      expect(soma(50, 10)).to.equal(60);
      expect(soma(-31, 30)).to.equal(-1);
    });
  });

  describe("Subtracao", () => {
    it("1 - 1 deve ser igual a 0", () => {
      expect(subtrai(1, 1)).to.equal(0);
    });
    it("Deve subtrair dois numeros", () => {
      expect(subtrai(6, 2)).to.equal(4);
      expect(subtrai(50, 10)).to.equal(40);
      expect(subtrai(-31, 30)).to.equal(-61);    
    });
  });

  describe("Multiplicacao", () => {
    it("1 * 1 deve ser igual a 1", () => {
      expect(multiplica(1, 1)).to.equal(1);
    });
    it("Deve multiplicar dois numeros", () => {
      expect(multiplica(6, 2)).to.equal(12);
      expect(multiplica(50, 10)).to.equal(500);
      expect(multiplica(-31, 30)).to.equal(-930);    
    });
  });

  describe("Divisao", () => {
    it("1 / 1 deve ser igual a 1", () => {
      expect(divide(1, 1)).to.equal(1);
    });
    it("Deve dividir dois numeros", () => {
      expect(divide(6, 2)).to.equal(3);
      expect(divide(50, 10)).to.equal(5);
      expect(parseFloat(divide(-31, 30).toFixed(2))).to.equal(-1.03);
    });
    it("Deve devolver undefined se o denominador for 0", () => {
      expect(divide(6, 0)).to.equal(undefined);
      expect(divide(50, 0)).to.equal(undefined);
      expect(divide(-31, 0)).to.equal(undefined);
    });
  });
});
