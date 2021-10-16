import React, { useState, useEffect } from 'react';
import { View, Text, Image } from 'react-native';

export default function ProductDetails({ navigation, route }) {
  const [post, setPost] = useState(null);
  const [err, setErr] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${route.params.itemId}`)
      .then((res) => res.json())
      .then((data) => setPost(data))
      .catch((err) => setErr('an error occured please try again'));
  }, []);
  return (
    <View style={{ padding: 20 }}>
      <Image
        source={require('../assets/images/image.jpg')}
        style={{ width: '100%', height: 300, borderRadius: 10 }}
        resizeMode="cover"
      />
      <Text
        style={{
          fontSize: 45,
          margin: 5,
          textAlign: 'center',
          fontWeight: '300',
        }}
      >
        {post?.title}
      </Text>
      <Text style={{ fontSize: 30, textAlign: 'justify', margin: 5 }}>
        {post?.body}
      </Text>
    </View>
  );
}
