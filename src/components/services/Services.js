import React from 'react'
import Service from './Service';

const Services = (props) =>  props.services.map((service, index) => {
    return <Service
    title={service.title}
    text={service.text}
    image={service.image}
    key={service.id} />
});
export default Services
