import type { Meta, StoryObj } from "@storybook/react-native";
import Button from "./Button";
import { View } from "react-native";

const meta : Meta<typeof Button>  =  {
  title: 'Simple Button',
  component: Button,
  decorators: [
    (Story) => (
      <View style={{backgroundColor: 'gray', justifyContent: 'center', alignItems: 'center', flex: 1}}>
        <Story />
      </View>
    )
  ]
}

export default meta


type story = StoryObj<typeof Button>


export const Primary: story = {
  args: {
    primary: true
  }
} 

export const Secondary: story = {
  args: {
    primary: false
  }
} 