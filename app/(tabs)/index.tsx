import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { images } from "@/constants/images";
import { icons } from "@/constants/icons";
import SearchBar from "@/components/SearchBar";
import { useRouter } from "expo-router";


const Index = () => {

  const router = useRouter();

  return (
    <View className="flex-1 bg-primary  ">
      <Image source={images.bg} className="w-full absolute z-0" />
      <ScrollView
        className="flex-1 px-5"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 10, minHeight: "100%" }}
      >
        <Image
          source={icons.logo}
          className="w-12 h-10 mt-20 mb-5 mx-auto"
        ></Image>

        <View
        className="flex-1 mt-5 ">
         <SearchBar 
         onPress={() => router.push("/search")}
         placeholder="Search for movies"
         />

        </View>
      </ScrollView>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({});
