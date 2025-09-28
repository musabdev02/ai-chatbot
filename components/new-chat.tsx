import React from 'react'
import Image from 'next/image'
import { FileText, GraduationCap, ChartColumnBig, Map } from 'lucide-react'
import { Card } from './ui/card'
const items = [
    {
        icon: <GraduationCap size={20} color='#a886f8' />,
        color: '#a886f8',
        title: "Customizable Responses",
        list: [
            "Customizable Responses",
            "Advance Language Understanding",
            "Seamless Integration",
            "Dynamic Scalibilty"
        ]
    },
    {
        icon: <FileText size={20} color='#1462bc' />,
        color: 'blue',
        title: "Summarize Text",
        list: [
            "Customizable Responses",
            "Advance Language Understanding",
            "Seamless Integration",
            "Dynamic Scalibilty"
        ]
    },
    {
        icon: <ChartColumnBig size={20} color='#41ec88' />,
        color: 'green',
        title: "Create Presentation & Slide",
        list: [
            "Customizable Responses",
            "Advance Language Understanding",
            "Seamless Integration",
            "Dynamic Scalibilty"
        ]
    },
    {
        icon: <Map size={20} color='#f56646' />,
        color: 'orange',
        title: "Make a Plan",
        list: [
            "Customizable Responses",
            "Advance Language Understanding",
            "Seamless Integration",
            "Dynamic Scalibilty"
        ]
    }
]

const NewChat = () => {
    return (
        <div className='flex flex-col gap-4 max-w-[70vw] mx-auto items-center justify-center w-full h-[80vh]'>
            <Image
                src={"/logo.svg"}
                width={50}
                height={50}
                alt='logo'
            />
            
            <div className='relative z-10 flex gap-4 flex-wrap justify-center items-center w-full'>
                {
                    items.map(item => (
                        <Card key={item.title} className=' w-[380px] h-auto rounded-md p-4'>
                            <div className='flex flex-col gap-3 justify-start items-start'>
                                <div className='flex items-center gap-3'>
                                    <div className={`bg-[${item.color}] p-1.5 rounded-sm `}>
                                        {item.icon}
                                    </div>
                                    <h3 className='font-medium'>{item.title}</h3>

                                </div>
                                <div className='flex flex-col gap-3 mt-2'>
                                    {
                                        item.list.map(list => (
                                            <p key={list} className='text-sm flex gap-2 items-center font-light text-gray-500'><FileText size={16} /> {list}</p>
                                        ))
                                    }
                                </div>
                            </div>
                        </Card>
                    ))
                }


            </div>

        </div>
    )
}

export default NewChat