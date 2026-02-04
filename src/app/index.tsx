import { View, Text } from 'react-native'
import { PropsWithChildren, useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Loginscreen from '../components/Loginscreen';

export const CustomText = ({ children }: PropsWithChildren) => <Text className='text-3xl text-blue-300'>{children}</Text>;

export default function Home() {

  return (
    <SafeAreaView className="flex-1">
      <Loginscreen />
    </SafeAreaView>
  )
}