import firebase from 'firebase/app';


export const crearPedido = (json) => {
  firebase.firestore().collection("pedidos2").add(json);
};

export const obtenerPedido = (id) => {
  const docRef = firebase.firestore().collection("pedidos2").doc(id);
  return docRef.get();
};


export const obtenerPedidosTodos = (callback) => firebase.firestore().collection("pedidos2")
  .orderBy('fechaini', 'asc')
  .onSnapshot((querySnapshot) => {
    const pedidos = [];
    querySnapshot.forEach((doc) => {
      pedidos.push({ ...doc.data() });
    });
    callback(pedidos);
  });

  export const obtenerPedidosPendientes = (callback) => firebase.firestore().collection("pedidos2")
  .orderBy('fechaini', 'asc')
  .onSnapshot((querySnapshot) => {
    const pedidos = [];
    querySnapshot.forEach((doc) => {

      if(doc.data().estado ==="p"){
        pedidos.push({ ...doc.data() });
      }
    });
    callback(pedidos);
  });

