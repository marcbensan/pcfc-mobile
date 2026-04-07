import AsyncStorage from "@react-native-async-storage/async-storage";

const DEVICE_ID_KEY = "@pcfc_device_id";
const PRAYED_KEY = "@pcfc_prayed_posts";

/** Returns a persistent device UUID, creating one if it doesn't exist. */
export const getDeviceId = async (): Promise<string> => {
  let id = await AsyncStorage.getItem(DEVICE_ID_KEY);
  if (!id) {
    id =
      Date.now().toString(36) +
      "-" +
      Math.random().toString(36).substring(2, 10);
    await AsyncStorage.setItem(DEVICE_ID_KEY, id);
  }
  return id;
};

/** Get the set of post IDs this device has "prayed for". */
export const getPrayedPosts = async (): Promise<Set<string>> => {
  const raw = await AsyncStorage.getItem(PRAYED_KEY);
  if (!raw) return new Set();
  try {
    return new Set(JSON.parse(raw) as string[]);
  } catch {
    return new Set();
  }
};

/** Toggle a post's "prayed" status for this device. Returns the new state. */
export const togglePrayed = async (postId: string): Promise<boolean> => {
  const set = await getPrayedPosts();
  const wasPrayed = set.has(postId);
  if (wasPrayed) {
    set.delete(postId);
  } else {
    set.add(postId);
  }
  await AsyncStorage.setItem(PRAYED_KEY, JSON.stringify(Array.from(set)));
  return !wasPrayed;
};
