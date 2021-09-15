import React from 'react'
import Space from './Space';

const Spaces = (props) =>  props.spaces.map((space, index) => {
    return <Space
    image={space.img}
    title={space.title}
    key={space.id} />
});
export default Spaces
