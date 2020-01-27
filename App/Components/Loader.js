import React from 'react';
import { StyleSheet, Text } from 'react-native';
import Modal from 'react-native-modal';
import { PacmanIndicator } from 'react-native-indicators';
  

const Loader = ({...props}) => {
	return (
		<Modal
			isVisible={props.loadStatus}
			animationIn={'fadeIn'}
			animationOut={'fadeOut'}
			backdropOpacity={0.9}
			style={styles.container}
		>
			<PacmanIndicator color={'white'} size={50} />
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