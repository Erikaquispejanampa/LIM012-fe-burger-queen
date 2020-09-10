import firebase from 'firebase/app';
import db from '../conexionFirebase';

export const crearPedido = (json) => {
  return firebase.firestore().collection("OrdenPedido").add(json);
};

export const actualizarPedido = (idPedido, data) => firebase.firestore().collection("OrdenPedido").doc(idPedido).update(data);

export const obtenerPedido = (id) => {
  const docRef = firebase.firestore().collection("OrdenPedido").doc(id);
  return docRef.get();
};

export const actualizarEstadoCocina = (idPedido, idDetalle) => obtenerPedido(idPedido).then((data) => {
    let pedido = data.data();
    pedido.detalle.map( (prd) => {
      if(prd.id === idDetalle){
        prd.flagcocina = !prd.flagcocina;
      }
    });
    actualizarPedido(idPedido,pedido);
  });

export const actualizarEstadoServido = (idPedido, idDetalle) => 
  obtenerPedido(idPedido).then((data) => {
    let pedido = data.data();
    pedido.detalle.map((prd) => {
      if(prd.id === idDetalle){
        prd.flagservido = !prd.flagservido;
      }
    });
    actualizarPedido(idPedido,pedido);
 });

export const obtenerNumeroPedido = () => firebase.firestore().collection("OrdenPedido")
  .orderBy('numero', 'desc')
  .limit(1)
  .get();

export const obtenerPedidosMesero = (callback) => firebase.firestore().collection("OrdenPedido")
  .orderBy('fechaini', 'asc')
  .onSnapshot((querySnapshot) => {
    const pedidos = [];
    querySnapshot.forEach((doc) => {
      if(doc.data().flagentregadomesero === false){
        pedidos.push({ id : doc.id ,...doc.data() });
      }
    });
    callback(pedidos);
  });

export const obtenerPedidosCocina = (callback) => firebase.firestore().collection("OrdenPedido")
.orderBy('fechaini', 'asc')
.onSnapshot((querySnapshot) => {
  const pedidos = [];
  querySnapshot.forEach((doc) => {
    
    if(doc.data().flagterminadococina === false){
      pedidos.push({ id : doc.id, ...doc.data() });
    }
  });
  callback(pedidos);
});

export const obtenerPedidosHistorico = (callback) => firebase.firestore().collection("OrdenPedido")
.orderBy('fechaini', 'asc')
.onSnapshot((querySnapshot) => {
  const pedidos = [];
  querySnapshot.forEach((doc) => {
    if(doc.data().flagentregadomesero === true){
      pedidos.push({ id : doc.id, ...doc.data() });
    }
  });
  callback(pedidos);
});

  export const obtenerCocinaHistorico = (callback) => firebase.firestore().collection("OrdenPedido")
  .orderBy('fechaini', 'asc')
  .onSnapshot((querySnapshot) => {
    const pedidos = [];
    querySnapshot.forEach((doc) => {
      if(doc.data().flagterminadococina === true){
        pedidos.push({ id : doc.id, ...doc.data() });
      }
    });
    callback(pedidos);
  });
  
  export const productoPreparado = (idPedido) => {
    obtenerPedido(idPedido).then((data) => {
      let pedido = data.data()
      pedido.flagterminadococina = true;
      pedido.fechafin = new Date()
      actualizarPedido(idPedido,pedido);
   });
  }
  
export const productoServido = (idPedido) => {
  obtenerPedido(idPedido).then((data) => {
    let pedido = data.data()
    pedido.flagentregadomesero = true;
    actualizarPedido(idPedido,pedido);
  });
}
// export const obtenerHistorial = (callback) => firebase.firestore().collection("OrdenPedido")
// .orderBy('fechaini', 'asc')
// .onSnapshot((querySnapshot) => {
//   const pedidos = [];
//   querySnapshot.forEach((doc) => {
//     console.log(doc.data())
//     if(doc.data().flagentregadomesero === true && doc.data().flagterminadococina === true){
//       pedidos.push({ id : doc.id, ...doc.data() });
//     }
//   });
//   callback(pedidos);
// });

export const obtenerMenu = (callback)  => firebase.firestore().collection('menu').get()
.then((snapShots)=>{
    let Menu = [];
    Menu = snapShots.docs.map(doc => {
      return {id: doc.id, data: doc.data()}
  })
  callback(Menu);
})



  