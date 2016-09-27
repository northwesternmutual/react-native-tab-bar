# react-native-simple-tabbar
A simple tab bar for React Native that implements a tab bar navigation that implements icons from  
`react-native-vector-icons` for buttons.


[demo animation of tab bar](https://github.com/ajzozakiewicz/react-native-tab-bar/images/tab_bar_demo.gif "Logo Title Text 1")



## Usage

``` bash
$ npm install react-native-tab-bar
```

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
