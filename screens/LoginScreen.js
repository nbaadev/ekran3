import React from 'react';
import { View, Text, TouchableOpacity, TextInput, Image } from 'react-native';
import "../global.css";

export default function LoginScreen() {
  return (
    <View className="flex-1 justify-center items-center bg-pink-50 px-6">
      {/* Profil Resmi */}
      <View className="mb-6">
        <Image
          source={{ uri: 'https://i.pinimg.com/736x/a6/16/35/a61635b8bb434d6a4b0ecf232373efbc.jpg' }}
          className="w-24 h-24 rounded-full border-4 border-pink-200 shadow-lg"
        />
      </View>

      {/* Başlık */}
      <Text className="text-3xl font-bold text-pink-300 mb-4">Hello There!</Text>
      <Text className="text-base text-pink-300 text-center mb-6">
        Log in to explore exclusive collections and make the most of your shopping experience.
      </Text>

      {/* Kullanıcı Adı */}
      <TextInput
        placeholder="Enter your username"
        placeholderTextColor="#a1a1a1"
        className="w-full bg-white py-3 px-4 rounded-full border border-pink-200 mb-4 shadow-md"
      />

      {/* Şifre */}
      <TextInput
        placeholder="Enter your password"
        placeholderTextColor="#a1a1a1"
        secureTextEntry
        className="w-full bg-white py-3 px-4 rounded-full border border-pink-200 mb-6 shadow-md"
      />

      {/* Login Butonu */}
      <TouchableOpacity className="w-full bg-pink-300 py-3 rounded-full shadow-lg">
        <Text className="text-white text-center text-lg font-semibold">Login</Text>
      </TouchableOpacity>

      {/* Alt Bilgi */}
      <View className="mt-6 flex-row justify-center">
        <Text className="text-pink-200">Don’t have an account? </Text>
        <TouchableOpacity>
          <Text className="text-pink-200 font-bold">Sign Up</Text>
        </TouchableOpacity>
      </View>

      {/* Ekstra Şablon Stilleri */}
      <View className="absolute bottom-0 w-full h-24 bg-pink-100 rounded-t-3xl shadow-lg flex-row justify-center items-center">
        <Text className="text-pink-300 font-medium">Enjoy the best shopping experience!</Text>
      </View>
    </View>
  );
}
