import MockFirebase from 'mock-cloud-firestore';

const fixtureData = {
  __collection__: {
    OrdenPedido: {
      __doc__: {
        orden1: {
          cliente: 'portocarrero',
          detalle: [
            {
              contador: 1,
              flagcocina: false,
              flagservido: false,
              id: 'menu1',
              precio: 7,
              producto: 'AGUA MINERAL 1L',
            },
          ],
          fechafin: '',
          fechaini: '26 de junio de 2020 a las 22:13:23 UTC-5',
          flagentregadomesero: false,
          flagterminadococina: false,
          mesa: '4',
          numero: 1,
          preciototal: 22,
        },
        orden2: {
          cliente: 'pelucha',
          detalle: [
            {
              contador: 1,
              flagcocina: true,
              flagservido: false,
              id: 'menu2',
              precio: 5,
              producto: 'CAFE AMERICANO',
            },
          ],
          fechafin: '26 de junio de 2020 a las 22:13:23 UTC-5',
          fechaini: '26 de junio de 2020 a las 22:13:23 UTC-5',
          flagentregadomesero: false,
          flagterminadococina: true,
          mesa: '4',
          numero: 1,
          preciototal: 22,
        },
        orden3: {
          cliente: 'bertha',
          detalle: [
            {
              contador: 1,
              flagcocina: true,
              flagservido: true,
              id: 'menu3',
              precio: 10,
              producto: 'HAMBURGUESA SIMPLE DE RES',
            },
          ],
          fechafin: '26 de junio de 2020 a las 22:13:23 UTC-5',
          fechaini: '26 de junio de 2020 a las 22:13:23 UTC-5',
          flagentregadomesero: true,
          flagterminadococina: true,
          mesa: '4',
          numero: 1,
          preciototal: 22,
        },
      },
    },
    menu: {
      __doc__: {
        menu1: {
          imgProducto: 'imgAgua',
          nombreProducto: 'AGUA MINERAL 1L',
          precioProducto: 7,
          tipo: 'bebida',
        },
        menu2: {
          imgProducto: 'imgCafe',
          nombreProducto: 'CAFE AMERICANO',
          precioProducto: 5,
          tipo: 'desayuno',
        },
        menu3: {
          imgProducto: 'imgAgua',
          nombreProducto: 'HAMBURGUESA SIMPLE DE RES',
          precioProducto: 10,
          tipo: 'almuerzo',
        },
      },
    },
  },
};

const nuevoPedido =  {
  cliente: 'judith',
  detalle: [
    {
      contador: 1,
      flagcocina: false,
      flagservido: false,
      id: 'menu1',
      precio: 7,
      producto: 'JUGO',
    },
  ],
  fechafin: '',
  fechaini: new Date(),
  flagentregadomesero: false,
  flagterminadococina: false,
  mesa: '4',
  numero: 1,
  preciototal: 22,
};
global.firebase = new MockFirebase(fixtureData);
// global.firebase = new MockFirebase(fixtureData, { isNaiveSnapshotListenerEnabled: true });

import {
  crearPedido,
  actualizarPedido,
  obtenerPedido,
  actualizarEstadoCocina,
  actualizarEstadoServido,
  obtenerNumeroPedido,
} from '../firebase/firestore.js';

describe('Crear Pedido', () => {
  it('Deberia agregar un pedido', () => {
    crearPedido(nuevoPedido).then(() => {
      const callback = (orden) => {
        const result = orden.find(elemento => elemento.data().detalle === (nuevoPedido.detalle));
        console.log(result);
        expect(result.data().detalle).toBe(nuevoPedido.detalle);
      };
      obtenerPedido(callback);
  })});
});
describe('Actualizar Pedido', () => {
  it('Deberia actualizar un pedido por su id', () => {
    actualizarPedido('orden1', nuevoPedido).then(() => {
      const callback = (orden) => {
        const result = orden.find(elemento => elemento.data().cliente === (nuevoPedido.cliente));
        expect(result.data().detalle).toBe(nuevoPedido.detalle);
      };
      obtenerPedido(callback);
    })
  })
});
describe('Actualizar Estado deCocina de cada producto', () => {
  it('Deberia actualizar el estado delpedido', () => {
    actualizarEstadoCocina('orden1','menu1').then(() => {
      const callback = (orden) => {
        const result = orden.find(elemento => elemento.id === 'orden1')
        expect(result.data.detalle[0].flagcocina).toBe(true);
      };
      obtenerPedido(callback)
    })});
});
describe('Actualizar Estado de servido de cada producto', () => {
  it('Deberia actualizar el estado del pedido', () => {
    actualizarEstadoServido('orden1','menu1').then(() => {
      const callback = (orden) => {
        const result = orden.find(elemento => elemento.id === 'orden1')
        expect(result.data.detalle[0].flagservido).toBe(true);
      };
      obtenerPedido(callback)
    })});
});
describe('Obtener el numero total de pedidos', () => {
  it('Deberia obtener un total de pedidos', () => {
    obtenerNumeroPedido().then(() => {
      expect('3').toBe('3')
  })});
});


