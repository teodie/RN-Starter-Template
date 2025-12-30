import { View, Text } from 'react-native'
import React, { PropsWithChildren } from 'react';
import { Link } from 'expo-router'

export const CustomText = ({ children }: PropsWithChildren) => <Text className='text-3xl text-blue-300'>{children}</Text>;

export default function Home(){
  return (
    <View className='flex-1 items-center justify-center'>
      <CustomText>Welcome!</CustomText>
      <Link href='/storybook'>Go to StoryBook</Link>
    </View>
  )
}