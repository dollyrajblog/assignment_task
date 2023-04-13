import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
  FlatList,
  ImageBackground,
  StatusBar,
} from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import CustomItem from '../CustomComponents/CustomItem';
const {height, width} = Dimensions.get('screen');
const data = [
  {
    id: 1,
    name: 'Earned Leave',
    no: 12,
    current: '00',
    Availble: '00',
    Balance: '00',
    backgroundColor: '#f5efe0',
    headerColor: '#f97316',
  },
  {
    id: 2,
    name: 'Casual Leave',
    no: 12,
    current: '00',
    Availble: '00',
    Balance: '00',
    backgroundColor: '#def5f9',
    headerColor: '#00b8d9',
  },
  {
    id: 3,
    name: 'Casual Leave',
    no: 12,
    current: '00',
    Availble: '00',
    Balance: '00',
    backgroundColor: '#def5f9',
    headerColor: '#00b8d9',
  },
  {
    id: 4,
    name: 'Casual Leave',
    no: 12,
    current: '00',
    Availble: '00',
    Balance: '00',
    backgroundColor: '#def5f9',
    headerColor: '#00b8d9',
  },
];
const MySpace = () => {
  const ItemView = ({
    msg1,
    msg2,
    msg3,
    icon1,
    icon2,
    icon3,
    color1,
    color2,
    color3,
    bgc1,
    bgc2,
    bgc3,
  }) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          paddingVertical: 5,
        }}>
        <CustomItem
          msg={msg1}
          icon={icon1}
          color={color1}
          backgroundColor={bgc1}
        />
        <CustomItem
          msg={msg2}
          icon={icon2}
          color={color2}
          backgroundColor={bgc2}
        />
        <CustomItem
          msg={msg3}
          icon={icon3}
          color={color3}
          backgroundColor={bgc3}
        />
      </View>
    );
  };
  const renderItem = ({item}) => {
    return (
      <View
        style={{
          backgroundColor: item.backgroundColor,
          height: height * 0.26,
          width: width * 0.5,
          borderRadius: 10,
          marginHorizontal: 5,
        }}>
        <View
          style={{
            backgroundColor: item.headerColor,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            paddingVertical: 12,
          }}>
          <Text
            style={{
              textAlign: 'center',
              color: '#fff',
              fontSize: 14,
              fontWeight: '800',
            }}>
            {item.name}
          </Text>
        </View>
        <View style={{paddingHorizontal: 10}}>
          <View
            style={{
              flexDirection: 'row',
              paddingVertical: 10,
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 24, fontWeight: 'bold', color: '#000'}}>
              {item.no}
            </Text>
            <Text style={{fontSize: 10, paddingLeft: 10, color: '#000'}}>
              Left
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={{fontSize: 13, color: '#637381'}}>Current Year</Text>
            <Text style={{fontSize: 13, color: '#000', fontWeight: '800'}}>
              {item.current}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingVertical: 12,
            }}>
            <Text style={{fontSize: 13, color: '#637381'}}>Availble</Text>
            <Text style={{fontSize: 13, color: '#000', fontWeight: '800'}}>
              {item.Availble}
            </Text>
          </View>
          <View style={{height: 1, backgroundColor: '#cccccc'}} />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingVertical: 12,
            }}>
            <Text style={{fontSize: 13, color: '#637381'}}>Balance</Text>
            <Text style={{fontSize: 13, color: '#000', fontWeight: '800'}}>
              {item.Balance}
            </Text>
          </View>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar backgroundColor={'#f4f6f8'} barStyle={'dark-content'} />
      <ScrollView
        contentContainerStyle={{backgroundColor: '#f4f6f8'}}
        showsVerticalScrollIndicator={false}>
        <View style={[styles.mainLine, {marginTop: 18}]}>
          <TouchableOpacity>
            <Feather name="arrow-left" color="#637381" size={20} />
          </TouchableOpacity>
          <Text style={styles.myspacetxt}>My Space</Text>
        </View>
        <View style={[styles.mainLine, styles.search_bell]}>
          <TouchableOpacity>
            <Feather name="search" color="#637381" size={16} />
          </TouchableOpacity>
          <TouchableOpacity>
            <FontAwesome name="bell" color="#637381" size={16} />
          </TouchableOpacity>
        </View>
        <View style={styles.profileBox}>
          <TouchableOpacity style={{alignSelf: 'flex-end'}}>
            <Ionicons name="eye" color="#f97316" size={20} />
          </TouchableOpacity>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={styles.imageView}>
              <Image
                source={require('../assets/woman.png')}
                style={{height: 60, width: 60}}
              />
            </View>
            <View
              style={{
                flex: 1,
                marginLeft: width * 0.12,
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  color: '#f97316',
                  fontWeight: 'bold',
                  fontSize: 14,
                  paddingVertical: 2,
                }}>
                Ananya Singh
              </Text>
              <Text style={styles.profileViewTxt}>UX Designer</Text>
              <Text style={styles.profileViewTxt}>127927</Text>
            </View>
          </View>
        </View>
        <View style={{backgroundColor: '#fff', height: height * 0.31}}>
          <View style={styles.viewline}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 10,
              }}>
              <Text style={styles.txtstyle}>My Attendance</Text>
              <Text style={{marginLeft: 10, fontSize: 11, color: '#637381'}}>
                March (31Days)
              </Text>
            </View>
            <TouchableOpacity>
              <Feather name="arrow-right" color="#f97316" size={20} />
            </TouchableOpacity>
          </View>
          <ItemView
            msg1="Total Days in Dec"
            msg2="Payable Days in Dec"
            msg3="Present"
            icon1={
              <FontAwesome5 name="calendar-day" color="#00b8d9" size={12} />
            }
            icon2={<FontAwesome name="rupee" color="#a9e42a" size={12} />}
            icon3={
              <FontAwesome name="check-circle" color="#00c964" size={12} />
            }
            color1="#86d8e8"
            color2="#e5ffae"
            color3="#ccffe7"
            bgc1="#f3fbfc"
            bgc2="#f9ffee"
            bgc3="#f4fffa"
          />
          <ItemView
            msg1="On Duty"
            msg2="Week Off"
            msg3="Holiday"
            icon1={
              <MaterialCommunityIcons
                name="bag-checked"
                color="#e86100"
                size={14}
              />
            }
            icon2={
              <MaterialCommunityIcons
                name="calendar-weekend-outline"
                color="#6eadff"
                size={12}
              />
            }
            icon3={
              <Fontisto name="holiday-village" color="#ddd400" size={10} />
            }
            color1="#ffc89f"
            color2="#c3ddff"
            color3="#fcff69"
            bgc1="#fff9f5"
            bgc2="#f9fbff"
            bgc3="#feffeb"
          />
          <ItemView
            msg1="Leave"
            msg2="Leave Without Pay"
            msg3="Absent"
            icon1={<AntDesign name="exclamation" color="#f63d7d" size={16} />}
            icon2={<FontAwesome name="rupee" color="#ff66fa" size={12} />}
            icon3={<MaterialIcons name="cancel" color="#ff2e2e" size={14} />}
            color1="#f5dde0"
            color2="#fed3ff"
            color3="#ffcaca"
            bgc1="#fdf8f8"
            bgc2="#fef6ff"
            bgc3="#fff4f4"
          />
        </View>
        <View>
          <View style={[styles.viewline, {paddingTop: 15}]}>
            <Text style={styles.txtstyle}>My Leaves</Text>
            <TouchableOpacity>
              <Feather name="arrow-right" color="#f87418" size={20} />
            </TouchableOpacity>
          </View>
          <FlatList
            data={data}
            keyExtractor={item => item.id}
            renderItem={item => renderItem(item)}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            nestedScrollEnabled
          />
        </View>
        <View
          style={{
            margin: 10,
            backgroundColor: '#f8f1ed',
            padding: 10,
            borderRadius: 10,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingTop: 10,
            }}>
            <Text style={styles.txtstyle}>My Holidays</Text>
            <TouchableOpacity>
              <Feather name="arrow-right" color="#f97316" size={20} />
            </TouchableOpacity>
          </View>
          <ImageBackground
            style={{height: height * 0.2}}
            resizeMode="contain"
            source={require('../assets/bg1.jpg')}></ImageBackground>
        </View>
        <View style={styles.viewcomponent}>
          <Text style={styles.txtstyle}> My Tesk</Text>
          <View
            style={{alignItems: 'center', flex: 1, justifyContent: 'center'}}>
            <Image
              style={{height: height * 0.15}}
              resizeMode="contain"
              source={require('../assets/image1.png')}
            />
          </View>
          <TouchableOpacity style={{marginHorizontal: 30}}>
            <Feather name="arrow-right" color="#1939b4" size={20} />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default MySpace;
const styles = StyleSheet.create({
  myspacetxt: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#f97316',
    marginLeft: 10,
  },
  mainLine: {
    flexDirection: 'row',
    marginHorizontal: 20,
    alignItems: 'center',
  },
  search_bell: {
    alignSelf: 'flex-end',
    marginTop: -5,
    marginBottom: 15,
    justifyContent: 'space-between',
    width: width * 0.13,
  },
  profileBox: {
    backgroundColor: '#fff7e8',
    height: height * 0.15,
    marginVertical: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  imageView: {
    backgroundColor: '#d9d9d9',
    borderRadius: 100,
    padding: 15,
    marginHorizontal: 10,
  },
  profileViewTxt: {
    color: '#000',
    fontWeight: '800',
    fontSize: 13,
    paddingVertical: 2,
  },
  viewline: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingBottom: 15,
  },
  txtstyle: {fontWeight: 'bold', fontSize: 13, color: '#000'},
  viewcomponent: {
    margin: 10,
    padding: 10,
    backgroundColor: '#e9f5f8',
    height: height * 0.18,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
