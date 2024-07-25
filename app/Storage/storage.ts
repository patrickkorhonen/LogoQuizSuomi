import AsyncStorage from "@react-native-async-storage/async-storage";

const level1 = ["hesburger", "bmw", "citroen", "dhl", "ebay", "facebookfaceboook"];

export const setItem = async (key: string, value: string) => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error('Error setting item:', error);
    }
  };
  
  export const getItem = async (key: string) => {
    try {
      const value = await AsyncStorage.getItem(key);
      return value != null ? JSON.parse(value) : null;
    } catch (error) {
      console.error('Error getting item:', error);
      return null;
    }
  };

  export const getCoins = async () => {
    try {
      const value = await AsyncStorage.getItem("coins");
      return value != null ? JSON.parse(value) : 150;
    } catch (error) {
      console.error('Error getting item:', error);
      return null;
    }
  }

  export const setCoins = async (value: number) => {
    try {
      await AsyncStorage.setItem("coins", JSON.stringify(value));
    } catch (error) {
      console.error('Error setting item:', error);
    }
  }

  export const getLevelGuessed = async (level: string) => {
    try {
      const value = await AsyncStorage.getItem(level);
      //console.log(value)
      return value != null ? JSON.parse(value) : null;
    } catch (error) {
      console.error('Error getting item:', error);
      return null;
    }
  }

  export const setlevelGuessed = async (level: string) => {
    try {
      await getLevelGuessed(level).then((data) => {
        if (data) {
          AsyncStorage.setItem(level, (Number(data) + 1).toString());
        } else {
          AsyncStorage.setItem(level, "1");
        }
      })
      
    } catch (error) {
      console.error('Error setting item:', error);
    }
  
  }

  export const clear = async () => {
    try {
      await AsyncStorage.clear();
    } catch (error) {
      console.error('Error clearing AsyncStorage:', error);
    }
  };