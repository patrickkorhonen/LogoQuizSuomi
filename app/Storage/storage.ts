import AsyncStorage from "@react-native-async-storage/async-storage";


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

  export const getAllItems = async (level: string[]) => {
    try {
      const values = await AsyncStorage.multiGet(level);
      return values;
    } catch (error) {
      console.error('Error getting item:', error);
      return null;
    }
  }

  export const getSound = async () => {
    try {
      const value = await AsyncStorage.getItem("sound");
      return value != null ? JSON.parse(value) : true;
    } catch (error) {
      console.error('Error getting item:', error);
      return null;
    }
  }

  export const setSound = async (value: boolean) => {
    try {
      await AsyncStorage.setItem("sound", JSON.stringify(value));
    } catch (error) {
      console.error('Error setting item:', error);
    }
  }

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

  export const getAllLevelsGuessed = async (levels: string[]) => {
    try {
    const values = await AsyncStorage.multiGet(levels)
    return values;
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

  export const setHintedLettersStorage = async (logo: string, value: string) => {
    try {
      await AsyncStorage.setItem(logo + "hint", JSON.stringify(value));
    } catch (error) {
      console.error('Error setting item:', error);
    }
  }

  export const getHintedLettersStorage = async (logo: string) => {
    try {
      const value = await AsyncStorage.getItem(logo + "hint");
      return value != null ? JSON.parse(value) : null;
    } catch (error) {
      console.error('Error getting item:', error);
      return null;
    }
  }

  export const removeHintedLetters = async (logo: string) => {
    try {
      await AsyncStorage.removeItem(logo + "hint");
    } catch (error) {
      console.error('Error removing item:', error);
    }
  }

  export const clear = async () => {
    try {
      await AsyncStorage.clear();
    } catch (error) {
      console.error('Error clearing AsyncStorage:', error);
    }
  };