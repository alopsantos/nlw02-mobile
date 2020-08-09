import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";

import styles from "./styles";
import PageHeader from "../../components/PageHeader";
import { ScrollView } from "react-native-gesture-handler";
import TeacherItem, { Teacher } from "../../components/TeacherItem";
import api from "../../api";

function Favorites() {
  const [teachers, setTeachers] = useState([]);
  async function loadTeachers() {
    const response = await api.get("farmacias", {
      /*params: {
        subject,
        week_day,
        time,
      },*/
    });
    setTeachers(response.data);
  }
  useEffect(() => {
    loadTeachers();
  }, []);
  return (
    <View style={styles.container}>
      <PageHeader title="Meus proffys favoritos" />
      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 16 }}
      >
        {teachers.map((teacher: Teacher) => {
          return <TeacherItem key={teacher._id} teacher={teacher} />;
        })}
      </ScrollView>
    </View>
  );
}

export default Favorites;
