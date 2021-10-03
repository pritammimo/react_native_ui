/* eslint-disable no-alert */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../assets/colors/colors';
// eslint-disable-next-line no-undef
export default Details = ({route, navigation}) => {
  const {item} = route.params;
  const renderIngredientsItem = ({item}) => {
    return (
      <View
        style={[
          styles.IngredientItemWrapper,
          // eslint-disable-next-line react-native/no-inline-styles
          {
            marginLeft: item.id === '1' ? 20 : 0,
          },
        ]}>
        <Image source={item.image} style={styles.IngredientImage} />
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}>
        <SafeAreaView>
          <View style={styles.headerWrapper}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <View style={styles.headerLeft}>
                <Feather
                  name="chevron-left"
                  size={12}
                  color={colors.textDark}
                />
              </View>
            </TouchableOpacity>
            <View style={styles.headerRight}>
              <MaterialCommunityIcons
                name="star"
                size={12}
                color={colors.white}
              />
            </View>
          </View>
        </SafeAreaView>
        <View style={styles.titlesWrapper}>
          <Text style={styles.title}>{item.title}</Text>
        </View>
        <View style={styles.priceWrapper}>
          <Text style={styles.priceText}>${item.price}</Text>
        </View>
        <View style={styles.infowrapper}>
          <View style={styles.infoLeftWrapper}>
            <View style={styles.infoItemWrapper}>
              <Text style={styles.infoItemTitle}>Size</Text>
              <Text style={styles.infoItemText}>
                {item.sizeName} {item.sizeNumber}
              </Text>
            </View>
            <View style={styles.infoItemWrapper}>
              <Text style={styles.infoItemTitle}>crust</Text>
              <Text style={styles.infoItemText}>{item.crust}</Text>
            </View>
            <View style={styles.infoItemWrapper}>
              <Text style={styles.infoItemTitle}>Delivery In</Text>
              <Text style={styles.infoItemText}>{item.deliveryTime} min</Text>
            </View>
          </View>
          <View>
            <Image source={item.image} style={styles.itemImage} />
          </View>
        </View>
        <View style={styles.ingredientsWrapper}>
          <Text style={styles.ingredientTitle}>Ingredients</Text>
          <View style={styles.ingredientListWrapper}>
            <FlatList
              data={item.ingredients}
              renderItem={renderIngredientsItem}
              keyExtractor={item => item.id}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>
        <TouchableOpacity onPress={() => alert('your order has been placed')}>
          <View style={styles.orderWrapper}>
            <Text style={styles.orderText}> Place an Order</Text>
            <Feather name="chevron-right" size={18} color={colors.textDark} />
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 25 : 0,
  },
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  headerLeft: {
    borderColor: colors.textLight,
    borderWidth: 2,
    borderRadius: 10,
    padding: 12,
  },
  headerRight: {
    backgroundColor: colors.primary,
    padding: 12,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: colors.primary,
  },
  titlesWrapper: {
    marginTop: 30,
    paddingHorizontal: 20,
  },
  title: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 32,
    color: colors.textDark,
    width: '50%',
  },
  priceWrapper: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  priceText: {
    fontFamily: 'Montserrat-Bold',
    color: colors.secondary,
    fontSize: 32,
  },
  infowrapper: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  infoLeftWrapper: {
    paddingLeft: 20,
  },
  infoItemWrapper: {
    marginBottom: 20,
  },
  infoItemTitle: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 14,
    color: colors.textLight,
  },
  infoItemText: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 16,
    color: colors.text,
  },
  itemImage: {
    resizeMode: 'contain',
    marginLeft: 55,
  },
  ingredientsWrapper: {
    marginTop: 20,
  },
  ingredientTitle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 16,
    color: colors.text,
    paddingHorizontal: 20,
  },
  ingredientListWrapper: {
    paddingVertical: 20,
  },
  IngredientItemWrapper: {
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    marginRight: 15,
    borderRadius: 15,
    shadowColor: colors.textDark,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  IngredientImage: {
    resizeMode: 'contain',
  },
  orderWrapper: {
    marginTop: 60,
    marginHorizontal: 20,
    backgroundColor: colors.primary,
    borderRadius: 50,
    paddingVertical: 25,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  orderText: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 16,
    marginRight: 10,
  },
});
