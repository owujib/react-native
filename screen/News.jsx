import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import NewsCard from '../components/NewCard';

export default function News() {
  const [posts, setPosts] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/`)
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setError('an errro occures');
        setLoading(true);
      });
  }, [loading]);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>News</Text>
      <View style={styles.main}>
        <View style={{ flex: 1 }}>
          {loading ? (
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <ActivityIndicator size="large" color="red" />
            </View>
          ) : (
            <NewsCard news={posts.slice(0, 10)} />
          )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  text: {
    fontSize: 35,
    color: 'brown',
    textAlign: 'center',
  },
  main: {
    width: '95%',
    padding: 5,
    flex: 0.95,
  },
});
