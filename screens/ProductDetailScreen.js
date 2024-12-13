import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import "../global.css";

export default function ProductDetailScreen() {
  return (
    <View className="flex-1 justify-center items-center bg-pink-50 px-10">
      {/* Header */}
      <View className="flex-row justify-between items-center mb-10 px-10 pt-10">
        <TouchableOpacity className="p-2 bg-white rounded-full shadow-md">
          <Icon name="arrow-left" size={20} color="#FF69B4" />
        </TouchableOpacity>
        <Text className="text-lg font-bold text-pink-300 flex-1 text-center">
          Product Detail
        </Text>
        <TouchableOpacity className="p-2 bg-white rounded-full shadow-md">
          <Icon name="shopping-cart" size={20} color="#FF69B4" />
        </TouchableOpacity>
      </View>

      {/* Product Image */}
      <View className="items-center mb-5">
        <View className="bg-white rounded-lg shadow-lg p-2">
          <Image
            source={require('../assets/images/bej.png')}
            className="w-64 h-64 rounded-lg"
          />
        </View>
      </View>

      {/* Price Tag */}
      <View className="absolute top-48 left-6 bg-pink-300 rounded-full px-4 py-2 shadow-md">
        <Text className="text-white text-sm font-semibold">£1.905</Text>
      </View>

      {/* Product Info with Background */}
      <View className="mx-5 mb-5 bg-pink-100 bg-opacity-20 rounded-lg p-6">
        <Text className="text-xl font-bold text-center mb-2 text-pink-300">
          Stella McCartney Petit Sac à Main Falabella
        </Text>
        <Text className="text-pink-300 text-center mb-3">★ 4.8 out of 5</Text>
      </View>

      {/* Star Ratings */}
      <View className="flex-row justify-center mb-5">
        {[...Array(5)].map((_, index) => (
          <Icon key={index} name="star" size={20} color="#FFC0CB" />
        ))}
      </View>

      {/* Description with Background */}
      <View className="mx-5 bg-pink-100 bg-opacity-20 rounded-lg p-4 mb-7">
        <Text className="text-pink-300 text-base text-center">
          This beige Stella McCartney bag is a perfect blend of elegance and functionality. Released exclusively in 2021, it is part of a limited batch of only 400 pieces.
        </Text>
      </View>

      {/* Quantity Selector */}
      <View className="flex-row justify-center items-center mb-6">
        <TouchableOpacity className="w-12 h-12 bg-pink-200 rounded-full items-center justify-center shadow-md">
          <Text className="text-lg font-bold text-pink-300">-</Text>
        </TouchableOpacity>
        <Text className="mx-4 text-lg font-bold text-pink-300">1</Text>
        <TouchableOpacity className="w-12 h-12 bg-pink-200 rounded-full items-center justify-center shadow-md">
          <Text className="text-lg font-bold text-pink-300">+</Text>
        </TouchableOpacity>
      </View>

      {/* Add to Cart Button */}
      <TouchableOpacity className="bg-pink-300 py-5 rounded-full shadow-lg mx-50">
        <Text className="text-white text-center text-lg font-bold">Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );
}
