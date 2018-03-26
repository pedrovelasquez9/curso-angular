import { TitleCasePipe } from './title-case.pipe';

describe('TitleCasePipe', () => {
  it('create an instance', () => {
    const pipe = new TitleCasePipe();
    expect(pipe).toBeTruthy();
  });

  let pipe = new TitleCasePipe();

  it('mi pipe transforma "pedro" a "Pedro"', () => {
    expect(pipe.transform('pedro')).toBe('Pedro');
  });

  it('mi pipe transforma "hola mundo" a "Hola Mundo"', ()=>{
    expect(pipe.transform('hola mundo')).toBe('Hola Mundo');
  });

});
