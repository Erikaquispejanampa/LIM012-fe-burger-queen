import React, { useState, useEffect } from "react";
import { CheckBox, Text, StyleSheet, View } from "react-native";

const AppCheck = () => {
  const [isSelected1, setSelection1] = useState(false);
  const [isSelected2, setSelection2] = useState(false);
  const [isSelected3, setSelection3] = useState(false);
  const [isSelectedAll, setSelectionAll] = useState(false);
   useEffect(() => {
     console.log("cambio valor")
    if(isSelected1 && isSelected2 && isSelected3){
      setSelectionAll(true);
    }
    if(!isSelected1 || !isSelected2 || !isSelected3){
      setSelectionAll(false);
    }
//     //cargarData();
//     //alert("cargando");

 }, [isSelected1,isSelected2,isSelected3]);
const setearCheck=(value,idCheck)=>{
console.log(value,idCheck);

if(idCheck===1 && !value){
setSelection1(true);
}
else if(idCheck===1){
  setSelection1(false);
  }

if(idCheck===2 && !value){
  setSelection2(true);
  }
  else if(idCheck===2){
    setSelection2(false);
    }

  if(idCheck===3 && !value){
    setSelection3(true);
    }
    else if(idCheck===3){
      setSelection3(false);
      }

  
}
  return (
   
      <View style={styles.container}>
        <div style={{ borderStyle: "solid" }}>
        <h1>N°001</h1>
          <View style={styles.checkboxContainer}>
            <Text style={styles.label}>1 HAMBURGUESA DOBLE  </Text>
            <CheckBox
              value={isSelected1}
              onValueChange={()=>setearCheck(isSelected1,1)}
              style={styles.checkbox}
            />
          </View>
          <View style={styles.checkboxContainer}>
          <Text style={styles.label}>1 HAMBURGUESA SIMPLE </Text>
          <CheckBox
            value={isSelected2}
            onValueChange={()=>setearCheck(isSelected2,2)}
            style={styles.checkbox}
          />
        </View>
        <View style={styles.checkboxContainer}>
        <Text style={styles.label}>1 HUEVO FRITO                  </Text>
        <CheckBox
          value={isSelected3}
          onValueChange={()=>setearCheck(isSelected3,3)}
          style={styles.checkbox}
        />
      </View>
          <div style={{ alignContent: 'center', alignItems: 'center' }}>
          <button style={{ margin: 5, height: 55, width: 500, background: "#2ea44e", color: "white", fontWeight: "bold", fontSize: 24 }} onClick="pedidoterminado()">PEDIDO TERMINADO {isSelectedAll ? "👍" : "👎"}</button>
          </div>
        </div>
      </View>
  

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    margin: 8,
  },
  
  box: {
    borderStyle: "solid"
  },
});

export default AppCheck;
