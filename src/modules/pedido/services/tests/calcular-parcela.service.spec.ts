import { CalcularParcelaService } from '../calcular-parcela.service';

describe('CalcularParcelaService', () => {
  const makeSut = () => new CalcularParcelaService();

  afterEach(() => jest.clearAllMocks());

  describe('obterDiaVencimento', () => {
    it('deve retornar 5 se o dia da compra for entre 1 e 5', () => {
      const sut = makeSut();

      expect(sut['obterDiaVencimento'](new Date('2023-01-01'))).toBe(5);
      expect(sut['obterDiaVencimento'](new Date('2023-01-02'))).toBe(5);
      expect(sut['obterDiaVencimento'](new Date('2023-01-03'))).toBe(5);
      expect(sut['obterDiaVencimento'](new Date('2023-01-04'))).toBe(5);
      expect(sut['obterDiaVencimento'](new Date('2023-01-05'))).toBe(5);
    });

    it('deve retornar 10 se o dia da compra for entre 6 e 10', () => {
      const sut = makeSut();

      expect(sut['obterDiaVencimento'](new Date('2023-01-06'))).toBe(10);
      expect(sut['obterDiaVencimento'](new Date('2023-01-07'))).toBe(10);
      expect(sut['obterDiaVencimento'](new Date('2023-01-08'))).toBe(10);
      expect(sut['obterDiaVencimento'](new Date('2023-01-09'))).toBe(10);
      expect(sut['obterDiaVencimento'](new Date('2023-01-10'))).toBe(10);
    });

    it('deve retornar 20 se o dia da compra for entre 11 e 20', () => {
      const sut = makeSut();

      expect(sut['obterDiaVencimento'](new Date('2023-01-11'))).toBe(20);
      expect(sut['obterDiaVencimento'](new Date('2023-01-12'))).toBe(20);
      expect(sut['obterDiaVencimento'](new Date('2023-01-13'))).toBe(20);
      expect(sut['obterDiaVencimento'](new Date('2023-01-14'))).toBe(20);
      expect(sut['obterDiaVencimento'](new Date('2023-01-15'))).toBe(20);
      expect(sut['obterDiaVencimento'](new Date('2023-01-16'))).toBe(20);
      expect(sut['obterDiaVencimento'](new Date('2023-01-17'))).toBe(20);
      expect(sut['obterDiaVencimento'](new Date('2023-01-18'))).toBe(20);
      expect(sut['obterDiaVencimento'](new Date('2023-01-19'))).toBe(20);
      expect(sut['obterDiaVencimento'](new Date('2023-01-20'))).toBe(20);
    });

    it('deve retornar 5 se o dia da compra for maior que 20', () => {
      const sut = makeSut();

      expect(sut['obterDiaVencimento'](new Date('2023-01-21'))).toBe(5);
      expect(sut['obterDiaVencimento'](new Date('2023-01-22'))).toBe(5);
      expect(sut['obterDiaVencimento'](new Date('2023-01-23'))).toBe(5);
      expect(sut['obterDiaVencimento'](new Date('2023-01-24'))).toBe(5);
      expect(sut['obterDiaVencimento'](new Date('2023-01-25'))).toBe(5);
      expect(sut['obterDiaVencimento'](new Date('2023-01-26'))).toBe(5);
      expect(sut['obterDiaVencimento'](new Date('2023-01-27'))).toBe(5);
      expect(sut['obterDiaVencimento'](new Date('2023-01-28'))).toBe(5);
      expect(sut['obterDiaVencimento'](new Date('2023-01-29'))).toBe(5);
      expect(sut['obterDiaVencimento'](new Date('2023-01-30'))).toBe(5);
      expect(sut['obterDiaVencimento'](new Date('2023-01-31'))).toBe(5);
    });
  });

  describe('ajustarDataParaDiaUtil', () => {
    it('deve ajustar data para segunda-feira se cair em um domingo', () => {
      const sut = makeSut();

      expect(sut['ajustarDataParaDiaUtil'](new Date('2023-01-01'))).toEqual(
        new Date('2023-01-02'),
      );
    });

    it('deve ajustar data para segunda-feira se cair em um sábado', () => {
      const sut = makeSut();

      expect(sut['ajustarDataParaDiaUtil'](new Date('2023-01-07'))).toEqual(
        new Date('2023-01-09'),
      );
    });

    it('deve retornar a mesma data se cair em um dia útil', () => {
      const sut = makeSut();

      expect(sut['ajustarDataParaDiaUtil'](new Date('2023-01-03'))).toEqual(
        new Date('2023-01-03'),
      );
    });
  });
});
