import {
    StatusBar as StatusBarRN,
    ScrollView,
    SafeAreaView,
  } from "react-native";
  
  export function BasicLayout(props) {
    const { children } = props;
  
    return (
      <>
        <StatusBarRN backgroundColor="#5ac343" />
        <SafeAreaView />
        <ScrollView>{children}</ScrollView>
      </>
    );
  }