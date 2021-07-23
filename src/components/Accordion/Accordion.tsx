import React from "react";


type AccordionPropsType = {
    titleValue: string,
    collapsed: boolean
}

export const Accordion = (props: AccordionPropsType) => {
    console.log('Accordion rendering')
    return (
        <div>
            <AccordionTitle title={props.titleValue}/>
            <AccordionBody collapsed={props.collapsed}/>
        </div>
    )
}


type AccordionTitlePropsType = {
    title: string
}

export const AccordionTitle = (props: AccordionTitlePropsType) => {
    console.log('AccordionTitle rendering')
    return (
        <h3>---{props.title}---</h3>
    )
}

type AccordionBodyType = {
    collapsed: boolean
}


export const AccordionBody = (props: AccordionBodyType) => {
    console.log('AccordionBody rendering')
    if(props.collapsed == true) {
        return (
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        )
    }
    return (
        <ul>

        </ul>
    )
}