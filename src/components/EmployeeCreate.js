import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Picker, Text } from 'react-native';
import { employeeUpdate, employeeCreate } from '../actions';
import { Card, CardSection, Input, Button } from './common';


class EmployeeCreate extends Component {

  onButtonPress() {
    const { name, phone, shift } = this.props;

    this.props.employeeCreate({ name, phone, shift: shift || 'Monday' });
  }

  textSend(text) {
    this.props.employeeUpdate({ prop: 'name', value: text });
  }

  showButton() {
    return (
      this.props.employee ? <Button
        onPress={this.onButtonPress.bind(this)}
      >
        Edit
      </Button> : <Button
        onPress={this.onButtonPress.bind(this)}
      >
        Create
      </Button>
    );
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
          label="Name"
          placeholder="Jane"
          value={this.props.name}
          onChangeText={this.textSend.bind(this)}
          />
        </CardSection>
        <CardSection>
          <Input
          label="Phone"
          placeholder="555-555-5555"
          value={this.props.phone}
          onChangeText={value => this.props.employeeUpdate({ prop: 'phone', value })}
          />
        </CardSection>
        <CardSection style={{ flexDirection: 'column' }}>
          <Text style={styles.pickerStyle}>Shift</Text>
          <Picker
            style={{ flex: 1 }}
            selectedValue={this.props.shift}
            onValueChange={day => this.props.employeeUpdate({ prop: 'shift', value: day })}
          >
            <Picker.Item label="Monday" value="Monday" />
            <Picker.Item label="Tuesday" value="Tuesday" />
            <Picker.Item label="Wednesday" value="Wednesday" />
            <Picker.Item label="Thursday" value="Thursday" />
            <Picker.Item label="Friday" value="Friday" />
            <Picker.Item label="Saturday" value="Saturday" />
            <Picker.Item label="Sunday" value="Sunday" />
          </Picker>
        </CardSection>
        <CardSection>
          {this.showButton()}
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;

  return { name, phone, shift };
};

const styles = {
  pickerStyle: {
    fontSize: 18,
    paddingLeft: 20
  }
};

export default connect(mapStateToProps, { employeeUpdate, employeeCreate })(EmployeeCreate);
