import { Fontisto } from '@expo/vector-icons';
import { Pressable } from "react-native";
import Colors from '../constants/Colors';

// Define the BookmarkButton functional component that accepts props.
function BookmarkButton(props) {

  // Check if the 'pressed' prop is true, indicating the bookmark is active or pressed.
  if (props.pressed) {
    // If 'pressed' is true, return a Pressable component wrapping the 'bookmark-alt' icon.
    // This icon variant typically signifies that the item is currently bookmarked.
    return (
      <Pressable onPress={props.onPress}>
        <Fontisto name="bookmark-alt" size={30} color={Colors.accent500} />
      </Pressable>
    );
  } else {
    // If 'pressed' is not true, return a Pressable component wrapping the 'bookmark' icon.
    // This icon variant typically signifies that the item is not bookmarked.
    return (
      <Pressable onPress={props.onPress}>
        <Fontisto name="bookmark" size={30} color={Colors.accent500} />
      </Pressable>
    );
  }
}

// Export the BookmarkButton component for use in other parts of the application.
export default BookmarkButton;
