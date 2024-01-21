import React from 'react';
import { View } from 'react-native';
import { Button, ButtonText } from '~/components/universal-ui/button';
import { Progress } from '~/components/universal-ui/progress';

export default function ProgressUniversalScreen() {
  const [progress, setProgress] = React.useState(13);

  function onPress() {
    setProgress(Math.floor(Math.random() * 100));
  }

  return (
    <View className='flex-1 justify-center items-center p-6 gap-12'>
      <View className='w-full gap-8 items-center'>
        <Progress value={progress} className='web:w-[60%]' />
        <Button variant='ghost' onPress={onPress}>
          <ButtonText>Randomize</ButtonText>
        </Button>
      </View>
    </View>
  );
}