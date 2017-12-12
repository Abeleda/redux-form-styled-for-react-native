import React from "react";

import { Text, TextInput } from "react-native";
import NativeLabelContainer from "./NativeLabelContainer";

class NativeInput extends React.Component {
	focus() {
		this.input.focus();
	}
	saveRef = input => (this.input = input);

	render() {
		const {
			theme,
			errorText,
			onChange,
			floatingLabelText,
			onBlur,
			onFocus,
			value,
			keyboardType,
		} = this.props;
		// injected theme

		return (
			<NativeLabelContainer theme={theme} floatingLabelText={floatingLabelText}>
				<TextInput
					style={theme.TextInput}
					underlineColorAndroid="transparent"
					onChangeText={onChange}
					selectTextOnFocus
					onBlur={onBlur}
					ref={this.saveRef}
					onFocus={onFocus}
					value={value}
					placeholder={floatingLabelText}
					keyboardType={keyboardType}
				/>
				{!!errorText && <Text style={theme.ErrorText}>{errorText}</Text>}
			</NativeLabelContainer>
		);
	}
}
export default NativeInput;
