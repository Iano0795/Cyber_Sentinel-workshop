import {useState} from 'react'
import { View, Text, FlatList, TouchableOpacity, ActivityIndicator} from 'react-native'
import {useRouter} from 'expo-router';

import styles from './popularjobs.style'
import {COLORS, SIZES} from '../../../constants';
import PopularJobCard from '../../common/cards/popular/PopularJobCard';

const Popularjobs = () => {
  const router = useRouter();
  const isLoading = false;
  return (
    <View>
      {/* POPULAR JOB CARD */}
      <View style={styles.container}>
        {/* POPULAR JOB TITLE */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Popular jobs</Text>
          <TouchableOpacity>
            <Text styles={styles.headerBtn}>Show all</Text>
          </TouchableOpacity>
        </View>
        {/* POPULAR JOB CONTENT */}
        <View style={styles.cardsContainer}>
          {isLoading ? (
            <ActivityIndicator size={"large"} colors={COLORS.primary}/>
          ) : error ? (
            <Text>Something went wrong</Text>
          ) : (
            <Flatlist
              data={[1,2,3,4]}
              renderItem={({ item }) => (
                <PopularJobCard
                  item={item}
                />
              )}
              keyExtractor={item => item?.job_id}
              contentContainerStyle={{ columnGap: SIZES.medium}}
              horizontal
            />
          )}
        </View>

      </View>
    </View>
  )
}

export default Popularjobs