import React, {useState} from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import assets from '../../assets';
import colors from '../../constants/colors';
import {checkBoxData} from '../../data';

type CheckboxPropsType = {
  text: string;
  defaultChecked?: boolean;
  onChange: (nextValue: boolean) => void;
};

const CheckboxItem = (props: CheckboxPropsType) => {
  const {text, defaultChecked, onChange} = props;
  const [checked, setChecked] = useState(defaultChecked ?? false);
  return (
    <Pressable
      onPress={() => {
        const nextState = !checked;
        onChange(nextState);
        setChecked(nextState);
      }}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
      }}>
      <View
        style={{
          marginRight: 10,
          height: 30,
          width: 30,
          borderWidth: 2,
          borderRadius: 5,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {checked && (
          <Image
            source={assets.images.ic_check}
            style={{
              height: 18,
              width: 18,
              resizeMode: 'cover',
            }}
          />
        )}
      </View>
      <Text>{text}</Text>
    </Pressable>
  );
};

type CheckboxDataArr = {
  name: string;
  status: boolean;
};

type CheckboxExamplePropsType = {
  multiple?: boolean;
  data?: CheckboxDataArr[];
  text: string;
  defaultChecked?: boolean;
  onChange: (nextValue: boolean | CheckboxDataArr[]) => void;
};

const CheckboxExample = (props: CheckboxExamplePropsType) => {
  const {text, multiple, data, defaultChecked, onChange} = props;

  if (multiple && data && data?.length) {
    return data.map(({name, status}, index) => {
      return (
        <CheckboxItem
          key={index.toString()}
          text={name}
          defaultChecked={status}
          onChange={(nextValue: boolean) => {
            onChange(
              data.map(itemObj => {
                if (itemObj.name === name) {
                  return {
                    ...itemObj,
                    status: nextValue,
                  };
                } else {
                  return itemObj;
                }
              }),
            );
          }}
        />
      );
    });
  }

  return (
    <CheckboxItem
      text={text}
      defaultChecked={defaultChecked}
      onChange={onChange}
    />
  );
};

const MultipleCheckbox = props => {
  const [checkBoxesState, setCheckBoxesState] = useState(checkBoxData);
  return (
    <>
      <Text
        style={{
          marginVertical: 15,
        }}>
        {'Multiple Checkboxes Example'}
      </Text>
      <CheckboxExample
        multiple={true}
        data={checkBoxesState}
        text={''}
        defaultChecked={false}
        onChange={updatedArr => {
          if (typeof updatedArr !== 'boolean') {
            console.log('updatedArr : ', updatedArr);
            setCheckBoxesState(updatedArr);
          }
        }}
      />
    </>
  );
};

const SingleCheckbox = props => {
  const [selected, setSelected] = useState(false);

  return (
    <>
      <Text
        style={{
          marginVertical: 15,
        }}>
        {'Single Checkbox Example'}
      </Text>
      <CheckboxExample
        multiple={false}
        text={'Single checkbox'}
        defaultChecked={selected}
        onChange={nextValue => {
          if (typeof nextValue === 'boolean') {
            console.log('nextValue : ', nextValue);
            setSelected(nextValue);
          }
        }}
      />
    </>
  );
};

type CheckboxType = {
  multiple: boolean;
};

const Checkbox = (props: CheckboxType) => {
  return props.multiple ? <MultipleCheckbox /> : <SingleCheckbox />;
};

const CodeSplit = () => {
  return (
    <View style={styles.container}>
      <Checkbox multiple={true} />
      <Checkbox multiple={false} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    backgroundColor: colors.white,
  },
});

export default CodeSplit;
