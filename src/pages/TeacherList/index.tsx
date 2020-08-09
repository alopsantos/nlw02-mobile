import React, { useState } from "react";
import { View, Text } from "react-native";
import {
  ScrollView,
  TextInput,
  BorderlessButton,
  RectButton,
} from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";

import PageHeader from "../../components/PageHeader";
import TeacherItem, {Teacher} from "../../components/TeacherItem";

import styles from "./styles";
import api from "../../api";
function TeacherList() {
  const [isFiltersVisible, setIsFiltersVisible] = useState(false);
  const [teachers, setTeachers] = useState([]);

  const [subject, setSubject] = useState("");
  const [week_day, steWeekDay] = useState("");
  const [time, setTime] = useState("");

  async function handleSubmitFiltersSubmit() {
    const response = await api.get("farmacias", {
      /*params: {
        subject,
        week_day,
        time,
      },*/
    });
    handleToggleFiltersVisible();
    setTeachers(response.data);
  }
  function handleToggleFiltersVisible() {
    setIsFiltersVisible(!isFiltersVisible);
  }
  return (
    <View style={styles.container}>
      <PageHeader
        title="Proffys disponíveis"
        headerRight={
          <BorderlessButton onPress={handleToggleFiltersVisible}>
            <Feather name="filter" size={20} color="#fff" />
          </BorderlessButton>
        }
      >
        {!isFiltersVisible && (
          <View style={styles.searchForm}>
            <Text style={styles.label}>Matéria</Text>
            <TextInput
              style={styles.input}
              value={subject}
              onChangeText={(text) => setSubject(text)}
              placeholder="Qual a matéria?"
              placeholderTextColor="#c1bccc"
            />

            <View style={styles.inputGroup}>
              <View style={styles.inputBlock}>
                <Text style={styles.label}>Semana</Text>
                <TextInput
                  style={styles.input}
                  value={week_day}
                  onChangeText={(text) => steWeekDay(text)}
                  placeholder="Qual dia?"
                  placeholderTextColor="#c1bccc"
                />
              </View>

              <View style={styles.inputBlock}>
                <Text style={styles.label}>Horário</Text>
                <TextInput
                  style={styles.input}
                  value={time}
                  onChangeText={(text) => setTime(text)}
                  placeholder="Qual horário?"
                  placeholderTextColor="#c1bccc"
                />
              </View>
            </View>

            <RectButton onPress={handleSubmitFiltersSubmit} style={styles.submitButton}>
              <Text style={styles.submitButtonText}>Filtrar</Text>
            </RectButton>
          </View>
        )}
      </PageHeader>

      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{ paddingHorizontal: 8, paddingBottom: 16 }}
      >
        {teachers.map((teacher: Teacher) =>{
          return <TeacherItem key={teacher._id} teacher={teacher} />
        })}
      </ScrollView>
    </View>
  );
}

export default TeacherList;
