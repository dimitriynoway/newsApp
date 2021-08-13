import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Dimensions,
  Switch,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useSelector, useDispatch} from 'react-redux';
import {SET_LOG_OUT} from '../store/actions/authActions';
const {width, height} = Dimensions.get('screen');
import {SET_THEME} from '../store/actions/themeAction';
import * as Keychain from 'react-native-keychain';
const PADDING = width * 0.1;
export default Settings = ({navigation}) => {
  const theme = useSelector(state => state.theme.themeDark);
  const logged = useSelector(state => state.auth.logged);
  const username = useSelector(state => state.auth.user.username);
  const email = useSelector(state => state.auth.user.email);
  const dispatch = useDispatch();
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => dispatch(SET_THEME());
  const [isEnabled2, setIsEnabled2] = useState(false);
  const toggleSwitch2 = () => setIsEnabled2(previousState => !previousState);

  const logOut = () => {
    dispatch(SET_LOG_OUT());
    Keychain.resetGenericPassword();
    navigation.navigate('Login');
  };

  return (
    <SafeAreaView style={{backgroundColor: theme ? '#343A40' : 'white'}}>
      <View
        style={{
          backgroundColor: theme ? '#343A40' : '#e9ecef',
          width,
          height,
        }}>
        <View
          style={{
            height: height * 0.23,
            width,
            backgroundColor: theme ? '#343A40' : 'white',
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}>
          <View>
            <Text
              style={{
                fontSize: 22,
                fontWeight: '600',
                color: theme ? 'white' : 'black',
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
                backgroundColor: '#e9ecef',
              }}></View>
            <View
              style={{
                //backgroundColor: 'green',
                justifyContent: 'center',
                height: 80,
                justifyContent: 'space-evenly',
                alignItems: 'flex-start',
              }}>
              <Text
                style={{
                  fontWeight: '500',
                  fontSize: 18,
                  color: theme ? 'white' : 'black',
                }}>
                {username}
              </Text>
              <Text
                style={{
                  fontWeight: '300',
                  fontSize: 14,
                  color: theme ? 'white' : 'black',
                }}>
                {email}
              </Text>
              <TouchableOpacity onPress={() => logOut()}>
                <Text
                  style={{
                    paddingTop: 10,
                    color: 'orange',
                    fontWeight: '500',
                    fontSize: 16,
                  }}>
                  Sign out
                </Text>
              </TouchableOpacity>
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
              backgroundColor: theme ? '#6C757D' : 'white',
              height: 50,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingHorizontal: PADDING / 2,
              borderTopLeftRadius: 5,
              borderTopRightRadius: 5,
            }}>
            <Text
              style={{
                color: theme ? 'white' : 'black',
              }}>
              Dark mode
            </Text>
            <Switch
              style={{transform: [{scaleX: 0.7}, {scaleY: 0.7}]}}
              trackColor={{false: 'black', true: 'orange'}}
              thumbColor={theme ? 'white' : 'white'}
              ios_backgroundColor="black"
              onValueChange={toggleSwitch}
              value={theme}
            />
          </View>
          <View
            style={{
              backgroundColor: theme ? '#6C757D' : 'white',
              height: 50,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingHorizontal: PADDING / 2,
              borderBottomLeftRadius: 5,
              borderBottomRightRadius: 5,
            }}>
            <Text
              style={{
                color: theme ? 'white' : 'black',
              }}>
              Notification
            </Text>
            <Switch
              style={{
                transform: [{scaleX: 0.7}, {scaleY: 0.7}],
              }}
              trackColor={{false: theme ? '#343A40' : 'black', true: 'orange'}}
              thumbColor={isEnabled2 ? 'white' : 'white'}
              ios_backgroundColor={theme ? '#343A40' : 'black'}
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
              color: theme ? 'white' : 'black',
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
              backgroundColor: theme ? '#6C757D' : 'white',
              height: 50,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingHorizontal: PADDING / 2,
              borderTopLeftRadius: 5,
              borderTopRightRadius: 5,
            }}>
            <Text
              style={{
                color: theme ? 'white' : 'black',
              }}>
              Edit Account
            </Text>
            <Icon
              name="arrow-forward-ios"
              size={14}
              color={theme ? 'white' : 'black'}
            />
          </View>
          <View
            style={{
              backgroundColor: theme ? '#6C757D' : 'white',
              height: 50,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingHorizontal: PADDING / 2,
            }}>
            <Text
              style={{
                color: theme ? 'white' : 'black',
              }}>
              Change Password
            </Text>
            <Icon
              name="arrow-forward-ios"
              size={14}
              color={theme ? 'white' : 'black'}
            />
          </View>
          <View
            style={{
              backgroundColor: theme ? '#6C757D' : 'white',
              height: 50,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingHorizontal: PADDING / 2,
              borderBottomLeftRadius: 5,
              borderBottomRightRadius: 5,
            }}>
            <Text
              style={{
                color: theme ? 'white' : 'black',
              }}>
              Language
            </Text>
            <Icon
              name="arrow-forward-ios"
              size={14}
              color={theme ? 'white' : 'black'}
            />
          </View>
        </View>

        <View>
          <Text
            style={{
              fontSize: 19,
              fontWeight: '500',
              paddingLeft: (2 * PADDING) / 3,
              color: theme ? 'white' : 'black',
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
              backgroundColor: theme ? '#6C757D' : 'white',
              height: 50,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingHorizontal: PADDING / 2,
              borderTopLeftRadius: 5,
              borderTopRightRadius: 5,
            }}>
            <Text
              style={{
                color: theme ? 'white' : 'black',
              }}>
              Private Account
            </Text>
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
            <Icon
              name="arrow-forward-ios"
              size={14}
              color={theme ? 'white' : 'black'}
            />
          </View>
          <View
            style={{
              backgroundColor: theme ? '#6C757D' : 'white',
              height: 50,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingHorizontal: PADDING / 2,
              borderBottomLeftRadius: 5,
              borderBottomRightRadius: 5,
            }}>
            <Text
              style={{
                color: theme ? 'white' : 'black',
              }}>
              Privacy and Security Help
            </Text>
            <Icon
              name="arrow-forward-ios"
              size={14}
              color={theme ? 'white' : 'black'}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
//#CFCFEA
