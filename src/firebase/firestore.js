import firebase from 'firebase/app';
import db from '../conexionFirebase';


export const crearPedido = (json) => {
  firebase.firestore().collection("OrdenPedido").add(json);
};

export const obtenerPedido = (id) => {
  const docRef = firebase.firestore().collection("OrdenPedido").doc(id);
  return docRef.get();
};

export const actualizarEstadoCocina = (idPedido, idDetalle) => {

  //Actualizar detalle de pedido, estado flagcocina

 obtenerPedido(idPedido).then((data) => {
    let pedido = data.data() 
    let terminadoCocina = true;

    pedido.detalle.map( (prd) => {
      if(prd.id === idDetalle){
        prd.flagcocina = !prd.flagcocina;
      }

      if(!prd.flagcocina)
        terminadoCocina = false;

    });
    
    pedido.flagterminadococina = terminadoCocina;

    firebase.firestore().collection("OrdenPedido").doc(idPedido).update(pedido);

 });

}

export const actualizarEstadoServido = (idPedido, idDetalle) => {

  //Actualizar detalle de pedido, estado flagcocina

 obtenerPedido(idPedido).then((data) => {
    let pedido = data.data() 
    let terminadoServido = true;

    pedido.detalle.map( (prd) => {
      if(prd.id === idDetalle){
        prd.flagservido = !prd.flagservido;
      }

      if(!prd.flagservido)
      terminadoServido = false;

    });
    
    pedido.flagentregadomesero = terminadoServido;

    firebase.firestore().collection("OrdenPedido").doc(idPedido).update(pedido);

 });

}


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
      const date = new Date();
      const tiempo = date.getTime().toString();
      let pedido = data.data()
      console.log('tiempo', date.getTime())
      console.log(tiempo);
      pedido.flagterminadococina = true;
      pedido.tiempoTermino = tiempo;
      firebase.firestore().collection("OrdenPedido").doc(idPedido).update(pedido);
   });
  }
  
  export const productoServido = (idPedido) => {
    obtenerPedido(idPedido).then((data) => {
      let pedido = data.data()
      pedido.flagentregadomesero = true;
      firebase.firestore().collection("OrdenPedido").doc(idPedido).update(pedido);
   });
  }
  export const obtenerHistorial = (callback) => firebase.firestore().collection("OrdenPedido")
  .orderBy('fechaini', 'asc')
  .onSnapshot((querySnapshot) => {
    const pedidos = [];
    querySnapshot.forEach((doc) => {
      console.log(doc.data())
      if(doc.data().flagentregadomesero === true && doc.data().flagterminadococina === true){
        pedidos.push({ id : doc.id, ...doc.data() });
      }
    });
    callback(pedidos);
  });

export const obtenerMenu = (callback)  => db.collection('menu').get()
.then((snapShots)=>{
    let Menu = [];
    Menu = snapShots.docs.map(doc => {
      return {id: doc.id, data: doc.data()}
  })
  callback(Menu);
})



  