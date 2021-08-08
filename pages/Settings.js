import React, {useState} from 'react';
import {View, Text, SafeAreaView, Dimensions, Switch} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
const {width, height} = Dimensions.get('screen');
const PADDING = width * 0.1;
export default Settings = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const [isEnabled2, setIsEnabled2] = useState(false);
  const toggleSwitch2 = () => setIsEnabled2(previousState => !previousState);
  const [isEnabled3, setIsEnabled3] = useState(false);
  const toggleSwitch3 = () => setIsEnabled3(previousState => !previousState);
  return (
    <SafeAreaView style={{backgroundColor: 'white'}}>
      <View style={{backgroundColor: 'lightgrey', width, height}}>
        <View
          style={{
            height: height * 0.23,
            width,
            backgroundColor: 'white',
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}>
          <View>
            <Text
              style={{
                fontSize: 22,
                fontWeight: '600',
              }}>
              Settings
            </Text>
          </View>
          <View
            style={{
              width: width - 2 * PADDING,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              alignItems: 'center',
              //backgroundColor: 'yellow',
            }}>
            <View
              style={{
                width: 100,
                height: 100,
                borderRadius: 50,
                backgroundColor: 'lightgrey',
              }}></View>
            <View
              style={{
                //backgroundColor: 'green',
                justifyContent: 'center',
                height: 80,
                justifyContent: 'space-evenly',
                alignItems: 'flex-start',
              }}>
              <Text style={{fontWeight: '500', fontSize: 18}}>
                Dmitriy Babenko
              </Text>
              <Text style={{fontWeight: '300', fontSize: 14}}>
                dimab7412@gmail.com
              </Text>
              <Text
                style={{
                  paddingTop: 10,
                  color: 'orange',
                  fontWeight: '500',
                  fontSize: 16,
                }}>
                Sign out
              </Text>
            </View>
          </View>
        </View>

        <View
          style={{
            marginHorizontal: PADDING,
            marginVertical: PADDING / 2,
          }}>
          <View
            style={{
              backgroundColor: 'white',
              height: 50,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingHorizontal: PADDING / 2,
              borderTopLeftRadius: 5,
              borderTopRightRadius: 5,
            }}>
            <Text>Dark mode</Text>
            <Switch
              style={{transform: [{scaleX: 0.7}, {scaleY: 0.7}]}}
              trackColor={{false: 'black', true: 'orange'}}
              thumbColor={isEnabled ? 'white' : 'white'}
              ios_backgroundColor="black"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
          <View
            style={{
              backgroundColor: 'white',
              height: 50,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingHorizontal: PADDING / 2,
              borderBottomLeftRadius: 5,
              borderBottomRightRadius: 5,
            }}>
            <Text>Notification</Text>
            <Switch
              style={{
                transform: [{scaleX: 0.7}, {scaleY: 0.7}],
              }}
              trackColor={{false: 'black', true: 'orange'}}
              thumbColor={isEnabled2 ? 'white' : 'white'}
              ios_backgroundColor="black"
              onValueChange={toggleSwitch2}
              value={isEnabled2}
            />
          </View>
        </View>

        <View>
          <Text
            style={{
              fontSize: 19,
              fontWeight: '500',
              paddingLeft: (2 * PADDING) / 3,
            }}>
            Account
          </Text>
        </View>

        <View
          style={{
            marginHorizontal: PADDING,
            marginVertical: PADDING / 2,
          }}>
          <View
            style={{
              backgroundColor: 'white',
              height: 50,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingHorizontal: PADDING / 2,
              borderTopLeftRadius: 5,
              borderTopRightRadius: 5,
            }}>
            <Text>Edit Account</Text>
            <Icon name="arrow-forward-ios" size={14} />
          </View>
          <View
            style={{
              backgroundColor: 'white',
              height: 50,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingHorizontal: PADDING / 2,
            }}>
            <Text>Change Password</Text>
            <Icon name="arrow-forward-ios" size={14} />
          </View>
          <View
            style={{
              backgroundColor: 'white',
              height: 50,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingHorizontal: PADDING / 2,
              borderBottomLeftRadius: 5,
              borderBottomRightRadius: 5,
            }}>
            <Text>Language</Text>
            <Icon name="arrow-forward-ios" size={14} />
          </View>
        </View>

        <View>
          <Text
            style={{
              fontSize: 19,
              fontWeight: '500',
              paddingLeft: (2 * PADDING) / 3,
            }}>
            Privacy and Security
          </Text>
        </View>

        <View
          style={{
            marginHorizontal: PADDING,
            marginVertical: PADDING / 2,
          }}>
          <View
            style={{
              backgroundColor: 'white',
              height: 50,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingHorizontal: PADDING / 2,
              borderTopLeftRadius: 5,
              borderTopRightRadius: 5,
            }}>
            <Text>Private Account</Text>
            {/* <Switch
              style={{
                transform: [{scaleX: 0.7}, {scaleY: 0.7}],
              }}
              trackColor={{false: 'black', true: 'orange'}}
              thumbColor={isEnabled3 ? 'white' : 'white'}
              ios_backgroundColor="black"
              onValueChange={toggleSwitch3}
              value={isEnabled3}
            /> */}
            <Icon name="arrow-forward-ios" size={14} />
          </View>
          <View
            style={{
              backgroundColor: 'white',
              height: 50,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingHorizontal: PADDING / 2,
              borderBottomLeftRadius: 5,
              borderBottomRightRadius: 5,
            }}>
            <Text>Privacy and Security Help</Text>
            <Icon name="arrow-forward-ios" size={14} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
