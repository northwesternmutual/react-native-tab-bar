# react-native-tab-bar
A simple tab bar for React Native that implements a tab bar navigation that implements icons from  
[react-native-vector-icons](https://github.com/oblador/react-native-vector-icons) for buttons.

![demo animation of tab bar](https://github.com/ajzozakiewicz/react-native-tab-bar/blob/master/images/tab_bar_demo2.gif)



## Usage

Install and setup peer dependency [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons) for your project.  
  
Then install the module:

``` bash
$ npm install react-native-tab-bar
```

Finally, use it!  

``` javascript
    <NavBar contentStyle={myCustomStyle.style}
                        selectedColor={"#444"}
                        unselectedColor={"#444"}
    >
        <MyCustomComponent data={data} icon="account-circle" font="material"/>
        <MyCustomComponent data={data} icon="cogs" font="font-awesome"/>
        <MyCustomComponent data={data} icon="account-circle"/> //defaults to material
    </NavBar>
```
