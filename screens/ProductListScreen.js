import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import "../global.css";

const products = [
  { id: '1', name: 'Stella McCartney Petit Sac à Main Falabella', price: '£1.905', image: require('../assets/images/pinkkk.png') },
  { id: '2', name: 'Stella Mccartney Falabella Shaggy Deer', price: '£1.095', image: require('../assets/images/bej.png') },
  { id: '3', name: 'Silver Falabella Mini Tote by Stella McCartney', price: '£2.105', image: require('../assets/images/black.png') },
];

export default function ProductListScreen() {
  return (
    <View className="flex-1 bg-pink-50 pt-12 px-10">
      {/* Header */}
      <Text className="text-2xl font-bold text-center mb-2 text-pink-300"></Text>

      {/* Feature Section */}
      <View className="flex-col mb-6">
        <View className="bg-white rounded-xl p-4 shadow-md flex-row items-center mb-4 border border-pink-200">
          <Image source={require('../assets/images/askı.png')} className="w-10 h-10 mr-4 rounded-full bg-gray-200" />
          <Text className="text-base font-semibold text-pink-300">Our Collection</Text>
        </View>
        <View className="bg-white rounded-xl p-4 shadow-md flex-row items-center mb-4 border border-pink-200">
          <Image source={require('../assets/images/hediyee.png')} className="w-10 h-10 mr-4 rounded-full bg-gray-200" />
          <Text className="text-base font-semibold text-pink-300">Make a Gift</Text>
        </View>
        <View className="bg-white rounded-xl p-4 shadow-md flex-row items-center border border-pink-200">
          <Image source={require('../assets/images/disc.png')} className="w-10 h-10 mr-4 rounded-full bg-gray-200" />
          <Text className="text-base font-semibold text-pink-300">Delivery</Text>
        </View>
      </View>

      {/* Product Swipe Section */}
      <FlatList
        data={products}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View className="bg-white rounded-lg p-4 mr-4 items-center shadow-lg w-48 border border-pink-200">
            <Image source={item.image} className="w-32 h-32 mb-4 rounded-md bg-gray-200" />
            <Text className="text-base font-bold text-center mb-2 text-pink-300">{item.name}</Text>
            <Text className="text-sm text-pink-200">{item.price}</Text>
          </View>
        )}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 10 }}
      />

      {/* Call to Action Section */}
      <View className="mt-8 px-6 py-4 bg-white rounded-xl shadow-lg border border-pink-200">
        <Text className="text-center text-lg font-semibold text-pink-300 mb-4">
          Explore the timeless collection by Stella McCartney
        </Text>
        <TouchableOpacity className="bg-pink-300 py-3 rounded-full shadow-md">
          <Text className="text-white text-center text-base font-bold">Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
