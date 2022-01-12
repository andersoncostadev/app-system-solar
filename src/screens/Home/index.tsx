import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import Card from "../../components/Card";
import api from "../../services/api";
import { IPlanet } from "../../types/types";

import {Container, Image} from "./styles"

 const Home: React.FC = () => {
  const[data, setData] = useState<IPlanet[]>([])

  useEffect(()=> {
    api.get('/planets').then(
      response => {
        setData(response.data)
      }).catch(() => alert('Houve um erro ao consultar a api'))
  },[])

  return(
    <Image>
      <Container>
      <FlatList
      data={data}
      style={{flex: 1, width:'100%'}}
      renderItem={({item})=> (
        <Card
          name={item.name}
          image={item.image}
          temperature={item.temperature}
          size={item.size}
        />
        )}
        showsVerticalScrollIndicator = {false}
        keyExtractor={(item) => item.id}
      />
       </Container>
    </Image>
  );
};

export default Home;