import React from 'react';
import { View, Image } from 'react-native';
import Svg, { Circle, Text, TextPath, Path, Defs } from 'react-native-svg';

const Ring = ({
  size = 200,
  strokeWidth = 20,
  color = 'black',
  text = 'Curved Text'
}) => {
  const radius = (size - strokeWidth) / 2;
  const halfSize = size / 2;
  const textPathId = 'textPath';

  return (
    <View style={{ width: size, height: size }}>
      <Svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <Defs>
          <Path
            id={textPathId}
            d={`M ${halfSize}, ${halfSize + radius} 
                a ${radius},${radius} 0 1,0 0,${-2 * radius}`}
          />
        </Defs>
        <Circle
          stroke={color}
          fill='none'
          cx={halfSize}
          cy={halfSize}
          r={radius}
          strokeWidth={strokeWidth}
        />
        <Image
          source={require('../utils/sprout.png')}
          style={{
            position: 'absolute',
            top: halfSize - 40, // Adjust as needed
            left: halfSize - 30, // Adjust as needed
            width: 60, // Adjust as needed
            height: 60 // Adjust as needed
          }}
        />
        <Text
          fill='black'
          fontSize={39}
          textAnchor='middle'
          transform={`rotate(90 ${halfSize} ${halfSize})`}
          y='-20'
        >
          <TextPath href={`#${textPathId}`} startOffset='50%'>
            {text}
          </TextPath>
        </Text>
      </Svg>
    </View>
  );
};

export default Ring;
