import firebase from 'firebase/app';


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

  // console.log(pedido);
  // pedido.detalle.map((detalle) => {
  //   console.log(detalle);
  // });
  
  // firebase.firestore().collection("OrdenPedido").doc(idPedido).update({
  //   detalle :
  // })


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

