import React from 'react';
import { ScrollView, View, Image, Text } from 'react-native';

const logo = {
    uri: 'https://d138zd1ktt9iqe.cloudfront.net/media/seo_landing_files/file-3-types-of-education-1591979743.jpg',
    width: 100,
    height: 100
}


const ScrollViewCmp = () => {
    return (
        <ScrollView>
            <Text>Scroll</Text>
            <View style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Image style={{
                    margin: 5
            }} source={logo} />
                <Image source={logo} />
            </View>
        </ScrollView>
    )
}

export default ScrollViewCmp;