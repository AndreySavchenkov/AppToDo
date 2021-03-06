import React from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";


export const App = (props: any) => {
    console.log('App rendering')
    return (
        <div>
            <PageTitle title={'This is APP component'}/>
            Article1
            <Rating value={3}/>
            <Accordion titleValue={'Menu'} collapsed={true}/>
            <Accordion titleValue={'Users'} collapsed={false}/>
            Article2
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
        </div>

    );
}

type PageTitlePropsType = {
    title: string
}

export const PageTitle = (props: PageTitlePropsType) => {

    console.log('AppTitle rendering')
    return (
        <div>{props.title}</div>
    )
}







