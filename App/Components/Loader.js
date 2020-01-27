import React from 'react';
import { StyleSheet, Text } from 'react-native';
import Modal from 'react-native-modal';


const Loader = ({...props}) => {
	return (
		<Modal
			isVisible={props.loadStatus}
			animationIn={'fadeIn'}
			animationOut={'fadeOut'}
			backdropOpacity={0.6}
			style={styles.container}
		>
			<Text>sheehe</Text>
		</Modal>
	);
};

export default Loader;


const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center'
	}
});