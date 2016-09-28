import React, {Component} from 'react';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import IconAwesome from 'react-native-vector-icons/FontAwesome';
import IconIonIcon from 'react-native-vector-icons/Ionicons';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import FoundationIcon from 'react-native-vector-icons/Foundation';
import OcticonIcon from 'react-native-vector-icons/Octicons';
import ZocialIcon from 'react-native-vector-icons/Zocial';
import EvilIcon from 'react-native-vector-icons/EvilIcons';

import {
    ScrollView,
    View,
    StyleSheet,
    TouchableOpacity,
    Text
} from 'react-native';



class TabBar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selected: 0
        };
    }

    setSelected(index) {
        this.setState({
            selected: index
        })
    }

    renderIcon(font, name, size, color) {
        switch(font) {
            case 'material':
                return <IconMaterial name={name} size={size} color={color} />;
            case 'font-awesome':
                return <IconAwesome name={name} size={size} color={color} />;
            case 'ionicons':
                return <IconIonIcon name={name} size={size} color={color} />;
            case 'evil-icons':
                return <EvilIcon name={name} size={size} color={color} />;
            case 'entypo':
                return <EntypoIcon name={name} size={size} color={color} />;
            case 'foundation':
                return <FoundationIcon name={name} size={size} color={color} />;
            case 'octicons':
                return <OcticonIcon name={name} size={size} color={color} />;
            case 'zocial':
                return <ZocialIcon name={name} size={size} color={color} />;
            default:
                return <IconMaterial name={name} size={size} color={color} />;
        }
    }

    render () {
        const myProps = this.props;

        return (
            <View style={{flex: 1}}>

                <View style={myProps.contentStyle}>
                    { myProps.children[this.state.selected] }
                </View>

                <View style={[styles.navBar, myProps.navStyle]}>
                    <View style={styles.columnWrap}>
                        {
                            myProps.children.map((item, index) => {
                                const isSelected = this.state.selected === index;
                                const color = isSelected ? myProps.selectedColor : myProps.unselectedColor;
                                const Icon = this.renderIcon(item.props.font, item.props.icon, 30, color);

                                return (
                                    <TouchableOpacity style={[styles.buttonDefaults, { borderBottomColor: color}, this.props.buttonStyle]}
                                                      key={index}
                                                      onPress={() => {
                                                          this.setSelected(index);
                                                      }}
                                    >
                                        {Icon}
                                    </TouchableOpacity>
                                );
                            })
                        }
                    </View>
                </View>
            </View>
        );
    }
};


const styles = StyleSheet.create({
    navBar: {
        backgroundColor: 'white',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0
    },
    columnWrap: {
        flexDirection: 'row'
    },
    buttonDefaults: {
        flex: 1,
        marginBottom: 0,
        marginTop: 5,
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 5
    }
});


export default TabBar;
