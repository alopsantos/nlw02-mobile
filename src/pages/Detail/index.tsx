import React from "react";
import { View, Text } from "react-native";
import PageHeader from "../../components/PageHeader";
import { useNavigation, useRoute } from "@react-navigation/native";

import styles from "./styles";

export interface Teacher {
  _id: string;
  address: object;
  email: string;
  name: string;
  phone: string;
  urllogo: string;
}
interface TeacherItemProps {
  teacher: Teacher;
}
const Detail: React.FC<TeacherItemProps> = ({teacher}) => {
  const navigation = useNavigation();
  const route = useRoute();
  const teacherdetail = route.params.;

  function backGoToTeacherList() {
    navigation.goBack;
  }
  return (
    <View style={styles.container}>
      <PageHeader title="Meus proffys favoritos" />
    </View>
  );
};

export default Detail;
