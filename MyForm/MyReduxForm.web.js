// @flow

import React, { Component } from "react";

import { Field } from "redux-form"; // 7.2.0

import {
	ScrollView,
	View,
	KeyboardAvoidingView,
	StyleSheet,
} from "react-native";

import { normalize } from "../rules";

import withTheme from "../Theme/withTheme";
import UIField from "../UIField";

// NativeComponents
import NativeInput from "../NativeComponents/NativeInput";
import NativeSwitch from "../NativeComponents/NativeSwitch";
import NativeTouchable from "../NativeComponents/NativeTouchable";

import type { ThemeType } from "../types";

// Native Fields
const NameTextField = UIField(NativeInput);
const PhoneTextField = UIField(NativeInput);
const SwitchField = UIField(NativeSwitch);

class MyForm extends Component<{
	theme: ThemeType,
	handleSubmit: (t: Function) => Function,
	onSubmit: Function,
}> {
	componentDidMount() {
		this.ref // the Field
			.getRenderedComponent()
			.getRenderedComponent()
			.focus();
	}
	ref: any;
	saveRef = (ref: any) => (this.ref = ref);
	render() {
		const { theme, handleSubmit, onSubmit } = this.props;

		return (
			<KeyboardAvoidingView behavior="padding" style={styles.main}>
				<ScrollView style={theme.Form}>
					<Field
						name="switch"
						component={SwitchField}
						floatingLabelText="Switch me"
					/>
					<Field
						name="name"
						component={NameTextField}
						hintText="Name"
						ref={this.saveRef}
						withRef
						floatingLabelText="Name"
						placeholder="Name"
					/>
					<Field
						name="phone"
						component={PhoneTextField}
						normalize={normalize.toPhone}
						keyboardType="phone-pad"
						hintText="Phone"
						floatingLabelText="Phone"
						placeholder="Phone"
					/>
					<NativeTouchable onPress={handleSubmit(onSubmit)}>
						Click Me!
					</NativeTouchable>
				</ScrollView>
			</KeyboardAvoidingView>
		);
	}
}
export default withTheme(MyForm);

const styles = StyleSheet.create({
	main: {
		flex: 1,
		justifyContent: "space-between",
	},
});
