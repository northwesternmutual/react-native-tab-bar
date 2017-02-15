# react-native-tab-bar
A simple tab bar for React Native that implements icons from  
[react-native-vector-icons](https://github.com/oblador/react-native-vector-icons) for buttons.

![demo animation of tab bar](https://raw.githubusercontent.com/northwesternmutual/react-native-tab-bar/master/images/tab_bar_demo2.gif)

## Usage

Install and setup peer dependency [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons) for your project.  
  
Then install the module:

```bash
$ npm install react-native-tab-bar
```

Finally, use it!  

```javascript
<NavBar contentStyle={myCustomStyle.style}
                    selectedColor={"#444"}
                    unselectedColor={"#444"}
>
    <MyCustomComponent data={data} icon="account-circle" font="material"/>
    <MyCustomComponent data={data} icon="cogs" font="font-awesome"/>
    <MyCustomComponent data={data} icon="account-circle"/> //defaults to material
</NavBar>
```

## Params

```javascript
<NavBar 
    contentStyle={customStyle.style} //will style the content wrapper of the selected tab
    buttonStyle={customStyle.button} // Optional - allows for override of default button styles
    selectedColor="#444" // hex code for selected color
    unselectedColor="#444"
>
    <MyCustomComponent 
            icon="account-circle" // name of icon from font family
            font="material" // OPTIONAl - degfault:"material"
            // other font families "material", "font-awesome", "ionicons", "evil-icons", "entypo", "foundation", "octicons", "zocial"
    />
</NavBar>
```
