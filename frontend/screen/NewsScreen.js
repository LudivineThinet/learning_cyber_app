import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, Linking, ActivityIndicator } from 'react-native';
import { XMLParser } from 'fast-xml-parser';

export default function NewsScreen() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadRSS = async () => {
      try {
        const res = await fetch('https://www.cert.ssi.gouv.fr/feed/');
        const text = await res.text();

        const parser = new XMLParser({ ignoreAttributes: false });
        const data = parser.parse(text);

        let items = [];
        if (data?.rss?.channel?.item) {
          items = Array.isArray(data.rss.channel.item)
            ? data.rss.channel.item
            : [data.rss.channel.item];
        }

        setArticles(items);
      } catch (error) {
        console.error('Erreur RSS:', error);
      } finally {
        setLoading(false);
      }
    };

    loadRSS();
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#007BFF" />
        <Text>Chargement des news...</Text>
      </View>
    );
  }

  if (articles.length === 0) {
    return (
      <View style={styles.container}>
        <Text>Aucune news trouvée.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={articles}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.article}>
            <Text
              style={styles.title}
              onPress={() => Linking.openURL(item.link || '#')}
            >
              {item.title}
            </Text>
            <Text style={styles.date}>{item.pubDate}</Text>
            {item.description ? (
              <Text style={styles.desc} numberOfLines={3}>
                {item.description.replace(/<[^>]*>/g, '')}
              </Text>
            ) : null}
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  article: {
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#007BFF',
    marginBottom: 4,
  },
  date: {
    fontSize: 12,
    color: '#888',
    marginBottom: 4,
  },
  desc: {
    fontSize: 14,
    color: '#333',
  },
});

