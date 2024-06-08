import React from 'react';
import { View } from 'react-native';
import Svg, { Circle, Text, TextPath, Path } from 'react-native-svg';

const Ring = ({ size = 200, strokeWidth = 20, color = 'black', text = 'Curved Text' }) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;

  return (
    <View style={{ width: size, height: size }}>
      <Svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <Circle
          stroke={color}
          fill="none"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={0}
        />
        <Text fill={color}>
          <TextPath href="#curve" startOffset={`${(size - circumference) / 2}`}>
            {text}
          </TextPath>
        </Text>
        <Path id="curve" d={`M ${(size / 2) - radius},${size / 2} A ${radius},${radius} 0 1,0 ${(size / 2) + radius},${size / 2}`} />
      </Svg>
    </View>
  );
};

export default Ring;



