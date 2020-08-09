import React from "react";
import { View, Image, Text } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

import heartOutlinIcon from "../../assets/images/icons/heart-outline.png";
import unfavoriteIcon from "../../assets/images/icons/unfavorite.png";
import whatsappIcon from "../../assets/images/icons/whatsapp.png";

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
const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {
  const navigation = useNavigation();
  function navigateToDetail(teacher: TeacherItemProps) {
    navigation.navigate("Detail", { teacher });
    console.log(teacher);
  }
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image style={styles.avatar} source={{ uri: teacher.urllogo }} />

        <View style={styles.profileInfo}>
          <Text style={styles.name}>{teacher.name}</Text>
          <Text style={styles.subject}>{teacher.address}</Text>
        </View>
      </View>
      <Text style={styles.bio}>
        {teacher.phone}
        {"\n"}
        {teacher.address}
        {"\n"}
        {teacher.email}
      </Text>

      <View style={styles.footer}>
        <Text style={styles.price}>
          Preço/hora <Text style={styles.priceValue}>R$ 20,00</Text>
        </Text>

        <View style={styles.buttonsContainer}>
          <RectButton style={[styles.favoriteButton, styles.favorited]}>
            {/* <Image source={heartOutlinIcon} /> */}
            <Image source={unfavoriteIcon} />
          </RectButton>

          <RectButton
            style={styles.contactButton}
            onPress={() => navigateToDetail(teacher)}
          >
            <Image source={whatsappIcon} />
            <Text style={styles.contactButtonText}>Entrar em contato</Text>
          </RectButton>
        </View>
      </View>
    </View>
  );
};

export default TeacherItem;
