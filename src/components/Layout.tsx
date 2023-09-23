//---- Components
import { AboutMe, Skills, Projects, Contact } from './';

import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

export function MainLayout(){

    const [markdown, setMarkdown] = useState('');

    useEffect(()=>{
        const archivo = 'Mona.md';
        (async()=>{
            const response = await fetch(`project/${archivo}`);
            const data = await response.text();
            setMarkdown(data);
        })()
    },[])

    return(
        <>
            <ReactMarkdown>{ markdown }</ReactMarkdown>
            <AboutMe/>
            <Skills/>
            <Projects/>
            <Contact/>
        </>
    )
}