import React from 'react';
import { StyleSheet, Text, View, Pressable, Dimensions } from 'react-native';
import { signOut } from 'aws-amplify/auth';
const { width } = Dimensions.get('window');

const Home = () => {
  const so = async () => {
    try {
      await signOut({ global: true });
    } catch (error) {
      console.log('error signing out: ', error);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Welcome!</Text>
        <Pressable style={styles.button} onPress={() => so()}>
          <Text style={styles.buttonText}>Sign out</Text>
        </Pressable>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: width,
    paddingVertical: 20,
  },
  header: {
    display: 'flex',
    padding: 20,
    width: width,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  button: {
    marginTop: 50,
    backgroundColor: '#B00020',
    padding: 10,
    borderRadius: 6,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});
export default Home;