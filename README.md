# Logistics Delivery Icons for React Native

### react-native-ico-logistics-delivery

125 Vector Icons for React Native

<img src="./static/application.png" alt="application" width="150" height="150"> <img src="./static/bill.png" alt="bill" width="150" height="150"> <img src="./static/box.png" alt="box" width="150" height="150">

## List of icons

- [List of Logistics Delivery Icons](http://ico.simpleness.org/pack/logistics-delivery)

## Usage

```
import Icon from 'react-native-ico-logistics-delivery';


// Inside some view component
render() {
    return (
        <>
          <Icon name="application" />
          <Icon name="bill" height="40" width="40" />
          <Icon name="box" color="red" />
          <Icon name="box" colors={{ "#000000": "#FFFFFF" }} />
          <Icon name="bill" badge="10" />
          <Icon name="bill" badge={{value: 'A', fontSize: 25, radius: 22, position:'top_left', color:'orange', backgroundColor:'blue'}}/>
          <Icon name="application" background="circle" />
          <Icon name="application" background={{ type: "button", color: 'green' }} />
        </>
    );
}

```

## Installation

#### yarn

```bash
yarn add react-native-ico-logistics-delivery react-native-svg
```

#### npm

```bash
npm install --save react-native-ico-logistics-delivery react-native-svg
```

### Link react-native-svg

```bash
react-native link react-native-svg
```

### pod install ( for iOS )

```
cd ios && pod install && cd ..
```

## API

### <Icon name [color width height background badge ...rest] />

Returns a SvgXml icon by name and group.

 name | optional | default value | description | examples
------|----------|---------------|-------------|---------
name | no |  | name of icon | "application"
color | yes | | line color, css style | "#00ff00", "#0f0", "green"
colors | yes | | replace colors | {"#FFFFFF": "#000000"} // white to black
width | yes | 20 | width of the icon | 40
height | yes | 20 | height of the icon | 40
background | yes | | background type | "circle"
background | yes | | background object | {type: "circle", color: 'yellow'}
badge | yes | | badge string | "10"
badge | yes | | badge object | {value: 'A', fontSize: 25, radius: 22, position:'top_left', color:'orange', backgroundColor:'blue'}
...rest | yes | | other props | style={{backgroundColor: "#00f"}}

## Icons Made by

[Dave Gandy](https://www.flaticon.com/authors/dave-gandy)

## Created by

Dimitry Ivanov <2@ivanoff.org.ua> # curl -A cv ivanoff.org.ua
